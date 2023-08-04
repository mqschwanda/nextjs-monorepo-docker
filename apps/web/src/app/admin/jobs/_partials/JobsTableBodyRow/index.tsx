'use client';

import {
  JobDocument, useCancelJobMutation, useJobQuery, useRunJobMutation,
} from '@mqs/graphql-client';
import { JobKey } from '@mqs/graphql-schema';
import { Button } from '@mqs/react-server-components';
import { useMemo } from 'react';
import { Stack, TimeAgo } from '@mqs/react-client-components';
import JobsTableBodyRowLoading from '../JobsTableBodyRowLoading';

type JobsTableBodyRowProps = {
  jobKey: JobKey,
};

export default function JobsTableBodyRow({
  jobKey,
}: JobsTableBodyRowProps) {
  const { data, loading } = useJobQuery({
    fetchPolicy: 'network-only',
    pollInterval: 5000,
    variables: {
      key: jobKey,
    },
  });

  const [runJob, { loading: runJobLoading }] = useRunJobMutation({
    refetchQueries: [
      {
        query: JobDocument,
        variables: {
          key: jobKey,
        },
      },
    ],
    variables: {
      key: jobKey,
    },
  });

  const [cancelJob, { loading: cancelJobLoading }] = useCancelJobMutation({
    refetchQueries: [
      {
        query: JobDocument,
        variables: {
          key: jobKey,
        },
      },
    ],
    variables: {
      key: jobKey,
    },
  });

  const jobButtonLoading = useMemo(
    () => {
      if (loading || !data || runJobLoading || cancelJobLoading) {
        return true;
      }

      const { ranJob } = data.job;
      if (
        ranJob?.startedAt && !(
          ranJob?.canceledAt
          || ranJob?.finishedAt
          || ranJob?.failedAt
        )
      ) {
        return true;
      }

      return false;
    },
    [
      data,
      loading,
      runJobLoading,
      cancelJobLoading,
    ],
  );

  if (loading) {
    return (
      <JobsTableBodyRowLoading />
    );
  }

  return (
    <tr>
      <td
        className='text-ellipsis overflow-hidden'
      >
        <span>
          { data?.job.name }
        </span>
      </td>
      <td
        className='text-ellipsis overflow-hidden text-center'
      >
        { data?.job.ranJob ? (
          <TimeAgo
            date={new Date(data.job.ranJob.startedAt)}
          />
        ) : (
          <span>
            { '-' }
          </span>
        ) }
      </td>
      <td
        className='text-ellipsis overflow-hidden text-center'
      >
        { data?.job.ranJob?.finishedAt ? (
          <TimeAgo
            date={new Date(data.job.ranJob.finishedAt)}
          />
        ) : (
          <span>
            { '-' }
          </span>
        ) }
      </td>
      <td
        className='text-ellipsis overflow-hidden text-center'
      >
        { data?.job.ranJob?.failedAt ? (
          <TimeAgo
            date={new Date(data.job.ranJob.failedAt)}
          />
        ) : (
          <span>
            { '-' }
          </span>
        ) }
      </td>
      <td
        className='text-ellipsis overflow-hidden text-center'
      >
        { data?.job.ranJob?.canceledAt ? (
          <TimeAgo
            date={new Date(data.job.ranJob.canceledAt)}
          />
        ) : (
          <span>
            { '-' }
          </span>
        ) }
      </td>
      <td
        className='text-ellipsis overflow-hidden'
      >
        <Stack
          direction='row'
        >
          <Button
            loading={jobButtonLoading}
            onClick={() => runJob()}
          >
            { 'Run' }
          </Button>
          <Button
            loading={jobButtonLoading}
            onClick={() => cancelJob()}
          >
            { 'Cancel' }
          </Button>
        </Stack>
      </td>
    </tr>
  );
}
