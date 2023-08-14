import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import {
  JobKey, Log, LogType, RoleKey, User,
} from '@mqs/prisma/client';
import * as Types from './graphql';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Types.Maybe<TTypes> | Promise<Types.Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Types.Scalars['Boolean']['output']>;
  Date: ResolverTypeWrapper<Types.Scalars['Date']['output']>;
  ID: ResolverTypeWrapper<Types.Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Types.Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Types.Scalars['JSON']['output']>;
  Job: ResolverTypeWrapper<Omit<Types.Job, 'key'> & { key: ResolversTypes['JobKey'] }>;
  JobKey: ResolverTypeWrapper<JobKey>;
  JsonPrisma: ResolverTypeWrapper<Types.Scalars['JsonPrisma']['output']>;
  Log: ResolverTypeWrapper<Log>;
  LogInput: Types.LogInput;
  LogType: ResolverTypeWrapper<LogType>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  RoleKey: ResolverTypeWrapper<RoleKey>;
  String: ResolverTypeWrapper<Types.Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Types.Scalars['Boolean']['output'];
  Date: Types.Scalars['Date']['output'];
  ID: Types.Scalars['ID']['output'];
  Int: Types.Scalars['Int']['output'];
  JSON: Types.Scalars['JSON']['output'];
  Job: Types.Job;
  JsonPrisma: Types.Scalars['JsonPrisma']['output'];
  Log: Log;
  LogInput: Types.LogInput;
  Mutation: {};
  Query: {};
  String: Types.Scalars['String']['output'];
  Subscription: {};
  User: User;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type JobResolvers<ContextType = any, ParentType extends ResolversParentTypes['Job'] = ResolversParentTypes['Job']> = {
  canceledAt?: Resolver<Types.Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  failedAt?: Resolver<Types.Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  finishedAt?: Resolver<Types.Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['JobKey'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobKeyResolvers = EnumResolverSignature<{ InvalidateStaleTokens?: any }, ResolversTypes['JobKey']>;

export interface JsonPrismaScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JsonPrisma'], any> {
  name: 'JsonPrisma';
}

export type LogResolvers<ContextType = any, ParentType extends ResolversParentTypes['Log'] = ResolversParentTypes['Log']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payload?: Resolver<Types.Maybe<ResolversTypes['JsonPrisma']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['LogType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LogTypeResolvers = EnumResolverSignature<{ Debug?: any, Error?: any, Info?: any, Log?: any, Warn?: any }, ResolversTypes['LogType']>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  cancelJob?: Resolver<ResolversTypes['Job'], ParentType, ContextType, RequireFields<Types.MutationCancelJobArgs, 'key'>>;
  createLog?: Resolver<ResolversTypes['Log'], ParentType, ContextType, RequireFields<Types.MutationCreateLogArgs, 'input'>>;
  runJob?: Resolver<ResolversTypes['Job'], ParentType, ContextType, RequireFields<Types.MutationRunJobArgs, 'key'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  hello?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<Types.QueryHelloArgs, 'name'>>;
  job?: Resolver<ResolversTypes['Job'], ParentType, ContextType, RequireFields<Types.QueryJobArgs, 'key'>>;
  jobs?: Resolver<Array<ResolversTypes['Job']>, ParentType, ContextType>;
  logs?: Resolver<Array<ResolversTypes['Log']>, ParentType, ContextType>;
  me?: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type RoleKeyResolvers = EnumResolverSignature<{ Admin?: any }, ResolversTypes['RoleKey']>;

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  countdown?: SubscriptionResolver<ResolversTypes['Int'], 'countdown', ParentType, ContextType, RequireFields<Types.SubscriptionCountdownArgs, 'from'>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nameFirst?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameLast?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roleKeys?: Resolver<Array<ResolversTypes['RoleKey']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  Job?: JobResolvers<ContextType>;
  JobKey?: JobKeyResolvers;
  JsonPrisma?: GraphQLScalarType;
  Log?: LogResolvers<ContextType>;
  LogType?: LogTypeResolvers;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RoleKey?: RoleKeyResolvers;
  Subscription?: SubscriptionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};
