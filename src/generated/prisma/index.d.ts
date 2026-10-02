
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CustodyCounter
 * 
 */
export type CustodyCounter = $Result.DefaultSelection<Prisma.$CustodyCounterPayload>
/**
 * Model DepositAddress
 * 
 */
export type DepositAddress = $Result.DefaultSelection<Prisma.$DepositAddressPayload>
/**
 * Model ChainTransaction
 * 
 */
export type ChainTransaction = $Result.DefaultSelection<Prisma.$ChainTransactionPayload>
/**
 * Model ScanCursor
 * 
 */
export type ScanCursor = $Result.DefaultSelection<Prisma.$ScanCursorPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ChainNetwork: {
  BASE: 'BASE',
  POLYGON: 'POLYGON'
};

export type ChainNetwork = (typeof ChainNetwork)[keyof typeof ChainNetwork]


export const ChainTransactionStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CONVERTING: 'CONVERTING',
  CONVERTED: 'CONVERTED',
  FAILED: 'FAILED'
};

export type ChainTransactionStatus = (typeof ChainTransactionStatus)[keyof typeof ChainTransactionStatus]

}

export type ChainNetwork = $Enums.ChainNetwork

export const ChainNetwork: typeof $Enums.ChainNetwork

export type ChainTransactionStatus = $Enums.ChainTransactionStatus

