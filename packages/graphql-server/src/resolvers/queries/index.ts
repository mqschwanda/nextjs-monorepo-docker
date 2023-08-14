import { Resolvers } from '@mqs/graphql-schema';
import { ContextType } from 'context';
import version from './version';
import job from './job';
import jobs from './jobs';
import logs from './logs';
import me from './me';
import hello from './hello';

const Query: Required<NonNullable<Resolvers<ContextType>['Query']>> = {
  hello,
  job,
  jobs,
  logs,
  me,
  version,
};

export default Query;
