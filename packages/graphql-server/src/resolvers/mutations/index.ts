import { Resolvers } from '@mqs/graphql-schema';
import { ContextType } from 'context';
import runJob from './runJob';
import createLog from './createLog';
import cancelJob from './cancelJob';

const Mutation: Required<NonNullable<Resolvers<ContextType>['Mutation']>> = {
  cancelJob,
  createLog,
  runJob,
};

export default Mutation;
