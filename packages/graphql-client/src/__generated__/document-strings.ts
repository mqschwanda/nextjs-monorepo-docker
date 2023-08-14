import * as Types from '@mqs/graphql-schema';

import gql from '@/utilities/gqlString';

export const JobFragment = /* #__PURE__ */ gql`
    fragment JobFragment on Job {
  id
  key
  name
  canceledAt
  failedAt
  finishedAt
  startedAt
}
    `;
export const LogFragment = /* #__PURE__ */ gql`
    fragment LogFragment on Log {
  id
  createdAt
  message
  payload
  type
}
    `;
export const CancelJob = /* #__PURE__ */ gql`
    mutation CancelJob($key: JobKey!) {
  cancelJob(key: $key) {
    id
    key
    name
  }
}
    `;
export const CreateLog = /* #__PURE__ */ gql`
    mutation CreateLog($input: LogInput!) {
  createLog(input: $input) {
    ...LogFragment
  }
}
    ${LogFragment}`;
export const RunJob = /* #__PURE__ */ gql`
    mutation RunJob($key: JobKey!) {
  runJob(key: $key) {
    id
    key
    name
  }
}
    `;
export const Countdown = /* #__PURE__ */ gql`
    subscription Countdown($from: Int!) {
  countdown(from: $from)
}
    `;
export const Hello = /* #__PURE__ */ gql`
    query Hello($name: String!) {
  hello(name: $name)
}
    `;
export const Job = /* #__PURE__ */ gql`
    query Job($key: JobKey!) {
  job(key: $key) {
    ...JobFragment
  }
}
    ${JobFragment}`;
export const Jobs = /* #__PURE__ */ gql`
    query Jobs {
  jobs {
    ...JobFragment
  }
}
    ${JobFragment}`;
export const Logs = /* #__PURE__ */ gql`
    query Logs {
  logs {
    ...LogFragment
  }
}
    ${LogFragment}`;
export const Me = /* #__PURE__ */ gql`
    query Me {
  me {
    id
    email
    nameFirst
    nameLast
    roleKeys
  }
}
    `;
export const Version = /* #__PURE__ */ gql`
    query Version {
  version
}
    `;