export const ChainTransactionStatus: typeof $Enums.ChainTransactionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more CustodyCounters
 * const custodyCounters = await prisma.custodyCounter.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more CustodyCounters
   * const custodyCounters = await prisma.custodyCounter.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.custodyCounter`: Exposes CRUD operations for the **CustodyCounter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustodyCounters
    * const custodyCounters = await prisma.custodyCounter.findMany()
    * ```
    */
  get custodyCounter(): Prisma.CustodyCounterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.depositAddress`: Exposes CRUD operations for the **DepositAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DepositAddresses
    * const depositAddresses = await prisma.depositAddress.findMany()
    * ```
    */
  get depositAddress(): Prisma.DepositAddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chainTransaction`: Exposes CRUD operations for the **ChainTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChainTransactions
    * const chainTransactions = await prisma.chainTransaction.findMany()
    * ```
    */
  get chainTransaction(): Prisma.ChainTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scanCursor`: Exposes CRUD operations for the **ScanCursor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScanCursors
    * const scanCursors = await prisma.scanCursor.findMany()
    * ```
    */
  get scanCursor(): Prisma.ScanCursorDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CustodyCounter: 'CustodyCounter',
    DepositAddress: 'DepositAddress',
    ChainTransaction: 'ChainTransaction',
    ScanCursor: 'ScanCursor'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "custodyCounter" | "depositAddress" | "chainTransaction" | "scanCursor"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CustodyCounter: {
        payload: Prisma.$CustodyCounterPayload<ExtArgs>
        fields: Prisma.CustodyCounterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustodyCounterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustodyCounterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustodyCounterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustodyCounterPayload>
          }
          findFirst: {
            args: Prisma.CustodyCounterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustodyCounterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustodyCounterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustodyCounterPayload>
          }
          findMany: {
            args: Prisma.CustodyCounterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustodyCounterPayload>[]
          }
          create: {
            args: Prisma.CustodyCounterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustodyCounterPayload>
          }
          createMany: {
            args: Prisma.CustodyCounterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustodyCounterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustodyCounterPayload>[]
          }
          delete: {
            args: Prisma.CustodyCounterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustodyCounterPayload>
          }
          update: {
            args: Prisma.CustodyCounterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustodyCounterPayload>
          }
          deleteMany: {
            args: Prisma.CustodyCounterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustodyCounterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustodyCounterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustodyCounterPayload>[]
          }
          upsert: {
            args: Prisma.CustodyCounterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustodyCounterPayload>
          }
          aggregate: {
            args: Prisma.CustodyCounterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustodyCounter>
          }
          groupBy: {
            args: Prisma.CustodyCounterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustodyCounterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustodyCounterCountArgs<ExtArgs>
            result: $Utils.Optional<CustodyCounterCountAggregateOutputType> | number
          }
        }
      }
      DepositAddress: {
        payload: Prisma.$DepositAddressPayload<ExtArgs>
        fields: Prisma.DepositAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepositAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepositAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositAddressPayload>
          }
          findFirst: {
            args: Prisma.DepositAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepositAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositAddressPayload>
          }
          findMany: {
            args: Prisma.DepositAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositAddressPayload>[]
          }
          create: {
            args: Prisma.DepositAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositAddressPayload>
          }
          createMany: {
            args: Prisma.DepositAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepositAddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositAddressPayload>[]
          }
          delete: {
            args: Prisma.DepositAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositAddressPayload>
          }
          update: {
            args: Prisma.DepositAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositAddressPayload>
          }
          deleteMany: {
            args: Prisma.DepositAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepositAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepositAddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositAddressPayload>[]
          }
          upsert: {
            args: Prisma.DepositAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositAddressPayload>
          }
          aggregate: {
            args: Prisma.DepositAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepositAddress>
          }
          groupBy: {
            args: Prisma.DepositAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepositAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepositAddressCountArgs<ExtArgs>
            result: $Utils.Optional<DepositAddressCountAggregateOutputType> | number
          }
        }
      }
      ChainTransaction: {
        payload: Prisma.$ChainTransactionPayload<ExtArgs>
        fields: Prisma.ChainTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChainTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChainTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainTransactionPayload>
          }
          findFirst: {
            args: Prisma.ChainTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChainTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainTransactionPayload>
          }
          findMany: {
            args: Prisma.ChainTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainTransactionPayload>[]
          }
          create: {
            args: Prisma.ChainTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainTransactionPayload>
          }
          createMany: {
            args: Prisma.ChainTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChainTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainTransactionPayload>[]
          }
          delete: {
            args: Prisma.ChainTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainTransactionPayload>
          }
          update: {
            args: Prisma.ChainTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainTransactionPayload>
          }
          deleteMany: {
            args: Prisma.ChainTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChainTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChainTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainTransactionPayload>[]
          }
          upsert: {
            args: Prisma.ChainTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainTransactionPayload>
          }
          aggregate: {
            args: Prisma.ChainTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChainTransaction>
          }
          groupBy: {
            args: Prisma.ChainTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChainTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChainTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<ChainTransactionCountAggregateOutputType> | number
          }
        }
      }
      ScanCursor: {
        payload: Prisma.$ScanCursorPayload<ExtArgs>
        fields: Prisma.ScanCursorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScanCursorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanCursorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScanCursorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanCursorPayload>
          }
          findFirst: {
            args: Prisma.ScanCursorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanCursorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScanCursorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanCursorPayload>
          }
          findMany: {
            args: Prisma.ScanCursorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanCursorPayload>[]
          }
          create: {
            args: Prisma.ScanCursorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanCursorPayload>
          }
          createMany: {
            args: Prisma.ScanCursorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScanCursorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanCursorPayload>[]
          }
          delete: {
            args: Prisma.ScanCursorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanCursorPayload>
          }
          update: {
            args: Prisma.ScanCursorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanCursorPayload>
          }
          deleteMany: {
            args: Prisma.ScanCursorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScanCursorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScanCursorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanCursorPayload>[]
          }
          upsert: {
            args: Prisma.ScanCursorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanCursorPayload>
          }
          aggregate: {
            args: Prisma.ScanCursorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScanCursor>
          }
          groupBy: {
            args: Prisma.ScanCursorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScanCursorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScanCursorCountArgs<ExtArgs>
            result: $Utils.Optional<ScanCursorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    custodyCounter?: CustodyCounterOmit
    depositAddress?: DepositAddressOmit
    chainTransaction?: ChainTransactionOmit
    scanCursor?: ScanCursorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DepositAddressCountOutputType
   */

  export type DepositAddressCountOutputType = {
    transactions: number
  }

  export type DepositAddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | DepositAddressCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * DepositAddressCountOutputType without action
   */
  export type DepositAddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositAddressCountOutputType
     */
    select?: DepositAddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepositAddressCountOutputType without action
   */
  export type DepositAddressCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChainTransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CustodyCounter
   */

  export type AggregateCustodyCounter = {
    _count: CustodyCounterCountAggregateOutputType | null
    _avg: CustodyCounterAvgAggregateOutputType | null
    _sum: CustodyCounterSumAggregateOutputType | null
    _min: CustodyCounterMinAggregateOutputType | null
    _max: CustodyCounterMaxAggregateOutputType | null
  }

  export type CustodyCounterAvgAggregateOutputType = {
    id: number | null
    nextIndex: number | null
  }

  export type CustodyCounterSumAggregateOutputType = {
    id: number | null
    nextIndex: number | null
  }

  export type CustodyCounterMinAggregateOutputType = {
    id: number | null
    nextIndex: number | null
    updatedAt: Date | null
  }

  export type CustodyCounterMaxAggregateOutputType = {
    id: number | null
    nextIndex: number | null
    updatedAt: Date | null
  }

  export type CustodyCounterCountAggregateOutputType = {
    id: number
    nextIndex: number
    updatedAt: number
    _all: number
  }


  export type CustodyCounterAvgAggregateInputType = {
    id?: true
    nextIndex?: true
  }

  export type CustodyCounterSumAggregateInputType = {
    id?: true
    nextIndex?: true
  }

  export type CustodyCounterMinAggregateInputType = {
    id?: true
    nextIndex?: true
    updatedAt?: true
  }

  export type CustodyCounterMaxAggregateInputType = {
    id?: true
    nextIndex?: true
    updatedAt?: true
  }

  export type CustodyCounterCountAggregateInputType = {
    id?: true
    nextIndex?: true
    updatedAt?: true
    _all?: true
  }

  export type CustodyCounterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustodyCounter to aggregate.
     */
    where?: CustodyCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustodyCounters to fetch.
     */
    orderBy?: CustodyCounterOrderByWithRelationInput | CustodyCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustodyCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustodyCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustodyCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustodyCounters
    **/
    _count?: true | CustodyCounterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustodyCounterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustodyCounterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustodyCounterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustodyCounterMaxAggregateInputType
  }

  export type GetCustodyCounterAggregateType<T extends CustodyCounterAggregateArgs> = {
        [P in keyof T & keyof AggregateCustodyCounter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustodyCounter[P]>
      : GetScalarType<T[P], AggregateCustodyCounter[P]>
  }




  export type CustodyCounterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustodyCounterWhereInput
    orderBy?: CustodyCounterOrderByWithAggregationInput | CustodyCounterOrderByWithAggregationInput[]
    by: CustodyCounterScalarFieldEnum[] | CustodyCounterScalarFieldEnum
    having?: CustodyCounterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustodyCounterCountAggregateInputType | true
    _avg?: CustodyCounterAvgAggregateInputType
    _sum?: CustodyCounterSumAggregateInputType
    _min?: CustodyCounterMinAggregateInputType
    _max?: CustodyCounterMaxAggregateInputType
  }

  export type CustodyCounterGroupByOutputType = {
    id: number
    nextIndex: number
    updatedAt: Date
    _count: CustodyCounterCountAggregateOutputType | null
    _avg: CustodyCounterAvgAggregateOutputType | null
    _sum: CustodyCounterSumAggregateOutputType | null
    _min: CustodyCounterMinAggregateOutputType | null
    _max: CustodyCounterMaxAggregateOutputType | null
  }

  type GetCustodyCounterGroupByPayload<T extends CustodyCounterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustodyCounterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustodyCounterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustodyCounterGroupByOutputType[P]>
            : GetScalarType<T[P], CustodyCounterGroupByOutputType[P]>
        }
      >
    >


  export type CustodyCounterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nextIndex?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["custodyCounter"]>

  export type CustodyCounterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nextIndex?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["custodyCounter"]>

  export type CustodyCounterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nextIndex?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["custodyCounter"]>

  export type CustodyCounterSelectScalar = {
    id?: boolean
    nextIndex?: boolean
    updatedAt?: boolean
  }

  export type CustodyCounterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nextIndex" | "updatedAt", ExtArgs["result"]["custodyCounter"]>

  export type $CustodyCounterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustodyCounter"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nextIndex: number
      updatedAt: Date
    }, ExtArgs["result"]["custodyCounter"]>
    composites: {}
  }

  type CustodyCounterGetPayload<S extends boolean | null | undefined | CustodyCounterDefaultArgs> = $Result.GetResult<Prisma.$CustodyCounterPayload, S>

  type CustodyCounterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustodyCounterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustodyCounterCountAggregateInputType | true
    }

  export interface CustodyCounterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustodyCounter'], meta: { name: 'CustodyCounter' } }
    /**
     * Find zero or one CustodyCounter that matches the filter.
     * @param {CustodyCounterFindUniqueArgs} args - Arguments to find a CustodyCounter
     * @example
     * // Get one CustodyCounter
     * const custodyCounter = await prisma.custodyCounter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustodyCounterFindUniqueArgs>(args: SelectSubset<T, CustodyCounterFindUniqueArgs<ExtArgs>>): Prisma__CustodyCounterClient<$Result.GetResult<Prisma.$CustodyCounterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustodyCounter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustodyCounterFindUniqueOrThrowArgs} args - Arguments to find a CustodyCounter
     * @example
     * // Get one CustodyCounter
     * const custodyCounter = await prisma.custodyCounter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustodyCounterFindUniqueOrThrowArgs>(args: SelectSubset<T, CustodyCounterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustodyCounterClient<$Result.GetResult<Prisma.$CustodyCounterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustodyCounter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustodyCounterFindFirstArgs} args - Arguments to find a CustodyCounter
     * @example
     * // Get one CustodyCounter
     * const custodyCounter = await prisma.custodyCounter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustodyCounterFindFirstArgs>(args?: SelectSubset<T, CustodyCounterFindFirstArgs<ExtArgs>>): Prisma__CustodyCounterClient<$Result.GetResult<Prisma.$CustodyCounterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustodyCounter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustodyCounterFindFirstOrThrowArgs} args - Arguments to find a CustodyCounter
     * @example
     * // Get one CustodyCounter
     * const custodyCounter = await prisma.custodyCounter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustodyCounterFindFirstOrThrowArgs>(args?: SelectSubset<T, CustodyCounterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustodyCounterClient<$Result.GetResult<Prisma.$CustodyCounterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustodyCounters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustodyCounterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustodyCounters
     * const custodyCounters = await prisma.custodyCounter.findMany()
     * 
     * // Get first 10 CustodyCounters
     * const custodyCounters = await prisma.custodyCounter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const custodyCounterWithIdOnly = await prisma.custodyCounter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustodyCounterFindManyArgs>(args?: SelectSubset<T, CustodyCounterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustodyCounterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustodyCounter.
     * @param {CustodyCounterCreateArgs} args - Arguments to create a CustodyCounter.
     * @example
     * // Create one CustodyCounter
     * const CustodyCounter = await prisma.custodyCounter.create({
     *   data: {
     *     // ... data to create a CustodyCounter
     *   }
     * })
     * 
     */
    create<T extends CustodyCounterCreateArgs>(args: SelectSubset<T, CustodyCounterCreateArgs<ExtArgs>>): Prisma__CustodyCounterClient<$Result.GetResult<Prisma.$CustodyCounterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustodyCounters.
     * @param {CustodyCounterCreateManyArgs} args - Arguments to create many CustodyCounters.
     * @example
     * // Create many CustodyCounters
     * const custodyCounter = await prisma.custodyCounter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustodyCounterCreateManyArgs>(args?: SelectSubset<T, CustodyCounterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustodyCounters and returns the data saved in the database.
     * @param {CustodyCounterCreateManyAndReturnArgs} args - Arguments to create many CustodyCounters.
     * @example
     * // Create many CustodyCounters
     * const custodyCounter = await prisma.custodyCounter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustodyCounters and only return the `id`
     * const custodyCounterWithIdOnly = await prisma.custodyCounter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustodyCounterCreateManyAndReturnArgs>(args?: SelectSubset<T, CustodyCounterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustodyCounterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustodyCounter.
     * @param {CustodyCounterDeleteArgs} args - Arguments to delete one CustodyCounter.
     * @example
     * // Delete one CustodyCounter
     * const CustodyCounter = await prisma.custodyCounter.delete({
     *   where: {
     *     // ... filter to delete one CustodyCounter
     *   }
     * })
     * 
     */
    delete<T extends CustodyCounterDeleteArgs>(args: SelectSubset<T, CustodyCounterDeleteArgs<ExtArgs>>): Prisma__CustodyCounterClient<$Result.GetResult<Prisma.$CustodyCounterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustodyCounter.
     * @param {CustodyCounterUpdateArgs} args - Arguments to update one CustodyCounter.
     * @example
     * // Update one CustodyCounter
     * const custodyCounter = await prisma.custodyCounter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustodyCounterUpdateArgs>(args: SelectSubset<T, CustodyCounterUpdateArgs<ExtArgs>>): Prisma__CustodyCounterClient<$Result.GetResult<Prisma.$CustodyCounterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustodyCounters.
     * @param {CustodyCounterDeleteManyArgs} args - Arguments to filter CustodyCounters to delete.
     * @example
     * // Delete a few CustodyCounters
     * const { count } = await prisma.custodyCounter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustodyCounterDeleteManyArgs>(args?: SelectSubset<T, CustodyCounterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustodyCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustodyCounterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustodyCounters
     * const custodyCounter = await prisma.custodyCounter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustodyCounterUpdateManyArgs>(args: SelectSubset<T, CustodyCounterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustodyCounters and returns the data updated in the database.
     * @param {CustodyCounterUpdateManyAndReturnArgs} args - Arguments to update many CustodyCounters.
     * @example
     * // Update many CustodyCounters
     * const custodyCounter = await prisma.custodyCounter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustodyCounters and only return the `id`
     * const custodyCounterWithIdOnly = await prisma.custodyCounter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustodyCounterUpdateManyAndReturnArgs>(args: SelectSubset<T, CustodyCounterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustodyCounterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustodyCounter.
     * @param {CustodyCounterUpsertArgs} args - Arguments to update or create a CustodyCounter.
     * @example
     * // Update or create a CustodyCounter
     * const custodyCounter = await prisma.custodyCounter.upsert({
     *   create: {
     *     // ... data to create a CustodyCounter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustodyCounter we want to update
     *   }
     * })
     */
    upsert<T extends CustodyCounterUpsertArgs>(args: SelectSubset<T, CustodyCounterUpsertArgs<ExtArgs>>): Prisma__CustodyCounterClient<$Result.GetResult<Prisma.$CustodyCounterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustodyCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustodyCounterCountArgs} args - Arguments to filter CustodyCounters to count.
     * @example
     * // Count the number of CustodyCounters
     * const count = await prisma.custodyCounter.count({
     *   where: {
     *     // ... the filter for the CustodyCounters we want to count
     *   }
     * })
    **/
    count<T extends CustodyCounterCountArgs>(
      args?: Subset<T, CustodyCounterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustodyCounterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustodyCounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustodyCounterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustodyCounterAggregateArgs>(args: Subset<T, CustodyCounterAggregateArgs>): Prisma.PrismaPromise<GetCustodyCounterAggregateType<T>>

    /**
     * Group by CustodyCounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustodyCounterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustodyCounterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustodyCounterGroupByArgs['orderBy'] }
        : { orderBy?: CustodyCounterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustodyCounterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustodyCounterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustodyCounter model
   */
  readonly fields: CustodyCounterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustodyCounter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustodyCounterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustodyCounter model
   */
  interface CustodyCounterFieldRefs {
    readonly id: FieldRef<"CustodyCounter", 'Int'>
    readonly nextIndex: FieldRef<"CustodyCounter", 'Int'>
    readonly updatedAt: FieldRef<"CustodyCounter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustodyCounter findUnique
   */
  export type CustodyCounterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyCounter
     */
    select?: CustodyCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustodyCounter
     */
    omit?: CustodyCounterOmit<ExtArgs> | null
    /**
     * Filter, which CustodyCounter to fetch.
     */
    where: CustodyCounterWhereUniqueInput
  }

  /**
   * CustodyCounter findUniqueOrThrow
   */
  export type CustodyCounterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyCounter
     */
    select?: CustodyCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustodyCounter
     */
    omit?: CustodyCounterOmit<ExtArgs> | null
    /**
     * Filter, which CustodyCounter to fetch.
     */
    where: CustodyCounterWhereUniqueInput
  }

  /**
   * CustodyCounter findFirst
   */
  export type CustodyCounterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyCounter
     */
    select?: CustodyCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustodyCounter
     */
    omit?: CustodyCounterOmit<ExtArgs> | null
    /**
     * Filter, which CustodyCounter to fetch.
     */
    where?: CustodyCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustodyCounters to fetch.
     */
    orderBy?: CustodyCounterOrderByWithRelationInput | CustodyCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustodyCounters.
     */
    cursor?: CustodyCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustodyCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustodyCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustodyCounters.
     */
    distinct?: CustodyCounterScalarFieldEnum | CustodyCounterScalarFieldEnum[]
  }

  /**
   * CustodyCounter findFirstOrThrow
   */
  export type CustodyCounterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyCounter
     */
    select?: CustodyCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustodyCounter
     */
    omit?: CustodyCounterOmit<ExtArgs> | null
    /**
     * Filter, which CustodyCounter to fetch.
     */
    where?: CustodyCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustodyCounters to fetch.
     */
    orderBy?: CustodyCounterOrderByWithRelationInput | CustodyCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustodyCounters.
     */
    cursor?: CustodyCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustodyCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustodyCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustodyCounters.
     */
    distinct?: CustodyCounterScalarFieldEnum | CustodyCounterScalarFieldEnum[]
  }

  /**
   * CustodyCounter findMany
   */
  export type CustodyCounterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyCounter
     */
    select?: CustodyCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustodyCounter
     */
    omit?: CustodyCounterOmit<ExtArgs> | null
    /**
     * Filter, which CustodyCounters to fetch.
     */
    where?: CustodyCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustodyCounters to fetch.
     */
    orderBy?: CustodyCounterOrderByWithRelationInput | CustodyCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustodyCounters.
     */
    cursor?: CustodyCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustodyCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustodyCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustodyCounters.
     */
    distinct?: CustodyCounterScalarFieldEnum | CustodyCounterScalarFieldEnum[]
  }

  /**
   * CustodyCounter create
   */
  export type CustodyCounterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyCounter
     */
    select?: CustodyCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustodyCounter
     */
    omit?: CustodyCounterOmit<ExtArgs> | null
    /**
     * The data needed to create a CustodyCounter.
     */
    data: XOR<CustodyCounterCreateInput, CustodyCounterUncheckedCreateInput>
  }

  /**
   * CustodyCounter createMany
   */
  export type CustodyCounterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustodyCounters.
     */
    data: CustodyCounterCreateManyInput | CustodyCounterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustodyCounter createManyAndReturn
   */
  export type CustodyCounterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyCounter
     */
    select?: CustodyCounterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustodyCounter
     */
    omit?: CustodyCounterOmit<ExtArgs> | null
    /**
     * The data used to create many CustodyCounters.
     */
    data: CustodyCounterCreateManyInput | CustodyCounterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustodyCounter update
   */
  export type CustodyCounterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyCounter
     */
    select?: CustodyCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustodyCounter
     */
    omit?: CustodyCounterOmit<ExtArgs> | null
    /**
     * The data needed to update a CustodyCounter.
     */
    data: XOR<CustodyCounterUpdateInput, CustodyCounterUncheckedUpdateInput>
    /**
     * Choose, which CustodyCounter to update.
     */
    where: CustodyCounterWhereUniqueInput
  }

  /**
   * CustodyCounter updateMany
   */
  export type CustodyCounterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustodyCounters.
     */
    data: XOR<CustodyCounterUpdateManyMutationInput, CustodyCounterUncheckedUpdateManyInput>
    /**
     * Filter which CustodyCounters to update
     */
    where?: CustodyCounterWhereInput
    /**
     * Limit how many CustodyCounters to update.
     */
    limit?: number
  }

  /**
   * CustodyCounter updateManyAndReturn
   */
  export type CustodyCounterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyCounter
     */
    select?: CustodyCounterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustodyCounter
     */
    omit?: CustodyCounterOmit<ExtArgs> | null
    /**
     * The data used to update CustodyCounters.
     */
    data: XOR<CustodyCounterUpdateManyMutationInput, CustodyCounterUncheckedUpdateManyInput>
    /**
     * Filter which CustodyCounters to update
     */
    where?: CustodyCounterWhereInput
    /**
     * Limit how many CustodyCounters to update.
     */
    limit?: number
  }

  /**
   * CustodyCounter upsert
   */
  export type CustodyCounterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyCounter
     */
    select?: CustodyCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustodyCounter
     */
    omit?: CustodyCounterOmit<ExtArgs> | null
    /**
     * The filter to search for the CustodyCounter to update in case it exists.
     */
    where: CustodyCounterWhereUniqueInput
    /**
     * In case the CustodyCounter found by the `where` argument doesn't exist, create a new CustodyCounter with this data.
     */
    create: XOR<CustodyCounterCreateInput, CustodyCounterUncheckedCreateInput>
    /**
     * In case the CustodyCounter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustodyCounterUpdateInput, CustodyCounterUncheckedUpdateInput>
  }

  /**
   * CustodyCounter delete
   */
  export type CustodyCounterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyCounter
     */
    select?: CustodyCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustodyCounter
     */
    omit?: CustodyCounterOmit<ExtArgs> | null
    /**
     * Filter which CustodyCounter to delete.
     */
    where: CustodyCounterWhereUniqueInput
  }

  /**
   * CustodyCounter deleteMany
   */
  export type CustodyCounterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustodyCounters to delete
     */
    where?: CustodyCounterWhereInput
    /**
     * Limit how many CustodyCounters to delete.
     */
    limit?: number
  }

  /**
   * CustodyCounter without action
   */
  export type CustodyCounterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyCounter
     */
    select?: CustodyCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustodyCounter
     */
    omit?: CustodyCounterOmit<ExtArgs> | null
  }


  /**
   * Model DepositAddress
   */

  export type AggregateDepositAddress = {
    _count: DepositAddressCountAggregateOutputType | null
    _avg: DepositAddressAvgAggregateOutputType | null
    _sum: DepositAddressSumAggregateOutputType | null
    _min: DepositAddressMinAggregateOutputType | null
    _max: DepositAddressMaxAggregateOutputType | null
  }

  export type DepositAddressAvgAggregateOutputType = {
    derivationIndex: number | null
  }

  export type DepositAddressSumAggregateOutputType = {
    derivationIndex: number | null
  }

  export type DepositAddressMinAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    address: string | null
    derivationIndex: number | null
    derivationPath: string | null
    network: $Enums.ChainNetwork | null
    createdAt: Date | null
  }

  export type DepositAddressMaxAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    address: string | null
    derivationIndex: number | null
    derivationPath: string | null
    network: $Enums.ChainNetwork | null
    createdAt: Date | null
  }

  export type DepositAddressCountAggregateOutputType = {
    id: number
    invoiceId: number
    address: number
    derivationIndex: number
    derivationPath: number
    network: number
    createdAt: number
    _all: number
  }


  export type DepositAddressAvgAggregateInputType = {
    derivationIndex?: true
  }

  export type DepositAddressSumAggregateInputType = {
    derivationIndex?: true
  }

  export type DepositAddressMinAggregateInputType = {
    id?: true
    invoiceId?: true
    address?: true
    derivationIndex?: true
    derivationPath?: true
    network?: true
    createdAt?: true
  }

  export type DepositAddressMaxAggregateInputType = {
    id?: true
    invoiceId?: true
    address?: true
    derivationIndex?: true
    derivationPath?: true
    network?: true
    createdAt?: true
  }

  export type DepositAddressCountAggregateInputType = {
    id?: true
    invoiceId?: true
    address?: true
    derivationIndex?: true
    derivationPath?: true
    network?: true
    createdAt?: true
    _all?: true
  }

  export type DepositAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DepositAddress to aggregate.
     */
    where?: DepositAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepositAddresses to fetch.
     */
    orderBy?: DepositAddressOrderByWithRelationInput | DepositAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepositAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepositAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepositAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DepositAddresses
    **/
    _count?: true | DepositAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepositAddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepositAddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepositAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepositAddressMaxAggregateInputType
  }

  export type GetDepositAddressAggregateType<T extends DepositAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateDepositAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepositAddress[P]>
      : GetScalarType<T[P], AggregateDepositAddress[P]>
  }




  export type DepositAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositAddressWhereInput
    orderBy?: DepositAddressOrderByWithAggregationInput | DepositAddressOrderByWithAggregationInput[]
    by: DepositAddressScalarFieldEnum[] | DepositAddressScalarFieldEnum
    having?: DepositAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepositAddressCountAggregateInputType | true
    _avg?: DepositAddressAvgAggregateInputType
    _sum?: DepositAddressSumAggregateInputType
    _min?: DepositAddressMinAggregateInputType
    _max?: DepositAddressMaxAggregateInputType
  }

  export type DepositAddressGroupByOutputType = {
    id: string
    invoiceId: string
    address: string
    derivationIndex: number
    derivationPath: string
    network: $Enums.ChainNetwork
    createdAt: Date
    _count: DepositAddressCountAggregateOutputType | null
    _avg: DepositAddressAvgAggregateOutputType | null
    _sum: DepositAddressSumAggregateOutputType | null
    _min: DepositAddressMinAggregateOutputType | null
    _max: DepositAddressMaxAggregateOutputType | null
  }

  type GetDepositAddressGroupByPayload<T extends DepositAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepositAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepositAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepositAddressGroupByOutputType[P]>
            : GetScalarType<T[P], DepositAddressGroupByOutputType[P]>
        }
      >
    >


  export type DepositAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    address?: boolean
    derivationIndex?: boolean
    derivationPath?: boolean
    network?: boolean
    createdAt?: boolean
    transactions?: boolean | DepositAddress$transactionsArgs<ExtArgs>
    _count?: boolean | DepositAddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["depositAddress"]>

  export type DepositAddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    address?: boolean
    derivationIndex?: boolean
    derivationPath?: boolean
    network?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["depositAddress"]>

  export type DepositAddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    address?: boolean
    derivationIndex?: boolean
    derivationPath?: boolean
    network?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["depositAddress"]>

  export type DepositAddressSelectScalar = {
    id?: boolean
    invoiceId?: boolean
    address?: boolean
    derivationIndex?: boolean
    derivationPath?: boolean
    network?: boolean
    createdAt?: boolean
  }

  export type DepositAddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceId" | "address" | "derivationIndex" | "derivationPath" | "network" | "createdAt", ExtArgs["result"]["depositAddress"]>
  export type DepositAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | DepositAddress$transactionsArgs<ExtArgs>
    _count?: boolean | DepositAddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepositAddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepositAddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepositAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DepositAddress"
    objects: {
      transactions: Prisma.$ChainTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceId: string
      address: string
      derivationIndex: number
      derivationPath: string
      network: $Enums.ChainNetwork
      createdAt: Date
    }, ExtArgs["result"]["depositAddress"]>
    composites: {}
  }

  type DepositAddressGetPayload<S extends boolean | null | undefined | DepositAddressDefaultArgs> = $Result.GetResult<Prisma.$DepositAddressPayload, S>

  type DepositAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepositAddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepositAddressCountAggregateInputType | true
    }

  export interface DepositAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DepositAddress'], meta: { name: 'DepositAddress' } }
    /**
     * Find zero or one DepositAddress that matches the filter.
     * @param {DepositAddressFindUniqueArgs} args - Arguments to find a DepositAddress
     * @example
     * // Get one DepositAddress
     * const depositAddress = await prisma.depositAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepositAddressFindUniqueArgs>(args: SelectSubset<T, DepositAddressFindUniqueArgs<ExtArgs>>): Prisma__DepositAddressClient<$Result.GetResult<Prisma.$DepositAddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DepositAddress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepositAddressFindUniqueOrThrowArgs} args - Arguments to find a DepositAddress
     * @example
     * // Get one DepositAddress
     * const depositAddress = await prisma.depositAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepositAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, DepositAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepositAddressClient<$Result.GetResult<Prisma.$DepositAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DepositAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositAddressFindFirstArgs} args - Arguments to find a DepositAddress
     * @example
     * // Get one DepositAddress
     * const depositAddress = await prisma.depositAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepositAddressFindFirstArgs>(args?: SelectSubset<T, DepositAddressFindFirstArgs<ExtArgs>>): Prisma__DepositAddressClient<$Result.GetResult<Prisma.$DepositAddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DepositAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositAddressFindFirstOrThrowArgs} args - Arguments to find a DepositAddress
     * @example
     * // Get one DepositAddress
     * const depositAddress = await prisma.depositAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepositAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, DepositAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepositAddressClient<$Result.GetResult<Prisma.$DepositAddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DepositAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DepositAddresses
     * const depositAddresses = await prisma.depositAddress.findMany()
     * 
     * // Get first 10 DepositAddresses
     * const depositAddresses = await prisma.depositAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const depositAddressWithIdOnly = await prisma.depositAddress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepositAddressFindManyArgs>(args?: SelectSubset<T, DepositAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DepositAddress.
     * @param {DepositAddressCreateArgs} args - Arguments to create a DepositAddress.
     * @example
     * // Create one DepositAddress
     * const DepositAddress = await prisma.depositAddress.create({
     *   data: {
     *     // ... data to create a DepositAddress
     *   }
     * })
     * 
     */
    create<T extends DepositAddressCreateArgs>(args: SelectSubset<T, DepositAddressCreateArgs<ExtArgs>>): Prisma__DepositAddressClient<$Result.GetResult<Prisma.$DepositAddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DepositAddresses.
     * @param {DepositAddressCreateManyArgs} args - Arguments to create many DepositAddresses.
     * @example
     * // Create many DepositAddresses
     * const depositAddress = await prisma.depositAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepositAddressCreateManyArgs>(args?: SelectSubset<T, DepositAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DepositAddresses and returns the data saved in the database.
     * @param {DepositAddressCreateManyAndReturnArgs} args - Arguments to create many DepositAddresses.
     * @example
     * // Create many DepositAddresses
     * const depositAddress = await prisma.depositAddress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DepositAddresses and only return the `id`
     * const depositAddressWithIdOnly = await prisma.depositAddress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepositAddressCreateManyAndReturnArgs>(args?: SelectSubset<T, DepositAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositAddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DepositAddress.
     * @param {DepositAddressDeleteArgs} args - Arguments to delete one DepositAddress.
     * @example
     * // Delete one DepositAddress
     * const DepositAddress = await prisma.depositAddress.delete({
     *   where: {
     *     // ... filter to delete one DepositAddress
     *   }
     * })
     * 
     */
    delete<T extends DepositAddressDeleteArgs>(args: SelectSubset<T, DepositAddressDeleteArgs<ExtArgs>>): Prisma__DepositAddressClient<$Result.GetResult<Prisma.$DepositAddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DepositAddress.
     * @param {DepositAddressUpdateArgs} args - Arguments to update one DepositAddress.
     * @example
     * // Update one DepositAddress
     * const depositAddress = await prisma.depositAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepositAddressUpdateArgs>(args: SelectSubset<T, DepositAddressUpdateArgs<ExtArgs>>): Prisma__DepositAddressClient<$Result.GetResult<Prisma.$DepositAddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DepositAddresses.
     * @param {DepositAddressDeleteManyArgs} args - Arguments to filter DepositAddresses to delete.
     * @example
     * // Delete a few DepositAddresses
     * const { count } = await prisma.depositAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepositAddressDeleteManyArgs>(args?: SelectSubset<T, DepositAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DepositAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DepositAddresses
     * const depositAddress = await prisma.depositAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepositAddressUpdateManyArgs>(args: SelectSubset<T, DepositAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DepositAddresses and returns the data updated in the database.
     * @param {DepositAddressUpdateManyAndReturnArgs} args - Arguments to update many DepositAddresses.
     * @example
     * // Update many DepositAddresses
     * const depositAddress = await prisma.depositAddress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DepositAddresses and only return the `id`
     * const depositAddressWithIdOnly = await prisma.depositAddress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepositAddressUpdateManyAndReturnArgs>(args: SelectSubset<T, DepositAddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositAddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DepositAddress.
     * @param {DepositAddressUpsertArgs} args - Arguments to update or create a DepositAddress.
     * @example
     * // Update or create a DepositAddress
     * const depositAddress = await prisma.depositAddress.upsert({
     *   create: {
     *     // ... data to create a DepositAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DepositAddress we want to update
     *   }
     * })
     */
    upsert<T extends DepositAddressUpsertArgs>(args: SelectSubset<T, DepositAddressUpsertArgs<ExtArgs>>): Prisma__DepositAddressClient<$Result.GetResult<Prisma.$DepositAddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DepositAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositAddressCountArgs} args - Arguments to filter DepositAddresses to count.
     * @example
     * // Count the number of DepositAddresses
     * const count = await prisma.depositAddress.count({
     *   where: {
     *     // ... the filter for the DepositAddresses we want to count
     *   }
     * })
    **/
    count<T extends DepositAddressCountArgs>(
      args?: Subset<T, DepositAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepositAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DepositAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepositAddressAggregateArgs>(args: Subset<T, DepositAddressAggregateArgs>): Prisma.PrismaPromise<GetDepositAddressAggregateType<T>>

    /**
     * Group by DepositAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositAddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepositAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepositAddressGroupByArgs['orderBy'] }
        : { orderBy?: DepositAddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepositAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepositAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DepositAddress model
   */
  readonly fields: DepositAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DepositAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepositAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends DepositAddress$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, DepositAddress$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChainTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DepositAddress model
   */
  interface DepositAddressFieldRefs {
    readonly id: FieldRef<"DepositAddress", 'String'>
    readonly invoiceId: FieldRef<"DepositAddress", 'String'>
    readonly address: FieldRef<"DepositAddress", 'String'>
    readonly derivationIndex: FieldRef<"DepositAddress", 'Int'>
    readonly derivationPath: FieldRef<"DepositAddress", 'String'>
    readonly network: FieldRef<"DepositAddress", 'ChainNetwork'>
    readonly createdAt: FieldRef<"DepositAddress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DepositAddress findUnique
   */
  export type DepositAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositAddress
     */
    select?: DepositAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositAddress
     */
    omit?: DepositAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositAddressInclude<ExtArgs> | null
    /**
     * Filter, which DepositAddress to fetch.
     */
    where: DepositAddressWhereUniqueInput
  }

  /**
   * DepositAddress findUniqueOrThrow
   */
  export type DepositAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositAddress
     */
    select?: DepositAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositAddress
     */
    omit?: DepositAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositAddressInclude<ExtArgs> | null
    /**
     * Filter, which DepositAddress to fetch.
     */
    where: DepositAddressWhereUniqueInput
  }

  /**
   * DepositAddress findFirst
   */
  export type DepositAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositAddress
     */
    select?: DepositAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositAddress
     */
    omit?: DepositAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositAddressInclude<ExtArgs> | null
    /**
     * Filter, which DepositAddress to fetch.
     */
    where?: DepositAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepositAddresses to fetch.
     */
    orderBy?: DepositAddressOrderByWithRelationInput | DepositAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DepositAddresses.
     */
    cursor?: DepositAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepositAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepositAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepositAddresses.
     */
    distinct?: DepositAddressScalarFieldEnum | DepositAddressScalarFieldEnum[]
  }

  /**
   * DepositAddress findFirstOrThrow
   */
  export type DepositAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositAddress
     */
    select?: DepositAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositAddress
     */
    omit?: DepositAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositAddressInclude<ExtArgs> | null
    /**
     * Filter, which DepositAddress to fetch.
     */
    where?: DepositAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepositAddresses to fetch.
     */
    orderBy?: DepositAddressOrderByWithRelationInput | DepositAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DepositAddresses.
     */
    cursor?: DepositAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepositAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepositAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepositAddresses.
     */
    distinct?: DepositAddressScalarFieldEnum | DepositAddressScalarFieldEnum[]
  }

  /**
   * DepositAddress findMany
   */
  export type DepositAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositAddress
     */
    select?: DepositAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositAddress
     */
    omit?: DepositAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositAddressInclude<ExtArgs> | null
    /**
     * Filter, which DepositAddresses to fetch.
     */
    where?: DepositAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepositAddresses to fetch.
     */
    orderBy?: DepositAddressOrderByWithRelationInput | DepositAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DepositAddresses.
     */
    cursor?: DepositAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepositAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepositAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepositAddresses.
     */
    distinct?: DepositAddressScalarFieldEnum | DepositAddressScalarFieldEnum[]
  }

  /**
   * DepositAddress create
   */
  export type DepositAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositAddress
     */
    select?: DepositAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositAddress
     */
    omit?: DepositAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a DepositAddress.
     */
    data: XOR<DepositAddressCreateInput, DepositAddressUncheckedCreateInput>
  }

  /**
   * DepositAddress createMany
   */
  export type DepositAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DepositAddresses.
     */
    data: DepositAddressCreateManyInput | DepositAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DepositAddress createManyAndReturn
   */
  export type DepositAddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositAddress
     */
    select?: DepositAddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DepositAddress
     */
    omit?: DepositAddressOmit<ExtArgs> | null
    /**
     * The data used to create many DepositAddresses.
     */
    data: DepositAddressCreateManyInput | DepositAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DepositAddress update
   */
  export type DepositAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositAddress
     */
    select?: DepositAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositAddress
     */
    omit?: DepositAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a DepositAddress.
     */
    data: XOR<DepositAddressUpdateInput, DepositAddressUncheckedUpdateInput>
    /**
     * Choose, which DepositAddress to update.
     */
    where: DepositAddressWhereUniqueInput
  }

  /**
   * DepositAddress updateMany
   */
  export type DepositAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DepositAddresses.
     */
    data: XOR<DepositAddressUpdateManyMutationInput, DepositAddressUncheckedUpdateManyInput>
    /**
     * Filter which DepositAddresses to update
     */
    where?: DepositAddressWhereInput
    /**
     * Limit how many DepositAddresses to update.
     */
    limit?: number
  }

  /**
   * DepositAddress updateManyAndReturn
   */
  export type DepositAddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositAddress
     */
    select?: DepositAddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DepositAddress
     */
    omit?: DepositAddressOmit<ExtArgs> | null
    /**
     * The data used to update DepositAddresses.
     */
    data: XOR<DepositAddressUpdateManyMutationInput, DepositAddressUncheckedUpdateManyInput>
    /**
     * Filter which DepositAddresses to update
     */
    where?: DepositAddressWhereInput
    /**
     * Limit how many DepositAddresses to update.
     */
    limit?: number
  }

  /**
   * DepositAddress upsert
   */
  export type DepositAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositAddress
     */
    select?: DepositAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositAddress
     */
    omit?: DepositAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the DepositAddress to update in case it exists.
     */
    where: DepositAddressWhereUniqueInput
    /**
     * In case the DepositAddress found by the `where` argument doesn't exist, create a new DepositAddress with this data.
     */
    create: XOR<DepositAddressCreateInput, DepositAddressUncheckedCreateInput>
    /**
     * In case the DepositAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepositAddressUpdateInput, DepositAddressUncheckedUpdateInput>
  }

  /**
   * DepositAddress delete
   */
  export type DepositAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositAddress
     */
    select?: DepositAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositAddress
     */
    omit?: DepositAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositAddressInclude<ExtArgs> | null
    /**
     * Filter which DepositAddress to delete.
     */
    where: DepositAddressWhereUniqueInput
  }

  /**
   * DepositAddress deleteMany
   */
  export type DepositAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DepositAddresses to delete
     */
    where?: DepositAddressWhereInput
    /**
     * Limit how many DepositAddresses to delete.
     */
    limit?: number
  }

  /**
   * DepositAddress.transactions
   */
  export type DepositAddress$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainTransaction
     */
    select?: ChainTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChainTransaction
     */
    omit?: ChainTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainTransactionInclude<ExtArgs> | null
    where?: ChainTransactionWhereInput
    orderBy?: ChainTransactionOrderByWithRelationInput | ChainTransactionOrderByWithRelationInput[]
    cursor?: ChainTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChainTransactionScalarFieldEnum | ChainTransactionScalarFieldEnum[]
  }

  /**
   * DepositAddress without action
   */
  export type DepositAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositAddress
     */
    select?: DepositAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositAddress
     */
    omit?: DepositAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositAddressInclude<ExtArgs> | null
  }


  /**
   * Model ChainTransaction
   */

  export type AggregateChainTransaction = {
    _count: ChainTransactionCountAggregateOutputType | null
    _avg: ChainTransactionAvgAggregateOutputType | null
    _sum: ChainTransactionSumAggregateOutputType | null
    _min: ChainTransactionMinAggregateOutputType | null
    _max: ChainTransactionMaxAggregateOutputType | null
  }

  export type ChainTransactionAvgAggregateOutputType = {
    amount: Decimal | null
    confirmations: number | null
    requiredConfirmations: number | null
  }

  export type ChainTransactionSumAggregateOutputType = {
    amount: Decimal | null
    confirmations: number | null
    requiredConfirmations: number | null
  }

  export type ChainTransactionMinAggregateOutputType = {
    id: string | null
    depositAddressId: string | null
    txHash: string | null
    network: $Enums.ChainNetwork | null
    fromAddress: string | null
    amount: Decimal | null
    tokenAddress: string | null
    tokenSymbol: string | null
    status: $Enums.ChainTransactionStatus | null
    confirmations: number | null
    requiredConfirmations: number | null
    detectedAt: Date | null
    confirmedAt: Date | null
    batchId: string | null
  }

  export type ChainTransactionMaxAggregateOutputType = {
    id: string | null
    depositAddressId: string | null
    txHash: string | null
    network: $Enums.ChainNetwork | null
    fromAddress: string | null
    amount: Decimal | null
    tokenAddress: string | null
    tokenSymbol: string | null
    status: $Enums.ChainTransactionStatus | null
    confirmations: number | null
    requiredConfirmations: number | null
    detectedAt: Date | null
    confirmedAt: Date | null
    batchId: string | null
  }

  export type ChainTransactionCountAggregateOutputType = {
    id: number
    depositAddressId: number
    txHash: number
    network: number
    fromAddress: number
    amount: number
    tokenAddress: number
    tokenSymbol: number
    status: number
    confirmations: number
    requiredConfirmations: number
    detectedAt: number
    confirmedAt: number
    batchId: number
    _all: number
  }


  export type ChainTransactionAvgAggregateInputType = {
    amount?: true
    confirmations?: true
    requiredConfirmations?: true
  }

  export type ChainTransactionSumAggregateInputType = {
    amount?: true
    confirmations?: true
    requiredConfirmations?: true
  }

  export type ChainTransactionMinAggregateInputType = {
    id?: true
    depositAddressId?: true
    txHash?: true
    network?: true
    fromAddress?: true
    amount?: true
    tokenAddress?: true
    tokenSymbol?: true
    status?: true
    confirmations?: true
    requiredConfirmations?: true
    detectedAt?: true
    confirmedAt?: true
    batchId?: true
  }

  export type ChainTransactionMaxAggregateInputType = {
    id?: true
    depositAddressId?: true
    txHash?: true
    network?: true
    fromAddress?: true
    amount?: true
    tokenAddress?: true
    tokenSymbol?: true
    status?: true
    confirmations?: true
    requiredConfirmations?: true
    detectedAt?: true
    confirmedAt?: true
    batchId?: true
  }

  export type ChainTransactionCountAggregateInputType = {
    id?: true
    depositAddressId?: true
    txHash?: true
    network?: true
    fromAddress?: true
    amount?: true
    tokenAddress?: true
    tokenSymbol?: true
    status?: true
    confirmations?: true
    requiredConfirmations?: true
    detectedAt?: true
    confirmedAt?: true
    batchId?: true
    _all?: true
  }

  export type ChainTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChainTransaction to aggregate.
     */
    where?: ChainTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChainTransactions to fetch.
     */
    orderBy?: ChainTransactionOrderByWithRelationInput | ChainTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChainTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChainTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChainTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChainTransactions
    **/
    _count?: true | ChainTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChainTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChainTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChainTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChainTransactionMaxAggregateInputType
  }

  export type GetChainTransactionAggregateType<T extends ChainTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateChainTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChainTransaction[P]>
      : GetScalarType<T[P], AggregateChainTransaction[P]>
  }




  export type ChainTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChainTransactionWhereInput
    orderBy?: ChainTransactionOrderByWithAggregationInput | ChainTransactionOrderByWithAggregationInput[]
    by: ChainTransactionScalarFieldEnum[] | ChainTransactionScalarFieldEnum
    having?: ChainTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChainTransactionCountAggregateInputType | true
    _avg?: ChainTransactionAvgAggregateInputType
    _sum?: ChainTransactionSumAggregateInputType
    _min?: ChainTransactionMinAggregateInputType
    _max?: ChainTransactionMaxAggregateInputType
  }

  export type ChainTransactionGroupByOutputType = {
    id: string
    depositAddressId: string
    txHash: string
    network: $Enums.ChainNetwork
    fromAddress: string
    amount: Decimal
    tokenAddress: string | null
    tokenSymbol: string
    status: $Enums.ChainTransactionStatus
    confirmations: number
    requiredConfirmations: number
    detectedAt: Date
    confirmedAt: Date | null
    batchId: string | null
    _count: ChainTransactionCountAggregateOutputType | null
    _avg: ChainTransactionAvgAggregateOutputType | null
    _sum: ChainTransactionSumAggregateOutputType | null
    _min: ChainTransactionMinAggregateOutputType | null
    _max: ChainTransactionMaxAggregateOutputType | null
  }

  type GetChainTransactionGroupByPayload<T extends ChainTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChainTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChainTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChainTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], ChainTransactionGroupByOutputType[P]>
        }
      >
    >


  export type ChainTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    depositAddressId?: boolean
    txHash?: boolean
    network?: boolean
    fromAddress?: boolean
    amount?: boolean
    tokenAddress?: boolean
    tokenSymbol?: boolean
    status?: boolean
    confirmations?: boolean
    requiredConfirmations?: boolean
    detectedAt?: boolean
    confirmedAt?: boolean
    batchId?: boolean
    depositAddress?: boolean | DepositAddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chainTransaction"]>

  export type ChainTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    depositAddressId?: boolean
    txHash?: boolean
    network?: boolean
    fromAddress?: boolean
    amount?: boolean
    tokenAddress?: boolean
    tokenSymbol?: boolean
    status?: boolean
    confirmations?: boolean
    requiredConfirmations?: boolean
    detectedAt?: boolean
    confirmedAt?: boolean
    batchId?: boolean
    depositAddress?: boolean | DepositAddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chainTransaction"]>

  export type ChainTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    depositAddressId?: boolean
    txHash?: boolean
    network?: boolean
    fromAddress?: boolean
    amount?: boolean
    tokenAddress?: boolean
    tokenSymbol?: boolean
    status?: boolean
    confirmations?: boolean
    requiredConfirmations?: boolean
    detectedAt?: boolean
    confirmedAt?: boolean
    batchId?: boolean
    depositAddress?: boolean | DepositAddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chainTransaction"]>

  export type ChainTransactionSelectScalar = {
    id?: boolean
    depositAddressId?: boolean
    txHash?: boolean
    network?: boolean
    fromAddress?: boolean
    amount?: boolean
    tokenAddress?: boolean
    tokenSymbol?: boolean
    status?: boolean
    confirmations?: boolean
    requiredConfirmations?: boolean
    detectedAt?: boolean
    confirmedAt?: boolean
    batchId?: boolean
  }

  export type ChainTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "depositAddressId" | "txHash" | "network" | "fromAddress" | "amount" | "tokenAddress" | "tokenSymbol" | "status" | "confirmations" | "requiredConfirmations" | "detectedAt" | "confirmedAt" | "batchId", ExtArgs["result"]["chainTransaction"]>
  export type ChainTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    depositAddress?: boolean | DepositAddressDefaultArgs<ExtArgs>
  }
  export type ChainTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    depositAddress?: boolean | DepositAddressDefaultArgs<ExtArgs>
  }
  export type ChainTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    depositAddress?: boolean | DepositAddressDefaultArgs<ExtArgs>
  }

  export type $ChainTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChainTransaction"
    objects: {
      depositAddress: Prisma.$DepositAddressPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      depositAddressId: string
      txHash: string
      network: $Enums.ChainNetwork
      fromAddress: string
      amount: Prisma.Decimal
      tokenAddress: string | null
      tokenSymbol: string
      status: $Enums.ChainTransactionStatus
      confirmations: number
      requiredConfirmations: number
      detectedAt: Date
      confirmedAt: Date | null
      batchId: string | null
    }, ExtArgs["result"]["chainTransaction"]>
    composites: {}
  }

  type ChainTransactionGetPayload<S extends boolean | null | undefined | ChainTransactionDefaultArgs> = $Result.GetResult<Prisma.$ChainTransactionPayload, S>

  type ChainTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChainTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChainTransactionCountAggregateInputType | true
    }

  export interface ChainTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChainTransaction'], meta: { name: 'ChainTransaction' } }
    /**
     * Find zero or one ChainTransaction that matches the filter.
     * @param {ChainTransactionFindUniqueArgs} args - Arguments to find a ChainTransaction
     * @example
     * // Get one ChainTransaction
     * const chainTransaction = await prisma.chainTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChainTransactionFindUniqueArgs>(args: SelectSubset<T, ChainTransactionFindUniqueArgs<ExtArgs>>): Prisma__ChainTransactionClient<$Result.GetResult<Prisma.$ChainTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChainTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChainTransactionFindUniqueOrThrowArgs} args - Arguments to find a ChainTransaction
     * @example
     * // Get one ChainTransaction
     * const chainTransaction = await prisma.chainTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChainTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, ChainTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChainTransactionClient<$Result.GetResult<Prisma.$ChainTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChainTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainTransactionFindFirstArgs} args - Arguments to find a ChainTransaction
     * @example
     * // Get one ChainTransaction
     * const chainTransaction = await prisma.chainTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChainTransactionFindFirstArgs>(args?: SelectSubset<T, ChainTransactionFindFirstArgs<ExtArgs>>): Prisma__ChainTransactionClient<$Result.GetResult<Prisma.$ChainTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChainTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainTransactionFindFirstOrThrowArgs} args - Arguments to find a ChainTransaction
     * @example
     * // Get one ChainTransaction
     * const chainTransaction = await prisma.chainTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChainTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, ChainTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChainTransactionClient<$Result.GetResult<Prisma.$ChainTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChainTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChainTransactions
     * const chainTransactions = await prisma.chainTransaction.findMany()
     * 
     * // Get first 10 ChainTransactions
     * const chainTransactions = await prisma.chainTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chainTransactionWithIdOnly = await prisma.chainTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChainTransactionFindManyArgs>(args?: SelectSubset<T, ChainTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChainTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChainTransaction.
     * @param {ChainTransactionCreateArgs} args - Arguments to create a ChainTransaction.
     * @example
     * // Create one ChainTransaction
     * const ChainTransaction = await prisma.chainTransaction.create({
     *   data: {
     *     // ... data to create a ChainTransaction
     *   }
     * })
     * 
     */
    create<T extends ChainTransactionCreateArgs>(args: SelectSubset<T, ChainTransactionCreateArgs<ExtArgs>>): Prisma__ChainTransactionClient<$Result.GetResult<Prisma.$ChainTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChainTransactions.
     * @param {ChainTransactionCreateManyArgs} args - Arguments to create many ChainTransactions.
     * @example
     * // Create many ChainTransactions
     * const chainTransaction = await prisma.chainTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChainTransactionCreateManyArgs>(args?: SelectSubset<T, ChainTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChainTransactions and returns the data saved in the database.
     * @param {ChainTransactionCreateManyAndReturnArgs} args - Arguments to create many ChainTransactions.
     * @example
     * // Create many ChainTransactions
     * const chainTransaction = await prisma.chainTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChainTransactions and only return the `id`
     * const chainTransactionWithIdOnly = await prisma.chainTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChainTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, ChainTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChainTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChainTransaction.
     * @param {ChainTransactionDeleteArgs} args - Arguments to delete one ChainTransaction.
     * @example
     * // Delete one ChainTransaction
     * const ChainTransaction = await prisma.chainTransaction.delete({
     *   where: {
     *     // ... filter to delete one ChainTransaction
     *   }
     * })
     * 
     */
    delete<T extends ChainTransactionDeleteArgs>(args: SelectSubset<T, ChainTransactionDeleteArgs<ExtArgs>>): Prisma__ChainTransactionClient<$Result.GetResult<Prisma.$ChainTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChainTransaction.
     * @param {ChainTransactionUpdateArgs} args - Arguments to update one ChainTransaction.
     * @example
     * // Update one ChainTransaction
     * const chainTransaction = await prisma.chainTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChainTransactionUpdateArgs>(args: SelectSubset<T, ChainTransactionUpdateArgs<ExtArgs>>): Prisma__ChainTransactionClient<$Result.GetResult<Prisma.$ChainTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChainTransactions.
     * @param {ChainTransactionDeleteManyArgs} args - Arguments to filter ChainTransactions to delete.
     * @example
     * // Delete a few ChainTransactions
     * const { count } = await prisma.chainTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChainTransactionDeleteManyArgs>(args?: SelectSubset<T, ChainTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChainTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChainTransactions
     * const chainTransaction = await prisma.chainTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChainTransactionUpdateManyArgs>(args: SelectSubset<T, ChainTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChainTransactions and returns the data updated in the database.
     * @param {ChainTransactionUpdateManyAndReturnArgs} args - Arguments to update many ChainTransactions.
     * @example
     * // Update many ChainTransactions
     * const chainTransaction = await prisma.chainTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChainTransactions and only return the `id`
     * const chainTransactionWithIdOnly = await prisma.chainTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChainTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, ChainTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChainTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChainTransaction.
     * @param {ChainTransactionUpsertArgs} args - Arguments to update or create a ChainTransaction.
     * @example
     * // Update or create a ChainTransaction
     * const chainTransaction = await prisma.chainTransaction.upsert({
     *   create: {
     *     // ... data to create a ChainTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChainTransaction we want to update
     *   }
     * })
     */
    upsert<T extends ChainTransactionUpsertArgs>(args: SelectSubset<T, ChainTransactionUpsertArgs<ExtArgs>>): Prisma__ChainTransactionClient<$Result.GetResult<Prisma.$ChainTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChainTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainTransactionCountArgs} args - Arguments to filter ChainTransactions to count.
     * @example
     * // Count the number of ChainTransactions
     * const count = await prisma.chainTransaction.count({
     *   where: {
     *     // ... the filter for the ChainTransactions we want to count
     *   }
     * })
    **/
    count<T extends ChainTransactionCountArgs>(
      args?: Subset<T, ChainTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChainTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChainTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChainTransactionAggregateArgs>(args: Subset<T, ChainTransactionAggregateArgs>): Prisma.PrismaPromise<GetChainTransactionAggregateType<T>>

    /**
     * Group by ChainTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChainTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChainTransactionGroupByArgs['orderBy'] }
        : { orderBy?: ChainTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChainTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChainTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChainTransaction model
   */
  readonly fields: ChainTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChainTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChainTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    depositAddress<T extends DepositAddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepositAddressDefaultArgs<ExtArgs>>): Prisma__DepositAddressClient<$Result.GetResult<Prisma.$DepositAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChainTransaction model
   */
  interface ChainTransactionFieldRefs {
    readonly id: FieldRef<"ChainTransaction", 'String'>
    readonly depositAddressId: FieldRef<"ChainTransaction", 'String'>
    readonly txHash: FieldRef<"ChainTransaction", 'String'>
    readonly network: FieldRef<"ChainTransaction", 'ChainNetwork'>
    readonly fromAddress: FieldRef<"ChainTransaction", 'String'>
    readonly amount: FieldRef<"ChainTransaction", 'Decimal'>
    readonly tokenAddress: FieldRef<"ChainTransaction", 'String'>
    readonly tokenSymbol: FieldRef<"ChainTransaction", 'String'>
    readonly status: FieldRef<"ChainTransaction", 'ChainTransactionStatus'>
    readonly confirmations: FieldRef<"ChainTransaction", 'Int'>
    readonly requiredConfirmations: FieldRef<"ChainTransaction", 'Int'>
    readonly detectedAt: FieldRef<"ChainTransaction", 'DateTime'>
    readonly confirmedAt: FieldRef<"ChainTransaction", 'DateTime'>
    readonly batchId: FieldRef<"ChainTransaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChainTransaction findUnique
   */
  export type ChainTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainTransaction
     */
    select?: ChainTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChainTransaction
     */
    omit?: ChainTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainTransactionInclude<ExtArgs> | null
    /**
     * Filter, which ChainTransaction to fetch.
     */
    where: ChainTransactionWhereUniqueInput
  }

  /**
   * ChainTransaction findUniqueOrThrow
   */
  export type ChainTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainTransaction
     */
    select?: ChainTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChainTransaction
     */
    omit?: ChainTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainTransactionInclude<ExtArgs> | null
    /**
     * Filter, which ChainTransaction to fetch.
     */
    where: ChainTransactionWhereUniqueInput
  }

  /**
   * ChainTransaction findFirst
   */
  export type ChainTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainTransaction
     */
    select?: ChainTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChainTransaction
     */
    omit?: ChainTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainTransactionInclude<ExtArgs> | null
    /**
     * Filter, which ChainTransaction to fetch.
     */
    where?: ChainTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChainTransactions to fetch.
     */
    orderBy?: ChainTransactionOrderByWithRelationInput | ChainTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChainTransactions.
     */
    cursor?: ChainTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChainTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChainTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChainTransactions.
     */
    distinct?: ChainTransactionScalarFieldEnum | ChainTransactionScalarFieldEnum[]
  }

  /**
   * ChainTransaction findFirstOrThrow
   */
  export type ChainTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainTransaction
     */
    select?: ChainTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChainTransaction
     */
    omit?: ChainTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainTransactionInclude<ExtArgs> | null
    /**
     * Filter, which ChainTransaction to fetch.
     */
    where?: ChainTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChainTransactions to fetch.
     */
    orderBy?: ChainTransactionOrderByWithRelationInput | ChainTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChainTransactions.
     */
    cursor?: ChainTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChainTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChainTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChainTransactions.
     */
    distinct?: ChainTransactionScalarFieldEnum | ChainTransactionScalarFieldEnum[]
  }

  /**
   * ChainTransaction findMany
   */
  export type ChainTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainTransaction
     */
    select?: ChainTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChainTransaction
     */
    omit?: ChainTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainTransactionInclude<ExtArgs> | null
    /**
     * Filter, which ChainTransactions to fetch.
     */
    where?: ChainTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChainTransactions to fetch.
     */
    orderBy?: ChainTransactionOrderByWithRelationInput | ChainTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChainTransactions.
     */
    cursor?: ChainTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChainTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChainTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChainTransactions.
     */
    distinct?: ChainTransactionScalarFieldEnum | ChainTransactionScalarFieldEnum[]
  }

  /**
   * ChainTransaction create
   */
  export type ChainTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainTransaction
     */
    select?: ChainTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChainTransaction
     */
    omit?: ChainTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a ChainTransaction.
     */
    data: XOR<ChainTransactionCreateInput, ChainTransactionUncheckedCreateInput>
  }

  /**
   * ChainTransaction createMany
   */
  export type ChainTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChainTransactions.
     */
    data: ChainTransactionCreateManyInput | ChainTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChainTransaction createManyAndReturn
   */
  export type ChainTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainTransaction
     */
    select?: ChainTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChainTransaction
     */
    omit?: ChainTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many ChainTransactions.
     */
    data: ChainTransactionCreateManyInput | ChainTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChainTransaction update
   */
  export type ChainTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainTransaction
     */
    select?: ChainTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChainTransaction
     */
    omit?: ChainTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a ChainTransaction.
     */
    data: XOR<ChainTransactionUpdateInput, ChainTransactionUncheckedUpdateInput>
    /**
     * Choose, which ChainTransaction to update.
     */
    where: ChainTransactionWhereUniqueInput
  }

  /**
   * ChainTransaction updateMany
   */
  export type ChainTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChainTransactions.
     */
    data: XOR<ChainTransactionUpdateManyMutationInput, ChainTransactionUncheckedUpdateManyInput>
    /**
     * Filter which ChainTransactions to update
     */
    where?: ChainTransactionWhereInput
    /**
     * Limit how many ChainTransactions to update.
     */
    limit?: number
  }

  /**
   * ChainTransaction updateManyAndReturn
   */
  export type ChainTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainTransaction
     */
    select?: ChainTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChainTransaction
     */
    omit?: ChainTransactionOmit<ExtArgs> | null
    /**
     * The data used to update ChainTransactions.
     */
    data: XOR<ChainTransactionUpdateManyMutationInput, ChainTransactionUncheckedUpdateManyInput>
    /**
     * Filter which ChainTransactions to update
     */
    where?: ChainTransactionWhereInput
    /**
     * Limit how many ChainTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChainTransaction upsert
   */
  export type ChainTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainTransaction
     */
    select?: ChainTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChainTransaction
     */
    omit?: ChainTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the ChainTransaction to update in case it exists.
     */
    where: ChainTransactionWhereUniqueInput
    /**
     * In case the ChainTransaction found by the `where` argument doesn't exist, create a new ChainTransaction with this data.
     */
    create: XOR<ChainTransactionCreateInput, ChainTransactionUncheckedCreateInput>
    /**
     * In case the ChainTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChainTransactionUpdateInput, ChainTransactionUncheckedUpdateInput>
  }

  /**
   * ChainTransaction delete
   */
  export type ChainTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainTransaction
     */
    select?: ChainTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChainTransaction
     */
    omit?: ChainTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainTransactionInclude<ExtArgs> | null
    /**
     * Filter which ChainTransaction to delete.
     */
    where: ChainTransactionWhereUniqueInput
  }

  /**
   * ChainTransaction deleteMany
   */
  export type ChainTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChainTransactions to delete
     */
    where?: ChainTransactionWhereInput
    /**
     * Limit how many ChainTransactions to delete.
     */
    limit?: number
  }

  /**
   * ChainTransaction without action
   */
  export type ChainTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainTransaction
     */
    select?: ChainTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChainTransaction
     */
    omit?: ChainTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainTransactionInclude<ExtArgs> | null
  }


  /**
   * Model ScanCursor
   */

  export type AggregateScanCursor = {
    _count: ScanCursorCountAggregateOutputType | null
    _avg: ScanCursorAvgAggregateOutputType | null
    _sum: ScanCursorSumAggregateOutputType | null
    _min: ScanCursorMinAggregateOutputType | null
    _max: ScanCursorMaxAggregateOutputType | null
  }

  export type ScanCursorAvgAggregateOutputType = {
    id: number | null
    lastBlock: number | null
  }

  export type ScanCursorSumAggregateOutputType = {
    id: number | null
    lastBlock: bigint | null
  }

  export type ScanCursorMinAggregateOutputType = {
    id: number | null
    lastBlock: bigint | null
    updatedAt: Date | null
  }

  export type ScanCursorMaxAggregateOutputType = {
    id: number | null
    lastBlock: bigint | null
    updatedAt: Date | null
  }

  export type ScanCursorCountAggregateOutputType = {
    id: number
    lastBlock: number
    updatedAt: number
    _all: number
  }


  export type ScanCursorAvgAggregateInputType = {
    id?: true
    lastBlock?: true
  }

  export type ScanCursorSumAggregateInputType = {
    id?: true
    lastBlock?: true
  }

  export type ScanCursorMinAggregateInputType = {
    id?: true
    lastBlock?: true
    updatedAt?: true
  }

  export type ScanCursorMaxAggregateInputType = {
    id?: true
    lastBlock?: true
    updatedAt?: true
  }

  export type ScanCursorCountAggregateInputType = {
    id?: true
    lastBlock?: true
    updatedAt?: true
    _all?: true
  }

  export type ScanCursorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScanCursor to aggregate.
     */
    where?: ScanCursorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanCursors to fetch.
     */
    orderBy?: ScanCursorOrderByWithRelationInput | ScanCursorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScanCursorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanCursors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanCursors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScanCursors
    **/
    _count?: true | ScanCursorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScanCursorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScanCursorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScanCursorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScanCursorMaxAggregateInputType
  }

  export type GetScanCursorAggregateType<T extends ScanCursorAggregateArgs> = {
        [P in keyof T & keyof AggregateScanCursor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScanCursor[P]>
      : GetScalarType<T[P], AggregateScanCursor[P]>
  }




  export type ScanCursorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScanCursorWhereInput
    orderBy?: ScanCursorOrderByWithAggregationInput | ScanCursorOrderByWithAggregationInput[]
    by: ScanCursorScalarFieldEnum[] | ScanCursorScalarFieldEnum
    having?: ScanCursorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScanCursorCountAggregateInputType | true
    _avg?: ScanCursorAvgAggregateInputType
    _sum?: ScanCursorSumAggregateInputType
    _min?: ScanCursorMinAggregateInputType
    _max?: ScanCursorMaxAggregateInputType
  }

  export type ScanCursorGroupByOutputType = {
    id: number
    lastBlock: bigint
    updatedAt: Date
    _count: ScanCursorCountAggregateOutputType | null
    _avg: ScanCursorAvgAggregateOutputType | null
    _sum: ScanCursorSumAggregateOutputType | null
    _min: ScanCursorMinAggregateOutputType | null
    _max: ScanCursorMaxAggregateOutputType | null
  }

  type GetScanCursorGroupByPayload<T extends ScanCursorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScanCursorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScanCursorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScanCursorGroupByOutputType[P]>
            : GetScalarType<T[P], ScanCursorGroupByOutputType[P]>
        }
      >
    >


  export type ScanCursorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastBlock?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["scanCursor"]>

  export type ScanCursorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastBlock?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["scanCursor"]>

  export type ScanCursorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastBlock?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["scanCursor"]>

  export type ScanCursorSelectScalar = {
    id?: boolean
    lastBlock?: boolean
    updatedAt?: boolean
  }

  export type ScanCursorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lastBlock" | "updatedAt", ExtArgs["result"]["scanCursor"]>

  export type $ScanCursorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScanCursor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lastBlock: bigint
      updatedAt: Date
    }, ExtArgs["result"]["scanCursor"]>
    composites: {}
  }

  type ScanCursorGetPayload<S extends boolean | null | undefined | ScanCursorDefaultArgs> = $Result.GetResult<Prisma.$ScanCursorPayload, S>

  type ScanCursorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScanCursorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScanCursorCountAggregateInputType | true
    }

  export interface ScanCursorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScanCursor'], meta: { name: 'ScanCursor' } }
    /**
     * Find zero or one ScanCursor that matches the filter.
     * @param {ScanCursorFindUniqueArgs} args - Arguments to find a ScanCursor
     * @example
     * // Get one ScanCursor
     * const scanCursor = await prisma.scanCursor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScanCursorFindUniqueArgs>(args: SelectSubset<T, ScanCursorFindUniqueArgs<ExtArgs>>): Prisma__ScanCursorClient<$Result.GetResult<Prisma.$ScanCursorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScanCursor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScanCursorFindUniqueOrThrowArgs} args - Arguments to find a ScanCursor
     * @example
     * // Get one ScanCursor
     * const scanCursor = await prisma.scanCursor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScanCursorFindUniqueOrThrowArgs>(args: SelectSubset<T, ScanCursorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScanCursorClient<$Result.GetResult<Prisma.$ScanCursorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScanCursor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanCursorFindFirstArgs} args - Arguments to find a ScanCursor
     * @example
     * // Get one ScanCursor
     * const scanCursor = await prisma.scanCursor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScanCursorFindFirstArgs>(args?: SelectSubset<T, ScanCursorFindFirstArgs<ExtArgs>>): Prisma__ScanCursorClient<$Result.GetResult<Prisma.$ScanCursorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScanCursor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanCursorFindFirstOrThrowArgs} args - Arguments to find a ScanCursor
     * @example
     * // Get one ScanCursor
     * const scanCursor = await prisma.scanCursor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScanCursorFindFirstOrThrowArgs>(args?: SelectSubset<T, ScanCursorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScanCursorClient<$Result.GetResult<Prisma.$ScanCursorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScanCursors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanCursorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScanCursors
     * const scanCursors = await prisma.scanCursor.findMany()
     * 
     * // Get first 10 ScanCursors
     * const scanCursors = await prisma.scanCursor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scanCursorWithIdOnly = await prisma.scanCursor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScanCursorFindManyArgs>(args?: SelectSubset<T, ScanCursorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanCursorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScanCursor.
     * @param {ScanCursorCreateArgs} args - Arguments to create a ScanCursor.
     * @example
     * // Create one ScanCursor
     * const ScanCursor = await prisma.scanCursor.create({
     *   data: {
     *     // ... data to create a ScanCursor
     *   }
     * })
     * 
     */
    create<T extends ScanCursorCreateArgs>(args: SelectSubset<T, ScanCursorCreateArgs<ExtArgs>>): Prisma__ScanCursorClient<$Result.GetResult<Prisma.$ScanCursorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScanCursors.
     * @param {ScanCursorCreateManyArgs} args - Arguments to create many ScanCursors.
     * @example
     * // Create many ScanCursors
     * const scanCursor = await prisma.scanCursor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScanCursorCreateManyArgs>(args?: SelectSubset<T, ScanCursorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScanCursors and returns the data saved in the database.
     * @param {ScanCursorCreateManyAndReturnArgs} args - Arguments to create many ScanCursors.
     * @example
     * // Create many ScanCursors
     * const scanCursor = await prisma.scanCursor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScanCursors and only return the `id`
     * const scanCursorWithIdOnly = await prisma.scanCursor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScanCursorCreateManyAndReturnArgs>(args?: SelectSubset<T, ScanCursorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanCursorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScanCursor.
     * @param {ScanCursorDeleteArgs} args - Arguments to delete one ScanCursor.
     * @example
     * // Delete one ScanCursor
     * const ScanCursor = await prisma.scanCursor.delete({
     *   where: {
     *     // ... filter to delete one ScanCursor
     *   }
     * })
     * 
     */
    delete<T extends ScanCursorDeleteArgs>(args: SelectSubset<T, ScanCursorDeleteArgs<ExtArgs>>): Prisma__ScanCursorClient<$Result.GetResult<Prisma.$ScanCursorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScanCursor.
     * @param {ScanCursorUpdateArgs} args - Arguments to update one ScanCursor.
     * @example
     * // Update one ScanCursor
     * const scanCursor = await prisma.scanCursor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScanCursorUpdateArgs>(args: SelectSubset<T, ScanCursorUpdateArgs<ExtArgs>>): Prisma__ScanCursorClient<$Result.GetResult<Prisma.$ScanCursorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScanCursors.
     * @param {ScanCursorDeleteManyArgs} args - Arguments to filter ScanCursors to delete.
     * @example
     * // Delete a few ScanCursors
     * const { count } = await prisma.scanCursor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScanCursorDeleteManyArgs>(args?: SelectSubset<T, ScanCursorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScanCursors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanCursorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScanCursors
     * const scanCursor = await prisma.scanCursor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScanCursorUpdateManyArgs>(args: SelectSubset<T, ScanCursorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScanCursors and returns the data updated in the database.
     * @param {ScanCursorUpdateManyAndReturnArgs} args - Arguments to update many ScanCursors.
     * @example
     * // Update many ScanCursors
     * const scanCursor = await prisma.scanCursor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScanCursors and only return the `id`
     * const scanCursorWithIdOnly = await prisma.scanCursor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScanCursorUpdateManyAndReturnArgs>(args: SelectSubset<T, ScanCursorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanCursorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScanCursor.
     * @param {ScanCursorUpsertArgs} args - Arguments to update or create a ScanCursor.
     * @example
     * // Update or create a ScanCursor
     * const scanCursor = await prisma.scanCursor.upsert({
     *   create: {
     *     // ... data to create a ScanCursor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScanCursor we want to update
     *   }
     * })
     */
    upsert<T extends ScanCursorUpsertArgs>(args: SelectSubset<T, ScanCursorUpsertArgs<ExtArgs>>): Prisma__ScanCursorClient<$Result.GetResult<Prisma.$ScanCursorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScanCursors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanCursorCountArgs} args - Arguments to filter ScanCursors to count.
     * @example
     * // Count the number of ScanCursors
     * const count = await prisma.scanCursor.count({
     *   where: {
     *     // ... the filter for the ScanCursors we want to count
     *   }
     * })
    **/
    count<T extends ScanCursorCountArgs>(
      args?: Subset<T, ScanCursorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScanCursorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScanCursor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanCursorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScanCursorAggregateArgs>(args: Subset<T, ScanCursorAggregateArgs>): Prisma.PrismaPromise<GetScanCursorAggregateType<T>>

    /**
     * Group by ScanCursor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanCursorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScanCursorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScanCursorGroupByArgs['orderBy'] }
        : { orderBy?: ScanCursorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScanCursorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScanCursorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScanCursor model
   */
  readonly fields: ScanCursorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScanCursor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScanCursorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScanCursor model
   */
  interface ScanCursorFieldRefs {
    readonly id: FieldRef<"ScanCursor", 'Int'>
    readonly lastBlock: FieldRef<"ScanCursor", 'BigInt'>
    readonly updatedAt: FieldRef<"ScanCursor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScanCursor findUnique
   */
  export type ScanCursorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanCursor
     */
    select?: ScanCursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanCursor
     */
    omit?: ScanCursorOmit<ExtArgs> | null
    /**
     * Filter, which ScanCursor to fetch.
     */
    where: ScanCursorWhereUniqueInput
  }

  /**
   * ScanCursor findUniqueOrThrow
   */
  export type ScanCursorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanCursor
     */
    select?: ScanCursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanCursor
     */
    omit?: ScanCursorOmit<ExtArgs> | null
    /**
     * Filter, which ScanCursor to fetch.
     */
    where: ScanCursorWhereUniqueInput
  }

  /**
   * ScanCursor findFirst
   */
  export type ScanCursorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanCursor
     */
    select?: ScanCursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanCursor
     */
    omit?: ScanCursorOmit<ExtArgs> | null
    /**
     * Filter, which ScanCursor to fetch.
     */
    where?: ScanCursorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanCursors to fetch.
     */
    orderBy?: ScanCursorOrderByWithRelationInput | ScanCursorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScanCursors.
     */
    cursor?: ScanCursorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanCursors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanCursors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScanCursors.
     */
    distinct?: ScanCursorScalarFieldEnum | ScanCursorScalarFieldEnum[]
  }

  /**
   * ScanCursor findFirstOrThrow
   */
  export type ScanCursorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanCursor
     */
    select?: ScanCursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanCursor
     */
    omit?: ScanCursorOmit<ExtArgs> | null
    /**
     * Filter, which ScanCursor to fetch.
     */
    where?: ScanCursorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanCursors to fetch.
     */
    orderBy?: ScanCursorOrderByWithRelationInput | ScanCursorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScanCursors.
     */
    cursor?: ScanCursorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanCursors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanCursors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScanCursors.
     */
    distinct?: ScanCursorScalarFieldEnum | ScanCursorScalarFieldEnum[]
  }

  /**
   * ScanCursor findMany
   */
  export type ScanCursorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanCursor
     */
    select?: ScanCursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanCursor
     */
    omit?: ScanCursorOmit<ExtArgs> | null
    /**
     * Filter, which ScanCursors to fetch.
     */
    where?: ScanCursorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanCursors to fetch.
     */
    orderBy?: ScanCursorOrderByWithRelationInput | ScanCursorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScanCursors.
     */
    cursor?: ScanCursorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanCursors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanCursors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScanCursors.
     */
    distinct?: ScanCursorScalarFieldEnum | ScanCursorScalarFieldEnum[]
  }

  /**
   * ScanCursor create
   */
  export type ScanCursorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanCursor
     */
    select?: ScanCursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanCursor
     */
    omit?: ScanCursorOmit<ExtArgs> | null
    /**
     * The data needed to create a ScanCursor.
     */
    data: XOR<ScanCursorCreateInput, ScanCursorUncheckedCreateInput>
  }

  /**
   * ScanCursor createMany
   */
  export type ScanCursorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScanCursors.
     */
    data: ScanCursorCreateManyInput | ScanCursorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScanCursor createManyAndReturn
   */
  export type ScanCursorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanCursor
     */
    select?: ScanCursorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScanCursor
     */
    omit?: ScanCursorOmit<ExtArgs> | null
    /**
     * The data used to create many ScanCursors.
     */
    data: ScanCursorCreateManyInput | ScanCursorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScanCursor update
   */
  export type ScanCursorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanCursor
     */
    select?: ScanCursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanCursor
     */
    omit?: ScanCursorOmit<ExtArgs> | null
    /**
     * The data needed to update a ScanCursor.
     */
    data: XOR<ScanCursorUpdateInput, ScanCursorUncheckedUpdateInput>
    /**
     * Choose, which ScanCursor to update.
     */
    where: ScanCursorWhereUniqueInput
  }

  /**
   * ScanCursor updateMany
   */
  export type ScanCursorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScanCursors.
     */
    data: XOR<ScanCursorUpdateManyMutationInput, ScanCursorUncheckedUpdateManyInput>
    /**
     * Filter which ScanCursors to update
     */
    where?: ScanCursorWhereInput
    /**
     * Limit how many ScanCursors to update.
     */
    limit?: number
  }

  /**
   * ScanCursor updateManyAndReturn
   */
  export type ScanCursorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanCursor
     */
    select?: ScanCursorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScanCursor
     */
    omit?: ScanCursorOmit<ExtArgs> | null
    /**
     * The data used to update ScanCursors.
     */
    data: XOR<ScanCursorUpdateManyMutationInput, ScanCursorUncheckedUpdateManyInput>
    /**
     * Filter which ScanCursors to update
     */
    where?: ScanCursorWhereInput
    /**
     * Limit how many ScanCursors to update.
     */
    limit?: number
  }

  /**
   * ScanCursor upsert
   */
  export type ScanCursorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanCursor
     */
    select?: ScanCursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanCursor
     */
    omit?: ScanCursorOmit<ExtArgs> | null
    /**
     * The filter to search for the ScanCursor to update in case it exists.
     */
    where: ScanCursorWhereUniqueInput
    /**
     * In case the ScanCursor found by the `where` argument doesn't exist, create a new ScanCursor with this data.
     */
    create: XOR<ScanCursorCreateInput, ScanCursorUncheckedCreateInput>
    /**
     * In case the ScanCursor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScanCursorUpdateInput, ScanCursorUncheckedUpdateInput>
  }

  /**
   * ScanCursor delete
   */
  export type ScanCursorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanCursor
     */
    select?: ScanCursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanCursor
     */
    omit?: ScanCursorOmit<ExtArgs> | null
    /**
     * Filter which ScanCursor to delete.
     */
    where: ScanCursorWhereUniqueInput
  }

  /**
   * ScanCursor deleteMany
   */
  export type ScanCursorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScanCursors to delete
     */
    where?: ScanCursorWhereInput
    /**
     * Limit how many ScanCursors to delete.
     */
    limit?: number
  }

  /**
   * ScanCursor without action
   */
  export type ScanCursorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanCursor
     */
    select?: ScanCursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanCursor
     */
    omit?: ScanCursorOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CustodyCounterScalarFieldEnum: {
    id: 'id',
    nextIndex: 'nextIndex',
    updatedAt: 'updatedAt'
  };

  export type CustodyCounterScalarFieldEnum = (typeof CustodyCounterScalarFieldEnum)[keyof typeof CustodyCounterScalarFieldEnum]


  export const DepositAddressScalarFieldEnum: {
    id: 'id',
    invoiceId: 'invoiceId',
    address: 'address',
    derivationIndex: 'derivationIndex',
    derivationPath: 'derivationPath',
    network: 'network',
    createdAt: 'createdAt'
  };

  export type DepositAddressScalarFieldEnum = (typeof DepositAddressScalarFieldEnum)[keyof typeof DepositAddressScalarFieldEnum]


  export const ChainTransactionScalarFieldEnum: {
    id: 'id',
    depositAddressId: 'depositAddressId',
    txHash: 'txHash',
    network: 'network',
    fromAddress: 'fromAddress',
    amount: 'amount',
    tokenAddress: 'tokenAddress',
    tokenSymbol: 'tokenSymbol',
    status: 'status',
    confirmations: 'confirmations',
    requiredConfirmations: 'requiredConfirmations',
    detectedAt: 'detectedAt',
    confirmedAt: 'confirmedAt',
    batchId: 'batchId'
  };

  export type ChainTransactionScalarFieldEnum = (typeof ChainTransactionScalarFieldEnum)[keyof typeof ChainTransactionScalarFieldEnum]


  export const ScanCursorScalarFieldEnum: {
    id: 'id',
    lastBlock: 'lastBlock',
    updatedAt: 'updatedAt'
  };

  export type ScanCursorScalarFieldEnum = (typeof ScanCursorScalarFieldEnum)[keyof typeof ScanCursorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'ChainNetwork'
   */
  export type EnumChainNetworkFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChainNetwork'>
    


  /**
   * Reference to a field of type 'ChainNetwork[]'
   */
  export type ListEnumChainNetworkFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChainNetwork[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'ChainTransactionStatus'
   */
  export type EnumChainTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChainTransactionStatus'>
    


  /**
   * Reference to a field of type 'ChainTransactionStatus[]'
   */
  export type ListEnumChainTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChainTransactionStatus[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CustodyCounterWhereInput = {
    AND?: CustodyCounterWhereInput | CustodyCounterWhereInput[]
    OR?: CustodyCounterWhereInput[]
    NOT?: CustodyCounterWhereInput | CustodyCounterWhereInput[]
    id?: IntFilter<"CustodyCounter"> | number
    nextIndex?: IntFilter<"CustodyCounter"> | number
    updatedAt?: DateTimeFilter<"CustodyCounter"> | Date | string
  }

  export type CustodyCounterOrderByWithRelationInput = {
    id?: SortOrder
    nextIndex?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustodyCounterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustodyCounterWhereInput | CustodyCounterWhereInput[]
    OR?: CustodyCounterWhereInput[]
    NOT?: CustodyCounterWhereInput | CustodyCounterWhereInput[]
    nextIndex?: IntFilter<"CustodyCounter"> | number
    updatedAt?: DateTimeFilter<"CustodyCounter"> | Date | string
  }, "id">

  export type CustodyCounterOrderByWithAggregationInput = {
    id?: SortOrder
    nextIndex?: SortOrder
    updatedAt?: SortOrder
    _count?: CustodyCounterCountOrderByAggregateInput
    _avg?: CustodyCounterAvgOrderByAggregateInput
    _max?: CustodyCounterMaxOrderByAggregateInput
    _min?: CustodyCounterMinOrderByAggregateInput
    _sum?: CustodyCounterSumOrderByAggregateInput
  }

  export type CustodyCounterScalarWhereWithAggregatesInput = {
    AND?: CustodyCounterScalarWhereWithAggregatesInput | CustodyCounterScalarWhereWithAggregatesInput[]
    OR?: CustodyCounterScalarWhereWithAggregatesInput[]
    NOT?: CustodyCounterScalarWhereWithAggregatesInput | CustodyCounterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CustodyCounter"> | number
    nextIndex?: IntWithAggregatesFilter<"CustodyCounter"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"CustodyCounter"> | Date | string
  }

  export type DepositAddressWhereInput = {
    AND?: DepositAddressWhereInput | DepositAddressWhereInput[]
    OR?: DepositAddressWhereInput[]
    NOT?: DepositAddressWhereInput | DepositAddressWhereInput[]
    id?: StringFilter<"DepositAddress"> | string
    invoiceId?: StringFilter<"DepositAddress"> | string
    address?: StringFilter<"DepositAddress"> | string
    derivationIndex?: IntFilter<"DepositAddress"> | number
    derivationPath?: StringFilter<"DepositAddress"> | string
    network?: EnumChainNetworkFilter<"DepositAddress"> | $Enums.ChainNetwork
    createdAt?: DateTimeFilter<"DepositAddress"> | Date | string
    transactions?: ChainTransactionListRelationFilter
  }

  export type DepositAddressOrderByWithRelationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    address?: SortOrder
    derivationIndex?: SortOrder
    derivationPath?: SortOrder
    network?: SortOrder
    createdAt?: SortOrder
    transactions?: ChainTransactionOrderByRelationAggregateInput
  }

  export type DepositAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    invoiceId?: string
    address?: string
    derivationIndex?: number
    AND?: DepositAddressWhereInput | DepositAddressWhereInput[]
    OR?: DepositAddressWhereInput[]
    NOT?: DepositAddressWhereInput | DepositAddressWhereInput[]
    derivationPath?: StringFilter<"DepositAddress"> | string
    network?: EnumChainNetworkFilter<"DepositAddress"> | $Enums.ChainNetwork
    createdAt?: DateTimeFilter<"DepositAddress"> | Date | string
    transactions?: ChainTransactionListRelationFilter
  }, "id" | "invoiceId" | "address" | "derivationIndex">

  export type DepositAddressOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    address?: SortOrder
    derivationIndex?: SortOrder
    derivationPath?: SortOrder
    network?: SortOrder
    createdAt?: SortOrder
    _count?: DepositAddressCountOrderByAggregateInput
    _avg?: DepositAddressAvgOrderByAggregateInput
    _max?: DepositAddressMaxOrderByAggregateInput
    _min?: DepositAddressMinOrderByAggregateInput
    _sum?: DepositAddressSumOrderByAggregateInput
  }

  export type DepositAddressScalarWhereWithAggregatesInput = {
    AND?: DepositAddressScalarWhereWithAggregatesInput | DepositAddressScalarWhereWithAggregatesInput[]
    OR?: DepositAddressScalarWhereWithAggregatesInput[]
    NOT?: DepositAddressScalarWhereWithAggregatesInput | DepositAddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DepositAddress"> | string
    invoiceId?: StringWithAggregatesFilter<"DepositAddress"> | string
    address?: StringWithAggregatesFilter<"DepositAddress"> | string
    derivationIndex?: IntWithAggregatesFilter<"DepositAddress"> | number
    derivationPath?: StringWithAggregatesFilter<"DepositAddress"> | string
    network?: EnumChainNetworkWithAggregatesFilter<"DepositAddress"> | $Enums.ChainNetwork
    createdAt?: DateTimeWithAggregatesFilter<"DepositAddress"> | Date | string
  }

  export type ChainTransactionWhereInput = {
    AND?: ChainTransactionWhereInput | ChainTransactionWhereInput[]
    OR?: ChainTransactionWhereInput[]
    NOT?: ChainTransactionWhereInput | ChainTransactionWhereInput[]
    id?: StringFilter<"ChainTransaction"> | string
    depositAddressId?: StringFilter<"ChainTransaction"> | string
    txHash?: StringFilter<"ChainTransaction"> | string
    network?: EnumChainNetworkFilter<"ChainTransaction"> | $Enums.ChainNetwork
    fromAddress?: StringFilter<"ChainTransaction"> | string
    amount?: DecimalFilter<"ChainTransaction"> | Decimal | DecimalJsLike | number | string
    tokenAddress?: StringNullableFilter<"ChainTransaction"> | string | null
    tokenSymbol?: StringFilter<"ChainTransaction"> | string
    status?: EnumChainTransactionStatusFilter<"ChainTransaction"> | $Enums.ChainTransactionStatus
    confirmations?: IntFilter<"ChainTransaction"> | number
    requiredConfirmations?: IntFilter<"ChainTransaction"> | number
    detectedAt?: DateTimeFilter<"ChainTransaction"> | Date | string
    confirmedAt?: DateTimeNullableFilter<"ChainTransaction"> | Date | string | null
    batchId?: StringNullableFilter<"ChainTransaction"> | string | null
    depositAddress?: XOR<DepositAddressScalarRelationFilter, DepositAddressWhereInput>
  }

  export type ChainTransactionOrderByWithRelationInput = {
    id?: SortOrder
    depositAddressId?: SortOrder
    txHash?: SortOrder
    network?: SortOrder
    fromAddress?: SortOrder
    amount?: SortOrder
    tokenAddress?: SortOrderInput | SortOrder
    tokenSymbol?: SortOrder
    status?: SortOrder
    confirmations?: SortOrder
    requiredConfirmations?: SortOrder
    detectedAt?: SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    batchId?: SortOrderInput | SortOrder
    depositAddress?: DepositAddressOrderByWithRelationInput
  }

  export type ChainTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    txHash?: string
    AND?: ChainTransactionWhereInput | ChainTransactionWhereInput[]
    OR?: ChainTransactionWhereInput[]
    NOT?: ChainTransactionWhereInput | ChainTransactionWhereInput[]
    depositAddressId?: StringFilter<"ChainTransaction"> | string
    network?: EnumChainNetworkFilter<"ChainTransaction"> | $Enums.ChainNetwork
    fromAddress?: StringFilter<"ChainTransaction"> | string
    amount?: DecimalFilter<"ChainTransaction"> | Decimal | DecimalJsLike | number | string
    tokenAddress?: StringNullableFilter<"ChainTransaction"> | string | null
    tokenSymbol?: StringFilter<"ChainTransaction"> | string
    status?: EnumChainTransactionStatusFilter<"ChainTransaction"> | $Enums.ChainTransactionStatus
    confirmations?: IntFilter<"ChainTransaction"> | number
    requiredConfirmations?: IntFilter<"ChainTransaction"> | number
    detectedAt?: DateTimeFilter<"ChainTransaction"> | Date | string
    confirmedAt?: DateTimeNullableFilter<"ChainTransaction"> | Date | string | null
    batchId?: StringNullableFilter<"ChainTransaction"> | string | null
    depositAddress?: XOR<DepositAddressScalarRelationFilter, DepositAddressWhereInput>
  }, "id" | "txHash">

  export type ChainTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    depositAddressId?: SortOrder
    txHash?: SortOrder
    network?: SortOrder
    fromAddress?: SortOrder
    amount?: SortOrder
    tokenAddress?: SortOrderInput | SortOrder
    tokenSymbol?: SortOrder
    status?: SortOrder
    confirmations?: SortOrder
    requiredConfirmations?: SortOrder
    detectedAt?: SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    batchId?: SortOrderInput | SortOrder
    _count?: ChainTransactionCountOrderByAggregateInput
    _avg?: ChainTransactionAvgOrderByAggregateInput
    _max?: ChainTransactionMaxOrderByAggregateInput
    _min?: ChainTransactionMinOrderByAggregateInput
    _sum?: ChainTransactionSumOrderByAggregateInput
  }

  export type ChainTransactionScalarWhereWithAggregatesInput = {
    AND?: ChainTransactionScalarWhereWithAggregatesInput | ChainTransactionScalarWhereWithAggregatesInput[]
    OR?: ChainTransactionScalarWhereWithAggregatesInput[]
    NOT?: ChainTransactionScalarWhereWithAggregatesInput | ChainTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChainTransaction"> | string
    depositAddressId?: StringWithAggregatesFilter<"ChainTransaction"> | string
    txHash?: StringWithAggregatesFilter<"ChainTransaction"> | string
    network?: EnumChainNetworkWithAggregatesFilter<"ChainTransaction"> | $Enums.ChainNetwork
    fromAddress?: StringWithAggregatesFilter<"ChainTransaction"> | string
    amount?: DecimalWithAggregatesFilter<"ChainTransaction"> | Decimal | DecimalJsLike | number | string
    tokenAddress?: StringNullableWithAggregatesFilter<"ChainTransaction"> | string | null
    tokenSymbol?: StringWithAggregatesFilter<"ChainTransaction"> | string
    status?: EnumChainTransactionStatusWithAggregatesFilter<"ChainTransaction"> | $Enums.ChainTransactionStatus
    confirmations?: IntWithAggregatesFilter<"ChainTransaction"> | number
    requiredConfirmations?: IntWithAggregatesFilter<"ChainTransaction"> | number
    detectedAt?: DateTimeWithAggregatesFilter<"ChainTransaction"> | Date | string
    confirmedAt?: DateTimeNullableWithAggregatesFilter<"ChainTransaction"> | Date | string | null
    batchId?: StringNullableWithAggregatesFilter<"ChainTransaction"> | string | null
  }

  export type ScanCursorWhereInput = {
    AND?: ScanCursorWhereInput | ScanCursorWhereInput[]
    OR?: ScanCursorWhereInput[]
    NOT?: ScanCursorWhereInput | ScanCursorWhereInput[]
    id?: IntFilter<"ScanCursor"> | number
    lastBlock?: BigIntFilter<"ScanCursor"> | bigint | number
    updatedAt?: DateTimeFilter<"ScanCursor"> | Date | string
  }

  export type ScanCursorOrderByWithRelationInput = {
    id?: SortOrder
    lastBlock?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScanCursorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScanCursorWhereInput | ScanCursorWhereInput[]
    OR?: ScanCursorWhereInput[]
    NOT?: ScanCursorWhereInput | ScanCursorWhereInput[]
    lastBlock?: BigIntFilter<"ScanCursor"> | bigint | number
    updatedAt?: DateTimeFilter<"ScanCursor"> | Date | string
  }, "id">

  export type ScanCursorOrderByWithAggregationInput = {
    id?: SortOrder
    lastBlock?: SortOrder
    updatedAt?: SortOrder
    _count?: ScanCursorCountOrderByAggregateInput
    _avg?: ScanCursorAvgOrderByAggregateInput
    _max?: ScanCursorMaxOrderByAggregateInput
    _min?: ScanCursorMinOrderByAggregateInput
    _sum?: ScanCursorSumOrderByAggregateInput
  }

  export type ScanCursorScalarWhereWithAggregatesInput = {
    AND?: ScanCursorScalarWhereWithAggregatesInput | ScanCursorScalarWhereWithAggregatesInput[]
    OR?: ScanCursorScalarWhereWithAggregatesInput[]
    NOT?: ScanCursorScalarWhereWithAggregatesInput | ScanCursorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ScanCursor"> | number
    lastBlock?: BigIntWithAggregatesFilter<"ScanCursor"> | bigint | number
    updatedAt?: DateTimeWithAggregatesFilter<"ScanCursor"> | Date | string
  }

  export type CustodyCounterCreateInput = {
    id?: number
    nextIndex?: number
    updatedAt?: Date | string
  }

  export type CustodyCounterUncheckedCreateInput = {
    id?: number
    nextIndex?: number
    updatedAt?: Date | string
  }

  export type CustodyCounterUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nextIndex?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustodyCounterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nextIndex?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustodyCounterCreateManyInput = {
    id?: number
    nextIndex?: number
    updatedAt?: Date | string
  }

  export type CustodyCounterUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nextIndex?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustodyCounterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nextIndex?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositAddressCreateInput = {
    id?: string
    invoiceId: string
    address: string
    derivationIndex: number
    derivationPath: string
    network: $Enums.ChainNetwork
    createdAt?: Date | string
    transactions?: ChainTransactionCreateNestedManyWithoutDepositAddressInput
  }

  export type DepositAddressUncheckedCreateInput = {
    id?: string
    invoiceId: string
    address: string
    derivationIndex: number
    derivationPath: string
    network: $Enums.ChainNetwork
    createdAt?: Date | string
    transactions?: ChainTransactionUncheckedCreateNestedManyWithoutDepositAddressInput
  }

  export type DepositAddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    derivationIndex?: IntFieldUpdateOperationsInput | number
    derivationPath?: StringFieldUpdateOperationsInput | string
    network?: EnumChainNetworkFieldUpdateOperationsInput | $Enums.ChainNetwork
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: ChainTransactionUpdateManyWithoutDepositAddressNestedInput
  }

  export type DepositAddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    derivationIndex?: IntFieldUpdateOperationsInput | number
    derivationPath?: StringFieldUpdateOperationsInput | string
    network?: EnumChainNetworkFieldUpdateOperationsInput | $Enums.ChainNetwork
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: ChainTransactionUncheckedUpdateManyWithoutDepositAddressNestedInput
  }

  export type DepositAddressCreateManyInput = {
    id?: string
    invoiceId: string
    address: string
    derivationIndex: number
    derivationPath: string
    network: $Enums.ChainNetwork
    createdAt?: Date | string
  }

  export type DepositAddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    derivationIndex?: IntFieldUpdateOperationsInput | number
    derivationPath?: StringFieldUpdateOperationsInput | string
    network?: EnumChainNetworkFieldUpdateOperationsInput | $Enums.ChainNetwork
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositAddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    derivationIndex?: IntFieldUpdateOperationsInput | number
    derivationPath?: StringFieldUpdateOperationsInput | string
    network?: EnumChainNetworkFieldUpdateOperationsInput | $Enums.ChainNetwork
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChainTransactionCreateInput = {
    id?: string
    txHash: string
    network: $Enums.ChainNetwork
    fromAddress: string
    amount: Decimal | DecimalJsLike | number | string
    tokenAddress?: string | null
    tokenSymbol: string
    status?: $Enums.ChainTransactionStatus
    confirmations?: number
    requiredConfirmations?: number
    detectedAt?: Date | string
    confirmedAt?: Date | string | null
    batchId?: string | null
    depositAddress: DepositAddressCreateNestedOneWithoutTransactionsInput
  }

  export type ChainTransactionUncheckedCreateInput = {
    id?: string
    depositAddressId: string
    txHash: string
    network: $Enums.ChainNetwork
    fromAddress: string
    amount: Decimal | DecimalJsLike | number | string
    tokenAddress?: string | null
    tokenSymbol: string
    status?: $Enums.ChainTransactionStatus
    confirmations?: number
    requiredConfirmations?: number
    detectedAt?: Date | string
    confirmedAt?: Date | string | null
    batchId?: string | null
  }

  export type ChainTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    network?: EnumChainNetworkFieldUpdateOperationsInput | $Enums.ChainNetwork
    fromAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    status?: EnumChainTransactionStatusFieldUpdateOperationsInput | $Enums.ChainTransactionStatus
    confirmations?: IntFieldUpdateOperationsInput | number
    requiredConfirmations?: IntFieldUpdateOperationsInput | number
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    depositAddress?: DepositAddressUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type ChainTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    depositAddressId?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    network?: EnumChainNetworkFieldUpdateOperationsInput | $Enums.ChainNetwork
    fromAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    status?: EnumChainTransactionStatusFieldUpdateOperationsInput | $Enums.ChainTransactionStatus
    confirmations?: IntFieldUpdateOperationsInput | number
    requiredConfirmations?: IntFieldUpdateOperationsInput | number
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChainTransactionCreateManyInput = {
    id?: string
    depositAddressId: string
    txHash: string
    network: $Enums.ChainNetwork
    fromAddress: string
    amount: Decimal | DecimalJsLike | number | string
    tokenAddress?: string | null
    tokenSymbol: string
    status?: $Enums.ChainTransactionStatus
    confirmations?: number
    requiredConfirmations?: number
    detectedAt?: Date | string
    confirmedAt?: Date | string | null
    batchId?: string | null
  }

  export type ChainTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    network?: EnumChainNetworkFieldUpdateOperationsInput | $Enums.ChainNetwork
    fromAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    status?: EnumChainTransactionStatusFieldUpdateOperationsInput | $Enums.ChainTransactionStatus
    confirmations?: IntFieldUpdateOperationsInput | number
    requiredConfirmations?: IntFieldUpdateOperationsInput | number
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChainTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    depositAddressId?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    network?: EnumChainNetworkFieldUpdateOperationsInput | $Enums.ChainNetwork
    fromAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    status?: EnumChainTransactionStatusFieldUpdateOperationsInput | $Enums.ChainTransactionStatus
    confirmations?: IntFieldUpdateOperationsInput | number
    requiredConfirmations?: IntFieldUpdateOperationsInput | number
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScanCursorCreateInput = {
    id?: number
    lastBlock?: bigint | number
    updatedAt?: Date | string
  }

  export type ScanCursorUncheckedCreateInput = {
    id?: number
    lastBlock?: bigint | number
    updatedAt?: Date | string
  }

  export type ScanCursorUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lastBlock?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanCursorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lastBlock?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanCursorCreateManyInput = {
    id?: number
    lastBlock?: bigint | number
    updatedAt?: Date | string
  }

  export type ScanCursorUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    lastBlock?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanCursorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lastBlock?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CustodyCounterCountOrderByAggregateInput = {
    id?: SortOrder
    nextIndex?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustodyCounterAvgOrderByAggregateInput = {
    id?: SortOrder
    nextIndex?: SortOrder
  }

  export type CustodyCounterMaxOrderByAggregateInput = {
    id?: SortOrder
    nextIndex?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustodyCounterMinOrderByAggregateInput = {
    id?: SortOrder
    nextIndex?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustodyCounterSumOrderByAggregateInput = {
    id?: SortOrder
    nextIndex?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumChainNetworkFilter<$PrismaModel = never> = {
    equals?: $Enums.ChainNetwork | EnumChainNetworkFieldRefInput<$PrismaModel>
    in?: $Enums.ChainNetwork[] | ListEnumChainNetworkFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChainNetwork[] | ListEnumChainNetworkFieldRefInput<$PrismaModel>
    not?: NestedEnumChainNetworkFilter<$PrismaModel> | $Enums.ChainNetwork
  }

  export type ChainTransactionListRelationFilter = {
    every?: ChainTransactionWhereInput
    some?: ChainTransactionWhereInput
    none?: ChainTransactionWhereInput
  }

  export type ChainTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepositAddressCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    address?: SortOrder
    derivationIndex?: SortOrder
    derivationPath?: SortOrder
    network?: SortOrder
    createdAt?: SortOrder
  }

  export type DepositAddressAvgOrderByAggregateInput = {
    derivationIndex?: SortOrder
  }

  export type DepositAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    address?: SortOrder
    derivationIndex?: SortOrder
    derivationPath?: SortOrder
    network?: SortOrder
    createdAt?: SortOrder
  }

  export type DepositAddressMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    address?: SortOrder
    derivationIndex?: SortOrder
    derivationPath?: SortOrder
    network?: SortOrder
    createdAt?: SortOrder
  }

  export type DepositAddressSumOrderByAggregateInput = {
    derivationIndex?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumChainNetworkWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChainNetwork | EnumChainNetworkFieldRefInput<$PrismaModel>
    in?: $Enums.ChainNetwork[] | ListEnumChainNetworkFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChainNetwork[] | ListEnumChainNetworkFieldRefInput<$PrismaModel>
    not?: NestedEnumChainNetworkWithAggregatesFilter<$PrismaModel> | $Enums.ChainNetwork
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChainNetworkFilter<$PrismaModel>
    _max?: NestedEnumChainNetworkFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumChainTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChainTransactionStatus | EnumChainTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChainTransactionStatus[] | ListEnumChainTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChainTransactionStatus[] | ListEnumChainTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChainTransactionStatusFilter<$PrismaModel> | $Enums.ChainTransactionStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DepositAddressScalarRelationFilter = {
    is?: DepositAddressWhereInput
    isNot?: DepositAddressWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChainTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    depositAddressId?: SortOrder
    txHash?: SortOrder
    network?: SortOrder
    fromAddress?: SortOrder
    amount?: SortOrder
    tokenAddress?: SortOrder
    tokenSymbol?: SortOrder
    status?: SortOrder
    confirmations?: SortOrder
    requiredConfirmations?: SortOrder
    detectedAt?: SortOrder
    confirmedAt?: SortOrder
    batchId?: SortOrder
  }

  export type ChainTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
    confirmations?: SortOrder
    requiredConfirmations?: SortOrder
  }

  export type ChainTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    depositAddressId?: SortOrder
    txHash?: SortOrder
    network?: SortOrder
    fromAddress?: SortOrder
    amount?: SortOrder
    tokenAddress?: SortOrder
    tokenSymbol?: SortOrder
    status?: SortOrder
    confirmations?: SortOrder
    requiredConfirmations?: SortOrder
    detectedAt?: SortOrder
    confirmedAt?: SortOrder
    batchId?: SortOrder
  }

  export type ChainTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    depositAddressId?: SortOrder
    txHash?: SortOrder
    network?: SortOrder
    fromAddress?: SortOrder
    amount?: SortOrder
    tokenAddress?: SortOrder
    tokenSymbol?: SortOrder
    status?: SortOrder
    confirmations?: SortOrder
    requiredConfirmations?: SortOrder
    detectedAt?: SortOrder
    confirmedAt?: SortOrder
    batchId?: SortOrder
  }

  export type ChainTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
    confirmations?: SortOrder
    requiredConfirmations?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumChainTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChainTransactionStatus | EnumChainTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChainTransactionStatus[] | ListEnumChainTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChainTransactionStatus[] | ListEnumChainTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChainTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChainTransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChainTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumChainTransactionStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type ScanCursorCountOrderByAggregateInput = {
    id?: SortOrder
    lastBlock?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScanCursorAvgOrderByAggregateInput = {
    id?: SortOrder
    lastBlock?: SortOrder
  }

  export type ScanCursorMaxOrderByAggregateInput = {
    id?: SortOrder
    lastBlock?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScanCursorMinOrderByAggregateInput = {
    id?: SortOrder
    lastBlock?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScanCursorSumOrderByAggregateInput = {
    id?: SortOrder
    lastBlock?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChainTransactionCreateNestedManyWithoutDepositAddressInput = {
    create?: XOR<ChainTransactionCreateWithoutDepositAddressInput, ChainTransactionUncheckedCreateWithoutDepositAddressInput> | ChainTransactionCreateWithoutDepositAddressInput[] | ChainTransactionUncheckedCreateWithoutDepositAddressInput[]
    connectOrCreate?: ChainTransactionCreateOrConnectWithoutDepositAddressInput | ChainTransactionCreateOrConnectWithoutDepositAddressInput[]
    createMany?: ChainTransactionCreateManyDepositAddressInputEnvelope
    connect?: ChainTransactionWhereUniqueInput | ChainTransactionWhereUniqueInput[]
  }

  export type ChainTransactionUncheckedCreateNestedManyWithoutDepositAddressInput = {
    create?: XOR<ChainTransactionCreateWithoutDepositAddressInput, ChainTransactionUncheckedCreateWithoutDepositAddressInput> | ChainTransactionCreateWithoutDepositAddressInput[] | ChainTransactionUncheckedCreateWithoutDepositAddressInput[]
    connectOrCreate?: ChainTransactionCreateOrConnectWithoutDepositAddressInput | ChainTransactionCreateOrConnectWithoutDepositAddressInput[]
    createMany?: ChainTransactionCreateManyDepositAddressInputEnvelope
    connect?: ChainTransactionWhereUniqueInput | ChainTransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumChainNetworkFieldUpdateOperationsInput = {
    set?: $Enums.ChainNetwork
  }

  export type ChainTransactionUpdateManyWithoutDepositAddressNestedInput = {
    create?: XOR<ChainTransactionCreateWithoutDepositAddressInput, ChainTransactionUncheckedCreateWithoutDepositAddressInput> | ChainTransactionCreateWithoutDepositAddressInput[] | ChainTransactionUncheckedCreateWithoutDepositAddressInput[]
    connectOrCreate?: ChainTransactionCreateOrConnectWithoutDepositAddressInput | ChainTransactionCreateOrConnectWithoutDepositAddressInput[]
    upsert?: ChainTransactionUpsertWithWhereUniqueWithoutDepositAddressInput | ChainTransactionUpsertWithWhereUniqueWithoutDepositAddressInput[]
    createMany?: ChainTransactionCreateManyDepositAddressInputEnvelope
    set?: ChainTransactionWhereUniqueInput | ChainTransactionWhereUniqueInput[]
    disconnect?: ChainTransactionWhereUniqueInput | ChainTransactionWhereUniqueInput[]
    delete?: ChainTransactionWhereUniqueInput | ChainTransactionWhereUniqueInput[]
    connect?: ChainTransactionWhereUniqueInput | ChainTransactionWhereUniqueInput[]
    update?: ChainTransactionUpdateWithWhereUniqueWithoutDepositAddressInput | ChainTransactionUpdateWithWhereUniqueWithoutDepositAddressInput[]
    updateMany?: ChainTransactionUpdateManyWithWhereWithoutDepositAddressInput | ChainTransactionUpdateManyWithWhereWithoutDepositAddressInput[]
    deleteMany?: ChainTransactionScalarWhereInput | ChainTransactionScalarWhereInput[]
  }

  export type ChainTransactionUncheckedUpdateManyWithoutDepositAddressNestedInput = {
    create?: XOR<ChainTransactionCreateWithoutDepositAddressInput, ChainTransactionUncheckedCreateWithoutDepositAddressInput> | ChainTransactionCreateWithoutDepositAddressInput[] | ChainTransactionUncheckedCreateWithoutDepositAddressInput[]
    connectOrCreate?: ChainTransactionCreateOrConnectWithoutDepositAddressInput | ChainTransactionCreateOrConnectWithoutDepositAddressInput[]
    upsert?: ChainTransactionUpsertWithWhereUniqueWithoutDepositAddressInput | ChainTransactionUpsertWithWhereUniqueWithoutDepositAddressInput[]
    createMany?: ChainTransactionCreateManyDepositAddressInputEnvelope
    set?: ChainTransactionWhereUniqueInput | ChainTransactionWhereUniqueInput[]
    disconnect?: ChainTransactionWhereUniqueInput | ChainTransactionWhereUniqueInput[]
    delete?: ChainTransactionWhereUniqueInput | ChainTransactionWhereUniqueInput[]
    connect?: ChainTransactionWhereUniqueInput | ChainTransactionWhereUniqueInput[]
    update?: ChainTransactionUpdateWithWhereUniqueWithoutDepositAddressInput | ChainTransactionUpdateWithWhereUniqueWithoutDepositAddressInput[]
    updateMany?: ChainTransactionUpdateManyWithWhereWithoutDepositAddressInput | ChainTransactionUpdateManyWithWhereWithoutDepositAddressInput[]
    deleteMany?: ChainTransactionScalarWhereInput | ChainTransactionScalarWhereInput[]
  }

  export type DepositAddressCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<DepositAddressCreateWithoutTransactionsInput, DepositAddressUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: DepositAddressCreateOrConnectWithoutTransactionsInput
    connect?: DepositAddressWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumChainTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.ChainTransactionStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DepositAddressUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<DepositAddressCreateWithoutTransactionsInput, DepositAddressUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: DepositAddressCreateOrConnectWithoutTransactionsInput
    upsert?: DepositAddressUpsertWithoutTransactionsInput
    connect?: DepositAddressWhereUniqueInput
    update?: XOR<XOR<DepositAddressUpdateToOneWithWhereWithoutTransactionsInput, DepositAddressUpdateWithoutTransactionsInput>, DepositAddressUncheckedUpdateWithoutTransactionsInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumChainNetworkFilter<$PrismaModel = never> = {
    equals?: $Enums.ChainNetwork | EnumChainNetworkFieldRefInput<$PrismaModel>
    in?: $Enums.ChainNetwork[] | ListEnumChainNetworkFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChainNetwork[] | ListEnumChainNetworkFieldRefInput<$PrismaModel>
    not?: NestedEnumChainNetworkFilter<$PrismaModel> | $Enums.ChainNetwork
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumChainNetworkWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChainNetwork | EnumChainNetworkFieldRefInput<$PrismaModel>
    in?: $Enums.ChainNetwork[] | ListEnumChainNetworkFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChainNetwork[] | ListEnumChainNetworkFieldRefInput<$PrismaModel>
    not?: NestedEnumChainNetworkWithAggregatesFilter<$PrismaModel> | $Enums.ChainNetwork
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChainNetworkFilter<$PrismaModel>
    _max?: NestedEnumChainNetworkFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumChainTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChainTransactionStatus | EnumChainTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChainTransactionStatus[] | ListEnumChainTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChainTransactionStatus[] | ListEnumChainTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChainTransactionStatusFilter<$PrismaModel> | $Enums.ChainTransactionStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumChainTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChainTransactionStatus | EnumChainTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChainTransactionStatus[] | ListEnumChainTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChainTransactionStatus[] | ListEnumChainTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChainTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChainTransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChainTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumChainTransactionStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type ChainTransactionCreateWithoutDepositAddressInput = {
    id?: string
    txHash: string
    network: $Enums.ChainNetwork
    fromAddress: string
    amount: Decimal | DecimalJsLike | number | string
    tokenAddress?: string | null
    tokenSymbol: string
    status?: $Enums.ChainTransactionStatus
    confirmations?: number
    requiredConfirmations?: number
    detectedAt?: Date | string
    confirmedAt?: Date | string | null
    batchId?: string | null
  }

  export type ChainTransactionUncheckedCreateWithoutDepositAddressInput = {
    id?: string
    txHash: string
    network: $Enums.ChainNetwork
    fromAddress: string
    amount: Decimal | DecimalJsLike | number | string
    tokenAddress?: string | null
    tokenSymbol: string
    status?: $Enums.ChainTransactionStatus
    confirmations?: number
    requiredConfirmations?: number
    detectedAt?: Date | string
    confirmedAt?: Date | string | null
    batchId?: string | null
  }

  export type ChainTransactionCreateOrConnectWithoutDepositAddressInput = {
    where: ChainTransactionWhereUniqueInput
    create: XOR<ChainTransactionCreateWithoutDepositAddressInput, ChainTransactionUncheckedCreateWithoutDepositAddressInput>
  }

  export type ChainTransactionCreateManyDepositAddressInputEnvelope = {
    data: ChainTransactionCreateManyDepositAddressInput | ChainTransactionCreateManyDepositAddressInput[]
    skipDuplicates?: boolean
  }

  export type ChainTransactionUpsertWithWhereUniqueWithoutDepositAddressInput = {
    where: ChainTransactionWhereUniqueInput
    update: XOR<ChainTransactionUpdateWithoutDepositAddressInput, ChainTransactionUncheckedUpdateWithoutDepositAddressInput>
    create: XOR<ChainTransactionCreateWithoutDepositAddressInput, ChainTransactionUncheckedCreateWithoutDepositAddressInput>
  }

  export type ChainTransactionUpdateWithWhereUniqueWithoutDepositAddressInput = {
    where: ChainTransactionWhereUniqueInput
    data: XOR<ChainTransactionUpdateWithoutDepositAddressInput, ChainTransactionUncheckedUpdateWithoutDepositAddressInput>
  }

  export type ChainTransactionUpdateManyWithWhereWithoutDepositAddressInput = {
    where: ChainTransactionScalarWhereInput
    data: XOR<ChainTransactionUpdateManyMutationInput, ChainTransactionUncheckedUpdateManyWithoutDepositAddressInput>
  }

  export type ChainTransactionScalarWhereInput = {
    AND?: ChainTransactionScalarWhereInput | ChainTransactionScalarWhereInput[]
    OR?: ChainTransactionScalarWhereInput[]
    NOT?: ChainTransactionScalarWhereInput | ChainTransactionScalarWhereInput[]
    id?: StringFilter<"ChainTransaction"> | string
    depositAddressId?: StringFilter<"ChainTransaction"> | string
    txHash?: StringFilter<"ChainTransaction"> | string
    network?: EnumChainNetworkFilter<"ChainTransaction"> | $Enums.ChainNetwork
    fromAddress?: StringFilter<"ChainTransaction"> | string
    amount?: DecimalFilter<"ChainTransaction"> | Decimal | DecimalJsLike | number | string
    tokenAddress?: StringNullableFilter<"ChainTransaction"> | string | null
    tokenSymbol?: StringFilter<"ChainTransaction"> | string
    status?: EnumChainTransactionStatusFilter<"ChainTransaction"> | $Enums.ChainTransactionStatus
    confirmations?: IntFilter<"ChainTransaction"> | number
    requiredConfirmations?: IntFilter<"ChainTransaction"> | number
    detectedAt?: DateTimeFilter<"ChainTransaction"> | Date | string
    confirmedAt?: DateTimeNullableFilter<"ChainTransaction"> | Date | string | null
    batchId?: StringNullableFilter<"ChainTransaction"> | string | null
  }

  export type DepositAddressCreateWithoutTransactionsInput = {
    id?: string
    invoiceId: string
    address: string
    derivationIndex: number
    derivationPath: string
    network: $Enums.ChainNetwork
    createdAt?: Date | string
  }

  export type DepositAddressUncheckedCreateWithoutTransactionsInput = {
    id?: string
    invoiceId: string
    address: string
    derivationIndex: number
    derivationPath: string
    network: $Enums.ChainNetwork
    createdAt?: Date | string
  }

  export type DepositAddressCreateOrConnectWithoutTransactionsInput = {
    where: DepositAddressWhereUniqueInput
    create: XOR<DepositAddressCreateWithoutTransactionsInput, DepositAddressUncheckedCreateWithoutTransactionsInput>
  }

  export type DepositAddressUpsertWithoutTransactionsInput = {
    update: XOR<DepositAddressUpdateWithoutTransactionsInput, DepositAddressUncheckedUpdateWithoutTransactionsInput>
    create: XOR<DepositAddressCreateWithoutTransactionsInput, DepositAddressUncheckedCreateWithoutTransactionsInput>
    where?: DepositAddressWhereInput
  }

  export type DepositAddressUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: DepositAddressWhereInput
    data: XOR<DepositAddressUpdateWithoutTransactionsInput, DepositAddressUncheckedUpdateWithoutTransactionsInput>
  }

  export type DepositAddressUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    derivationIndex?: IntFieldUpdateOperationsInput | number
    derivationPath?: StringFieldUpdateOperationsInput | string
    network?: EnumChainNetworkFieldUpdateOperationsInput | $Enums.ChainNetwork
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositAddressUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    derivationIndex?: IntFieldUpdateOperationsInput | number
    derivationPath?: StringFieldUpdateOperationsInput | string
    network?: EnumChainNetworkFieldUpdateOperationsInput | $Enums.ChainNetwork
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChainTransactionCreateManyDepositAddressInput = {
    id?: string
    txHash: string
    network: $Enums.ChainNetwork
    fromAddress: string
    amount: Decimal | DecimalJsLike | number | string
    tokenAddress?: string | null
    tokenSymbol: string
    status?: $Enums.ChainTransactionStatus
    confirmations?: number
    requiredConfirmations?: number
    detectedAt?: Date | string
    confirmedAt?: Date | string | null
    batchId?: string | null
  }

  export type ChainTransactionUpdateWithoutDepositAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    network?: EnumChainNetworkFieldUpdateOperationsInput | $Enums.ChainNetwork
    fromAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    status?: EnumChainTransactionStatusFieldUpdateOperationsInput | $Enums.ChainTransactionStatus
    confirmations?: IntFieldUpdateOperationsInput | number
    requiredConfirmations?: IntFieldUpdateOperationsInput | number
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChainTransactionUncheckedUpdateWithoutDepositAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    network?: EnumChainNetworkFieldUpdateOperationsInput | $Enums.ChainNetwork
    fromAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    status?: EnumChainTransactionStatusFieldUpdateOperationsInput | $Enums.ChainTransactionStatus
    confirmations?: IntFieldUpdateOperationsInput | number
    requiredConfirmations?: IntFieldUpdateOperationsInput | number
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChainTransactionUncheckedUpdateManyWithoutDepositAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    network?: EnumChainNetworkFieldUpdateOperationsInput | $Enums.ChainNetwork
    fromAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    status?: EnumChainTransactionStatusFieldUpdateOperationsInput | $Enums.ChainTransactionStatus
    confirmations?: IntFieldUpdateOperationsInput | number
    requiredConfirmations?: IntFieldUpdateOperationsInput | number
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}