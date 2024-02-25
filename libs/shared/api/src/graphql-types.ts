export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  timestamptz: { input: any; output: any };
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** columns and relationships of "online_users" */
export type OnlineUsers = {
  __typename?: 'OnlineUsers';
  id?: Maybe<Scalars['String']['output']>;
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  user?: Maybe<Users>;
};

/** Boolean expression to filter rows from the table "online_users". All fields are combined with a logical 'AND'. */
export type OnlineUsersBoolExp = {
  _and?: InputMaybe<Array<OnlineUsersBoolExp>>;
  _not?: InputMaybe<OnlineUsersBoolExp>;
  _or?: InputMaybe<Array<OnlineUsersBoolExp>>;
  id?: InputMaybe<StringComparisonExp>;
  lastSeen?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "online_users". */
export type OnlineUsersOrderBy = {
  id?: InputMaybe<OrderBy>;
  lastSeen?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
};

/** select columns of table "online_users" */
export enum OnlineUsersSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'lastSeen',
}

/** Streaming cursor of the table "online_users" */
export type OnlineUsersStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: OnlineUsersStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OnlineUsersStreamCursorValueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst = 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast = 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc = 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst = 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast = 'DESC_NULLS_LAST',
}

/** columns and relationships of "plays" */
export type Plays = {
  __typename?: 'Plays';
  createdAt: Scalars['timestamptz']['output'];
  gameId: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  ownerUserId?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  owner_user?: Maybe<Users>;
  playedAt: Scalars['timestamptz']['output'];
};

