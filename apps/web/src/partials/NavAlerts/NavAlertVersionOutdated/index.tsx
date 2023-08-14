'use client';

import {
  Alert,
  Button,
  IconInfo,
} from '@mqs/react-server-components';
import {
  unstable_useCacheRefresh as useCacheRefresh,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { useVersionQuery } from '@mqs/graphql-client';
import { useAlertDismissible } from '@mqs/react-client-components';
import logger from '@mqs/logger/browser';

// TODO: add polling interval constants to @mqs/graphql-client package
const ONE_MIN = 60 * 1000;
const FIVE_MIN = 5 * ONE_MIN;

const VERSION_DEFAULT = '';

const HIDDEN_DEFAULT = process.env.NODE_ENV !== 'development';

interface NavAlertVersionOutdatedProps {

}

export default function NavAlertVersionOutdated(_props: NavAlertVersionOutdatedProps) {
  // The current version of the browser client stored as a string.
  const versionCurrent = useRef(VERSION_DEFAULT);
  // The most recent client version that was fetched from graphql.
  const versionQueryLatest = useRef(VERSION_DEFAULT);

  const versionQuery = useVersionQuery({
    pollInterval: FIVE_MIN,
  });

  const refresh = useCacheRefresh();

  const handleUpdateClient = useCallback(
    async () => {
      logger.log({
        db: true,
        message: `Updating client from version ${versionCurrent.current} -> ${versionQueryLatest.current}`, // eslint-disable-line max-len
      });

      // clear caches global property
      if (caches) {
        const cacheKeys = await caches.keys();
        cacheKeys.forEach((key) => {
          caches.delete(key);
        });
      }

      // refresh suspense cache
      refresh();

      // hard reload the client
      window.location.reload();
    },
    [
      refresh,
    ],
  );

  const {
    handleClickDismiss,
    hidden,
    setHidden,
  } = useAlertDismissible({
    hiddenDefault: HIDDEN_DEFAULT,
    onClickDismiss: handleUpdateClient,
  });

  useEffect(
    () => {
      if (versionQuery.data?.version) {
        const versionQueryVersion = versionQuery.data.version;

        if (
          !versionCurrent.current
          || !versionQueryLatest.current
        ) {
          // initialize values the first time the `versionQuery` loads data
          versionCurrent.current = versionQueryVersion;
          versionQueryLatest.current = versionQueryVersion;
        } else if (versionQueryLatest.current !== versionQueryVersion) {
          // handle new version from `versionQuery`

          logger.log({
            db: false,
            message: `Noticed latest client version updated from ${versionQueryLatest.current} -> ${versionQueryVersion}`, // eslint-disable-line max-len
          });

          // store most recent version after handling the update from `versionQuery`
          versionQueryLatest.current = versionQueryVersion;
          // show the alert, we have a version mismatch
          setHidden(false);
        }
      }
    },
    [
      versionQuery,
      setHidden,
    ],
  );

  return (
    <Alert
      cx={[
        'shadow-lg',
        'rounded-none',
      ]}
      hidden={hidden}
      variantBackgroundColor='info'
    >
      <IconInfo
        className='flex-shrink-0 w-6 h-6'
      />
      <span>
        { 'New software update available.' }
      </span>
      <Button
        onClick={handleClickDismiss}
        type='button'
        variantSize='sm'
      >
        { 'Update' }
      </Button>
    </Alert>
  );
}
