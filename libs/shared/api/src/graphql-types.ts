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
  uuid: { input: any; output: any };
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

/** columns and relationships of "players" */
export type Players = {
  __typename?: 'Players';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name?: Maybe<Scalars['String']['output']>;
  ownerUserId: Scalars['String']['output'];
  /** An object relationship */
  owner_user?: Maybe<Users>;
  /** An array relationship */
  plays: Array<PlaysPlayers>;
  /** An aggregate relationship */
  playsAggregate: PlaysPlayersAggregate;
  /** An object relationship */
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** columns and relationships of "players" */
export type PlayersPlaysArgs = {
  distinctOn?: InputMaybe<Array<PlaysPlayersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlaysPlayersOrderBy>>;
  where?: InputMaybe<PlaysPlayersBoolExp>;
};

/** columns and relationships of "players" */
export type PlayersPlaysAggregateArgs = {
  distinctOn?: InputMaybe<Array<PlaysPlayersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlaysPlayersOrderBy>>;
  where?: InputMaybe<PlaysPlayersBoolExp>;
};

/** Boolean expression to filter rows from the table "players". All fields are combined with a logical 'AND'. */
export type PlayersBoolExp = {
  _and?: InputMaybe<Array<PlayersBoolExp>>;
  _not?: InputMaybe<PlayersBoolExp>;
  _or?: InputMaybe<Array<PlayersBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  ownerUserId?: InputMaybe<StringComparisonExp>;
  owner_user?: InputMaybe<UsersBoolExp>;
  plays?: InputMaybe<PlaysPlayersBoolExp>;
  playsAggregate?: InputMaybe<PlaysPlayersAggregateBoolExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "players" */
export enum PlayersConstraint {
  /** unique or primary key constraint on columns "id" */
  PlayersPkey = 'players_pkey',
}

/** input type for inserting data into table "players" */
export type PlayersInsertInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  plays?: InputMaybe<PlaysPlayersArrRelInsertInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** response of any mutation on the table "players" */
export type PlayersMutationResponse = {
  __typename?: 'PlayersMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Players>;
};

/** input type for inserting object relation for remote table "players" */
export type PlayersObjRelInsertInput = {
  data: PlayersInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<PlayersOnConflict>;
};

/** on_conflict condition type for table "players" */
export type PlayersOnConflict = {
  constraint: PlayersConstraint;
  updateColumns?: Array<PlayersUpdateColumn>;
  where?: InputMaybe<PlayersBoolExp>;
};

/** Ordering options when selecting data from "players". */
export type PlayersOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  ownerUserId?: InputMaybe<OrderBy>;
  owner_user?: InputMaybe<UsersOrderBy>;
  playsAggregate?: InputMaybe<PlaysPlayersAggregateOrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: players */
export type PlayersPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "players" */
export enum PlayersSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerUserId = 'ownerUserId',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "players" */
export type PlayersSetInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "players" */
export type PlayersStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PlayersStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PlayersStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownerUserId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "players" */
export enum PlayersUpdateColumn {
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'userId',
}

export type PlayersUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PlayersSetInput>;
  /** filter the rows which have to be updated */
  where: PlayersBoolExp;
};

/** columns and relationships of "plays" */
export type Plays = {
  __typename?: 'Plays';
  createdAt: Scalars['timestamptz']['output'];
  gameId: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  ownerUserId?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  owner_user?: Maybe<Users>;
  playedAt: Scalars['timestamptz']['output'];
  /** An array relationship */
  players: Array<PlaysPlayers>;
  /** An aggregate relationship */
  playersAggregate: PlaysPlayersAggregate;
};

/** columns and relationships of "plays" */
export type PlaysPlayersArgs = {
  distinctOn?: InputMaybe<Array<PlaysPlayersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlaysPlayersOrderBy>>;
  where?: InputMaybe<PlaysPlayersBoolExp>;
};

/** columns and relationships of "plays" */
export type PlaysPlayersAggregateArgs = {
  distinctOn?: InputMaybe<Array<PlaysPlayersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlaysPlayersOrderBy>>;
  where?: InputMaybe<PlaysPlayersBoolExp>;
};

/** Boolean expression to filter rows from the table "plays". All fields are combined with a logical 'AND'. */
export type PlaysBoolExp = {
  _and?: InputMaybe<Array<PlaysBoolExp>>;
  _not?: InputMaybe<PlaysBoolExp>;
  _or?: InputMaybe<Array<PlaysBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  gameId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  ownerUserId?: InputMaybe<StringComparisonExp>;
  owner_user?: InputMaybe<UsersBoolExp>;
  playedAt?: InputMaybe<TimestamptzComparisonExp>;
  players?: InputMaybe<PlaysPlayersBoolExp>;
  playersAggregate?: InputMaybe<PlaysPlayersAggregateBoolExp>;
};

/** unique or primary key constraints on table "plays" */
export enum PlaysConstraint {
  /** unique or primary key constraint on columns "id" */
  PlaysIdKey = 'plays_id_key',
  /** unique or primary key constraint on columns "id" */
  PlaysPkey = 'plays_pkey',
}

/** input type for inserting data into table "plays" */
export type PlaysInsertInput = {
  gameId?: InputMaybe<Scalars['String']['input']>;
  playedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  players?: InputMaybe<PlaysPlayersArrRelInsertInput>;
};

/** response of any mutation on the table "plays" */
export type PlaysMutationResponse = {
  __typename?: 'PlaysMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Plays>;
};

/** input type for inserting object relation for remote table "plays" */
export type PlaysObjRelInsertInput = {
  data: PlaysInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<PlaysOnConflict>;
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
  playersAggregate?: InputMaybe<PlaysPlayersAggregateOrderBy>;
};

/** primary key columns input for table: plays */
export type PlaysPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "plays_players" */
export type PlaysPlayers = {
  __typename?: 'PlaysPlayers';
  isWinner: Scalars['Boolean']['output'];
  ownerUserId: Scalars['String']['output'];
  /** An object relationship */
  play?: Maybe<Plays>;
  playId: Scalars['uuid']['output'];
  /** An object relationship */
  player?: Maybe<Players>;
  playerId: Scalars['uuid']['output'];
  score: Scalars['Int']['output'];
};

/** aggregated selection of "plays_players" */
export type PlaysPlayersAggregate = {
  __typename?: 'PlaysPlayersAggregate';
  aggregate?: Maybe<PlaysPlayersAggregateFields>;
  nodes: Array<PlaysPlayers>;
};

export type PlaysPlayersAggregateBoolExp = {
  bool_and?: InputMaybe<PlaysPlayersAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<PlaysPlayersAggregateBoolExpBool_Or>;
  count?: InputMaybe<PlaysPlayersAggregateBoolExpCount>;
};

/** aggregate fields of "plays_players" */
export type PlaysPlayersAggregateFields = {
  __typename?: 'PlaysPlayersAggregateFields';
  avg?: Maybe<PlaysPlayersAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<PlaysPlayersMaxFields>;
  min?: Maybe<PlaysPlayersMinFields>;
  stddev?: Maybe<PlaysPlayersStddevFields>;
  stddevPop?: Maybe<PlaysPlayersStddevPopFields>;
  stddevSamp?: Maybe<PlaysPlayersStddevSampFields>;
  sum?: Maybe<PlaysPlayersSumFields>;
  varPop?: Maybe<PlaysPlayersVarPopFields>;
  varSamp?: Maybe<PlaysPlayersVarSampFields>;
  variance?: Maybe<PlaysPlayersVarianceFields>;
};

/** aggregate fields of "plays_players" */
export type PlaysPlayersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PlaysPlayersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "plays_players" */
export type PlaysPlayersAggregateOrderBy = {
  avg?: InputMaybe<PlaysPlayersAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PlaysPlayersMaxOrderBy>;
  min?: InputMaybe<PlaysPlayersMinOrderBy>;
  stddev?: InputMaybe<PlaysPlayersStddevOrderBy>;
  stddevPop?: InputMaybe<PlaysPlayersStddevPopOrderBy>;
  stddevSamp?: InputMaybe<PlaysPlayersStddevSampOrderBy>;
  sum?: InputMaybe<PlaysPlayersSumOrderBy>;
  varPop?: InputMaybe<PlaysPlayersVarPopOrderBy>;
  varSamp?: InputMaybe<PlaysPlayersVarSampOrderBy>;
  variance?: InputMaybe<PlaysPlayersVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "plays_players" */
export type PlaysPlayersArrRelInsertInput = {
  data: Array<PlaysPlayersInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<PlaysPlayersOnConflict>;
};

/** aggregate avg on columns */
export type PlaysPlayersAvgFields = {
  __typename?: 'PlaysPlayersAvgFields';
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "plays_players" */
export type PlaysPlayersAvgOrderBy = {
  score?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "plays_players". All fields are combined with a logical 'AND'. */
export type PlaysPlayersBoolExp = {
  _and?: InputMaybe<Array<PlaysPlayersBoolExp>>;
  _not?: InputMaybe<PlaysPlayersBoolExp>;
  _or?: InputMaybe<Array<PlaysPlayersBoolExp>>;
  isWinner?: InputMaybe<BooleanComparisonExp>;
  ownerUserId?: InputMaybe<StringComparisonExp>;
  play?: InputMaybe<PlaysBoolExp>;
  playId?: InputMaybe<UuidComparisonExp>;
  player?: InputMaybe<PlayersBoolExp>;
  playerId?: InputMaybe<UuidComparisonExp>;
  score?: InputMaybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "plays_players" */
export enum PlaysPlayersConstraint {
  /** unique or primary key constraint on columns "play_id", "player_id" */
  PlaysPlayersPkey = 'plays_players_pkey',
}

/** input type for incrementing numeric columns in table "plays_players" */
export type PlaysPlayersIncInput = {
  score?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "plays_players" */
export type PlaysPlayersInsertInput = {
  isWinner?: InputMaybe<Scalars['Boolean']['input']>;
  play?: InputMaybe<PlaysObjRelInsertInput>;
  playId?: InputMaybe<Scalars['uuid']['input']>;
  player?: InputMaybe<PlayersObjRelInsertInput>;
  playerId?: InputMaybe<Scalars['uuid']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type PlaysPlayersMaxFields = {
  __typename?: 'PlaysPlayersMaxFields';
  ownerUserId?: Maybe<Scalars['String']['output']>;
  playId?: Maybe<Scalars['uuid']['output']>;
  playerId?: Maybe<Scalars['uuid']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "plays_players" */
export type PlaysPlayersMaxOrderBy = {
  ownerUserId?: InputMaybe<OrderBy>;
  playId?: InputMaybe<OrderBy>;
  playerId?: InputMaybe<OrderBy>;
  score?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type PlaysPlayersMinFields = {
  __typename?: 'PlaysPlayersMinFields';
  ownerUserId?: Maybe<Scalars['String']['output']>;
  playId?: Maybe<Scalars['uuid']['output']>;
  playerId?: Maybe<Scalars['uuid']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "plays_players" */
export type PlaysPlayersMinOrderBy = {
  ownerUserId?: InputMaybe<OrderBy>;
  playId?: InputMaybe<OrderBy>;
  playerId?: InputMaybe<OrderBy>;
  score?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "plays_players" */
export type PlaysPlayersMutationResponse = {
  __typename?: 'PlaysPlayersMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<PlaysPlayers>;
};

/** on_conflict condition type for table "plays_players" */
export type PlaysPlayersOnConflict = {
  constraint: PlaysPlayersConstraint;
  updateColumns?: Array<PlaysPlayersUpdateColumn>;
  where?: InputMaybe<PlaysPlayersBoolExp>;
};

/** Ordering options when selecting data from "plays_players". */
export type PlaysPlayersOrderBy = {
  isWinner?: InputMaybe<OrderBy>;
  ownerUserId?: InputMaybe<OrderBy>;
  play?: InputMaybe<PlaysOrderBy>;
  playId?: InputMaybe<OrderBy>;
  player?: InputMaybe<PlayersOrderBy>;
  playerId?: InputMaybe<OrderBy>;
  score?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: plays_players */
export type PlaysPlayersPkColumnsInput = {
  playId: Scalars['uuid']['input'];
  playerId: Scalars['uuid']['input'];
};

/** select columns of table "plays_players" */
export enum PlaysPlayersSelectColumn {
  /** column name */
  IsWinner = 'isWinner',
  /** column name */
  OwnerUserId = 'ownerUserId',
  /** column name */
  PlayId = 'playId',
  /** column name */
  PlayerId = 'playerId',
  /** column name */
  Score = 'score',
}

/** select "playsPlayersAggregateBoolExpBool_andArgumentsColumns" columns of table "plays_players" */
export enum PlaysPlayersSelectColumnPlaysPlayersAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  IsWinner = 'isWinner',
}

/** select "playsPlayersAggregateBoolExpBool_orArgumentsColumns" columns of table "plays_players" */
export enum PlaysPlayersSelectColumnPlaysPlayersAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  IsWinner = 'isWinner',
}

/** input type for updating data in table "plays_players" */
export type PlaysPlayersSetInput = {
  isWinner?: InputMaybe<Scalars['Boolean']['input']>;
  playId?: InputMaybe<Scalars['uuid']['input']>;
  playerId?: InputMaybe<Scalars['uuid']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type PlaysPlayersStddevFields = {
  __typename?: 'PlaysPlayersStddevFields';
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "plays_players" */
export type PlaysPlayersStddevOrderBy = {
  score?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type PlaysPlayersStddevPopFields = {
  __typename?: 'PlaysPlayersStddevPopFields';
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "plays_players" */
export type PlaysPlayersStddevPopOrderBy = {
  score?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type PlaysPlayersStddevSampFields = {
  __typename?: 'PlaysPlayersStddevSampFields';
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "plays_players" */
export type PlaysPlayersStddevSampOrderBy = {
  score?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "plays_players" */
export type PlaysPlayersStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PlaysPlayersStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PlaysPlayersStreamCursorValueInput = {
  isWinner?: InputMaybe<Scalars['Boolean']['input']>;
  ownerUserId?: InputMaybe<Scalars['String']['input']>;
  playId?: InputMaybe<Scalars['uuid']['input']>;
  playerId?: InputMaybe<Scalars['uuid']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type PlaysPlayersSumFields = {
  __typename?: 'PlaysPlayersSumFields';
  score?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "plays_players" */
export type PlaysPlayersSumOrderBy = {
  score?: InputMaybe<OrderBy>;
};

/** update columns of table "plays_players" */
export enum PlaysPlayersUpdateColumn {
  /** column name */
  IsWinner = 'isWinner',
  /** column name */
  PlayId = 'playId',
  /** column name */
  PlayerId = 'playerId',
  /** column name */
  Score = 'score',
}

export type PlaysPlayersUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<PlaysPlayersIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PlaysPlayersSetInput>;
  /** filter the rows which have to be updated */
  where: PlaysPlayersBoolExp;
};

/** aggregate varPop on columns */
export type PlaysPlayersVarPopFields = {
  __typename?: 'PlaysPlayersVarPopFields';
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "plays_players" */
export type PlaysPlayersVarPopOrderBy = {
  score?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type PlaysPlayersVarSampFields = {
  __typename?: 'PlaysPlayersVarSampFields';
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "plays_players" */
export type PlaysPlayersVarSampOrderBy = {
  score?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type PlaysPlayersVarianceFields = {
  __typename?: 'PlaysPlayersVarianceFields';
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "plays_players" */
export type PlaysPlayersVarianceOrderBy = {
  score?: InputMaybe<OrderBy>;
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
  id?: InputMaybe<Scalars['uuid']['input']>;
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

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "players" */
  deletePlayers?: Maybe<PlayersMutationResponse>;
  /** delete single row from the table: "players" */
  deletePlayersByPk?: Maybe<Players>;
  /** delete data from the table: "plays" */
  deletePlays?: Maybe<PlaysMutationResponse>;
  /** delete single row from the table: "plays" */
  deletePlaysByPk?: Maybe<Plays>;
  /** delete data from the table: "plays_players" */
  deletePlaysPlayers?: Maybe<PlaysPlayersMutationResponse>;
  /** delete single row from the table: "plays_players" */
  deletePlaysPlayersByPk?: Maybe<PlaysPlayers>;
  /** insert data into the table: "players" */
  insertPlayers?: Maybe<PlayersMutationResponse>;
  /** insert a single row into the table: "players" */
  insertPlayersOne?: Maybe<Players>;
  /** insert data into the table: "plays" */
  insertPlays?: Maybe<PlaysMutationResponse>;
  /** insert a single row into the table: "plays" */
  insertPlaysOne?: Maybe<Plays>;
  /** insert data into the table: "plays_players" */
  insertPlaysPlayers?: Maybe<PlaysPlayersMutationResponse>;
  /** insert a single row into the table: "plays_players" */
  insertPlaysPlayersOne?: Maybe<PlaysPlayers>;
  /** update data of the table: "players" */
  updatePlayers?: Maybe<PlayersMutationResponse>;
  /** update single row of the table: "players" */
  updatePlayersByPk?: Maybe<Players>;
  /** update multiples rows of table: "players" */
  updatePlayersMany?: Maybe<Array<Maybe<PlayersMutationResponse>>>;
  /** update data of the table: "plays" */
  updatePlays?: Maybe<PlaysMutationResponse>;
  /** update single row of the table: "plays" */
  updatePlaysByPk?: Maybe<Plays>;
  /** update multiples rows of table: "plays" */
  updatePlaysMany?: Maybe<Array<Maybe<PlaysMutationResponse>>>;
  /** update data of the table: "plays_players" */
  updatePlaysPlayers?: Maybe<PlaysPlayersMutationResponse>;
  /** update single row of the table: "plays_players" */
  updatePlaysPlayersByPk?: Maybe<PlaysPlayers>;
  /** update multiples rows of table: "plays_players" */
  updatePlaysPlayersMany?: Maybe<Array<Maybe<PlaysPlayersMutationResponse>>>;
  /** update data of the table: "users" */
  updateUsers?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  updateUsersByPk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  updateUsersMany?: Maybe<Array<Maybe<UsersMutationResponse>>>;
};

/** mutation root */
export type Mutation_RootDeletePlayersArgs = {
  where: PlayersBoolExp;
};

/** mutation root */
export type Mutation_RootDeletePlayersByPkArgs = {
  id: Scalars['uuid']['input'];
};

/** mutation root */
export type Mutation_RootDeletePlaysArgs = {
  where: PlaysBoolExp;
};

/** mutation root */
export type Mutation_RootDeletePlaysByPkArgs = {
  id: Scalars['uuid']['input'];
};

/** mutation root */
export type Mutation_RootDeletePlaysPlayersArgs = {
  where: PlaysPlayersBoolExp;
};

/** mutation root */
export type Mutation_RootDeletePlaysPlayersByPkArgs = {
  playId: Scalars['uuid']['input'];
  playerId: Scalars['uuid']['input'];
};

/** mutation root */
export type Mutation_RootInsertPlayersArgs = {
  objects: Array<PlayersInsertInput>;
  onConflict?: InputMaybe<PlayersOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPlayersOneArgs = {
  object: PlayersInsertInput;
  onConflict?: InputMaybe<PlayersOnConflict>;
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
export type Mutation_RootInsertPlaysPlayersArgs = {
  objects: Array<PlaysPlayersInsertInput>;
  onConflict?: InputMaybe<PlaysPlayersOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPlaysPlayersOneArgs = {
  object: PlaysPlayersInsertInput;
  onConflict?: InputMaybe<PlaysPlayersOnConflict>;
};

/** mutation root */
export type Mutation_RootUpdatePlayersArgs = {
  _set?: InputMaybe<PlayersSetInput>;
  where: PlayersBoolExp;
};

/** mutation root */
export type Mutation_RootUpdatePlayersByPkArgs = {
  _set?: InputMaybe<PlayersSetInput>;
  pkColumns: PlayersPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdatePlayersManyArgs = {
  updates: Array<PlayersUpdates>;
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
export type Mutation_RootUpdatePlaysPlayersArgs = {
  _inc?: InputMaybe<PlaysPlayersIncInput>;
  _set?: InputMaybe<PlaysPlayersSetInput>;
  where: PlaysPlayersBoolExp;
};

/** mutation root */
export type Mutation_RootUpdatePlaysPlayersByPkArgs = {
  _inc?: InputMaybe<PlaysPlayersIncInput>;
  _set?: InputMaybe<PlaysPlayersSetInput>;
  pkColumns: PlaysPlayersPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdatePlaysPlayersManyArgs = {
  updates: Array<PlaysPlayersUpdates>;
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

export type PlaysPlayersAggregateBoolExpBool_And = {
  arguments: PlaysPlayersSelectColumnPlaysPlayersAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PlaysPlayersBoolExp>;
  predicate: BooleanComparisonExp;
};

export type PlaysPlayersAggregateBoolExpBool_Or = {
  arguments: PlaysPlayersSelectColumnPlaysPlayersAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PlaysPlayersBoolExp>;
  predicate: BooleanComparisonExp;
};

export type PlaysPlayersAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<PlaysPlayersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PlaysPlayersBoolExp>;
  predicate: IntComparisonExp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "online_users" */
  onlineUsers: Array<OnlineUsers>;
  /** fetch data from the table: "players" */
  players: Array<Players>;
  /** fetch data from the table: "players" using primary key columns */
  playersByPk?: Maybe<Players>;
  /** fetch data from the table: "plays" */
  plays: Array<Plays>;
  /** fetch data from the table: "plays" using primary key columns */
  playsByPk?: Maybe<Plays>;
  /** fetch data from the table: "plays_players" */
  playsPlayers: Array<PlaysPlayers>;
  /** fetch aggregated fields from the table: "plays_players" */
  playsPlayersAggregate: PlaysPlayersAggregate;
  /** fetch data from the table: "plays_players" using primary key columns */
  playsPlayersByPk?: Maybe<PlaysPlayers>;
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

export type Query_RootPlayersArgs = {
  distinctOn?: InputMaybe<Array<PlayersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlayersOrderBy>>;
  where?: InputMaybe<PlayersBoolExp>;
};

export type Query_RootPlayersByPkArgs = {
  id: Scalars['uuid']['input'];
};

export type Query_RootPlaysArgs = {
  distinctOn?: InputMaybe<Array<PlaysSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlaysOrderBy>>;
  where?: InputMaybe<PlaysBoolExp>;
};

export type Query_RootPlaysByPkArgs = {
  id: Scalars['uuid']['input'];
};

export type Query_RootPlaysPlayersArgs = {
  distinctOn?: InputMaybe<Array<PlaysPlayersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlaysPlayersOrderBy>>;
  where?: InputMaybe<PlaysPlayersBoolExp>;
};

export type Query_RootPlaysPlayersAggregateArgs = {
  distinctOn?: InputMaybe<Array<PlaysPlayersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlaysPlayersOrderBy>>;
  where?: InputMaybe<PlaysPlayersBoolExp>;
};

export type Query_RootPlaysPlayersByPkArgs = {
  playId: Scalars['uuid']['input'];
  playerId: Scalars['uuid']['input'];
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
  /** fetch data from the table: "players" */
  players: Array<Players>;
  /** fetch data from the table: "players" using primary key columns */
  playersByPk?: Maybe<Players>;
  /** fetch data from the table in a streaming manner: "players" */
  playersStream: Array<Players>;
  /** fetch data from the table: "plays" */
  plays: Array<Plays>;
  /** fetch data from the table: "plays" using primary key columns */
  playsByPk?: Maybe<Plays>;
  /** fetch data from the table: "plays_players" */
  playsPlayers: Array<PlaysPlayers>;
  /** fetch aggregated fields from the table: "plays_players" */
  playsPlayersAggregate: PlaysPlayersAggregate;
  /** fetch data from the table: "plays_players" using primary key columns */
  playsPlayersByPk?: Maybe<PlaysPlayers>;
  /** fetch data from the table in a streaming manner: "plays_players" */
  playsPlayersStream: Array<PlaysPlayers>;
  /** fetch data from the table in a streaming manner: "plays" */
  playsStream: Array<Plays>;
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

export type Subscription_RootPlayersArgs = {
  distinctOn?: InputMaybe<Array<PlayersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlayersOrderBy>>;
  where?: InputMaybe<PlayersBoolExp>;
};

export type Subscription_RootPlayersByPkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_RootPlayersStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<PlayersStreamCursorInput>>;
  where?: InputMaybe<PlayersBoolExp>;
};

export type Subscription_RootPlaysArgs = {
  distinctOn?: InputMaybe<Array<PlaysSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlaysOrderBy>>;
  where?: InputMaybe<PlaysBoolExp>;
};

export type Subscription_RootPlaysByPkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_RootPlaysPlayersArgs = {
  distinctOn?: InputMaybe<Array<PlaysPlayersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlaysPlayersOrderBy>>;
  where?: InputMaybe<PlaysPlayersBoolExp>;
};

export type Subscription_RootPlaysPlayersAggregateArgs = {
  distinctOn?: InputMaybe<Array<PlaysPlayersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlaysPlayersOrderBy>>;
  where?: InputMaybe<PlaysPlayersBoolExp>;
};

export type Subscription_RootPlaysPlayersByPkArgs = {
  playId: Scalars['uuid']['input'];
  playerId: Scalars['uuid']['input'];
};

export type Subscription_RootPlaysPlayersStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<PlaysPlayersStreamCursorInput>>;
  where?: InputMaybe<PlaysPlayersBoolExp>;
};

export type Subscription_RootPlaysStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<PlaysStreamCursorInput>>;
  where?: InputMaybe<PlaysBoolExp>;
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
