import { JobKey, Job as PrismaJob, prisma } from '@mqs/prisma/client';
import cron, { ScheduledTask } from 'node-cron';

export default class Job {
  public key: JobKey;

  public name: string;

  job: () => Promise<any>;

  scheduledTask: ScheduledTask | undefined = undefined;

  cronExpression: string | undefined = undefined;

  process: { pid: number, job: PrismaJob } | undefined = undefined;

  constructor(
    key: JobKey,
    name: string,
    job: () => Promise<any>,
    cronExpression?: string,
  ) {
    this.key = key;
    this.name = name;
    this.job = job;
    this.cronExpression = cronExpression;
  }

  async run() {
    const job = await prisma.job.create({
      data: {
        key: this.key,
        startedAt: new Date(),
      },
    });

    try {
      this.process = {
        job,
        pid: process.pid,
      };

      await this.job();

      await prisma.job.update({
        data: {
          finishedAt: new Date(),
        },
        where: {
          id: job.id,
        },
      });
    } catch (error) {
      await prisma.job.update({
        data: {
          failedAt: new Date(),
        },
        where: {
          id: job.id,
        },
      });
    } finally {
      this.process = undefined;
    }
  }

  async cancel() {
    if (!this.process) {
      throw new Error(`no job running for ${this.key}`);
    }

    const {
      job,
      pid,
    } = this.process;

    await prisma.job.update({
      data: {
        canceledAt: new Date(),
      },
      where: {
        id: job.id,
      },
    });

    this.process = undefined;

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
