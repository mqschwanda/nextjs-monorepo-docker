'use client';

import {
  // JobDocument,
  useCancelJobMutation,
  useJobQuery,
  useRunJobMutation,
} from '@mqs/graphql-client';
import { JobKey } from '@mqs/graphql-schema';
import { Button } from '@mqs/react-server-components';
import { useCallback, useMemo, useState } from 'react';
import { Stack, TimeAgo } from '@mqs/react-client-components';
import JobsTableBodyRowLoading from '../JobsTableBodyRowLoading';

type JobsTableBodyRowProps = {
  jobKey: JobKey,
};

export default function JobsTableBodyRow({
  jobKey,
}: JobsTableBodyRowProps) {
  const [showTimeAgo, setShowTimeAgo] = useState(true);

  const onFinishJobQuery = useCallback(
    () => {
      setShowTimeAgo(true);
    },
    [

    ],
  );

  const { data, loading } = useJobQuery({
    fetchPolicy: 'network-only',
    onCompleted: onFinishJobQuery,
    onError: onFinishJobQuery,
    pollInterval: 5000,
    variables: {
      key: jobKey,
    },
  });

  const [runJob, { loading: runJobLoading }] = useRunJobMutation({
    // refetchQueries: [
    //   {
    //     query: JobDocument,
    //     variables: {
    //       key: jobKey,
    //     },
    //   },
    // ],
    variables: {
      key: jobKey,
    },
  });

  const handleRunJob = useCallback(
    () => {
      setShowTimeAgo(false);
      runJob();
    },
    [
      runJob,
    ],
  );

  const [cancelJob, { loading: cancelJobLoading }] = useCancelJobMutation({
    // refetchQueries: [
    //   {
    //     query: JobDocument,
    //     variables: {
    //       key: jobKey,
    //     },
    //   },
    // ],
    variables: {
      key: jobKey,
    },
  });

  const handleCancelJob = useCallback(
    () => {
      setShowTimeAgo(false);
      cancelJob();
    },
    [
      cancelJob,
    ],
  );

  const jobButtonLoading = useMemo(
    () => {
      if (
        !data
        || loading
        || runJobLoading
        || cancelJobLoading
      ) {
        return true;
      }

      const {
        canceledAt,
        failedAt,
        finishedAt,
        startedAt,
      } = data.job;
      if (
        startedAt && !(
          canceledAt
          || finishedAt
          || failedAt
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
        { showTimeAgo && data?.job ? (
          <TimeAgo
            date={new Date(data.job.startedAt)}
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
        { showTimeAgo && data?.job?.finishedAt ? (
          <TimeAgo
            date={new Date(data.job.finishedAt)}
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
        { showTimeAgo && data?.job?.failedAt ? (
          <TimeAgo
            date={new Date(data.job.failedAt)}
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
        { showTimeAgo && data?.job?.canceledAt ? (
          <TimeAgo
            date={new Date(data.job.canceledAt)}
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
          alignItems='center'
          direction='row'
          justifyContent='center'
        >
          <Button
            loading={jobButtonLoading}
            onClick={handleRunJob}
          >
            { 'Run' }
          </Button>
          <Button
            loading={jobButtonLoading}
            onClick={handleCancelJob}
          >
            { 'Cancel' }
          </Button>
        </Stack>
      </td>
    </tr>
  );
}
