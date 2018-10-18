// Code generated by Prisma (prisma@1.18.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools/dist/Interfaces";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  guilds: (where?: GuildsWhereInput) => Promise<boolean>;
  members: (where?: MembersWhereInput) => Promise<boolean>;
  users: (where?: UsersWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;
  $getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;

  /**
   * Queries
   */

  guilds: (where: GuildsWhereUniqueInput) => Guilds;
  guildses: (
    args?: {
      where?: GuildsWhereInput;
      orderBy?: GuildsOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<GuildsNode>;
  guildsesConnection: (
    args?: {
      where?: GuildsWhereInput;
      orderBy?: GuildsOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => GuildsConnection;
  members: (where: MembersWhereUniqueInput) => Members;
  memberses: (
    args?: {
      where?: MembersWhereInput;
      orderBy?: MembersOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<MembersNode>;
  membersesConnection: (
    args?: {
      where?: MembersWhereInput;
      orderBy?: MembersOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => MembersConnection;
  users: (where: UsersWhereUniqueInput) => Users;
  userses: (
    args?: {
      where?: UsersWhereInput;
      orderBy?: UsersOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<UsersNode>;
  usersesConnection: (
    args?: {
      where?: UsersWhereInput;
      orderBy?: UsersOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UsersConnection;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createGuilds: (data: GuildsCreateInput) => Guilds;
  updateGuilds: (
    args: { data: GuildsUpdateInput; where: GuildsWhereUniqueInput }
  ) => Guilds;
  updateManyGuildses: (
    args: { data: GuildsUpdateInput; where?: GuildsWhereInput }
  ) => BatchPayload;
  upsertGuilds: (
    args: {
      where: GuildsWhereUniqueInput;
      create: GuildsCreateInput;
      update: GuildsUpdateInput;
    }
  ) => Guilds;
  deleteGuilds: (where: GuildsWhereUniqueInput) => Guilds;
  deleteManyGuildses: (where?: GuildsWhereInput) => BatchPayload;
  createMembers: (data: MembersCreateInput) => Members;
  updateMembers: (
    args: { data: MembersUpdateInput; where: MembersWhereUniqueInput }
  ) => Members;
  updateManyMemberses: (
    args: { data: MembersUpdateInput; where?: MembersWhereInput }
  ) => BatchPayload;
  upsertMembers: (
    args: {
      where: MembersWhereUniqueInput;
      create: MembersCreateInput;
      update: MembersUpdateInput;
    }
  ) => Members;
  deleteMembers: (where: MembersWhereUniqueInput) => Members;
  deleteManyMemberses: (where?: MembersWhereInput) => BatchPayload;
  createUsers: (data: UsersCreateInput) => Users;
  updateUsers: (
    args: { data: UsersUpdateInput; where: UsersWhereUniqueInput }
  ) => Users;
  updateManyUserses: (
    args: { data: UsersUpdateInput; where?: UsersWhereInput }
  ) => BatchPayload;
  upsertUsers: (
    args: {
      where: UsersWhereUniqueInput;
      create: UsersCreateInput;
      update: UsersUpdateInput;
    }
  ) => Users;
  deleteUsers: (where: UsersWhereUniqueInput) => Users;
  deleteManyUserses: (where?: UsersWhereInput) => BatchPayload;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  guilds: (
    where?: GuildsSubscriptionWhereInput
  ) => GuildsSubscriptionPayloadSubscription;
  members: (
    where?: MembersSubscriptionWhereInput
  ) => MembersSubscriptionPayloadSubscription;
  users: (
    where?: UsersSubscriptionWhereInput
  ) => UsersSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type GuildsOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "guildname_ASC"
  | "guildname_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MembersOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UsersOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "username_ASC"
  | "username_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface GuildsCreateWithoutOwnerInput {
  guildname: String;
  members?: MembersCreateManyWithoutGuildsInput;
}

export type GuildsWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UsersUpdateWithoutOwnerOfDataInput {
  email?: String;
  username?: String;
  memberOf?: MembersUpdateManyWithoutUsersInput;
}

export interface UsersWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  username?: String;
  username_not?: String;
  username_in?: String[] | String;
  username_not_in?: String[] | String;
  username_lt?: String;
  username_lte?: String;
  username_gt?: String;
  username_gte?: String;
  username_contains?: String;
  username_not_contains?: String;
  username_starts_with?: String;
  username_not_starts_with?: String;
  username_ends_with?: String;
  username_not_ends_with?: String;
  ownerOf_every?: GuildsWhereInput;
  ownerOf_some?: GuildsWhereInput;
  ownerOf_none?: GuildsWhereInput;
  memberOf_every?: MembersWhereInput;
  memberOf_some?: MembersWhereInput;
  memberOf_none?: MembersWhereInput;
  AND?: UsersWhereInput[] | UsersWhereInput;
  OR?: UsersWhereInput[] | UsersWhereInput;
  NOT?: UsersWhereInput[] | UsersWhereInput;
}

export interface MembersUpdateManyWithoutUsersInput {
  create?: MembersCreateWithoutUsersInput[] | MembersCreateWithoutUsersInput;
  delete?: MembersWhereUniqueInput[] | MembersWhereUniqueInput;
  connect?: MembersWhereUniqueInput[] | MembersWhereUniqueInput;
  disconnect?: MembersWhereUniqueInput[] | MembersWhereUniqueInput;
  update?:
    | MembersUpdateWithWhereUniqueWithoutUsersInput[]
    | MembersUpdateWithWhereUniqueWithoutUsersInput;
  upsert?:
    | MembersUpsertWithWhereUniqueWithoutUsersInput[]
    | MembersUpsertWithWhereUniqueWithoutUsersInput;
}

export interface GuildsWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  guildname?: String;
  guildname_not?: String;
  guildname_in?: String[] | String;
  guildname_not_in?: String[] | String;
  guildname_lt?: String;
  guildname_lte?: String;
  guildname_gt?: String;
  guildname_gte?: String;
  guildname_contains?: String;
  guildname_not_contains?: String;
  guildname_starts_with?: String;
  guildname_not_starts_with?: String;
  guildname_ends_with?: String;
  guildname_not_ends_with?: String;
  owner?: UsersWhereInput;
  members_every?: MembersWhereInput;
  members_some?: MembersWhereInput;
  members_none?: MembersWhereInput;
  AND?: GuildsWhereInput[] | GuildsWhereInput;
  OR?: GuildsWhereInput[] | GuildsWhereInput;
  NOT?: GuildsWhereInput[] | GuildsWhereInput;
}

export interface GuildsCreateOneWithoutMembersInput {
  create?: GuildsCreateWithoutMembersInput;
  connect?: GuildsWhereUniqueInput;
}

export interface MembersUpdateWithoutGuildsDataInput {
  users?: UsersUpdateOneWithoutMemberOfInput;
}

export interface GuildsCreateWithoutMembersInput {
  guildname: String;
  owner?: UsersCreateOneWithoutOwnerOfInput;
}

export interface MembersUpdateWithWhereUniqueWithoutUsersInput {
  where: MembersWhereUniqueInput;
  data: MembersUpdateWithoutUsersDataInput;
}

export interface MembersCreateManyWithoutGuildsInput {
  create?: MembersCreateWithoutGuildsInput[] | MembersCreateWithoutGuildsInput;
  connect?: MembersWhereUniqueInput[] | MembersWhereUniqueInput;
}

export interface MembersSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: MembersWhereInput;
  AND?: MembersSubscriptionWhereInput[] | MembersSubscriptionWhereInput;
  OR?: MembersSubscriptionWhereInput[] | MembersSubscriptionWhereInput;
  NOT?: MembersSubscriptionWhereInput[] | MembersSubscriptionWhereInput;
}

export interface MembersCreateWithoutGuildsInput {
  users?: UsersCreateOneWithoutMemberOfInput;
}

export interface UsersUpdateInput {
  email?: String;
  username?: String;
  ownerOf?: GuildsUpdateManyWithoutOwnerInput;
  memberOf?: MembersUpdateManyWithoutUsersInput;
}

export interface UsersCreateOneWithoutMemberOfInput {
  create?: UsersCreateWithoutMemberOfInput;
  connect?: UsersWhereUniqueInput;
}

export type MembersWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UsersCreateWithoutMemberOfInput {
  email: String;
  username: String;
  ownerOf?: GuildsCreateManyWithoutOwnerInput;
}

export interface MembersCreateInput {
  guilds?: GuildsCreateOneWithoutMembersInput;
  users?: UsersCreateOneWithoutMemberOfInput;
}

export interface GuildsCreateManyWithoutOwnerInput {
  create?: GuildsCreateWithoutOwnerInput[] | GuildsCreateWithoutOwnerInput;
  connect?: GuildsWhereUniqueInput[] | GuildsWhereUniqueInput;
}

export type UsersWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
  username?: String;
}>;

export interface GuildsUpdateManyWithoutOwnerInput {
  create?: GuildsCreateWithoutOwnerInput[] | GuildsCreateWithoutOwnerInput;
  delete?: GuildsWhereUniqueInput[] | GuildsWhereUniqueInput;
  connect?: GuildsWhereUniqueInput[] | GuildsWhereUniqueInput;
  disconnect?: GuildsWhereUniqueInput[] | GuildsWhereUniqueInput;
  update?:
    | GuildsUpdateWithWhereUniqueWithoutOwnerInput[]
    | GuildsUpdateWithWhereUniqueWithoutOwnerInput;
  upsert?:
    | GuildsUpsertWithWhereUniqueWithoutOwnerInput[]
    | GuildsUpsertWithWhereUniqueWithoutOwnerInput;
}

export interface GuildsUpsertWithWhereUniqueWithoutOwnerInput {
  where: GuildsWhereUniqueInput;
  update: GuildsUpdateWithoutOwnerDataInput;
  create: GuildsCreateWithoutOwnerInput;
}

export interface GuildsUpdateInput {
  guildname?: String;
  owner?: UsersUpdateOneWithoutOwnerOfInput;
  members?: MembersUpdateManyWithoutGuildsInput;
}

export interface GuildsUpdateWithWhereUniqueWithoutOwnerInput {
  where: GuildsWhereUniqueInput;
  data: GuildsUpdateWithoutOwnerDataInput;
}

export interface UsersUpdateOneWithoutOwnerOfInput {
  create?: UsersCreateWithoutOwnerOfInput;
  update?: UsersUpdateWithoutOwnerOfDataInput;
  upsert?: UsersUpsertWithoutOwnerOfInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: UsersWhereUniqueInput;
}

export interface GuildsCreateInput {
  guildname: String;
  owner?: UsersCreateOneWithoutOwnerOfInput;
  members?: MembersCreateManyWithoutGuildsInput;
}

export interface MembersWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  guilds?: GuildsWhereInput;
  users?: UsersWhereInput;
  AND?: MembersWhereInput[] | MembersWhereInput;
  OR?: MembersWhereInput[] | MembersWhereInput;
  NOT?: MembersWhereInput[] | MembersWhereInput;
}

export interface UsersCreateWithoutOwnerOfInput {
  email: String;
  username: String;
  memberOf?: MembersCreateManyWithoutUsersInput;
}

export interface UsersUpdateWithoutMemberOfDataInput {
  email?: String;
  username?: String;
  ownerOf?: GuildsUpdateManyWithoutOwnerInput;
}

export interface MembersCreateWithoutUsersInput {
  guilds?: GuildsCreateOneWithoutMembersInput;
}

export interface UsersUpdateOneWithoutMemberOfInput {
  create?: UsersCreateWithoutMemberOfInput;
  update?: UsersUpdateWithoutMemberOfDataInput;
  upsert?: UsersUpsertWithoutMemberOfInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: UsersWhereUniqueInput;
}

export interface GuildsSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: GuildsWhereInput;
  AND?: GuildsSubscriptionWhereInput[] | GuildsSubscriptionWhereInput;
  OR?: GuildsSubscriptionWhereInput[] | GuildsSubscriptionWhereInput;
  NOT?: GuildsSubscriptionWhereInput[] | GuildsSubscriptionWhereInput;
}

export interface MembersUpdateWithoutUsersDataInput {
  guilds?: GuildsUpdateOneWithoutMembersInput;
}

export interface MembersUpdateInput {
  guilds?: GuildsUpdateOneWithoutMembersInput;
  users?: UsersUpdateOneWithoutMemberOfInput;
}

export interface GuildsUpdateOneWithoutMembersInput {
  create?: GuildsCreateWithoutMembersInput;
  update?: GuildsUpdateWithoutMembersDataInput;
  upsert?: GuildsUpsertWithoutMembersInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: GuildsWhereUniqueInput;
}

export interface UsersUpsertWithoutMemberOfInput {
  update: UsersUpdateWithoutMemberOfDataInput;
  create: UsersCreateWithoutMemberOfInput;
}

export interface GuildsUpdateWithoutMembersDataInput {
  guildname?: String;
  owner?: UsersUpdateOneWithoutOwnerOfInput;
}

export interface MembersCreateManyWithoutUsersInput {
  create?: MembersCreateWithoutUsersInput[] | MembersCreateWithoutUsersInput;
  connect?: MembersWhereUniqueInput[] | MembersWhereUniqueInput;
}

export interface GuildsUpsertWithoutMembersInput {
  update: GuildsUpdateWithoutMembersDataInput;
  create: GuildsCreateWithoutMembersInput;
}

export interface UsersCreateInput {
  email: String;
  username: String;
  ownerOf?: GuildsCreateManyWithoutOwnerInput;
  memberOf?: MembersCreateManyWithoutUsersInput;
}

export interface MembersUpdateWithWhereUniqueWithoutGuildsInput {
  where: MembersWhereUniqueInput;
  data: MembersUpdateWithoutGuildsDataInput;
}

export interface MembersUpdateManyWithoutGuildsInput {
  create?: MembersCreateWithoutGuildsInput[] | MembersCreateWithoutGuildsInput;
  delete?: MembersWhereUniqueInput[] | MembersWhereUniqueInput;
  connect?: MembersWhereUniqueInput[] | MembersWhereUniqueInput;
  disconnect?: MembersWhereUniqueInput[] | MembersWhereUniqueInput;
  update?:
    | MembersUpdateWithWhereUniqueWithoutGuildsInput[]
    | MembersUpdateWithWhereUniqueWithoutGuildsInput;
  upsert?:
    | MembersUpsertWithWhereUniqueWithoutGuildsInput[]
    | MembersUpsertWithWhereUniqueWithoutGuildsInput;
}

export interface UsersUpsertWithoutOwnerOfInput {
  update: UsersUpdateWithoutOwnerOfDataInput;
  create: UsersCreateWithoutOwnerOfInput;
}

export interface MembersUpsertWithWhereUniqueWithoutUsersInput {
  where: MembersWhereUniqueInput;
  update: MembersUpdateWithoutUsersDataInput;
  create: MembersCreateWithoutUsersInput;
}

export interface MembersUpsertWithWhereUniqueWithoutGuildsInput {
  where: MembersWhereUniqueInput;
  update: MembersUpdateWithoutGuildsDataInput;
  create: MembersCreateWithoutGuildsInput;
}

export interface UsersSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UsersWhereInput;
  AND?: UsersSubscriptionWhereInput[] | UsersSubscriptionWhereInput;
  OR?: UsersSubscriptionWhereInput[] | UsersSubscriptionWhereInput;
  NOT?: UsersSubscriptionWhereInput[] | UsersSubscriptionWhereInput;
}

export interface UsersCreateOneWithoutOwnerOfInput {
  create?: UsersCreateWithoutOwnerOfInput;
  connect?: UsersWhereUniqueInput;
}

export interface GuildsUpdateWithoutOwnerDataInput {
  guildname?: String;
  members?: MembersUpdateManyWithoutGuildsInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UsersPreviousValuesNode {
  id: ID_Output;
  email: String;
  username: String;
}

export interface UsersPreviousValues
  extends Promise<UsersPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  username: () => Promise<String>;
}

export interface UsersPreviousValuesSubscription
  extends Promise<AsyncIterator<UsersPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  username: () => Promise<AsyncIterator<String>>;
}

export interface AggregateGuildsNode {
  count: Int;
}

export interface AggregateGuilds
  extends Promise<AggregateGuildsNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateGuildsSubscription
  extends Promise<AsyncIterator<AggregateGuildsNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UsersNode {
  id: ID_Output;
  email: String;
  username: String;
}

export interface Users extends Promise<UsersNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  username: () => Promise<String>;
  ownerOf: <T = FragmentableArray<GuildsNode>>(
    args?: {
      where?: GuildsWhereInput;
      orderBy?: GuildsOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  memberOf: <T = FragmentableArray<MembersNode>>(
    args?: {
      where?: MembersWhereInput;
      orderBy?: MembersOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UsersSubscription
  extends Promise<AsyncIterator<UsersNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  username: () => Promise<AsyncIterator<String>>;
  ownerOf: <T = Promise<AsyncIterator<GuildsSubscription>>>(
    args?: {
      where?: GuildsWhereInput;
      orderBy?: GuildsOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  memberOf: <T = Promise<AsyncIterator<MembersSubscription>>>(
    args?: {
      where?: MembersWhereInput;
      orderBy?: MembersOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface GuildsEdgeNode {
  cursor: String;
}

export interface GuildsEdge extends Promise<GuildsEdgeNode>, Fragmentable {
  node: <T = Guilds>() => T;
  cursor: () => Promise<String>;
}

export interface GuildsEdgeSubscription
  extends Promise<AsyncIterator<GuildsEdgeNode>>,
    Fragmentable {
  node: <T = GuildsSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface MembersNode {
  id: ID_Output;
}

export interface Members extends Promise<MembersNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  guilds: <T = Guilds>() => T;
  users: <T = Users>() => T;
}

export interface MembersSubscription
  extends Promise<AsyncIterator<MembersNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  guilds: <T = GuildsSubscription>() => T;
  users: <T = UsersSubscription>() => T;
}

export interface MembersPreviousValuesNode {
  id: ID_Output;
}

export interface MembersPreviousValues
  extends Promise<MembersPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
}

export interface MembersPreviousValuesSubscription
  extends Promise<AsyncIterator<MembersPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
}

export interface MembersSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface MembersSubscriptionPayload
  extends Promise<MembersSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Members>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = MembersPreviousValues>() => T;
}

export interface MembersSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<MembersSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = MembersSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = MembersPreviousValuesSubscription>() => T;
}

export interface AggregateUsersNode {
  count: Int;
}

export interface AggregateUsers
  extends Promise<AggregateUsersNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUsersSubscription
  extends Promise<AsyncIterator<AggregateUsersNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UsersEdgeNode {
  cursor: String;
}

export interface UsersEdge extends Promise<UsersEdgeNode>, Fragmentable {
  node: <T = Users>() => T;
  cursor: () => Promise<String>;
}

export interface UsersEdgeSubscription
  extends Promise<AsyncIterator<UsersEdgeNode>>,
    Fragmentable {
  node: <T = UsersSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UsersConnectionNode {}

export interface UsersConnection
  extends Promise<UsersConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<UsersEdgeNode>>() => T;
  aggregate: <T = AggregateUsers>() => T;
}

export interface UsersConnectionSubscription
  extends Promise<AsyncIterator<UsersConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UsersEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUsersSubscription>() => T;
}

export interface AggregateMembersNode {
  count: Int;
}

export interface AggregateMembers
  extends Promise<AggregateMembersNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateMembersSubscription
  extends Promise<AsyncIterator<AggregateMembersNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface GuildsConnectionNode {}

export interface GuildsConnection
  extends Promise<GuildsConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<GuildsEdgeNode>>() => T;
  aggregate: <T = AggregateGuilds>() => T;
}

export interface GuildsConnectionSubscription
  extends Promise<AsyncIterator<GuildsConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<GuildsEdgeSubscription>>>() => T;
  aggregate: <T = AggregateGuildsSubscription>() => T;
}

export interface PageInfoNode {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfo extends Promise<PageInfoNode>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfoNode>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface GuildsPreviousValuesNode {
  id: ID_Output;
  guildname: String;
}

export interface GuildsPreviousValues
  extends Promise<GuildsPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  guildname: () => Promise<String>;
}

export interface GuildsPreviousValuesSubscription
  extends Promise<AsyncIterator<GuildsPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  guildname: () => Promise<AsyncIterator<String>>;
}

export interface GuildsSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface GuildsSubscriptionPayload
  extends Promise<GuildsSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Guilds>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = GuildsPreviousValues>() => T;
}

export interface GuildsSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<GuildsSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = GuildsSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = GuildsPreviousValuesSubscription>() => T;
}

export interface GuildsNode {
  id: ID_Output;
  guildname: String;
}

export interface Guilds extends Promise<GuildsNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  guildname: () => Promise<String>;
  owner: <T = Users>() => T;
  members: <T = FragmentableArray<MembersNode>>(
    args?: {
      where?: MembersWhereInput;
      orderBy?: MembersOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface GuildsSubscription
  extends Promise<AsyncIterator<GuildsNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  guildname: () => Promise<AsyncIterator<String>>;
  owner: <T = UsersSubscription>() => T;
  members: <T = Promise<AsyncIterator<MembersSubscription>>>(
    args?: {
      where?: MembersWhereInput;
      orderBy?: MembersOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface MembersEdgeNode {
  cursor: String;
}

export interface MembersEdge extends Promise<MembersEdgeNode>, Fragmentable {
  node: <T = Members>() => T;
  cursor: () => Promise<String>;
}

export interface MembersEdgeSubscription
  extends Promise<AsyncIterator<MembersEdgeNode>>,
    Fragmentable {
  node: <T = MembersSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayloadNode {
  count: Long;
}

export interface BatchPayload extends Promise<BatchPayloadNode>, Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayloadNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UsersSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface UsersSubscriptionPayload
  extends Promise<UsersSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Users>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UsersPreviousValues>() => T;
}

export interface UsersSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UsersSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UsersSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UsersPreviousValuesSubscription>() => T;
}

export interface MembersConnectionNode {}

export interface MembersConnection
  extends Promise<MembersConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<MembersEdgeNode>>() => T;
  aggregate: <T = AggregateMembers>() => T;
}

export interface MembersConnectionSubscription
  extends Promise<AsyncIterator<MembersConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<MembersEdgeSubscription>>>() => T;
  aggregate: <T = AggregateMembersSubscription>() => T;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/**
 * Type Defs
 */

export const prisma: Prisma;
