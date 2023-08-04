import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import {
  DetailedHTMLProps,
  HTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { TDate, format } from 'timeago.js';

const ONE_SECOND = 1000;
const ONE_MINUTE = 60 * ONE_SECOND;
const ONE_HOUR = 60 * ONE_MINUTE;
const ONE_DAY = 24 * ONE_HOUR;
const ONE_WEEK = 7 * ONE_DAY;

function getIntervalMS(date: TDate) {
  const currentDate = new Date().getDate();
  const timeAgoDate = new Date(date).getDate();

  const dateDifference = currentDate - timeAgoDate;

  if (dateDifference < ONE_MINUTE) {
    return ONE_SECOND;
  }

  if (dateDifference < ONE_HOUR) {
    return ONE_MINUTE;
  }

  if (dateDifference < ONE_DAY) {
    return ONE_HOUR;
  }

  if (dateDifference < ONE_WEEK) {
    return ONE_DAY;
  }

  return ONE_WEEK;
}

export interface TimeAgoProps
  extends ReactTestingProps,
  Omit<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, 'children'> {
  date?: TDate,
}

export function TimeAgo({
  date,
  testId,
  ...rest
}: TimeAgoProps) {
  const [intervalMS, setIntervalMS] = useState(0);
  const [humanizedTimeAgo, setHumanizedTimeAgo] = useState<string | undefined>(undefined);
  const updateHumanizedTimeAgo = useCallback(
    () => {
      if (date) {
        const nextHumanizedTimeAgo = format(date);
        setHumanizedTimeAgo(nextHumanizedTimeAgo);

        const nextIntervalMS = getIntervalMS(date);
        if (intervalMS !== nextIntervalMS) {
          setIntervalMS(nextIntervalMS);
        }
      } else {
        setHumanizedTimeAgo(undefined);
      }
    },
    [
      date,
      intervalMS,
      setHumanizedTimeAgo,
      setIntervalMS,
    ],
  );

  useEffect(
    () => {
      updateHumanizedTimeAgo();

      const interval = setInterval(updateHumanizedTimeAgo, intervalMS);
      return () => {
        clearInterval(interval);
      };
    },
    [
      updateHumanizedTimeAgo,
      intervalMS,
    ],
  );

  return (
    <span
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { humanizedTimeAgo }
    </span>
  );
}