/** Boolean expression to filter rows from the table "plays". All fields are combined with a logical 'AND'. */
export type PlaysBoolExp = {
  _and?: InputMaybe<Array<PlaysBoolExp>>;
  _not?: InputMaybe<PlaysBoolExp>;
  _or?: InputMaybe<Array<PlaysBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  gameId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  ownerUserId?: InputMaybe<StringComparisonExp>;
  owner_user?: InputMaybe<UsersBoolExp>;
  playedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "plays" */
export enum PlaysConstraint {
  /** unique or primary key constraint on columns "id" */
  PlaysPkey = 'plays_pkey',
}

/** input type for inserting data into table "plays" */
export type PlaysInsertInput = {
  gameId?: InputMaybe<Scalars['String']['input']>;
  playedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** response of any mutation on the table "plays" */
export type PlaysMutationResponse = {
  __typename?: 'PlaysMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Plays>;
};

/** on_conflict condition type for table "plays" */
export type PlaysOnConflict = {
  constraint: PlaysConstraint;
  updateColumns?: Array<PlaysUpdateColumn>;
  where?: InputMaybe<PlaysBoolExp>;
};

/** Ordering options when selecting data from "plays". */
export type PlaysOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  gameId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  ownerUserId?: InputMaybe<OrderBy>;
  owner_user?: InputMaybe<UsersOrderBy>;
  playedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: plays */
export type PlaysPkColumnsInput = {
  id: Scalars['Int']['input'];
};

/** select columns of table "plays" */
export enum PlaysSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  GameId = 'gameId',
  /** column name */
  Id = 'id',
  /** column name */
  OwnerUserId = 'ownerUserId',
  /** column name */
  PlayedAt = 'playedAt',
}

/** input type for updating data in table "plays" */
export type PlaysSetInput = {
  gameId?: InputMaybe<Scalars['String']['input']>;
  playedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "plays" */
export type PlaysStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PlaysStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PlaysStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  gameId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ownerUserId?: InputMaybe<Scalars['String']['input']>;
  playedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "plays" */
export enum PlaysUpdateColumn {
  /** column name */
  GameId = 'gameId',
  /** column name */
  PlayedAt = 'playedAt',
}

export type PlaysUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PlaysSetInput>;
  /** filter the rows which have to be updated */
  where: PlaysBoolExp;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "todos" */
export type Todos = {
  __typename?: 'Todos';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  isCompleted: Scalars['Boolean']['output'];
  isPublic: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  userId: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export type TodosBoolExp = {
  _and?: InputMaybe<Array<TodosBoolExp>>;
  _not?: InputMaybe<TodosBoolExp>;
  _or?: InputMaybe<Array<TodosBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  isCompleted?: InputMaybe<BooleanComparisonExp>;
  isPublic?: InputMaybe<BooleanComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "todos" */
export enum TodosConstraint {
  /** unique or primary key constraint on columns "id" */
  TodosPkey = 'todos_pkey',
}

/** input type for inserting data into table "todos" */
export type TodosInsertInput = {
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** response of any mutation on the table "todos" */
export type TodosMutationResponse = {
  __typename?: 'TodosMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Todos>;
};

/** on_conflict condition type for table "todos" */
export type TodosOnConflict = {
  constraint: TodosConstraint;
  updateColumns?: Array<TodosUpdateColumn>;
  where?: InputMaybe<TodosBoolExp>;
};

/** Ordering options when selecting data from "todos". */
export type TodosOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isCompleted?: InputMaybe<OrderBy>;
  isPublic?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: todos */
export type TodosPkColumnsInput = {
  id: Scalars['Int']['input'];
};

/** select columns of table "todos" */
export enum TodosSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsCompleted = 'isCompleted',
  /** column name */
  IsPublic = 'isPublic',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "todos" */
export type TodosSetInput = {
  isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Streaming cursor of the table "todos" */
export type TodosStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: TodosStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TodosStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "todos" */
export enum TodosUpdateColumn {
  /** column name */
  IsCompleted = 'isCompleted',
}

export type TodosUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TodosSetInput>;
  /** filter the rows which have to be updated */
  where: TodosBoolExp;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'Users';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
};

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: 'UsersMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** Ordering options when selecting data from "users". */
export type UsersOrderBy = {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  id: Scalars['String']['input'];
};

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "users" */
export type UsersSetInput = {
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "users" */
export type UsersStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UsersStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UsersStreamCursorValueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UsersUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersSetInput>;
  /** filter the rows which have to be updated */
  where: UsersBoolExp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "plays" */
  deletePlays?: Maybe<PlaysMutationResponse>;
  /** delete single row from the table: "plays" */
  deletePlaysByPk?: Maybe<Plays>;
  /** delete data from the table: "todos" */
  deleteTodos?: Maybe<TodosMutationResponse>;
  /** delete single row from the table: "todos" */
  deleteTodosByPk?: Maybe<Todos>;
  /** insert data into the table: "plays" */
  insertPlays?: Maybe<PlaysMutationResponse>;
  /** insert a single row into the table: "plays" */
  insertPlaysOne?: Maybe<Plays>;
  /** insert data into the table: "todos" */
  insertTodos?: Maybe<TodosMutationResponse>;
  /** insert a single row into the table: "todos" */
  insertTodosOne?: Maybe<Todos>;
  /** update data of the table: "plays" */
  updatePlays?: Maybe<PlaysMutationResponse>;
  /** update single row of the table: "plays" */
  updatePlaysByPk?: Maybe<Plays>;
  /** update multiples rows of table: "plays" */
  updatePlaysMany?: Maybe<Array<Maybe<PlaysMutationResponse>>>;
  /** update data of the table: "todos" */
  updateTodos?: Maybe<TodosMutationResponse>;
  /** update single row of the table: "todos" */
  updateTodosByPk?: Maybe<Todos>;
  /** update multiples rows of table: "todos" */
  updateTodosMany?: Maybe<Array<Maybe<TodosMutationResponse>>>;
  /** update data of the table: "users" */
  updateUsers?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  updateUsersByPk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  updateUsersMany?: Maybe<Array<Maybe<UsersMutationResponse>>>;
};

/** mutation root */
export type Mutation_RootDeletePlaysArgs = {
  where: PlaysBoolExp;
};

/** mutation root */
export type Mutation_RootDeletePlaysByPkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDeleteTodosArgs = {
  where: TodosBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteTodosByPkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootInsertPlaysArgs = {
  objects: Array<PlaysInsertInput>;
  onConflict?: InputMaybe<PlaysOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPlaysOneArgs = {
  object: PlaysInsertInput;
  onConflict?: InputMaybe<PlaysOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertTodosArgs = {
  objects: Array<TodosInsertInput>;
  onConflict?: InputMaybe<TodosOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertTodosOneArgs = {
  object: TodosInsertInput;
  onConflict?: InputMaybe<TodosOnConflict>;
};

/** mutation root */
export type Mutation_RootUpdatePlaysArgs = {
  _set?: InputMaybe<PlaysSetInput>;
  where: PlaysBoolExp;
};

/** mutation root */
export type Mutation_RootUpdatePlaysByPkArgs = {
  _set?: InputMaybe<PlaysSetInput>;
  pkColumns: PlaysPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdatePlaysManyArgs = {
  updates: Array<PlaysUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateTodosArgs = {
  _set?: InputMaybe<TodosSetInput>;
  where: TodosBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateTodosByPkArgs = {
  _set?: InputMaybe<TodosSetInput>;
  pkColumns: TodosPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateTodosManyArgs = {
  updates: Array<TodosUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateUsersByPkArgs = {
  _set?: InputMaybe<UsersSetInput>;
  pkColumns: UsersPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateUsersManyArgs = {
  updates: Array<UsersUpdates>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "online_users" */
  onlineUsers: Array<OnlineUsers>;
  /** fetch data from the table: "plays" */
  plays: Array<Plays>;
  /** fetch data from the table: "plays" using primary key columns */
  playsByPk?: Maybe<Plays>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch data from the table: "todos" using primary key columns */
  todosByPk?: Maybe<Todos>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  usersByPk?: Maybe<Users>;
};

export type Query_RootOnlineUsersArgs = {
  distinctOn?: InputMaybe<Array<OnlineUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OnlineUsersOrderBy>>;
  where?: InputMaybe<OnlineUsersBoolExp>;
};

export type Query_RootPlaysArgs = {
  distinctOn?: InputMaybe<Array<PlaysSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlaysOrderBy>>;
  where?: InputMaybe<PlaysBoolExp>;
};

export type Query_RootPlaysByPkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootTodosArgs = {
  distinctOn?: InputMaybe<Array<TodosSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TodosOrderBy>>;
  where?: InputMaybe<TodosBoolExp>;
};

export type Query_RootTodosByPkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type Query_RootUsersByPkArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "online_users" */
  onlineUsers: Array<OnlineUsers>;
  /** fetch data from the table in a streaming manner: "online_users" */
  onlineUsersStream: Array<OnlineUsers>;
  /** fetch data from the table: "plays" */
  plays: Array<Plays>;
  /** fetch data from the table: "plays" using primary key columns */
  playsByPk?: Maybe<Plays>;
  /** fetch data from the table in a streaming manner: "plays" */
  playsStream: Array<Plays>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch data from the table: "todos" using primary key columns */
  todosByPk?: Maybe<Todos>;
  /** fetch data from the table in a streaming manner: "todos" */
  todosStream: Array<Todos>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  usersByPk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  usersStream: Array<Users>;
};

export type Subscription_RootOnlineUsersArgs = {
  distinctOn?: InputMaybe<Array<OnlineUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OnlineUsersOrderBy>>;
  where?: InputMaybe<OnlineUsersBoolExp>;
};

export type Subscription_RootOnlineUsersStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<OnlineUsersStreamCursorInput>>;
  where?: InputMaybe<OnlineUsersBoolExp>;
};

export type Subscription_RootPlaysArgs = {
  distinctOn?: InputMaybe<Array<PlaysSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlaysOrderBy>>;
  where?: InputMaybe<PlaysBoolExp>;
};

export type Subscription_RootPlaysByPkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootPlaysStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<PlaysStreamCursorInput>>;
  where?: InputMaybe<PlaysBoolExp>;
};

export type Subscription_RootTodosArgs = {
  distinctOn?: InputMaybe<Array<TodosSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TodosOrderBy>>;
  where?: InputMaybe<TodosBoolExp>;
};

export type Subscription_RootTodosByPkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootTodosStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<TodosStreamCursorInput>>;
  where?: InputMaybe<TodosBoolExp>;
};

export type Subscription_RootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type Subscription_RootUsersByPkArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_RootUsersStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UsersStreamCursorInput>>;
  where?: InputMaybe<UsersBoolExp>;
};
