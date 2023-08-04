import { JobKey, prisma } from '@mqs/prisma/client';
import cron, { ScheduledTask } from 'node-cron';

export default class Job {
  key: JobKey;

  job: () => Promise<any>;

  scheduledTask: ScheduledTask | undefined = undefined;

  cronExpression: string | undefined = undefined;

  runningJob: { pid: number, ranJobId: number } | undefined = undefined;

  constructor(
    key: JobKey,
    job: () => Promise<any>,
    cronExpression?: string,
  ) {
    this.key = key;
    this.job = job;
    this.cronExpression = cronExpression;
  }

  async run() {
    const {
      id: jobId,
    } = await prisma.job.findUniqueOrThrow({
      select: {
        id: true,
      },
      where: {
        key: this.key,
      },
    });

    const ranJob = await prisma.ranJob.create({
      data: {
        jobId,
        startedAt: new Date(),
      },
    });

    try {
      this.runningJob = {
        pid: process.pid,
        ranJobId: ranJob.id,
      };

      await this.job();

      await prisma.ranJob.update({
        data: {
          finishedAt: new Date(),
        },
        where: {
          id: ranJob.id,
        },
      });
    } catch (error) {
      await prisma.ranJob.update({
        data: {
          failedAt: new Date(),
        },
        where: {
          id: ranJob.id,
        },
      });
    } finally {
      this.runningJob = undefined;
    }
  }

  async cancel() {
    if (!this.runningJob) {
      throw new Error(`no job running for ${this.key}`);
    }

    const {
      ranJobId,
      pid,
    } = this.runningJob;

    await prisma.ranJob.update({
      data: {
        canceledAt: new Date(),
      },
      where: {
        id: ranJobId,
      },
    });

    this.runningJob = undefined;

    process.kill(pid);
  }

  schedule() {
    if (!this.cronExpression) {
      throw new Error('no chron to schedule');
    }

    this.scheduledTask = cron.schedule(
      this.cronExpression,
      this.run,
    );
  }

  unschedule() {
    if (this.scheduledTask) {
      this.scheduledTask.stop();
    }
  }
}
