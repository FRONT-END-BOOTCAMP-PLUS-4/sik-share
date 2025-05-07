
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model MemberRole
 * 
 */
export type MemberRole = $Result.DefaultSelection<Prisma.$MemberRolePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Menu
 * 
 */
export type Menu = $Result.DefaultSelection<Prisma.$MenuPayload>
/**
 * Model MenuImage
 * 
 */
export type MenuImage = $Result.DefaultSelection<Prisma.$MenuImagePayload>
/**
 * Model MenuLike
 * 
 */
export type MenuLike = $Result.DefaultSelection<Prisma.$MenuLikePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Members
 * const members = await prisma.member.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Members
   * const members = await prisma.member.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memberRole`: Exposes CRUD operations for the **MemberRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemberRoles
    * const memberRoles = await prisma.memberRole.findMany()
    * ```
    */
  get memberRole(): Prisma.MemberRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **Menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.MenuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menuImage`: Exposes CRUD operations for the **MenuImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuImages
    * const menuImages = await prisma.menuImage.findMany()
    * ```
    */
  get menuImage(): Prisma.MenuImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menuLike`: Exposes CRUD operations for the **MenuLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuLikes
    * const menuLikes = await prisma.menuLike.findMany()
    * ```
    */
  get menuLike(): Prisma.MenuLikeDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    Member: 'Member',
    Role: 'Role',
    MemberRole: 'MemberRole',
    Category: 'Category',
    Menu: 'Menu',
    MenuImage: 'MenuImage',
    MenuLike: 'MenuLike'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "member" | "role" | "memberRole" | "category" | "menu" | "menuImage" | "menuLike"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      MemberRole: {
        payload: Prisma.$MemberRolePayload<ExtArgs>
        fields: Prisma.MemberRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRolePayload>
          }
          findFirst: {
            args: Prisma.MemberRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRolePayload>
          }
          findMany: {
            args: Prisma.MemberRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRolePayload>[]
          }
          create: {
            args: Prisma.MemberRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRolePayload>
          }
          createMany: {
            args: Prisma.MemberRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRolePayload>[]
          }
          delete: {
            args: Prisma.MemberRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRolePayload>
          }
          update: {
            args: Prisma.MemberRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRolePayload>
          }
          deleteMany: {
            args: Prisma.MemberRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRolePayload>[]
          }
          upsert: {
            args: Prisma.MemberRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRolePayload>
          }
          aggregate: {
            args: Prisma.MemberRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemberRole>
          }
          groupBy: {
            args: Prisma.MemberRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberRoleCountArgs<ExtArgs>
            result: $Utils.Optional<MemberRoleCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Menu: {
        payload: Prisma.$MenuPayload<ExtArgs>
        fields: Prisma.MenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findFirst: {
            args: Prisma.MenuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findMany: {
            args: Prisma.MenuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          create: {
            args: Prisma.MenuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          createMany: {
            args: Prisma.MenuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          delete: {
            args: Prisma.MenuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          update: {
            args: Prisma.MenuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          deleteMany: {
            args: Prisma.MenuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          upsert: {
            args: Prisma.MenuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          aggregate: {
            args: Prisma.MenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu>
          }
          groupBy: {
            args: Prisma.MenuGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuCountArgs<ExtArgs>
            result: $Utils.Optional<MenuCountAggregateOutputType> | number
          }
        }
      }
      MenuImage: {
        payload: Prisma.$MenuImagePayload<ExtArgs>
        fields: Prisma.MenuImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuImagePayload>
          }
          findFirst: {
            args: Prisma.MenuImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuImagePayload>
          }
          findMany: {
            args: Prisma.MenuImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuImagePayload>[]
          }
          create: {
            args: Prisma.MenuImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuImagePayload>
          }
          createMany: {
            args: Prisma.MenuImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuImagePayload>[]
          }
          delete: {
            args: Prisma.MenuImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuImagePayload>
          }
          update: {
            args: Prisma.MenuImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuImagePayload>
          }
          deleteMany: {
            args: Prisma.MenuImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuImagePayload>[]
          }
          upsert: {
            args: Prisma.MenuImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuImagePayload>
          }
          aggregate: {
            args: Prisma.MenuImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuImage>
          }
          groupBy: {
            args: Prisma.MenuImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuImageCountArgs<ExtArgs>
            result: $Utils.Optional<MenuImageCountAggregateOutputType> | number
          }
        }
      }
      MenuLike: {
        payload: Prisma.$MenuLikePayload<ExtArgs>
        fields: Prisma.MenuLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuLikePayload>
          }
          findFirst: {
            args: Prisma.MenuLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuLikePayload>
          }
          findMany: {
            args: Prisma.MenuLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuLikePayload>[]
          }
          create: {
            args: Prisma.MenuLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuLikePayload>
          }
          createMany: {
            args: Prisma.MenuLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuLikePayload>[]
          }
          delete: {
            args: Prisma.MenuLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuLikePayload>
          }
          update: {
            args: Prisma.MenuLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuLikePayload>
          }
          deleteMany: {
            args: Prisma.MenuLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuLikePayload>[]
          }
          upsert: {
            args: Prisma.MenuLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuLikePayload>
          }
          aggregate: {
            args: Prisma.MenuLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuLike>
          }
          groupBy: {
            args: Prisma.MenuLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuLikeCountArgs<ExtArgs>
            result: $Utils.Optional<MenuLikeCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    member?: MemberOmit
    role?: RoleOmit
    memberRole?: MemberRoleOmit
    category?: CategoryOmit
    menu?: MenuOmit
    menuImage?: MenuImageOmit
    menuLike?: MenuLikeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    categories: number
    memberRoles: number
    menuLikes: number
    menus: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | MemberCountOutputTypeCountCategoriesArgs
    memberRoles?: boolean | MemberCountOutputTypeCountMemberRolesArgs
    menuLikes?: boolean | MemberCountOutputTypeCountMenuLikesArgs
    menus?: boolean | MemberCountOutputTypeCountMenusArgs
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountMemberRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberRoleWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountMenuLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuLikeWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    memberRoles: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberRoles?: boolean | RoleCountOutputTypeCountMemberRolesArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountMemberRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberRoleWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    menus: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menus?: boolean | CategoryCountOutputTypeCountMenusArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
  }


  /**
   * Count Type MenuCountOutputType
   */

  export type MenuCountOutputType = {
    images: number
    likes: number
  }

  export type MenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | MenuCountOutputTypeCountImagesArgs
    likes?: boolean | MenuCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCountOutputType
     */
    select?: MenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuImageWhereInput
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuLikeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    password: string | null
    profileImage: string | null
  }

  export type MemberMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    password: string | null
    profileImage: string | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    email: number
    username: number
    phone: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    password: number
    profileImage: number
    _all: number
  }


  export type MemberMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    password?: true
    profileImage?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    password?: true
    profileImage?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    password?: true
    profileImage?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: string
    email: string
    username: string
    phone: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    password: string
    profileImage: string | null
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    password?: boolean
    profileImage?: boolean
    categories?: boolean | Member$categoriesArgs<ExtArgs>
    memberRoles?: boolean | Member$memberRolesArgs<ExtArgs>
    menuLikes?: boolean | Member$menuLikesArgs<ExtArgs>
    menus?: boolean | Member$menusArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    password?: boolean
    profileImage?: boolean
  }, ExtArgs["result"]["member"]>

  export type MemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    password?: boolean
    profileImage?: boolean
  }, ExtArgs["result"]["member"]>

  export type MemberSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    password?: boolean
    profileImage?: boolean
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "phone" | "createdAt" | "updatedAt" | "deletedAt" | "password" | "profileImage", ExtArgs["result"]["member"]>
  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Member$categoriesArgs<ExtArgs>
    memberRoles?: boolean | Member$memberRolesArgs<ExtArgs>
    menuLikes?: boolean | Member$menuLikesArgs<ExtArgs>
    menus?: boolean | Member$menusArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      memberRoles: Prisma.$MemberRolePayload<ExtArgs>[]
      menuLikes: Prisma.$MenuLikePayload<ExtArgs>[]
      menus: Prisma.$MenuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      phone: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      password: string
      profileImage: string | null
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {MemberCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members and returns the data updated in the database.
     * @param {MemberUpdateManyAndReturnArgs} args - Arguments to update many Members.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.updateManyAndReturn({
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
    updateManyAndReturn<T extends MemberUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
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
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends Member$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Member$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberRoles<T extends Member$memberRolesArgs<ExtArgs> = {}>(args?: Subset<T, Member$memberRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    menuLikes<T extends Member$menuLikesArgs<ExtArgs> = {}>(args?: Subset<T, Member$menuLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    menus<T extends Member$menusArgs<ExtArgs> = {}>(args?: Subset<T, Member$menusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Member model
   */
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'String'>
    readonly email: FieldRef<"Member", 'String'>
    readonly username: FieldRef<"Member", 'String'>
    readonly phone: FieldRef<"Member", 'String'>
    readonly createdAt: FieldRef<"Member", 'DateTime'>
    readonly updatedAt: FieldRef<"Member", 'DateTime'>
    readonly deletedAt: FieldRef<"Member", 'DateTime'>
    readonly password: FieldRef<"Member", 'String'>
    readonly profileImage: FieldRef<"Member", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member createManyAndReturn
   */
  export type MemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member updateManyAndReturn
   */
  export type MemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Member.categories
   */
  export type Member$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Member.memberRoles
   */
  export type Member$memberRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberRoleInclude<ExtArgs> | null
    where?: MemberRoleWhereInput
    orderBy?: MemberRoleOrderByWithRelationInput | MemberRoleOrderByWithRelationInput[]
    cursor?: MemberRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberRoleScalarFieldEnum | MemberRoleScalarFieldEnum[]
  }

  /**
   * Member.menuLikes
   */
  export type Member$menuLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuLike
     */
    select?: MenuLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuLike
     */
    omit?: MenuLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuLikeInclude<ExtArgs> | null
    where?: MenuLikeWhereInput
    orderBy?: MenuLikeOrderByWithRelationInput | MenuLikeOrderByWithRelationInput[]
    cursor?: MenuLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuLikeScalarFieldEnum | MenuLikeScalarFieldEnum[]
  }

  /**
   * Member.menus
   */
  export type Member$menusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    cursor?: MenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    description: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    description: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    description: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    description?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    description?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    description?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    description: string | null
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    description?: boolean
    memberRoles?: boolean | Role$memberRolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    description?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    description?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    description?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "description", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberRoles?: boolean | Role$memberRolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      memberRoles: Prisma.$MemberRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      description: string | null
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    memberRoles<T extends Role$memberRolesArgs<ExtArgs> = {}>(args?: Subset<T, Role$memberRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly description: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.memberRoles
   */
  export type Role$memberRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberRoleInclude<ExtArgs> | null
    where?: MemberRoleWhereInput
    orderBy?: MemberRoleOrderByWithRelationInput | MemberRoleOrderByWithRelationInput[]
    cursor?: MemberRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberRoleScalarFieldEnum | MemberRoleScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model MemberRole
   */

  export type AggregateMemberRole = {
    _count: MemberRoleCountAggregateOutputType | null
    _avg: MemberRoleAvgAggregateOutputType | null
    _sum: MemberRoleSumAggregateOutputType | null
    _min: MemberRoleMinAggregateOutputType | null
    _max: MemberRoleMaxAggregateOutputType | null
  }

  export type MemberRoleAvgAggregateOutputType = {
    roleId: number | null
  }

  export type MemberRoleSumAggregateOutputType = {
    roleId: number | null
  }

  export type MemberRoleMinAggregateOutputType = {
    memberId: string | null
    roleId: number | null
    createdAt: Date | null
  }

  export type MemberRoleMaxAggregateOutputType = {
    memberId: string | null
    roleId: number | null
    createdAt: Date | null
  }

  export type MemberRoleCountAggregateOutputType = {
    memberId: number
    roleId: number
    createdAt: number
    _all: number
  }


  export type MemberRoleAvgAggregateInputType = {
    roleId?: true
  }

  export type MemberRoleSumAggregateInputType = {
    roleId?: true
  }

  export type MemberRoleMinAggregateInputType = {
    memberId?: true
    roleId?: true
    createdAt?: true
  }

  export type MemberRoleMaxAggregateInputType = {
    memberId?: true
    roleId?: true
    createdAt?: true
  }

  export type MemberRoleCountAggregateInputType = {
    memberId?: true
    roleId?: true
    createdAt?: true
    _all?: true
  }

  export type MemberRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberRole to aggregate.
     */
    where?: MemberRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberRoles to fetch.
     */
    orderBy?: MemberRoleOrderByWithRelationInput | MemberRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemberRoles
    **/
    _count?: true | MemberRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberRoleMaxAggregateInputType
  }

  export type GetMemberRoleAggregateType<T extends MemberRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateMemberRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemberRole[P]>
      : GetScalarType<T[P], AggregateMemberRole[P]>
  }




  export type MemberRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberRoleWhereInput
    orderBy?: MemberRoleOrderByWithAggregationInput | MemberRoleOrderByWithAggregationInput[]
    by: MemberRoleScalarFieldEnum[] | MemberRoleScalarFieldEnum
    having?: MemberRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberRoleCountAggregateInputType | true
    _avg?: MemberRoleAvgAggregateInputType
    _sum?: MemberRoleSumAggregateInputType
    _min?: MemberRoleMinAggregateInputType
    _max?: MemberRoleMaxAggregateInputType
  }

  export type MemberRoleGroupByOutputType = {
    memberId: string
    roleId: number
    createdAt: Date
    _count: MemberRoleCountAggregateOutputType | null
    _avg: MemberRoleAvgAggregateOutputType | null
    _sum: MemberRoleSumAggregateOutputType | null
    _min: MemberRoleMinAggregateOutputType | null
    _max: MemberRoleMaxAggregateOutputType | null
  }

  type GetMemberRoleGroupByPayload<T extends MemberRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberRoleGroupByOutputType[P]>
            : GetScalarType<T[P], MemberRoleGroupByOutputType[P]>
        }
      >
    >


  export type MemberRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    memberId?: boolean
    roleId?: boolean
    createdAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberRole"]>

  export type MemberRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    memberId?: boolean
    roleId?: boolean
    createdAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberRole"]>

  export type MemberRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    memberId?: boolean
    roleId?: boolean
    createdAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberRole"]>

  export type MemberRoleSelectScalar = {
    memberId?: boolean
    roleId?: boolean
    createdAt?: boolean
  }

  export type MemberRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"memberId" | "roleId" | "createdAt", ExtArgs["result"]["memberRole"]>
  export type MemberRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type MemberRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type MemberRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $MemberRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemberRole"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      memberId: string
      roleId: number
      createdAt: Date
    }, ExtArgs["result"]["memberRole"]>
    composites: {}
  }

  type MemberRoleGetPayload<S extends boolean | null | undefined | MemberRoleDefaultArgs> = $Result.GetResult<Prisma.$MemberRolePayload, S>

  type MemberRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberRoleCountAggregateInputType | true
    }

  export interface MemberRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemberRole'], meta: { name: 'MemberRole' } }
    /**
     * Find zero or one MemberRole that matches the filter.
     * @param {MemberRoleFindUniqueArgs} args - Arguments to find a MemberRole
     * @example
     * // Get one MemberRole
     * const memberRole = await prisma.memberRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberRoleFindUniqueArgs>(args: SelectSubset<T, MemberRoleFindUniqueArgs<ExtArgs>>): Prisma__MemberRoleClient<$Result.GetResult<Prisma.$MemberRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MemberRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberRoleFindUniqueOrThrowArgs} args - Arguments to find a MemberRole
     * @example
     * // Get one MemberRole
     * const memberRole = await prisma.memberRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberRoleClient<$Result.GetResult<Prisma.$MemberRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberRoleFindFirstArgs} args - Arguments to find a MemberRole
     * @example
     * // Get one MemberRole
     * const memberRole = await prisma.memberRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberRoleFindFirstArgs>(args?: SelectSubset<T, MemberRoleFindFirstArgs<ExtArgs>>): Prisma__MemberRoleClient<$Result.GetResult<Prisma.$MemberRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberRoleFindFirstOrThrowArgs} args - Arguments to find a MemberRole
     * @example
     * // Get one MemberRole
     * const memberRole = await prisma.memberRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberRoleClient<$Result.GetResult<Prisma.$MemberRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MemberRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemberRoles
     * const memberRoles = await prisma.memberRole.findMany()
     * 
     * // Get first 10 MemberRoles
     * const memberRoles = await prisma.memberRole.findMany({ take: 10 })
     * 
     * // Only select the `memberId`
     * const memberRoleWithMemberIdOnly = await prisma.memberRole.findMany({ select: { memberId: true } })
     * 
     */
    findMany<T extends MemberRoleFindManyArgs>(args?: SelectSubset<T, MemberRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MemberRole.
     * @param {MemberRoleCreateArgs} args - Arguments to create a MemberRole.
     * @example
     * // Create one MemberRole
     * const MemberRole = await prisma.memberRole.create({
     *   data: {
     *     // ... data to create a MemberRole
     *   }
     * })
     * 
     */
    create<T extends MemberRoleCreateArgs>(args: SelectSubset<T, MemberRoleCreateArgs<ExtArgs>>): Prisma__MemberRoleClient<$Result.GetResult<Prisma.$MemberRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MemberRoles.
     * @param {MemberRoleCreateManyArgs} args - Arguments to create many MemberRoles.
     * @example
     * // Create many MemberRoles
     * const memberRole = await prisma.memberRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberRoleCreateManyArgs>(args?: SelectSubset<T, MemberRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MemberRoles and returns the data saved in the database.
     * @param {MemberRoleCreateManyAndReturnArgs} args - Arguments to create many MemberRoles.
     * @example
     * // Create many MemberRoles
     * const memberRole = await prisma.memberRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MemberRoles and only return the `memberId`
     * const memberRoleWithMemberIdOnly = await prisma.memberRole.createManyAndReturn({
     *   select: { memberId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MemberRole.
     * @param {MemberRoleDeleteArgs} args - Arguments to delete one MemberRole.
     * @example
     * // Delete one MemberRole
     * const MemberRole = await prisma.memberRole.delete({
     *   where: {
     *     // ... filter to delete one MemberRole
     *   }
     * })
     * 
     */
    delete<T extends MemberRoleDeleteArgs>(args: SelectSubset<T, MemberRoleDeleteArgs<ExtArgs>>): Prisma__MemberRoleClient<$Result.GetResult<Prisma.$MemberRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MemberRole.
     * @param {MemberRoleUpdateArgs} args - Arguments to update one MemberRole.
     * @example
     * // Update one MemberRole
     * const memberRole = await prisma.memberRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberRoleUpdateArgs>(args: SelectSubset<T, MemberRoleUpdateArgs<ExtArgs>>): Prisma__MemberRoleClient<$Result.GetResult<Prisma.$MemberRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MemberRoles.
     * @param {MemberRoleDeleteManyArgs} args - Arguments to filter MemberRoles to delete.
     * @example
     * // Delete a few MemberRoles
     * const { count } = await prisma.memberRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberRoleDeleteManyArgs>(args?: SelectSubset<T, MemberRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemberRoles
     * const memberRole = await prisma.memberRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberRoleUpdateManyArgs>(args: SelectSubset<T, MemberRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberRoles and returns the data updated in the database.
     * @param {MemberRoleUpdateManyAndReturnArgs} args - Arguments to update many MemberRoles.
     * @example
     * // Update many MemberRoles
     * const memberRole = await prisma.memberRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MemberRoles and only return the `memberId`
     * const memberRoleWithMemberIdOnly = await prisma.memberRole.updateManyAndReturn({
     *   select: { memberId: true },
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
    updateManyAndReturn<T extends MemberRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MemberRole.
     * @param {MemberRoleUpsertArgs} args - Arguments to update or create a MemberRole.
     * @example
     * // Update or create a MemberRole
     * const memberRole = await prisma.memberRole.upsert({
     *   create: {
     *     // ... data to create a MemberRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemberRole we want to update
     *   }
     * })
     */
    upsert<T extends MemberRoleUpsertArgs>(args: SelectSubset<T, MemberRoleUpsertArgs<ExtArgs>>): Prisma__MemberRoleClient<$Result.GetResult<Prisma.$MemberRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MemberRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberRoleCountArgs} args - Arguments to filter MemberRoles to count.
     * @example
     * // Count the number of MemberRoles
     * const count = await prisma.memberRole.count({
     *   where: {
     *     // ... the filter for the MemberRoles we want to count
     *   }
     * })
    **/
    count<T extends MemberRoleCountArgs>(
      args?: Subset<T, MemberRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemberRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberRoleAggregateArgs>(args: Subset<T, MemberRoleAggregateArgs>): Prisma.PrismaPromise<GetMemberRoleAggregateType<T>>

    /**
     * Group by MemberRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberRoleGroupByArgs} args - Group by arguments.
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
      T extends MemberRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberRoleGroupByArgs['orderBy'] }
        : { orderBy?: MemberRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemberRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemberRole model
   */
  readonly fields: MemberRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemberRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MemberRole model
   */
  interface MemberRoleFieldRefs {
    readonly memberId: FieldRef<"MemberRole", 'String'>
    readonly roleId: FieldRef<"MemberRole", 'Int'>
    readonly createdAt: FieldRef<"MemberRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MemberRole findUnique
   */
  export type MemberRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberRoleInclude<ExtArgs> | null
    /**
     * Filter, which MemberRole to fetch.
     */
    where: MemberRoleWhereUniqueInput
  }

  /**
   * MemberRole findUniqueOrThrow
   */
  export type MemberRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberRoleInclude<ExtArgs> | null
    /**
     * Filter, which MemberRole to fetch.
     */
    where: MemberRoleWhereUniqueInput
  }

  /**
   * MemberRole findFirst
   */
  export type MemberRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberRoleInclude<ExtArgs> | null
    /**
     * Filter, which MemberRole to fetch.
     */
    where?: MemberRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberRoles to fetch.
     */
    orderBy?: MemberRoleOrderByWithRelationInput | MemberRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberRoles.
     */
    cursor?: MemberRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberRoles.
     */
    distinct?: MemberRoleScalarFieldEnum | MemberRoleScalarFieldEnum[]
  }

  /**
   * MemberRole findFirstOrThrow
   */
  export type MemberRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberRoleInclude<ExtArgs> | null
    /**
     * Filter, which MemberRole to fetch.
     */
    where?: MemberRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberRoles to fetch.
     */
    orderBy?: MemberRoleOrderByWithRelationInput | MemberRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberRoles.
     */
    cursor?: MemberRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberRoles.
     */
    distinct?: MemberRoleScalarFieldEnum | MemberRoleScalarFieldEnum[]
  }

  /**
   * MemberRole findMany
   */
  export type MemberRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberRoleInclude<ExtArgs> | null
    /**
     * Filter, which MemberRoles to fetch.
     */
    where?: MemberRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberRoles to fetch.
     */
    orderBy?: MemberRoleOrderByWithRelationInput | MemberRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemberRoles.
     */
    cursor?: MemberRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberRoles.
     */
    skip?: number
    distinct?: MemberRoleScalarFieldEnum | MemberRoleScalarFieldEnum[]
  }

  /**
   * MemberRole create
   */
  export type MemberRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a MemberRole.
     */
    data: XOR<MemberRoleCreateInput, MemberRoleUncheckedCreateInput>
  }

  /**
   * MemberRole createMany
   */
  export type MemberRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemberRoles.
     */
    data: MemberRoleCreateManyInput | MemberRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemberRole createManyAndReturn
   */
  export type MemberRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * The data used to create many MemberRoles.
     */
    data: MemberRoleCreateManyInput | MemberRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemberRole update
   */
  export type MemberRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a MemberRole.
     */
    data: XOR<MemberRoleUpdateInput, MemberRoleUncheckedUpdateInput>
    /**
     * Choose, which MemberRole to update.
     */
    where: MemberRoleWhereUniqueInput
  }

  /**
   * MemberRole updateMany
   */
  export type MemberRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemberRoles.
     */
    data: XOR<MemberRoleUpdateManyMutationInput, MemberRoleUncheckedUpdateManyInput>
    /**
     * Filter which MemberRoles to update
     */
    where?: MemberRoleWhereInput
    /**
     * Limit how many MemberRoles to update.
     */
    limit?: number
  }

  /**
   * MemberRole updateManyAndReturn
   */
  export type MemberRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * The data used to update MemberRoles.
     */
    data: XOR<MemberRoleUpdateManyMutationInput, MemberRoleUncheckedUpdateManyInput>
    /**
     * Filter which MemberRoles to update
     */
    where?: MemberRoleWhereInput
    /**
     * Limit how many MemberRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemberRole upsert
   */
  export type MemberRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the MemberRole to update in case it exists.
     */
    where: MemberRoleWhereUniqueInput
    /**
     * In case the MemberRole found by the `where` argument doesn't exist, create a new MemberRole with this data.
     */
    create: XOR<MemberRoleCreateInput, MemberRoleUncheckedCreateInput>
    /**
     * In case the MemberRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberRoleUpdateInput, MemberRoleUncheckedUpdateInput>
  }

  /**
   * MemberRole delete
   */
  export type MemberRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberRoleInclude<ExtArgs> | null
    /**
     * Filter which MemberRole to delete.
     */
    where: MemberRoleWhereUniqueInput
  }

  /**
   * MemberRole deleteMany
   */
  export type MemberRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberRoles to delete
     */
    where?: MemberRoleWhereInput
    /**
     * Limit how many MemberRoles to delete.
     */
    limit?: number
  }

  /**
   * MemberRole without action
   */
  export type MemberRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberRoleInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    is_public: boolean | null
    order: number | null
    regMemberId: string | null
    createdAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    is_public: boolean | null
    order: number | null
    regMemberId: string | null
    createdAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    is_public: number
    order: number
    regMemberId: number
    createdAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    order?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    is_public?: true
    order?: true
    regMemberId?: true
    createdAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    is_public?: true
    order?: true
    regMemberId?: true
    createdAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    is_public?: true
    order?: true
    regMemberId?: true
    createdAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    is_public: boolean
    order: number
    regMemberId: string
    createdAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_public?: boolean
    order?: boolean
    regMemberId?: boolean
    createdAt?: boolean
    regMember?: boolean | MemberDefaultArgs<ExtArgs>
    menus?: boolean | Category$menusArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_public?: boolean
    order?: boolean
    regMemberId?: boolean
    createdAt?: boolean
    regMember?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_public?: boolean
    order?: boolean
    regMemberId?: boolean
    createdAt?: boolean
    regMember?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    is_public?: boolean
    order?: boolean
    regMemberId?: boolean
    createdAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "is_public" | "order" | "regMemberId" | "createdAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regMember?: boolean | MemberDefaultArgs<ExtArgs>
    menus?: boolean | Category$menusArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regMember?: boolean | MemberDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regMember?: boolean | MemberDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      regMember: Prisma.$MemberPayload<ExtArgs>
      menus: Prisma.$MenuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      is_public: boolean
      order: number
      regMemberId: string
      createdAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    regMember<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menus<T extends Category$menusArgs<ExtArgs> = {}>(args?: Subset<T, Category$menusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly is_public: FieldRef<"Category", 'Boolean'>
    readonly order: FieldRef<"Category", 'Int'>
    readonly regMemberId: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.menus
   */
  export type Category$menusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    cursor?: MenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Menu
   */

  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    id: number | null
    price: number | null
    categoryId: number | null
  }

  export type MenuSumAggregateOutputType = {
    id: number | null
    price: number | null
    categoryId: number | null
  }

  export type MenuMinAggregateOutputType = {
    id: number | null
    korName: string | null
    engName: string | null
    price: number | null
    isPublic: boolean | null
    hasIce: boolean | null
    hasHot: boolean | null
    description: string | null
    createdAt: Date | null
    categoryId: number | null
    regMemberId: string | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type MenuMaxAggregateOutputType = {
    id: number | null
    korName: string | null
    engName: string | null
    price: number | null
    isPublic: boolean | null
    hasIce: boolean | null
    hasHot: boolean | null
    description: string | null
    createdAt: Date | null
    categoryId: number | null
    regMemberId: string | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type MenuCountAggregateOutputType = {
    id: number
    korName: number
    engName: number
    price: number
    isPublic: number
    hasIce: number
    hasHot: number
    description: number
    createdAt: number
    categoryId: number
    regMemberId: number
    deletedAt: number
    updatedAt: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    id?: true
    price?: true
    categoryId?: true
  }

  export type MenuSumAggregateInputType = {
    id?: true
    price?: true
    categoryId?: true
  }

  export type MenuMinAggregateInputType = {
    id?: true
    korName?: true
    engName?: true
    price?: true
    isPublic?: true
    hasIce?: true
    hasHot?: true
    description?: true
    createdAt?: true
    categoryId?: true
    regMemberId?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type MenuMaxAggregateInputType = {
    id?: true
    korName?: true
    engName?: true
    price?: true
    isPublic?: true
    hasIce?: true
    hasHot?: true
    description?: true
    createdAt?: true
    categoryId?: true
    regMemberId?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type MenuCountAggregateInputType = {
    id?: true
    korName?: true
    engName?: true
    price?: true
    isPublic?: true
    hasIce?: true
    hasHot?: true
    description?: true
    createdAt?: true
    categoryId?: true
    regMemberId?: true
    deletedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menu to aggregate.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }




  export type MenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithAggregationInput | MenuOrderByWithAggregationInput[]
    by: MenuScalarFieldEnum[] | MenuScalarFieldEnum
    having?: MenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }

  export type MenuGroupByOutputType = {
    id: number
    korName: string
    engName: string
    price: number
    isPublic: boolean
    hasIce: boolean
    hasHot: boolean
    description: string | null
    createdAt: Date
    categoryId: number
    regMemberId: string
    deletedAt: Date | null
    updatedAt: Date | null
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends MenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      >
    >


  export type MenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    korName?: boolean
    engName?: boolean
    price?: boolean
    isPublic?: boolean
    hasIce?: boolean
    hasHot?: boolean
    description?: boolean
    createdAt?: boolean
    categoryId?: boolean
    regMemberId?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    images?: boolean | Menu$imagesArgs<ExtArgs>
    likes?: boolean | Menu$likesArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    regMember?: boolean | MemberDefaultArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    korName?: boolean
    engName?: boolean
    price?: boolean
    isPublic?: boolean
    hasIce?: boolean
    hasHot?: boolean
    description?: boolean
    createdAt?: boolean
    categoryId?: boolean
    regMemberId?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    regMember?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    korName?: boolean
    engName?: boolean
    price?: boolean
    isPublic?: boolean
    hasIce?: boolean
    hasHot?: boolean
    description?: boolean
    createdAt?: boolean
    categoryId?: boolean
    regMemberId?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    regMember?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectScalar = {
    id?: boolean
    korName?: boolean
    engName?: boolean
    price?: boolean
    isPublic?: boolean
    hasIce?: boolean
    hasHot?: boolean
    description?: boolean
    createdAt?: boolean
    categoryId?: boolean
    regMemberId?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }

  export type MenuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "korName" | "engName" | "price" | "isPublic" | "hasIce" | "hasHot" | "description" | "createdAt" | "categoryId" | "regMemberId" | "deletedAt" | "updatedAt", ExtArgs["result"]["menu"]>
  export type MenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Menu$imagesArgs<ExtArgs>
    likes?: boolean | Menu$likesArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    regMember?: boolean | MemberDefaultArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    regMember?: boolean | MemberDefaultArgs<ExtArgs>
  }
  export type MenuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    regMember?: boolean | MemberDefaultArgs<ExtArgs>
  }

  export type $MenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Menu"
    objects: {
      images: Prisma.$MenuImagePayload<ExtArgs>[]
      likes: Prisma.$MenuLikePayload<ExtArgs>[]
      category: Prisma.$CategoryPayload<ExtArgs>
      regMember: Prisma.$MemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      korName: string
      engName: string
      price: number
      isPublic: boolean
      hasIce: boolean
      hasHot: boolean
      description: string | null
      createdAt: Date
      categoryId: number
      regMemberId: string
      deletedAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["menu"]>
    composites: {}
  }

  type MenuGetPayload<S extends boolean | null | undefined | MenuDefaultArgs> = $Result.GetResult<Prisma.$MenuPayload, S>

  type MenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuCountAggregateInputType | true
    }

  export interface MenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Menu'], meta: { name: 'Menu' } }
    /**
     * Find zero or one Menu that matches the filter.
     * @param {MenuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuFindUniqueArgs>(args: SelectSubset<T, MenuFindUniqueArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Menu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuFindFirstArgs>(args?: SelectSubset<T, MenuFindFirstArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuWithIdOnly = await prisma.menu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuFindManyArgs>(args?: SelectSubset<T, MenuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Menu.
     * @param {MenuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
     */
    create<T extends MenuCreateArgs>(args: SelectSubset<T, MenuCreateArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Menus.
     * @param {MenuCreateManyArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuCreateManyArgs>(args?: SelectSubset<T, MenuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Menus and returns the data saved in the database.
     * @param {MenuCreateManyAndReturnArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Menus and only return the `id`
     * const menuWithIdOnly = await prisma.menu.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Menu.
     * @param {MenuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
     */
    delete<T extends MenuDeleteArgs>(args: SelectSubset<T, MenuDeleteArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Menu.
     * @param {MenuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuUpdateArgs>(args: SelectSubset<T, MenuUpdateArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Menus.
     * @param {MenuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuDeleteManyArgs>(args?: SelectSubset<T, MenuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuUpdateManyArgs>(args: SelectSubset<T, MenuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus and returns the data updated in the database.
     * @param {MenuUpdateManyAndReturnArgs} args - Arguments to update many Menus.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Menus and only return the `id`
     * const menuWithIdOnly = await prisma.menu.updateManyAndReturn({
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
    updateManyAndReturn<T extends MenuUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Menu.
     * @param {MenuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
     */
    upsert<T extends MenuUpsertArgs>(args: SelectSubset<T, MenuUpsertArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends MenuCountArgs>(
      args?: Subset<T, MenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupByArgs} args - Group by arguments.
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
      T extends MenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuGroupByArgs['orderBy'] }
        : { orderBy?: MenuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Menu model
   */
  readonly fields: MenuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Menu$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Menu$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Menu$likesArgs<ExtArgs> = {}>(args?: Subset<T, Menu$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    regMember<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Menu model
   */
  interface MenuFieldRefs {
    readonly id: FieldRef<"Menu", 'Int'>
    readonly korName: FieldRef<"Menu", 'String'>
    readonly engName: FieldRef<"Menu", 'String'>
    readonly price: FieldRef<"Menu", 'Float'>
    readonly isPublic: FieldRef<"Menu", 'Boolean'>
    readonly hasIce: FieldRef<"Menu", 'Boolean'>
    readonly hasHot: FieldRef<"Menu", 'Boolean'>
    readonly description: FieldRef<"Menu", 'String'>
    readonly createdAt: FieldRef<"Menu", 'DateTime'>
    readonly categoryId: FieldRef<"Menu", 'Int'>
    readonly regMemberId: FieldRef<"Menu", 'String'>
    readonly deletedAt: FieldRef<"Menu", 'DateTime'>
    readonly updatedAt: FieldRef<"Menu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Menu findUnique
   */
  export type MenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findUniqueOrThrow
   */
  export type MenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findFirst
   */
  export type MenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findFirstOrThrow
   */
  export type MenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findMany
   */
  export type MenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menus to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu create
   */
  export type MenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to create a Menu.
     */
    data: XOR<MenuCreateInput, MenuUncheckedCreateInput>
  }

  /**
   * Menu createMany
   */
  export type MenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Menus.
     */
    data: MenuCreateManyInput | MenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Menu createManyAndReturn
   */
  export type MenuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * The data used to create many Menus.
     */
    data: MenuCreateManyInput | MenuCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Menu update
   */
  export type MenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to update a Menu.
     */
    data: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
    /**
     * Choose, which Menu to update.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu updateMany
   */
  export type MenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Menus.
     */
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    /**
     * Filter which Menus to update
     */
    where?: MenuWhereInput
    /**
     * Limit how many Menus to update.
     */
    limit?: number
  }

  /**
   * Menu updateManyAndReturn
   */
  export type MenuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * The data used to update Menus.
     */
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    /**
     * Filter which Menus to update
     */
    where?: MenuWhereInput
    /**
     * Limit how many Menus to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Menu upsert
   */
  export type MenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The filter to search for the Menu to update in case it exists.
     */
    where: MenuWhereUniqueInput
    /**
     * In case the Menu found by the `where` argument doesn't exist, create a new Menu with this data.
     */
    create: XOR<MenuCreateInput, MenuUncheckedCreateInput>
    /**
     * In case the Menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
  }

  /**
   * Menu delete
   */
  export type MenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter which Menu to delete.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu deleteMany
   */
  export type MenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menus to delete
     */
    where?: MenuWhereInput
    /**
     * Limit how many Menus to delete.
     */
    limit?: number
  }

  /**
   * Menu.images
   */
  export type Menu$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuImage
     */
    select?: MenuImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuImage
     */
    omit?: MenuImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuImageInclude<ExtArgs> | null
    where?: MenuImageWhereInput
    orderBy?: MenuImageOrderByWithRelationInput | MenuImageOrderByWithRelationInput[]
    cursor?: MenuImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuImageScalarFieldEnum | MenuImageScalarFieldEnum[]
  }

  /**
   * Menu.likes
   */
  export type Menu$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuLike
     */
    select?: MenuLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuLike
     */
    omit?: MenuLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuLikeInclude<ExtArgs> | null
    where?: MenuLikeWhereInput
    orderBy?: MenuLikeOrderByWithRelationInput | MenuLikeOrderByWithRelationInput[]
    cursor?: MenuLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuLikeScalarFieldEnum | MenuLikeScalarFieldEnum[]
  }

  /**
   * Menu without action
   */
  export type MenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
  }


  /**
   * Model MenuImage
   */

  export type AggregateMenuImage = {
    _count: MenuImageCountAggregateOutputType | null
    _avg: MenuImageAvgAggregateOutputType | null
    _sum: MenuImageSumAggregateOutputType | null
    _min: MenuImageMinAggregateOutputType | null
    _max: MenuImageMaxAggregateOutputType | null
  }

  export type MenuImageAvgAggregateOutputType = {
    id: number | null
    menuId: number | null
  }

  export type MenuImageSumAggregateOutputType = {
    id: number | null
    menuId: number | null
  }

  export type MenuImageMinAggregateOutputType = {
    id: number | null
    name: string | null
    isDefault: boolean | null
    menuId: number | null
  }

  export type MenuImageMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isDefault: boolean | null
    menuId: number | null
  }

  export type MenuImageCountAggregateOutputType = {
    id: number
    name: number
    isDefault: number
    menuId: number
    _all: number
  }


  export type MenuImageAvgAggregateInputType = {
    id?: true
    menuId?: true
  }

  export type MenuImageSumAggregateInputType = {
    id?: true
    menuId?: true
  }

  export type MenuImageMinAggregateInputType = {
    id?: true
    name?: true
    isDefault?: true
    menuId?: true
  }

  export type MenuImageMaxAggregateInputType = {
    id?: true
    name?: true
    isDefault?: true
    menuId?: true
  }

  export type MenuImageCountAggregateInputType = {
    id?: true
    name?: true
    isDefault?: true
    menuId?: true
    _all?: true
  }

  export type MenuImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuImage to aggregate.
     */
    where?: MenuImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuImages to fetch.
     */
    orderBy?: MenuImageOrderByWithRelationInput | MenuImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuImages
    **/
    _count?: true | MenuImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuImageMaxAggregateInputType
  }

  export type GetMenuImageAggregateType<T extends MenuImageAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuImage[P]>
      : GetScalarType<T[P], AggregateMenuImage[P]>
  }




  export type MenuImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuImageWhereInput
    orderBy?: MenuImageOrderByWithAggregationInput | MenuImageOrderByWithAggregationInput[]
    by: MenuImageScalarFieldEnum[] | MenuImageScalarFieldEnum
    having?: MenuImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuImageCountAggregateInputType | true
    _avg?: MenuImageAvgAggregateInputType
    _sum?: MenuImageSumAggregateInputType
    _min?: MenuImageMinAggregateInputType
    _max?: MenuImageMaxAggregateInputType
  }

  export type MenuImageGroupByOutputType = {
    id: number
    name: string
    isDefault: boolean
    menuId: number
    _count: MenuImageCountAggregateOutputType | null
    _avg: MenuImageAvgAggregateOutputType | null
    _sum: MenuImageSumAggregateOutputType | null
    _min: MenuImageMinAggregateOutputType | null
    _max: MenuImageMaxAggregateOutputType | null
  }

  type GetMenuImageGroupByPayload<T extends MenuImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuImageGroupByOutputType[P]>
            : GetScalarType<T[P], MenuImageGroupByOutputType[P]>
        }
      >
    >


  export type MenuImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isDefault?: boolean
    menuId?: boolean
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuImage"]>

  export type MenuImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isDefault?: boolean
    menuId?: boolean
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuImage"]>

  export type MenuImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isDefault?: boolean
    menuId?: boolean
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuImage"]>

  export type MenuImageSelectScalar = {
    id?: boolean
    name?: boolean
    isDefault?: boolean
    menuId?: boolean
  }

  export type MenuImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isDefault" | "menuId", ExtArgs["result"]["menuImage"]>
  export type MenuImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }
  export type MenuImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }
  export type MenuImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }

  export type $MenuImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuImage"
    objects: {
      menu: Prisma.$MenuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      isDefault: boolean
      menuId: number
    }, ExtArgs["result"]["menuImage"]>
    composites: {}
  }

  type MenuImageGetPayload<S extends boolean | null | undefined | MenuImageDefaultArgs> = $Result.GetResult<Prisma.$MenuImagePayload, S>

  type MenuImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuImageCountAggregateInputType | true
    }

  export interface MenuImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuImage'], meta: { name: 'MenuImage' } }
    /**
     * Find zero or one MenuImage that matches the filter.
     * @param {MenuImageFindUniqueArgs} args - Arguments to find a MenuImage
     * @example
     * // Get one MenuImage
     * const menuImage = await prisma.menuImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuImageFindUniqueArgs>(args: SelectSubset<T, MenuImageFindUniqueArgs<ExtArgs>>): Prisma__MenuImageClient<$Result.GetResult<Prisma.$MenuImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenuImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuImageFindUniqueOrThrowArgs} args - Arguments to find a MenuImage
     * @example
     * // Get one MenuImage
     * const menuImage = await prisma.menuImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuImageFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuImageClient<$Result.GetResult<Prisma.$MenuImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuImageFindFirstArgs} args - Arguments to find a MenuImage
     * @example
     * // Get one MenuImage
     * const menuImage = await prisma.menuImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuImageFindFirstArgs>(args?: SelectSubset<T, MenuImageFindFirstArgs<ExtArgs>>): Prisma__MenuImageClient<$Result.GetResult<Prisma.$MenuImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuImageFindFirstOrThrowArgs} args - Arguments to find a MenuImage
     * @example
     * // Get one MenuImage
     * const menuImage = await prisma.menuImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuImageFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuImageClient<$Result.GetResult<Prisma.$MenuImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenuImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuImages
     * const menuImages = await prisma.menuImage.findMany()
     * 
     * // Get first 10 MenuImages
     * const menuImages = await prisma.menuImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuImageWithIdOnly = await prisma.menuImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuImageFindManyArgs>(args?: SelectSubset<T, MenuImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenuImage.
     * @param {MenuImageCreateArgs} args - Arguments to create a MenuImage.
     * @example
     * // Create one MenuImage
     * const MenuImage = await prisma.menuImage.create({
     *   data: {
     *     // ... data to create a MenuImage
     *   }
     * })
     * 
     */
    create<T extends MenuImageCreateArgs>(args: SelectSubset<T, MenuImageCreateArgs<ExtArgs>>): Prisma__MenuImageClient<$Result.GetResult<Prisma.$MenuImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenuImages.
     * @param {MenuImageCreateManyArgs} args - Arguments to create many MenuImages.
     * @example
     * // Create many MenuImages
     * const menuImage = await prisma.menuImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuImageCreateManyArgs>(args?: SelectSubset<T, MenuImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuImages and returns the data saved in the database.
     * @param {MenuImageCreateManyAndReturnArgs} args - Arguments to create many MenuImages.
     * @example
     * // Create many MenuImages
     * const menuImage = await prisma.menuImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuImages and only return the `id`
     * const menuImageWithIdOnly = await prisma.menuImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuImageCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MenuImage.
     * @param {MenuImageDeleteArgs} args - Arguments to delete one MenuImage.
     * @example
     * // Delete one MenuImage
     * const MenuImage = await prisma.menuImage.delete({
     *   where: {
     *     // ... filter to delete one MenuImage
     *   }
     * })
     * 
     */
    delete<T extends MenuImageDeleteArgs>(args: SelectSubset<T, MenuImageDeleteArgs<ExtArgs>>): Prisma__MenuImageClient<$Result.GetResult<Prisma.$MenuImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenuImage.
     * @param {MenuImageUpdateArgs} args - Arguments to update one MenuImage.
     * @example
     * // Update one MenuImage
     * const menuImage = await prisma.menuImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuImageUpdateArgs>(args: SelectSubset<T, MenuImageUpdateArgs<ExtArgs>>): Prisma__MenuImageClient<$Result.GetResult<Prisma.$MenuImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenuImages.
     * @param {MenuImageDeleteManyArgs} args - Arguments to filter MenuImages to delete.
     * @example
     * // Delete a few MenuImages
     * const { count } = await prisma.menuImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuImageDeleteManyArgs>(args?: SelectSubset<T, MenuImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuImages
     * const menuImage = await prisma.menuImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuImageUpdateManyArgs>(args: SelectSubset<T, MenuImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuImages and returns the data updated in the database.
     * @param {MenuImageUpdateManyAndReturnArgs} args - Arguments to update many MenuImages.
     * @example
     * // Update many MenuImages
     * const menuImage = await prisma.menuImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MenuImages and only return the `id`
     * const menuImageWithIdOnly = await prisma.menuImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends MenuImageUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MenuImage.
     * @param {MenuImageUpsertArgs} args - Arguments to update or create a MenuImage.
     * @example
     * // Update or create a MenuImage
     * const menuImage = await prisma.menuImage.upsert({
     *   create: {
     *     // ... data to create a MenuImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuImage we want to update
     *   }
     * })
     */
    upsert<T extends MenuImageUpsertArgs>(args: SelectSubset<T, MenuImageUpsertArgs<ExtArgs>>): Prisma__MenuImageClient<$Result.GetResult<Prisma.$MenuImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenuImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuImageCountArgs} args - Arguments to filter MenuImages to count.
     * @example
     * // Count the number of MenuImages
     * const count = await prisma.menuImage.count({
     *   where: {
     *     // ... the filter for the MenuImages we want to count
     *   }
     * })
    **/
    count<T extends MenuImageCountArgs>(
      args?: Subset<T, MenuImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuImageAggregateArgs>(args: Subset<T, MenuImageAggregateArgs>): Prisma.PrismaPromise<GetMenuImageAggregateType<T>>

    /**
     * Group by MenuImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuImageGroupByArgs} args - Group by arguments.
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
      T extends MenuImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuImageGroupByArgs['orderBy'] }
        : { orderBy?: MenuImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MenuImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuImage model
   */
  readonly fields: MenuImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu<T extends MenuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuDefaultArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MenuImage model
   */
  interface MenuImageFieldRefs {
    readonly id: FieldRef<"MenuImage", 'Int'>
    readonly name: FieldRef<"MenuImage", 'String'>
    readonly isDefault: FieldRef<"MenuImage", 'Boolean'>
    readonly menuId: FieldRef<"MenuImage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MenuImage findUnique
   */
  export type MenuImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuImage
     */
    select?: MenuImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuImage
     */
    omit?: MenuImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuImageInclude<ExtArgs> | null
    /**
     * Filter, which MenuImage to fetch.
     */
    where: MenuImageWhereUniqueInput
  }

  /**
   * MenuImage findUniqueOrThrow
   */
  export type MenuImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuImage
     */
    select?: MenuImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuImage
     */
    omit?: MenuImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuImageInclude<ExtArgs> | null
    /**
     * Filter, which MenuImage to fetch.
     */
    where: MenuImageWhereUniqueInput
  }

  /**
   * MenuImage findFirst
   */
  export type MenuImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuImage
     */
    select?: MenuImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuImage
     */
    omit?: MenuImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuImageInclude<ExtArgs> | null
    /**
     * Filter, which MenuImage to fetch.
     */
    where?: MenuImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuImages to fetch.
     */
    orderBy?: MenuImageOrderByWithRelationInput | MenuImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuImages.
     */
    cursor?: MenuImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuImages.
     */
    distinct?: MenuImageScalarFieldEnum | MenuImageScalarFieldEnum[]
  }

  /**
   * MenuImage findFirstOrThrow
   */
  export type MenuImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuImage
     */
    select?: MenuImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuImage
     */
    omit?: MenuImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuImageInclude<ExtArgs> | null
    /**
     * Filter, which MenuImage to fetch.
     */
    where?: MenuImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuImages to fetch.
     */
    orderBy?: MenuImageOrderByWithRelationInput | MenuImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuImages.
     */
    cursor?: MenuImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuImages.
     */
    distinct?: MenuImageScalarFieldEnum | MenuImageScalarFieldEnum[]
  }

  /**
   * MenuImage findMany
   */
  export type MenuImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuImage
     */
    select?: MenuImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuImage
     */
    omit?: MenuImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuImageInclude<ExtArgs> | null
    /**
     * Filter, which MenuImages to fetch.
     */
    where?: MenuImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuImages to fetch.
     */
    orderBy?: MenuImageOrderByWithRelationInput | MenuImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuImages.
     */
    cursor?: MenuImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuImages.
     */
    skip?: number
    distinct?: MenuImageScalarFieldEnum | MenuImageScalarFieldEnum[]
  }

  /**
   * MenuImage create
   */
  export type MenuImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuImage
     */
    select?: MenuImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuImage
     */
    omit?: MenuImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuImageInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuImage.
     */
    data: XOR<MenuImageCreateInput, MenuImageUncheckedCreateInput>
  }

  /**
   * MenuImage createMany
   */
  export type MenuImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuImages.
     */
    data: MenuImageCreateManyInput | MenuImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuImage createManyAndReturn
   */
  export type MenuImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuImage
     */
    select?: MenuImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuImage
     */
    omit?: MenuImageOmit<ExtArgs> | null
    /**
     * The data used to create many MenuImages.
     */
    data: MenuImageCreateManyInput | MenuImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuImage update
   */
  export type MenuImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuImage
     */
    select?: MenuImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuImage
     */
    omit?: MenuImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuImageInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuImage.
     */
    data: XOR<MenuImageUpdateInput, MenuImageUncheckedUpdateInput>
    /**
     * Choose, which MenuImage to update.
     */
    where: MenuImageWhereUniqueInput
  }

  /**
   * MenuImage updateMany
   */
  export type MenuImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuImages.
     */
    data: XOR<MenuImageUpdateManyMutationInput, MenuImageUncheckedUpdateManyInput>
    /**
     * Filter which MenuImages to update
     */
    where?: MenuImageWhereInput
    /**
     * Limit how many MenuImages to update.
     */
    limit?: number
  }

  /**
   * MenuImage updateManyAndReturn
   */
  export type MenuImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuImage
     */
    select?: MenuImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuImage
     */
    omit?: MenuImageOmit<ExtArgs> | null
    /**
     * The data used to update MenuImages.
     */
    data: XOR<MenuImageUpdateManyMutationInput, MenuImageUncheckedUpdateManyInput>
    /**
     * Filter which MenuImages to update
     */
    where?: MenuImageWhereInput
    /**
     * Limit how many MenuImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuImage upsert
   */
  export type MenuImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuImage
     */
    select?: MenuImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuImage
     */
    omit?: MenuImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuImageInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuImage to update in case it exists.
     */
    where: MenuImageWhereUniqueInput
    /**
     * In case the MenuImage found by the `where` argument doesn't exist, create a new MenuImage with this data.
     */
    create: XOR<MenuImageCreateInput, MenuImageUncheckedCreateInput>
    /**
     * In case the MenuImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuImageUpdateInput, MenuImageUncheckedUpdateInput>
  }

  /**
   * MenuImage delete
   */
  export type MenuImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuImage
     */
    select?: MenuImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuImage
     */
    omit?: MenuImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuImageInclude<ExtArgs> | null
    /**
     * Filter which MenuImage to delete.
     */
    where: MenuImageWhereUniqueInput
  }

  /**
   * MenuImage deleteMany
   */
  export type MenuImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuImages to delete
     */
    where?: MenuImageWhereInput
    /**
     * Limit how many MenuImages to delete.
     */
    limit?: number
  }

  /**
   * MenuImage without action
   */
  export type MenuImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuImage
     */
    select?: MenuImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuImage
     */
    omit?: MenuImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuImageInclude<ExtArgs> | null
  }


  /**
   * Model MenuLike
   */

  export type AggregateMenuLike = {
    _count: MenuLikeCountAggregateOutputType | null
    _avg: MenuLikeAvgAggregateOutputType | null
    _sum: MenuLikeSumAggregateOutputType | null
    _min: MenuLikeMinAggregateOutputType | null
    _max: MenuLikeMaxAggregateOutputType | null
  }

  export type MenuLikeAvgAggregateOutputType = {
    menuId: number | null
  }

  export type MenuLikeSumAggregateOutputType = {
    menuId: number | null
  }

  export type MenuLikeMinAggregateOutputType = {
    memberId: string | null
    menuId: number | null
    createdAt: Date | null
  }

  export type MenuLikeMaxAggregateOutputType = {
    memberId: string | null
    menuId: number | null
    createdAt: Date | null
  }

  export type MenuLikeCountAggregateOutputType = {
    memberId: number
    menuId: number
    createdAt: number
    _all: number
  }


  export type MenuLikeAvgAggregateInputType = {
    menuId?: true
  }

  export type MenuLikeSumAggregateInputType = {
    menuId?: true
  }

  export type MenuLikeMinAggregateInputType = {
    memberId?: true
    menuId?: true
    createdAt?: true
  }

  export type MenuLikeMaxAggregateInputType = {
    memberId?: true
    menuId?: true
    createdAt?: true
  }

  export type MenuLikeCountAggregateInputType = {
    memberId?: true
    menuId?: true
    createdAt?: true
    _all?: true
  }

  export type MenuLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuLike to aggregate.
     */
    where?: MenuLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuLikes to fetch.
     */
    orderBy?: MenuLikeOrderByWithRelationInput | MenuLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuLikes
    **/
    _count?: true | MenuLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuLikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuLikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuLikeMaxAggregateInputType
  }

  export type GetMenuLikeAggregateType<T extends MenuLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuLike[P]>
      : GetScalarType<T[P], AggregateMenuLike[P]>
  }




  export type MenuLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuLikeWhereInput
    orderBy?: MenuLikeOrderByWithAggregationInput | MenuLikeOrderByWithAggregationInput[]
    by: MenuLikeScalarFieldEnum[] | MenuLikeScalarFieldEnum
    having?: MenuLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuLikeCountAggregateInputType | true
    _avg?: MenuLikeAvgAggregateInputType
    _sum?: MenuLikeSumAggregateInputType
    _min?: MenuLikeMinAggregateInputType
    _max?: MenuLikeMaxAggregateInputType
  }

  export type MenuLikeGroupByOutputType = {
    memberId: string
    menuId: number
    createdAt: Date
    _count: MenuLikeCountAggregateOutputType | null
    _avg: MenuLikeAvgAggregateOutputType | null
    _sum: MenuLikeSumAggregateOutputType | null
    _min: MenuLikeMinAggregateOutputType | null
    _max: MenuLikeMaxAggregateOutputType | null
  }

  type GetMenuLikeGroupByPayload<T extends MenuLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuLikeGroupByOutputType[P]>
            : GetScalarType<T[P], MenuLikeGroupByOutputType[P]>
        }
      >
    >


  export type MenuLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    memberId?: boolean
    menuId?: boolean
    createdAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuLike"]>

  export type MenuLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    memberId?: boolean
    menuId?: boolean
    createdAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuLike"]>

  export type MenuLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    memberId?: boolean
    menuId?: boolean
    createdAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuLike"]>

  export type MenuLikeSelectScalar = {
    memberId?: boolean
    menuId?: boolean
    createdAt?: boolean
  }

  export type MenuLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"memberId" | "menuId" | "createdAt", ExtArgs["result"]["menuLike"]>
  export type MenuLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }
  export type MenuLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }
  export type MenuLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }

  export type $MenuLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuLike"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
      menu: Prisma.$MenuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      memberId: string
      menuId: number
      createdAt: Date
    }, ExtArgs["result"]["menuLike"]>
    composites: {}
  }

  type MenuLikeGetPayload<S extends boolean | null | undefined | MenuLikeDefaultArgs> = $Result.GetResult<Prisma.$MenuLikePayload, S>

  type MenuLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuLikeCountAggregateInputType | true
    }

  export interface MenuLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuLike'], meta: { name: 'MenuLike' } }
    /**
     * Find zero or one MenuLike that matches the filter.
     * @param {MenuLikeFindUniqueArgs} args - Arguments to find a MenuLike
     * @example
     * // Get one MenuLike
     * const menuLike = await prisma.menuLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuLikeFindUniqueArgs>(args: SelectSubset<T, MenuLikeFindUniqueArgs<ExtArgs>>): Prisma__MenuLikeClient<$Result.GetResult<Prisma.$MenuLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenuLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuLikeFindUniqueOrThrowArgs} args - Arguments to find a MenuLike
     * @example
     * // Get one MenuLike
     * const menuLike = await prisma.menuLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuLikeClient<$Result.GetResult<Prisma.$MenuLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuLikeFindFirstArgs} args - Arguments to find a MenuLike
     * @example
     * // Get one MenuLike
     * const menuLike = await prisma.menuLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuLikeFindFirstArgs>(args?: SelectSubset<T, MenuLikeFindFirstArgs<ExtArgs>>): Prisma__MenuLikeClient<$Result.GetResult<Prisma.$MenuLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuLikeFindFirstOrThrowArgs} args - Arguments to find a MenuLike
     * @example
     * // Get one MenuLike
     * const menuLike = await prisma.menuLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuLikeClient<$Result.GetResult<Prisma.$MenuLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenuLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuLikes
     * const menuLikes = await prisma.menuLike.findMany()
     * 
     * // Get first 10 MenuLikes
     * const menuLikes = await prisma.menuLike.findMany({ take: 10 })
     * 
     * // Only select the `memberId`
     * const menuLikeWithMemberIdOnly = await prisma.menuLike.findMany({ select: { memberId: true } })
     * 
     */
    findMany<T extends MenuLikeFindManyArgs>(args?: SelectSubset<T, MenuLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenuLike.
     * @param {MenuLikeCreateArgs} args - Arguments to create a MenuLike.
     * @example
     * // Create one MenuLike
     * const MenuLike = await prisma.menuLike.create({
     *   data: {
     *     // ... data to create a MenuLike
     *   }
     * })
     * 
     */
    create<T extends MenuLikeCreateArgs>(args: SelectSubset<T, MenuLikeCreateArgs<ExtArgs>>): Prisma__MenuLikeClient<$Result.GetResult<Prisma.$MenuLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenuLikes.
     * @param {MenuLikeCreateManyArgs} args - Arguments to create many MenuLikes.
     * @example
     * // Create many MenuLikes
     * const menuLike = await prisma.menuLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuLikeCreateManyArgs>(args?: SelectSubset<T, MenuLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuLikes and returns the data saved in the database.
     * @param {MenuLikeCreateManyAndReturnArgs} args - Arguments to create many MenuLikes.
     * @example
     * // Create many MenuLikes
     * const menuLike = await prisma.menuLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuLikes and only return the `memberId`
     * const menuLikeWithMemberIdOnly = await prisma.menuLike.createManyAndReturn({
     *   select: { memberId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuLikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MenuLike.
     * @param {MenuLikeDeleteArgs} args - Arguments to delete one MenuLike.
     * @example
     * // Delete one MenuLike
     * const MenuLike = await prisma.menuLike.delete({
     *   where: {
     *     // ... filter to delete one MenuLike
     *   }
     * })
     * 
     */
    delete<T extends MenuLikeDeleteArgs>(args: SelectSubset<T, MenuLikeDeleteArgs<ExtArgs>>): Prisma__MenuLikeClient<$Result.GetResult<Prisma.$MenuLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenuLike.
     * @param {MenuLikeUpdateArgs} args - Arguments to update one MenuLike.
     * @example
     * // Update one MenuLike
     * const menuLike = await prisma.menuLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuLikeUpdateArgs>(args: SelectSubset<T, MenuLikeUpdateArgs<ExtArgs>>): Prisma__MenuLikeClient<$Result.GetResult<Prisma.$MenuLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenuLikes.
     * @param {MenuLikeDeleteManyArgs} args - Arguments to filter MenuLikes to delete.
     * @example
     * // Delete a few MenuLikes
     * const { count } = await prisma.menuLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuLikeDeleteManyArgs>(args?: SelectSubset<T, MenuLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuLikes
     * const menuLike = await prisma.menuLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuLikeUpdateManyArgs>(args: SelectSubset<T, MenuLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuLikes and returns the data updated in the database.
     * @param {MenuLikeUpdateManyAndReturnArgs} args - Arguments to update many MenuLikes.
     * @example
     * // Update many MenuLikes
     * const menuLike = await prisma.menuLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MenuLikes and only return the `memberId`
     * const menuLikeWithMemberIdOnly = await prisma.menuLike.updateManyAndReturn({
     *   select: { memberId: true },
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
    updateManyAndReturn<T extends MenuLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuLikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MenuLike.
     * @param {MenuLikeUpsertArgs} args - Arguments to update or create a MenuLike.
     * @example
     * // Update or create a MenuLike
     * const menuLike = await prisma.menuLike.upsert({
     *   create: {
     *     // ... data to create a MenuLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuLike we want to update
     *   }
     * })
     */
    upsert<T extends MenuLikeUpsertArgs>(args: SelectSubset<T, MenuLikeUpsertArgs<ExtArgs>>): Prisma__MenuLikeClient<$Result.GetResult<Prisma.$MenuLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenuLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuLikeCountArgs} args - Arguments to filter MenuLikes to count.
     * @example
     * // Count the number of MenuLikes
     * const count = await prisma.menuLike.count({
     *   where: {
     *     // ... the filter for the MenuLikes we want to count
     *   }
     * })
    **/
    count<T extends MenuLikeCountArgs>(
      args?: Subset<T, MenuLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuLikeAggregateArgs>(args: Subset<T, MenuLikeAggregateArgs>): Prisma.PrismaPromise<GetMenuLikeAggregateType<T>>

    /**
     * Group by MenuLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuLikeGroupByArgs} args - Group by arguments.
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
      T extends MenuLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuLikeGroupByArgs['orderBy'] }
        : { orderBy?: MenuLikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MenuLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuLike model
   */
  readonly fields: MenuLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menu<T extends MenuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuDefaultArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MenuLike model
   */
  interface MenuLikeFieldRefs {
    readonly memberId: FieldRef<"MenuLike", 'String'>
    readonly menuId: FieldRef<"MenuLike", 'Int'>
    readonly createdAt: FieldRef<"MenuLike", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MenuLike findUnique
   */
  export type MenuLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuLike
     */
    select?: MenuLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuLike
     */
    omit?: MenuLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuLikeInclude<ExtArgs> | null
    /**
     * Filter, which MenuLike to fetch.
     */
    where: MenuLikeWhereUniqueInput
  }

  /**
   * MenuLike findUniqueOrThrow
   */
  export type MenuLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuLike
     */
    select?: MenuLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuLike
     */
    omit?: MenuLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuLikeInclude<ExtArgs> | null
    /**
     * Filter, which MenuLike to fetch.
     */
    where: MenuLikeWhereUniqueInput
  }

  /**
   * MenuLike findFirst
   */
  export type MenuLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuLike
     */
    select?: MenuLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuLike
     */
    omit?: MenuLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuLikeInclude<ExtArgs> | null
    /**
     * Filter, which MenuLike to fetch.
     */
    where?: MenuLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuLikes to fetch.
     */
    orderBy?: MenuLikeOrderByWithRelationInput | MenuLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuLikes.
     */
    cursor?: MenuLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuLikes.
     */
    distinct?: MenuLikeScalarFieldEnum | MenuLikeScalarFieldEnum[]
  }

  /**
   * MenuLike findFirstOrThrow
   */
  export type MenuLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuLike
     */
    select?: MenuLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuLike
     */
    omit?: MenuLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuLikeInclude<ExtArgs> | null
    /**
     * Filter, which MenuLike to fetch.
     */
    where?: MenuLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuLikes to fetch.
     */
    orderBy?: MenuLikeOrderByWithRelationInput | MenuLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuLikes.
     */
    cursor?: MenuLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuLikes.
     */
    distinct?: MenuLikeScalarFieldEnum | MenuLikeScalarFieldEnum[]
  }

  /**
   * MenuLike findMany
   */
  export type MenuLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuLike
     */
    select?: MenuLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuLike
     */
    omit?: MenuLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuLikeInclude<ExtArgs> | null
    /**
     * Filter, which MenuLikes to fetch.
     */
    where?: MenuLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuLikes to fetch.
     */
    orderBy?: MenuLikeOrderByWithRelationInput | MenuLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuLikes.
     */
    cursor?: MenuLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuLikes.
     */
    skip?: number
    distinct?: MenuLikeScalarFieldEnum | MenuLikeScalarFieldEnum[]
  }

  /**
   * MenuLike create
   */
  export type MenuLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuLike
     */
    select?: MenuLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuLike
     */
    omit?: MenuLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuLike.
     */
    data: XOR<MenuLikeCreateInput, MenuLikeUncheckedCreateInput>
  }

  /**
   * MenuLike createMany
   */
  export type MenuLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuLikes.
     */
    data: MenuLikeCreateManyInput | MenuLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuLike createManyAndReturn
   */
  export type MenuLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuLike
     */
    select?: MenuLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuLike
     */
    omit?: MenuLikeOmit<ExtArgs> | null
    /**
     * The data used to create many MenuLikes.
     */
    data: MenuLikeCreateManyInput | MenuLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuLike update
   */
  export type MenuLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuLike
     */
    select?: MenuLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuLike
     */
    omit?: MenuLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuLike.
     */
    data: XOR<MenuLikeUpdateInput, MenuLikeUncheckedUpdateInput>
    /**
     * Choose, which MenuLike to update.
     */
    where: MenuLikeWhereUniqueInput
  }

  /**
   * MenuLike updateMany
   */
  export type MenuLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuLikes.
     */
    data: XOR<MenuLikeUpdateManyMutationInput, MenuLikeUncheckedUpdateManyInput>
    /**
     * Filter which MenuLikes to update
     */
    where?: MenuLikeWhereInput
    /**
     * Limit how many MenuLikes to update.
     */
    limit?: number
  }

  /**
   * MenuLike updateManyAndReturn
   */
  export type MenuLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuLike
     */
    select?: MenuLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuLike
     */
    omit?: MenuLikeOmit<ExtArgs> | null
    /**
     * The data used to update MenuLikes.
     */
    data: XOR<MenuLikeUpdateManyMutationInput, MenuLikeUncheckedUpdateManyInput>
    /**
     * Filter which MenuLikes to update
     */
    where?: MenuLikeWhereInput
    /**
     * Limit how many MenuLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuLike upsert
   */
  export type MenuLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuLike
     */
    select?: MenuLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuLike
     */
    omit?: MenuLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuLike to update in case it exists.
     */
    where: MenuLikeWhereUniqueInput
    /**
     * In case the MenuLike found by the `where` argument doesn't exist, create a new MenuLike with this data.
     */
    create: XOR<MenuLikeCreateInput, MenuLikeUncheckedCreateInput>
    /**
     * In case the MenuLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuLikeUpdateInput, MenuLikeUncheckedUpdateInput>
  }

  /**
   * MenuLike delete
   */
  export type MenuLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuLike
     */
    select?: MenuLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuLike
     */
    omit?: MenuLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuLikeInclude<ExtArgs> | null
    /**
     * Filter which MenuLike to delete.
     */
    where: MenuLikeWhereUniqueInput
  }

  /**
   * MenuLike deleteMany
   */
  export type MenuLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuLikes to delete
     */
    where?: MenuLikeWhereInput
    /**
     * Limit how many MenuLikes to delete.
     */
    limit?: number
  }

  /**
   * MenuLike without action
   */
  export type MenuLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuLike
     */
    select?: MenuLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuLike
     */
    omit?: MenuLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuLikeInclude<ExtArgs> | null
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


  export const MemberScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    password: 'password',
    profileImage: 'profileImage'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    description: 'description'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const MemberRoleScalarFieldEnum: {
    memberId: 'memberId',
    roleId: 'roleId',
    createdAt: 'createdAt'
  };

  export type MemberRoleScalarFieldEnum = (typeof MemberRoleScalarFieldEnum)[keyof typeof MemberRoleScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    is_public: 'is_public',
    order: 'order',
    regMemberId: 'regMemberId',
    createdAt: 'createdAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const MenuScalarFieldEnum: {
    id: 'id',
    korName: 'korName',
    engName: 'engName',
    price: 'price',
    isPublic: 'isPublic',
    hasIce: 'hasIce',
    hasHot: 'hasHot',
    description: 'description',
    createdAt: 'createdAt',
    categoryId: 'categoryId',
    regMemberId: 'regMemberId',
    deletedAt: 'deletedAt',
    updatedAt: 'updatedAt'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const MenuImageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isDefault: 'isDefault',
    menuId: 'menuId'
  };

  export type MenuImageScalarFieldEnum = (typeof MenuImageScalarFieldEnum)[keyof typeof MenuImageScalarFieldEnum]


  export const MenuLikeScalarFieldEnum: {
    memberId: 'memberId',
    menuId: 'menuId',
    createdAt: 'createdAt'
  };

  export type MenuLikeScalarFieldEnum = (typeof MenuLikeScalarFieldEnum)[keyof typeof MenuLikeScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: StringFilter<"Member"> | string
    email?: StringFilter<"Member"> | string
    username?: StringFilter<"Member"> | string
    phone?: StringNullableFilter<"Member"> | string | null
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Member"> | Date | string | null
    password?: StringFilter<"Member"> | string
    profileImage?: StringNullableFilter<"Member"> | string | null
    categories?: CategoryListRelationFilter
    memberRoles?: MemberRoleListRelationFilter
    menuLikes?: MenuLikeListRelationFilter
    menus?: MenuListRelationFilter
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    password?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    categories?: CategoryOrderByRelationAggregateInput
    memberRoles?: MemberRoleOrderByRelationAggregateInput
    menuLikes?: MenuLikeOrderByRelationAggregateInput
    menus?: MenuOrderByRelationAggregateInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    phone?: StringNullableFilter<"Member"> | string | null
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Member"> | Date | string | null
    password?: StringFilter<"Member"> | string
    profileImage?: StringNullableFilter<"Member"> | string | null
    categories?: CategoryListRelationFilter
    memberRoles?: MemberRoleListRelationFilter
    menuLikes?: MenuLikeListRelationFilter
    menus?: MenuListRelationFilter
  }, "id" | "email" | "username">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    password?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    _count?: MemberCountOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Member"> | string
    email?: StringWithAggregatesFilter<"Member"> | string
    username?: StringWithAggregatesFilter<"Member"> | string
    phone?: StringNullableWithAggregatesFilter<"Member"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Member"> | Date | string | null
    password?: StringWithAggregatesFilter<"Member"> | string
    profileImage?: StringNullableWithAggregatesFilter<"Member"> | string | null
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    description?: StringNullableFilter<"Role"> | string | null
    memberRoles?: MemberRoleListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    description?: SortOrderInput | SortOrder
    memberRoles?: MemberRoleOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    name?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    description?: StringNullableFilter<"Role"> | string | null
    memberRoles?: MemberRoleListRelationFilter
  }, "id">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
  }

  export type MemberRoleWhereInput = {
    AND?: MemberRoleWhereInput | MemberRoleWhereInput[]
    OR?: MemberRoleWhereInput[]
    NOT?: MemberRoleWhereInput | MemberRoleWhereInput[]
    memberId?: StringFilter<"MemberRole"> | string
    roleId?: IntFilter<"MemberRole"> | number
    createdAt?: DateTimeFilter<"MemberRole"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type MemberRoleOrderByWithRelationInput = {
    memberId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    member?: MemberOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type MemberRoleWhereUniqueInput = Prisma.AtLeast<{
    memberId_roleId?: MemberRoleMemberIdRoleIdCompoundUniqueInput
    AND?: MemberRoleWhereInput | MemberRoleWhereInput[]
    OR?: MemberRoleWhereInput[]
    NOT?: MemberRoleWhereInput | MemberRoleWhereInput[]
    memberId?: StringFilter<"MemberRole"> | string
    roleId?: IntFilter<"MemberRole"> | number
    createdAt?: DateTimeFilter<"MemberRole"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "memberId_roleId">

  export type MemberRoleOrderByWithAggregationInput = {
    memberId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    _count?: MemberRoleCountOrderByAggregateInput
    _avg?: MemberRoleAvgOrderByAggregateInput
    _max?: MemberRoleMaxOrderByAggregateInput
    _min?: MemberRoleMinOrderByAggregateInput
    _sum?: MemberRoleSumOrderByAggregateInput
  }

  export type MemberRoleScalarWhereWithAggregatesInput = {
    AND?: MemberRoleScalarWhereWithAggregatesInput | MemberRoleScalarWhereWithAggregatesInput[]
    OR?: MemberRoleScalarWhereWithAggregatesInput[]
    NOT?: MemberRoleScalarWhereWithAggregatesInput | MemberRoleScalarWhereWithAggregatesInput[]
    memberId?: StringWithAggregatesFilter<"MemberRole"> | string
    roleId?: IntWithAggregatesFilter<"MemberRole"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MemberRole"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    is_public?: BoolFilter<"Category"> | boolean
    order?: IntFilter<"Category"> | number
    regMemberId?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    regMember?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    menus?: MenuListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    is_public?: SortOrder
    order?: SortOrder
    regMemberId?: SortOrder
    createdAt?: SortOrder
    regMember?: MemberOrderByWithRelationInput
    menus?: MenuOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    is_public?: BoolFilter<"Category"> | boolean
    order?: IntFilter<"Category"> | number
    regMemberId?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    regMember?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    menus?: MenuListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    is_public?: SortOrder
    order?: SortOrder
    regMemberId?: SortOrder
    createdAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    is_public?: BoolWithAggregatesFilter<"Category"> | boolean
    order?: IntWithAggregatesFilter<"Category"> | number
    regMemberId?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type MenuWhereInput = {
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    id?: IntFilter<"Menu"> | number
    korName?: StringFilter<"Menu"> | string
    engName?: StringFilter<"Menu"> | string
    price?: FloatFilter<"Menu"> | number
    isPublic?: BoolFilter<"Menu"> | boolean
    hasIce?: BoolFilter<"Menu"> | boolean
    hasHot?: BoolFilter<"Menu"> | boolean
    description?: StringNullableFilter<"Menu"> | string | null
    createdAt?: DateTimeFilter<"Menu"> | Date | string
    categoryId?: IntFilter<"Menu"> | number
    regMemberId?: StringFilter<"Menu"> | string
    deletedAt?: DateTimeNullableFilter<"Menu"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Menu"> | Date | string | null
    images?: MenuImageListRelationFilter
    likes?: MenuLikeListRelationFilter
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    regMember?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }

  export type MenuOrderByWithRelationInput = {
    id?: SortOrder
    korName?: SortOrder
    engName?: SortOrder
    price?: SortOrder
    isPublic?: SortOrder
    hasIce?: SortOrder
    hasHot?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
    regMemberId?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    images?: MenuImageOrderByRelationAggregateInput
    likes?: MenuLikeOrderByRelationAggregateInput
    category?: CategoryOrderByWithRelationInput
    regMember?: MemberOrderByWithRelationInput
  }

  export type MenuWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    korName?: StringFilter<"Menu"> | string
    engName?: StringFilter<"Menu"> | string
    price?: FloatFilter<"Menu"> | number
    isPublic?: BoolFilter<"Menu"> | boolean
    hasIce?: BoolFilter<"Menu"> | boolean
    hasHot?: BoolFilter<"Menu"> | boolean
    description?: StringNullableFilter<"Menu"> | string | null
    createdAt?: DateTimeFilter<"Menu"> | Date | string
    categoryId?: IntFilter<"Menu"> | number
    regMemberId?: StringFilter<"Menu"> | string
    deletedAt?: DateTimeNullableFilter<"Menu"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Menu"> | Date | string | null
    images?: MenuImageListRelationFilter
    likes?: MenuLikeListRelationFilter
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    regMember?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }, "id">

  export type MenuOrderByWithAggregationInput = {
    id?: SortOrder
    korName?: SortOrder
    engName?: SortOrder
    price?: SortOrder
    isPublic?: SortOrder
    hasIce?: SortOrder
    hasHot?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
    regMemberId?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: MenuCountOrderByAggregateInput
    _avg?: MenuAvgOrderByAggregateInput
    _max?: MenuMaxOrderByAggregateInput
    _min?: MenuMinOrderByAggregateInput
    _sum?: MenuSumOrderByAggregateInput
  }

  export type MenuScalarWhereWithAggregatesInput = {
    AND?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    OR?: MenuScalarWhereWithAggregatesInput[]
    NOT?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Menu"> | number
    korName?: StringWithAggregatesFilter<"Menu"> | string
    engName?: StringWithAggregatesFilter<"Menu"> | string
    price?: FloatWithAggregatesFilter<"Menu"> | number
    isPublic?: BoolWithAggregatesFilter<"Menu"> | boolean
    hasIce?: BoolWithAggregatesFilter<"Menu"> | boolean
    hasHot?: BoolWithAggregatesFilter<"Menu"> | boolean
    description?: StringNullableWithAggregatesFilter<"Menu"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Menu"> | Date | string
    categoryId?: IntWithAggregatesFilter<"Menu"> | number
    regMemberId?: StringWithAggregatesFilter<"Menu"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Menu"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Menu"> | Date | string | null
  }

  export type MenuImageWhereInput = {
    AND?: MenuImageWhereInput | MenuImageWhereInput[]
    OR?: MenuImageWhereInput[]
    NOT?: MenuImageWhereInput | MenuImageWhereInput[]
    id?: IntFilter<"MenuImage"> | number
    name?: StringFilter<"MenuImage"> | string
    isDefault?: BoolFilter<"MenuImage"> | boolean
    menuId?: IntFilter<"MenuImage"> | number
    menu?: XOR<MenuScalarRelationFilter, MenuWhereInput>
  }

  export type MenuImageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    menuId?: SortOrder
    menu?: MenuOrderByWithRelationInput
  }

  export type MenuImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MenuImageWhereInput | MenuImageWhereInput[]
    OR?: MenuImageWhereInput[]
    NOT?: MenuImageWhereInput | MenuImageWhereInput[]
    name?: StringFilter<"MenuImage"> | string
    isDefault?: BoolFilter<"MenuImage"> | boolean
    menuId?: IntFilter<"MenuImage"> | number
    menu?: XOR<MenuScalarRelationFilter, MenuWhereInput>
  }, "id">

  export type MenuImageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    menuId?: SortOrder
    _count?: MenuImageCountOrderByAggregateInput
    _avg?: MenuImageAvgOrderByAggregateInput
    _max?: MenuImageMaxOrderByAggregateInput
    _min?: MenuImageMinOrderByAggregateInput
    _sum?: MenuImageSumOrderByAggregateInput
  }

  export type MenuImageScalarWhereWithAggregatesInput = {
    AND?: MenuImageScalarWhereWithAggregatesInput | MenuImageScalarWhereWithAggregatesInput[]
    OR?: MenuImageScalarWhereWithAggregatesInput[]
    NOT?: MenuImageScalarWhereWithAggregatesInput | MenuImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MenuImage"> | number
    name?: StringWithAggregatesFilter<"MenuImage"> | string
    isDefault?: BoolWithAggregatesFilter<"MenuImage"> | boolean
    menuId?: IntWithAggregatesFilter<"MenuImage"> | number
  }

  export type MenuLikeWhereInput = {
    AND?: MenuLikeWhereInput | MenuLikeWhereInput[]
    OR?: MenuLikeWhereInput[]
    NOT?: MenuLikeWhereInput | MenuLikeWhereInput[]
    memberId?: StringFilter<"MenuLike"> | string
    menuId?: IntFilter<"MenuLike"> | number
    createdAt?: DateTimeFilter<"MenuLike"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    menu?: XOR<MenuScalarRelationFilter, MenuWhereInput>
  }

  export type MenuLikeOrderByWithRelationInput = {
    memberId?: SortOrder
    menuId?: SortOrder
    createdAt?: SortOrder
    member?: MemberOrderByWithRelationInput
    menu?: MenuOrderByWithRelationInput
  }

  export type MenuLikeWhereUniqueInput = Prisma.AtLeast<{
    memberId_menuId?: MenuLikeMemberIdMenuIdCompoundUniqueInput
    AND?: MenuLikeWhereInput | MenuLikeWhereInput[]
    OR?: MenuLikeWhereInput[]
    NOT?: MenuLikeWhereInput | MenuLikeWhereInput[]
    memberId?: StringFilter<"MenuLike"> | string
    menuId?: IntFilter<"MenuLike"> | number
    createdAt?: DateTimeFilter<"MenuLike"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    menu?: XOR<MenuScalarRelationFilter, MenuWhereInput>
  }, "memberId_menuId">

  export type MenuLikeOrderByWithAggregationInput = {
    memberId?: SortOrder
    menuId?: SortOrder
    createdAt?: SortOrder
    _count?: MenuLikeCountOrderByAggregateInput
    _avg?: MenuLikeAvgOrderByAggregateInput
    _max?: MenuLikeMaxOrderByAggregateInput
    _min?: MenuLikeMinOrderByAggregateInput
    _sum?: MenuLikeSumOrderByAggregateInput
  }

  export type MenuLikeScalarWhereWithAggregatesInput = {
    AND?: MenuLikeScalarWhereWithAggregatesInput | MenuLikeScalarWhereWithAggregatesInput[]
    OR?: MenuLikeScalarWhereWithAggregatesInput[]
    NOT?: MenuLikeScalarWhereWithAggregatesInput | MenuLikeScalarWhereWithAggregatesInput[]
    memberId?: StringWithAggregatesFilter<"MenuLike"> | string
    menuId?: IntWithAggregatesFilter<"MenuLike"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MenuLike"> | Date | string
  }

  export type MemberCreateInput = {
    id?: string
    email: string
    username: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    password: string
    profileImage?: string | null
    categories?: CategoryCreateNestedManyWithoutRegMemberInput
    memberRoles?: MemberRoleCreateNestedManyWithoutMemberInput
    menuLikes?: MenuLikeCreateNestedManyWithoutMemberInput
    menus?: MenuCreateNestedManyWithoutRegMemberInput
  }

  export type MemberUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    password: string
    profileImage?: string | null
    categories?: CategoryUncheckedCreateNestedManyWithoutRegMemberInput
    memberRoles?: MemberRoleUncheckedCreateNestedManyWithoutMemberInput
    menuLikes?: MenuLikeUncheckedCreateNestedManyWithoutMemberInput
    menus?: MenuUncheckedCreateNestedManyWithoutRegMemberInput
  }

  export type MemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoryUpdateManyWithoutRegMemberNestedInput
    memberRoles?: MemberRoleUpdateManyWithoutMemberNestedInput
    menuLikes?: MenuLikeUpdateManyWithoutMemberNestedInput
    menus?: MenuUpdateManyWithoutRegMemberNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoryUncheckedUpdateManyWithoutRegMemberNestedInput
    memberRoles?: MemberRoleUncheckedUpdateManyWithoutMemberNestedInput
    menuLikes?: MenuLikeUncheckedUpdateManyWithoutMemberNestedInput
    menus?: MenuUncheckedUpdateManyWithoutRegMemberNestedInput
  }

  export type MemberCreateManyInput = {
    id?: string
    email: string
    username: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    password: string
    profileImage?: string | null
  }

  export type MemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleCreateInput = {
    name: string
    createdAt?: Date | string
    description?: string | null
    memberRoles?: MemberRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    description?: string | null
    memberRoles?: MemberRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memberRoles?: MemberRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memberRoles?: MemberRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    description?: string | null
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemberRoleCreateInput = {
    createdAt?: Date | string
    member: MemberCreateNestedOneWithoutMemberRolesInput
    role: RoleCreateNestedOneWithoutMemberRolesInput
  }

  export type MemberRoleUncheckedCreateInput = {
    memberId: string
    roleId: number
    createdAt?: Date | string
  }

  export type MemberRoleUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutMemberRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutMemberRolesNestedInput
  }

  export type MemberRoleUncheckedUpdateInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberRoleCreateManyInput = {
    memberId: string
    roleId: number
    createdAt?: Date | string
  }

  export type MemberRoleUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberRoleUncheckedUpdateManyInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    is_public?: boolean
    order?: number
    createdAt?: Date | string
    regMember: MemberCreateNestedOneWithoutCategoriesInput
    menus?: MenuCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    is_public?: boolean
    order?: number
    regMemberId: string
    createdAt?: Date | string
    menus?: MenuUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    regMember?: MemberUpdateOneRequiredWithoutCategoriesNestedInput
    menus?: MenuUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    regMemberId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menus?: MenuUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    is_public?: boolean
    order?: number
    regMemberId: string
    createdAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    regMemberId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuCreateInput = {
    korName: string
    engName: string
    price: number
    isPublic?: boolean
    hasIce?: boolean
    hasHot?: boolean
    description?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    images?: MenuImageCreateNestedManyWithoutMenuInput
    likes?: MenuLikeCreateNestedManyWithoutMenuInput
    category: CategoryCreateNestedOneWithoutMenusInput
    regMember: MemberCreateNestedOneWithoutMenusInput
  }

  export type MenuUncheckedCreateInput = {
    id?: number
    korName: string
    engName: string
    price: number
    isPublic?: boolean
    hasIce?: boolean
    hasHot?: boolean
    description?: string | null
    createdAt?: Date | string
    categoryId: number
    regMemberId: string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    images?: MenuImageUncheckedCreateNestedManyWithoutMenuInput
    likes?: MenuLikeUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuUpdateInput = {
    korName?: StringFieldUpdateOperationsInput | string
    engName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    hasIce?: BoolFieldUpdateOperationsInput | boolean
    hasHot?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MenuImageUpdateManyWithoutMenuNestedInput
    likes?: MenuLikeUpdateManyWithoutMenuNestedInput
    category?: CategoryUpdateOneRequiredWithoutMenusNestedInput
    regMember?: MemberUpdateOneRequiredWithoutMenusNestedInput
  }

  export type MenuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    korName?: StringFieldUpdateOperationsInput | string
    engName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    hasIce?: BoolFieldUpdateOperationsInput | boolean
    hasHot?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    regMemberId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MenuImageUncheckedUpdateManyWithoutMenuNestedInput
    likes?: MenuLikeUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuCreateManyInput = {
    id?: number
    korName: string
    engName: string
    price: number
    isPublic?: boolean
    hasIce?: boolean
    hasHot?: boolean
    description?: string | null
    createdAt?: Date | string
    categoryId: number
    regMemberId: string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type MenuUpdateManyMutationInput = {
    korName?: StringFieldUpdateOperationsInput | string
    engName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    hasIce?: BoolFieldUpdateOperationsInput | boolean
    hasHot?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MenuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    korName?: StringFieldUpdateOperationsInput | string
    engName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    hasIce?: BoolFieldUpdateOperationsInput | boolean
    hasHot?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    regMemberId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MenuImageCreateInput = {
    name: string
    isDefault?: boolean
    menu: MenuCreateNestedOneWithoutImagesInput
  }

  export type MenuImageUncheckedCreateInput = {
    id?: number
    name: string
    isDefault?: boolean
    menuId: number
  }

  export type MenuImageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    menu?: MenuUpdateOneRequiredWithoutImagesNestedInput
  }

  export type MenuImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    menuId?: IntFieldUpdateOperationsInput | number
  }

  export type MenuImageCreateManyInput = {
    id?: number
    name: string
    isDefault?: boolean
    menuId: number
  }

  export type MenuImageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MenuImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    menuId?: IntFieldUpdateOperationsInput | number
  }

  export type MenuLikeCreateInput = {
    createdAt?: Date | string
    member: MemberCreateNestedOneWithoutMenuLikesInput
    menu: MenuCreateNestedOneWithoutLikesInput
  }

  export type MenuLikeUncheckedCreateInput = {
    memberId: string
    menuId: number
    createdAt?: Date | string
  }

  export type MenuLikeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutMenuLikesNestedInput
    menu?: MenuUpdateOneRequiredWithoutLikesNestedInput
  }

  export type MenuLikeUncheckedUpdateInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    menuId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuLikeCreateManyInput = {
    memberId: string
    menuId: number
    createdAt?: Date | string
  }

  export type MenuLikeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuLikeUncheckedUpdateManyInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    menuId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type MemberRoleListRelationFilter = {
    every?: MemberRoleWhereInput
    some?: MemberRoleWhereInput
    none?: MemberRoleWhereInput
  }

  export type MenuLikeListRelationFilter = {
    every?: MenuLikeWhereInput
    some?: MenuLikeWhereInput
    none?: MenuLikeWhereInput
  }

  export type MenuListRelationFilter = {
    every?: MenuWhereInput
    some?: MenuWhereInput
    none?: MenuWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    password?: SortOrder
    profileImage?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    password?: SortOrder
    profileImage?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    password?: SortOrder
    profileImage?: SortOrder
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

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    description?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    description?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    description?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type MemberScalarRelationFilter = {
    is?: MemberWhereInput
    isNot?: MemberWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type MemberRoleMemberIdRoleIdCompoundUniqueInput = {
    memberId: string
    roleId: number
  }

  export type MemberRoleCountOrderByAggregateInput = {
    memberId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type MemberRoleAvgOrderByAggregateInput = {
    roleId?: SortOrder
  }

  export type MemberRoleMaxOrderByAggregateInput = {
    memberId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type MemberRoleMinOrderByAggregateInput = {
    memberId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type MemberRoleSumOrderByAggregateInput = {
    roleId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_public?: SortOrder
    order?: SortOrder
    regMemberId?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_public?: SortOrder
    order?: SortOrder
    regMemberId?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_public?: SortOrder
    order?: SortOrder
    regMemberId?: SortOrder
    createdAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MenuImageListRelationFilter = {
    every?: MenuImageWhereInput
    some?: MenuImageWhereInput
    none?: MenuImageWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type MenuImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuCountOrderByAggregateInput = {
    id?: SortOrder
    korName?: SortOrder
    engName?: SortOrder
    price?: SortOrder
    isPublic?: SortOrder
    hasIce?: SortOrder
    hasHot?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
    regMemberId?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
  }

  export type MenuMaxOrderByAggregateInput = {
    id?: SortOrder
    korName?: SortOrder
    engName?: SortOrder
    price?: SortOrder
    isPublic?: SortOrder
    hasIce?: SortOrder
    hasHot?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
    regMemberId?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuMinOrderByAggregateInput = {
    id?: SortOrder
    korName?: SortOrder
    engName?: SortOrder
    price?: SortOrder
    isPublic?: SortOrder
    hasIce?: SortOrder
    hasHot?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
    regMemberId?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MenuScalarRelationFilter = {
    is?: MenuWhereInput
    isNot?: MenuWhereInput
  }

  export type MenuImageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    menuId?: SortOrder
  }

  export type MenuImageAvgOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
  }

  export type MenuImageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    menuId?: SortOrder
  }

  export type MenuImageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    menuId?: SortOrder
  }

  export type MenuImageSumOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
  }

  export type MenuLikeMemberIdMenuIdCompoundUniqueInput = {
    memberId: string
    menuId: number
  }

  export type MenuLikeCountOrderByAggregateInput = {
    memberId?: SortOrder
    menuId?: SortOrder
    createdAt?: SortOrder
  }

  export type MenuLikeAvgOrderByAggregateInput = {
    menuId?: SortOrder
  }

  export type MenuLikeMaxOrderByAggregateInput = {
    memberId?: SortOrder
    menuId?: SortOrder
    createdAt?: SortOrder
  }

  export type MenuLikeMinOrderByAggregateInput = {
    memberId?: SortOrder
    menuId?: SortOrder
    createdAt?: SortOrder
  }

  export type MenuLikeSumOrderByAggregateInput = {
    menuId?: SortOrder
  }

  export type CategoryCreateNestedManyWithoutRegMemberInput = {
    create?: XOR<CategoryCreateWithoutRegMemberInput, CategoryUncheckedCreateWithoutRegMemberInput> | CategoryCreateWithoutRegMemberInput[] | CategoryUncheckedCreateWithoutRegMemberInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutRegMemberInput | CategoryCreateOrConnectWithoutRegMemberInput[]
    createMany?: CategoryCreateManyRegMemberInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type MemberRoleCreateNestedManyWithoutMemberInput = {
    create?: XOR<MemberRoleCreateWithoutMemberInput, MemberRoleUncheckedCreateWithoutMemberInput> | MemberRoleCreateWithoutMemberInput[] | MemberRoleUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberRoleCreateOrConnectWithoutMemberInput | MemberRoleCreateOrConnectWithoutMemberInput[]
    createMany?: MemberRoleCreateManyMemberInputEnvelope
    connect?: MemberRoleWhereUniqueInput | MemberRoleWhereUniqueInput[]
  }

  export type MenuLikeCreateNestedManyWithoutMemberInput = {
    create?: XOR<MenuLikeCreateWithoutMemberInput, MenuLikeUncheckedCreateWithoutMemberInput> | MenuLikeCreateWithoutMemberInput[] | MenuLikeUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MenuLikeCreateOrConnectWithoutMemberInput | MenuLikeCreateOrConnectWithoutMemberInput[]
    createMany?: MenuLikeCreateManyMemberInputEnvelope
    connect?: MenuLikeWhereUniqueInput | MenuLikeWhereUniqueInput[]
  }

  export type MenuCreateNestedManyWithoutRegMemberInput = {
    create?: XOR<MenuCreateWithoutRegMemberInput, MenuUncheckedCreateWithoutRegMemberInput> | MenuCreateWithoutRegMemberInput[] | MenuUncheckedCreateWithoutRegMemberInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutRegMemberInput | MenuCreateOrConnectWithoutRegMemberInput[]
    createMany?: MenuCreateManyRegMemberInputEnvelope
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutRegMemberInput = {
    create?: XOR<CategoryCreateWithoutRegMemberInput, CategoryUncheckedCreateWithoutRegMemberInput> | CategoryCreateWithoutRegMemberInput[] | CategoryUncheckedCreateWithoutRegMemberInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutRegMemberInput | CategoryCreateOrConnectWithoutRegMemberInput[]
    createMany?: CategoryCreateManyRegMemberInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type MemberRoleUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<MemberRoleCreateWithoutMemberInput, MemberRoleUncheckedCreateWithoutMemberInput> | MemberRoleCreateWithoutMemberInput[] | MemberRoleUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberRoleCreateOrConnectWithoutMemberInput | MemberRoleCreateOrConnectWithoutMemberInput[]
    createMany?: MemberRoleCreateManyMemberInputEnvelope
    connect?: MemberRoleWhereUniqueInput | MemberRoleWhereUniqueInput[]
  }

  export type MenuLikeUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<MenuLikeCreateWithoutMemberInput, MenuLikeUncheckedCreateWithoutMemberInput> | MenuLikeCreateWithoutMemberInput[] | MenuLikeUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MenuLikeCreateOrConnectWithoutMemberInput | MenuLikeCreateOrConnectWithoutMemberInput[]
    createMany?: MenuLikeCreateManyMemberInputEnvelope
    connect?: MenuLikeWhereUniqueInput | MenuLikeWhereUniqueInput[]
  }

  export type MenuUncheckedCreateNestedManyWithoutRegMemberInput = {
    create?: XOR<MenuCreateWithoutRegMemberInput, MenuUncheckedCreateWithoutRegMemberInput> | MenuCreateWithoutRegMemberInput[] | MenuUncheckedCreateWithoutRegMemberInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutRegMemberInput | MenuCreateOrConnectWithoutRegMemberInput[]
    createMany?: MenuCreateManyRegMemberInputEnvelope
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CategoryUpdateManyWithoutRegMemberNestedInput = {
    create?: XOR<CategoryCreateWithoutRegMemberInput, CategoryUncheckedCreateWithoutRegMemberInput> | CategoryCreateWithoutRegMemberInput[] | CategoryUncheckedCreateWithoutRegMemberInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutRegMemberInput | CategoryCreateOrConnectWithoutRegMemberInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutRegMemberInput | CategoryUpsertWithWhereUniqueWithoutRegMemberInput[]
    createMany?: CategoryCreateManyRegMemberInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutRegMemberInput | CategoryUpdateWithWhereUniqueWithoutRegMemberInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutRegMemberInput | CategoryUpdateManyWithWhereWithoutRegMemberInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type MemberRoleUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MemberRoleCreateWithoutMemberInput, MemberRoleUncheckedCreateWithoutMemberInput> | MemberRoleCreateWithoutMemberInput[] | MemberRoleUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberRoleCreateOrConnectWithoutMemberInput | MemberRoleCreateOrConnectWithoutMemberInput[]
    upsert?: MemberRoleUpsertWithWhereUniqueWithoutMemberInput | MemberRoleUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MemberRoleCreateManyMemberInputEnvelope
    set?: MemberRoleWhereUniqueInput | MemberRoleWhereUniqueInput[]
    disconnect?: MemberRoleWhereUniqueInput | MemberRoleWhereUniqueInput[]
    delete?: MemberRoleWhereUniqueInput | MemberRoleWhereUniqueInput[]
    connect?: MemberRoleWhereUniqueInput | MemberRoleWhereUniqueInput[]
    update?: MemberRoleUpdateWithWhereUniqueWithoutMemberInput | MemberRoleUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MemberRoleUpdateManyWithWhereWithoutMemberInput | MemberRoleUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MemberRoleScalarWhereInput | MemberRoleScalarWhereInput[]
  }

  export type MenuLikeUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MenuLikeCreateWithoutMemberInput, MenuLikeUncheckedCreateWithoutMemberInput> | MenuLikeCreateWithoutMemberInput[] | MenuLikeUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MenuLikeCreateOrConnectWithoutMemberInput | MenuLikeCreateOrConnectWithoutMemberInput[]
    upsert?: MenuLikeUpsertWithWhereUniqueWithoutMemberInput | MenuLikeUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MenuLikeCreateManyMemberInputEnvelope
    set?: MenuLikeWhereUniqueInput | MenuLikeWhereUniqueInput[]
    disconnect?: MenuLikeWhereUniqueInput | MenuLikeWhereUniqueInput[]
    delete?: MenuLikeWhereUniqueInput | MenuLikeWhereUniqueInput[]
    connect?: MenuLikeWhereUniqueInput | MenuLikeWhereUniqueInput[]
    update?: MenuLikeUpdateWithWhereUniqueWithoutMemberInput | MenuLikeUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MenuLikeUpdateManyWithWhereWithoutMemberInput | MenuLikeUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MenuLikeScalarWhereInput | MenuLikeScalarWhereInput[]
  }

  export type MenuUpdateManyWithoutRegMemberNestedInput = {
    create?: XOR<MenuCreateWithoutRegMemberInput, MenuUncheckedCreateWithoutRegMemberInput> | MenuCreateWithoutRegMemberInput[] | MenuUncheckedCreateWithoutRegMemberInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutRegMemberInput | MenuCreateOrConnectWithoutRegMemberInput[]
    upsert?: MenuUpsertWithWhereUniqueWithoutRegMemberInput | MenuUpsertWithWhereUniqueWithoutRegMemberInput[]
    createMany?: MenuCreateManyRegMemberInputEnvelope
    set?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    disconnect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    delete?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    update?: MenuUpdateWithWhereUniqueWithoutRegMemberInput | MenuUpdateWithWhereUniqueWithoutRegMemberInput[]
    updateMany?: MenuUpdateManyWithWhereWithoutRegMemberInput | MenuUpdateManyWithWhereWithoutRegMemberInput[]
    deleteMany?: MenuScalarWhereInput | MenuScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutRegMemberNestedInput = {
    create?: XOR<CategoryCreateWithoutRegMemberInput, CategoryUncheckedCreateWithoutRegMemberInput> | CategoryCreateWithoutRegMemberInput[] | CategoryUncheckedCreateWithoutRegMemberInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutRegMemberInput | CategoryCreateOrConnectWithoutRegMemberInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutRegMemberInput | CategoryUpsertWithWhereUniqueWithoutRegMemberInput[]
    createMany?: CategoryCreateManyRegMemberInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutRegMemberInput | CategoryUpdateWithWhereUniqueWithoutRegMemberInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutRegMemberInput | CategoryUpdateManyWithWhereWithoutRegMemberInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type MemberRoleUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MemberRoleCreateWithoutMemberInput, MemberRoleUncheckedCreateWithoutMemberInput> | MemberRoleCreateWithoutMemberInput[] | MemberRoleUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberRoleCreateOrConnectWithoutMemberInput | MemberRoleCreateOrConnectWithoutMemberInput[]
    upsert?: MemberRoleUpsertWithWhereUniqueWithoutMemberInput | MemberRoleUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MemberRoleCreateManyMemberInputEnvelope
    set?: MemberRoleWhereUniqueInput | MemberRoleWhereUniqueInput[]
    disconnect?: MemberRoleWhereUniqueInput | MemberRoleWhereUniqueInput[]
    delete?: MemberRoleWhereUniqueInput | MemberRoleWhereUniqueInput[]
    connect?: MemberRoleWhereUniqueInput | MemberRoleWhereUniqueInput[]
    update?: MemberRoleUpdateWithWhereUniqueWithoutMemberInput | MemberRoleUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MemberRoleUpdateManyWithWhereWithoutMemberInput | MemberRoleUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MemberRoleScalarWhereInput | MemberRoleScalarWhereInput[]
  }

  export type MenuLikeUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MenuLikeCreateWithoutMemberInput, MenuLikeUncheckedCreateWithoutMemberInput> | MenuLikeCreateWithoutMemberInput[] | MenuLikeUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MenuLikeCreateOrConnectWithoutMemberInput | MenuLikeCreateOrConnectWithoutMemberInput[]
    upsert?: MenuLikeUpsertWithWhereUniqueWithoutMemberInput | MenuLikeUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MenuLikeCreateManyMemberInputEnvelope
    set?: MenuLikeWhereUniqueInput | MenuLikeWhereUniqueInput[]
    disconnect?: MenuLikeWhereUniqueInput | MenuLikeWhereUniqueInput[]
    delete?: MenuLikeWhereUniqueInput | MenuLikeWhereUniqueInput[]
    connect?: MenuLikeWhereUniqueInput | MenuLikeWhereUniqueInput[]
    update?: MenuLikeUpdateWithWhereUniqueWithoutMemberInput | MenuLikeUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MenuLikeUpdateManyWithWhereWithoutMemberInput | MenuLikeUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MenuLikeScalarWhereInput | MenuLikeScalarWhereInput[]
  }

  export type MenuUncheckedUpdateManyWithoutRegMemberNestedInput = {
    create?: XOR<MenuCreateWithoutRegMemberInput, MenuUncheckedCreateWithoutRegMemberInput> | MenuCreateWithoutRegMemberInput[] | MenuUncheckedCreateWithoutRegMemberInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutRegMemberInput | MenuCreateOrConnectWithoutRegMemberInput[]
    upsert?: MenuUpsertWithWhereUniqueWithoutRegMemberInput | MenuUpsertWithWhereUniqueWithoutRegMemberInput[]
    createMany?: MenuCreateManyRegMemberInputEnvelope
    set?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    disconnect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    delete?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    update?: MenuUpdateWithWhereUniqueWithoutRegMemberInput | MenuUpdateWithWhereUniqueWithoutRegMemberInput[]
    updateMany?: MenuUpdateManyWithWhereWithoutRegMemberInput | MenuUpdateManyWithWhereWithoutRegMemberInput[]
    deleteMany?: MenuScalarWhereInput | MenuScalarWhereInput[]
  }

  export type MemberRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<MemberRoleCreateWithoutRoleInput, MemberRoleUncheckedCreateWithoutRoleInput> | MemberRoleCreateWithoutRoleInput[] | MemberRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: MemberRoleCreateOrConnectWithoutRoleInput | MemberRoleCreateOrConnectWithoutRoleInput[]
    createMany?: MemberRoleCreateManyRoleInputEnvelope
    connect?: MemberRoleWhereUniqueInput | MemberRoleWhereUniqueInput[]
  }

  export type MemberRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<MemberRoleCreateWithoutRoleInput, MemberRoleUncheckedCreateWithoutRoleInput> | MemberRoleCreateWithoutRoleInput[] | MemberRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: MemberRoleCreateOrConnectWithoutRoleInput | MemberRoleCreateOrConnectWithoutRoleInput[]
    createMany?: MemberRoleCreateManyRoleInputEnvelope
    connect?: MemberRoleWhereUniqueInput | MemberRoleWhereUniqueInput[]
  }

  export type MemberRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<MemberRoleCreateWithoutRoleInput, MemberRoleUncheckedCreateWithoutRoleInput> | MemberRoleCreateWithoutRoleInput[] | MemberRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: MemberRoleCreateOrConnectWithoutRoleInput | MemberRoleCreateOrConnectWithoutRoleInput[]
    upsert?: MemberRoleUpsertWithWhereUniqueWithoutRoleInput | MemberRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: MemberRoleCreateManyRoleInputEnvelope
    set?: MemberRoleWhereUniqueInput | MemberRoleWhereUniqueInput[]
    disconnect?: MemberRoleWhereUniqueInput | MemberRoleWhereUniqueInput[]
    delete?: MemberRoleWhereUniqueInput | MemberRoleWhereUniqueInput[]
    connect?: MemberRoleWhereUniqueInput | MemberRoleWhereUniqueInput[]
    update?: MemberRoleUpdateWithWhereUniqueWithoutRoleInput | MemberRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: MemberRoleUpdateManyWithWhereWithoutRoleInput | MemberRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: MemberRoleScalarWhereInput | MemberRoleScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MemberRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<MemberRoleCreateWithoutRoleInput, MemberRoleUncheckedCreateWithoutRoleInput> | MemberRoleCreateWithoutRoleInput[] | MemberRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: MemberRoleCreateOrConnectWithoutRoleInput | MemberRoleCreateOrConnectWithoutRoleInput[]
    upsert?: MemberRoleUpsertWithWhereUniqueWithoutRoleInput | MemberRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: MemberRoleCreateManyRoleInputEnvelope
    set?: MemberRoleWhereUniqueInput | MemberRoleWhereUniqueInput[]
    disconnect?: MemberRoleWhereUniqueInput | MemberRoleWhereUniqueInput[]
    delete?: MemberRoleWhereUniqueInput | MemberRoleWhereUniqueInput[]
    connect?: MemberRoleWhereUniqueInput | MemberRoleWhereUniqueInput[]
    update?: MemberRoleUpdateWithWhereUniqueWithoutRoleInput | MemberRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: MemberRoleUpdateManyWithWhereWithoutRoleInput | MemberRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: MemberRoleScalarWhereInput | MemberRoleScalarWhereInput[]
  }

  export type MemberCreateNestedOneWithoutMemberRolesInput = {
    create?: XOR<MemberCreateWithoutMemberRolesInput, MemberUncheckedCreateWithoutMemberRolesInput>
    connectOrCreate?: MemberCreateOrConnectWithoutMemberRolesInput
    connect?: MemberWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutMemberRolesInput = {
    create?: XOR<RoleCreateWithoutMemberRolesInput, RoleUncheckedCreateWithoutMemberRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutMemberRolesInput
    connect?: RoleWhereUniqueInput
  }

  export type MemberUpdateOneRequiredWithoutMemberRolesNestedInput = {
    create?: XOR<MemberCreateWithoutMemberRolesInput, MemberUncheckedCreateWithoutMemberRolesInput>
    connectOrCreate?: MemberCreateOrConnectWithoutMemberRolesInput
    upsert?: MemberUpsertWithoutMemberRolesInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutMemberRolesInput, MemberUpdateWithoutMemberRolesInput>, MemberUncheckedUpdateWithoutMemberRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutMemberRolesNestedInput = {
    create?: XOR<RoleCreateWithoutMemberRolesInput, RoleUncheckedCreateWithoutMemberRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutMemberRolesInput
    upsert?: RoleUpsertWithoutMemberRolesInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutMemberRolesInput, RoleUpdateWithoutMemberRolesInput>, RoleUncheckedUpdateWithoutMemberRolesInput>
  }

  export type MemberCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<MemberCreateWithoutCategoriesInput, MemberUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: MemberCreateOrConnectWithoutCategoriesInput
    connect?: MemberWhereUniqueInput
  }

  export type MenuCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MenuCreateWithoutCategoryInput, MenuUncheckedCreateWithoutCategoryInput> | MenuCreateWithoutCategoryInput[] | MenuUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutCategoryInput | MenuCreateOrConnectWithoutCategoryInput[]
    createMany?: MenuCreateManyCategoryInputEnvelope
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
  }

  export type MenuUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MenuCreateWithoutCategoryInput, MenuUncheckedCreateWithoutCategoryInput> | MenuCreateWithoutCategoryInput[] | MenuUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutCategoryInput | MenuCreateOrConnectWithoutCategoryInput[]
    createMany?: MenuCreateManyCategoryInputEnvelope
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MemberUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<MemberCreateWithoutCategoriesInput, MemberUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: MemberCreateOrConnectWithoutCategoriesInput
    upsert?: MemberUpsertWithoutCategoriesInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutCategoriesInput, MemberUpdateWithoutCategoriesInput>, MemberUncheckedUpdateWithoutCategoriesInput>
  }

  export type MenuUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MenuCreateWithoutCategoryInput, MenuUncheckedCreateWithoutCategoryInput> | MenuCreateWithoutCategoryInput[] | MenuUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutCategoryInput | MenuCreateOrConnectWithoutCategoryInput[]
    upsert?: MenuUpsertWithWhereUniqueWithoutCategoryInput | MenuUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MenuCreateManyCategoryInputEnvelope
    set?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    disconnect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    delete?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    update?: MenuUpdateWithWhereUniqueWithoutCategoryInput | MenuUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MenuUpdateManyWithWhereWithoutCategoryInput | MenuUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MenuScalarWhereInput | MenuScalarWhereInput[]
  }

  export type MenuUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MenuCreateWithoutCategoryInput, MenuUncheckedCreateWithoutCategoryInput> | MenuCreateWithoutCategoryInput[] | MenuUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutCategoryInput | MenuCreateOrConnectWithoutCategoryInput[]
    upsert?: MenuUpsertWithWhereUniqueWithoutCategoryInput | MenuUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MenuCreateManyCategoryInputEnvelope
    set?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    disconnect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    delete?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    update?: MenuUpdateWithWhereUniqueWithoutCategoryInput | MenuUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MenuUpdateManyWithWhereWithoutCategoryInput | MenuUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MenuScalarWhereInput | MenuScalarWhereInput[]
  }

  export type MenuImageCreateNestedManyWithoutMenuInput = {
    create?: XOR<MenuImageCreateWithoutMenuInput, MenuImageUncheckedCreateWithoutMenuInput> | MenuImageCreateWithoutMenuInput[] | MenuImageUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuImageCreateOrConnectWithoutMenuInput | MenuImageCreateOrConnectWithoutMenuInput[]
    createMany?: MenuImageCreateManyMenuInputEnvelope
    connect?: MenuImageWhereUniqueInput | MenuImageWhereUniqueInput[]
  }

  export type MenuLikeCreateNestedManyWithoutMenuInput = {
    create?: XOR<MenuLikeCreateWithoutMenuInput, MenuLikeUncheckedCreateWithoutMenuInput> | MenuLikeCreateWithoutMenuInput[] | MenuLikeUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuLikeCreateOrConnectWithoutMenuInput | MenuLikeCreateOrConnectWithoutMenuInput[]
    createMany?: MenuLikeCreateManyMenuInputEnvelope
    connect?: MenuLikeWhereUniqueInput | MenuLikeWhereUniqueInput[]
  }

  export type CategoryCreateNestedOneWithoutMenusInput = {
    create?: XOR<CategoryCreateWithoutMenusInput, CategoryUncheckedCreateWithoutMenusInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMenusInput
    connect?: CategoryWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutMenusInput = {
    create?: XOR<MemberCreateWithoutMenusInput, MemberUncheckedCreateWithoutMenusInput>
    connectOrCreate?: MemberCreateOrConnectWithoutMenusInput
    connect?: MemberWhereUniqueInput
  }

  export type MenuImageUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<MenuImageCreateWithoutMenuInput, MenuImageUncheckedCreateWithoutMenuInput> | MenuImageCreateWithoutMenuInput[] | MenuImageUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuImageCreateOrConnectWithoutMenuInput | MenuImageCreateOrConnectWithoutMenuInput[]
    createMany?: MenuImageCreateManyMenuInputEnvelope
    connect?: MenuImageWhereUniqueInput | MenuImageWhereUniqueInput[]
  }

  export type MenuLikeUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<MenuLikeCreateWithoutMenuInput, MenuLikeUncheckedCreateWithoutMenuInput> | MenuLikeCreateWithoutMenuInput[] | MenuLikeUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuLikeCreateOrConnectWithoutMenuInput | MenuLikeCreateOrConnectWithoutMenuInput[]
    createMany?: MenuLikeCreateManyMenuInputEnvelope
    connect?: MenuLikeWhereUniqueInput | MenuLikeWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MenuImageUpdateManyWithoutMenuNestedInput = {
    create?: XOR<MenuImageCreateWithoutMenuInput, MenuImageUncheckedCreateWithoutMenuInput> | MenuImageCreateWithoutMenuInput[] | MenuImageUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuImageCreateOrConnectWithoutMenuInput | MenuImageCreateOrConnectWithoutMenuInput[]
    upsert?: MenuImageUpsertWithWhereUniqueWithoutMenuInput | MenuImageUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: MenuImageCreateManyMenuInputEnvelope
    set?: MenuImageWhereUniqueInput | MenuImageWhereUniqueInput[]
    disconnect?: MenuImageWhereUniqueInput | MenuImageWhereUniqueInput[]
    delete?: MenuImageWhereUniqueInput | MenuImageWhereUniqueInput[]
    connect?: MenuImageWhereUniqueInput | MenuImageWhereUniqueInput[]
    update?: MenuImageUpdateWithWhereUniqueWithoutMenuInput | MenuImageUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: MenuImageUpdateManyWithWhereWithoutMenuInput | MenuImageUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: MenuImageScalarWhereInput | MenuImageScalarWhereInput[]
  }

  export type MenuLikeUpdateManyWithoutMenuNestedInput = {
    create?: XOR<MenuLikeCreateWithoutMenuInput, MenuLikeUncheckedCreateWithoutMenuInput> | MenuLikeCreateWithoutMenuInput[] | MenuLikeUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuLikeCreateOrConnectWithoutMenuInput | MenuLikeCreateOrConnectWithoutMenuInput[]
    upsert?: MenuLikeUpsertWithWhereUniqueWithoutMenuInput | MenuLikeUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: MenuLikeCreateManyMenuInputEnvelope
    set?: MenuLikeWhereUniqueInput | MenuLikeWhereUniqueInput[]
    disconnect?: MenuLikeWhereUniqueInput | MenuLikeWhereUniqueInput[]
    delete?: MenuLikeWhereUniqueInput | MenuLikeWhereUniqueInput[]
    connect?: MenuLikeWhereUniqueInput | MenuLikeWhereUniqueInput[]
    update?: MenuLikeUpdateWithWhereUniqueWithoutMenuInput | MenuLikeUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: MenuLikeUpdateManyWithWhereWithoutMenuInput | MenuLikeUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: MenuLikeScalarWhereInput | MenuLikeScalarWhereInput[]
  }

  export type CategoryUpdateOneRequiredWithoutMenusNestedInput = {
    create?: XOR<CategoryCreateWithoutMenusInput, CategoryUncheckedCreateWithoutMenusInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMenusInput
    upsert?: CategoryUpsertWithoutMenusInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutMenusInput, CategoryUpdateWithoutMenusInput>, CategoryUncheckedUpdateWithoutMenusInput>
  }

  export type MemberUpdateOneRequiredWithoutMenusNestedInput = {
    create?: XOR<MemberCreateWithoutMenusInput, MemberUncheckedCreateWithoutMenusInput>
    connectOrCreate?: MemberCreateOrConnectWithoutMenusInput
    upsert?: MemberUpsertWithoutMenusInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutMenusInput, MemberUpdateWithoutMenusInput>, MemberUncheckedUpdateWithoutMenusInput>
  }

  export type MenuImageUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<MenuImageCreateWithoutMenuInput, MenuImageUncheckedCreateWithoutMenuInput> | MenuImageCreateWithoutMenuInput[] | MenuImageUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuImageCreateOrConnectWithoutMenuInput | MenuImageCreateOrConnectWithoutMenuInput[]
    upsert?: MenuImageUpsertWithWhereUniqueWithoutMenuInput | MenuImageUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: MenuImageCreateManyMenuInputEnvelope
    set?: MenuImageWhereUniqueInput | MenuImageWhereUniqueInput[]
    disconnect?: MenuImageWhereUniqueInput | MenuImageWhereUniqueInput[]
    delete?: MenuImageWhereUniqueInput | MenuImageWhereUniqueInput[]
    connect?: MenuImageWhereUniqueInput | MenuImageWhereUniqueInput[]
    update?: MenuImageUpdateWithWhereUniqueWithoutMenuInput | MenuImageUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: MenuImageUpdateManyWithWhereWithoutMenuInput | MenuImageUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: MenuImageScalarWhereInput | MenuImageScalarWhereInput[]
  }

  export type MenuLikeUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<MenuLikeCreateWithoutMenuInput, MenuLikeUncheckedCreateWithoutMenuInput> | MenuLikeCreateWithoutMenuInput[] | MenuLikeUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuLikeCreateOrConnectWithoutMenuInput | MenuLikeCreateOrConnectWithoutMenuInput[]
    upsert?: MenuLikeUpsertWithWhereUniqueWithoutMenuInput | MenuLikeUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: MenuLikeCreateManyMenuInputEnvelope
    set?: MenuLikeWhereUniqueInput | MenuLikeWhereUniqueInput[]
    disconnect?: MenuLikeWhereUniqueInput | MenuLikeWhereUniqueInput[]
    delete?: MenuLikeWhereUniqueInput | MenuLikeWhereUniqueInput[]
    connect?: MenuLikeWhereUniqueInput | MenuLikeWhereUniqueInput[]
    update?: MenuLikeUpdateWithWhereUniqueWithoutMenuInput | MenuLikeUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: MenuLikeUpdateManyWithWhereWithoutMenuInput | MenuLikeUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: MenuLikeScalarWhereInput | MenuLikeScalarWhereInput[]
  }

  export type MenuCreateNestedOneWithoutImagesInput = {
    create?: XOR<MenuCreateWithoutImagesInput, MenuUncheckedCreateWithoutImagesInput>
    connectOrCreate?: MenuCreateOrConnectWithoutImagesInput
    connect?: MenuWhereUniqueInput
  }

  export type MenuUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<MenuCreateWithoutImagesInput, MenuUncheckedCreateWithoutImagesInput>
    connectOrCreate?: MenuCreateOrConnectWithoutImagesInput
    upsert?: MenuUpsertWithoutImagesInput
    connect?: MenuWhereUniqueInput
    update?: XOR<XOR<MenuUpdateToOneWithWhereWithoutImagesInput, MenuUpdateWithoutImagesInput>, MenuUncheckedUpdateWithoutImagesInput>
  }

  export type MemberCreateNestedOneWithoutMenuLikesInput = {
    create?: XOR<MemberCreateWithoutMenuLikesInput, MemberUncheckedCreateWithoutMenuLikesInput>
    connectOrCreate?: MemberCreateOrConnectWithoutMenuLikesInput
    connect?: MemberWhereUniqueInput
  }

  export type MenuCreateNestedOneWithoutLikesInput = {
    create?: XOR<MenuCreateWithoutLikesInput, MenuUncheckedCreateWithoutLikesInput>
    connectOrCreate?: MenuCreateOrConnectWithoutLikesInput
    connect?: MenuWhereUniqueInput
  }

  export type MemberUpdateOneRequiredWithoutMenuLikesNestedInput = {
    create?: XOR<MemberCreateWithoutMenuLikesInput, MemberUncheckedCreateWithoutMenuLikesInput>
    connectOrCreate?: MemberCreateOrConnectWithoutMenuLikesInput
    upsert?: MemberUpsertWithoutMenuLikesInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutMenuLikesInput, MemberUpdateWithoutMenuLikesInput>, MemberUncheckedUpdateWithoutMenuLikesInput>
  }

  export type MenuUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<MenuCreateWithoutLikesInput, MenuUncheckedCreateWithoutLikesInput>
    connectOrCreate?: MenuCreateOrConnectWithoutLikesInput
    upsert?: MenuUpsertWithoutLikesInput
    connect?: MenuWhereUniqueInput
    update?: XOR<XOR<MenuUpdateToOneWithWhereWithoutLikesInput, MenuUpdateWithoutLikesInput>, MenuUncheckedUpdateWithoutLikesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CategoryCreateWithoutRegMemberInput = {
    name: string
    is_public?: boolean
    order?: number
    createdAt?: Date | string
    menus?: MenuCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutRegMemberInput = {
    id?: number
    name: string
    is_public?: boolean
    order?: number
    createdAt?: Date | string
    menus?: MenuUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutRegMemberInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutRegMemberInput, CategoryUncheckedCreateWithoutRegMemberInput>
  }

  export type CategoryCreateManyRegMemberInputEnvelope = {
    data: CategoryCreateManyRegMemberInput | CategoryCreateManyRegMemberInput[]
    skipDuplicates?: boolean
  }

  export type MemberRoleCreateWithoutMemberInput = {
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutMemberRolesInput
  }

  export type MemberRoleUncheckedCreateWithoutMemberInput = {
    roleId: number
    createdAt?: Date | string
  }

  export type MemberRoleCreateOrConnectWithoutMemberInput = {
    where: MemberRoleWhereUniqueInput
    create: XOR<MemberRoleCreateWithoutMemberInput, MemberRoleUncheckedCreateWithoutMemberInput>
  }

  export type MemberRoleCreateManyMemberInputEnvelope = {
    data: MemberRoleCreateManyMemberInput | MemberRoleCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type MenuLikeCreateWithoutMemberInput = {
    createdAt?: Date | string
    menu: MenuCreateNestedOneWithoutLikesInput
  }

  export type MenuLikeUncheckedCreateWithoutMemberInput = {
    menuId: number
    createdAt?: Date | string
  }

  export type MenuLikeCreateOrConnectWithoutMemberInput = {
    where: MenuLikeWhereUniqueInput
    create: XOR<MenuLikeCreateWithoutMemberInput, MenuLikeUncheckedCreateWithoutMemberInput>
  }

  export type MenuLikeCreateManyMemberInputEnvelope = {
    data: MenuLikeCreateManyMemberInput | MenuLikeCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type MenuCreateWithoutRegMemberInput = {
    korName: string
    engName: string
    price: number
    isPublic?: boolean
    hasIce?: boolean
    hasHot?: boolean
    description?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    images?: MenuImageCreateNestedManyWithoutMenuInput
    likes?: MenuLikeCreateNestedManyWithoutMenuInput
    category: CategoryCreateNestedOneWithoutMenusInput
  }

  export type MenuUncheckedCreateWithoutRegMemberInput = {
    id?: number
    korName: string
    engName: string
    price: number
    isPublic?: boolean
    hasIce?: boolean
    hasHot?: boolean
    description?: string | null
    createdAt?: Date | string
    categoryId: number
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    images?: MenuImageUncheckedCreateNestedManyWithoutMenuInput
    likes?: MenuLikeUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuCreateOrConnectWithoutRegMemberInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutRegMemberInput, MenuUncheckedCreateWithoutRegMemberInput>
  }

  export type MenuCreateManyRegMemberInputEnvelope = {
    data: MenuCreateManyRegMemberInput | MenuCreateManyRegMemberInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithWhereUniqueWithoutRegMemberInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutRegMemberInput, CategoryUncheckedUpdateWithoutRegMemberInput>
    create: XOR<CategoryCreateWithoutRegMemberInput, CategoryUncheckedCreateWithoutRegMemberInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutRegMemberInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutRegMemberInput, CategoryUncheckedUpdateWithoutRegMemberInput>
  }

  export type CategoryUpdateManyWithWhereWithoutRegMemberInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutRegMemberInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    is_public?: BoolFilter<"Category"> | boolean
    order?: IntFilter<"Category"> | number
    regMemberId?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type MemberRoleUpsertWithWhereUniqueWithoutMemberInput = {
    where: MemberRoleWhereUniqueInput
    update: XOR<MemberRoleUpdateWithoutMemberInput, MemberRoleUncheckedUpdateWithoutMemberInput>
    create: XOR<MemberRoleCreateWithoutMemberInput, MemberRoleUncheckedCreateWithoutMemberInput>
  }

  export type MemberRoleUpdateWithWhereUniqueWithoutMemberInput = {
    where: MemberRoleWhereUniqueInput
    data: XOR<MemberRoleUpdateWithoutMemberInput, MemberRoleUncheckedUpdateWithoutMemberInput>
  }

  export type MemberRoleUpdateManyWithWhereWithoutMemberInput = {
    where: MemberRoleScalarWhereInput
    data: XOR<MemberRoleUpdateManyMutationInput, MemberRoleUncheckedUpdateManyWithoutMemberInput>
  }

  export type MemberRoleScalarWhereInput = {
    AND?: MemberRoleScalarWhereInput | MemberRoleScalarWhereInput[]
    OR?: MemberRoleScalarWhereInput[]
    NOT?: MemberRoleScalarWhereInput | MemberRoleScalarWhereInput[]
    memberId?: StringFilter<"MemberRole"> | string
    roleId?: IntFilter<"MemberRole"> | number
    createdAt?: DateTimeFilter<"MemberRole"> | Date | string
  }

  export type MenuLikeUpsertWithWhereUniqueWithoutMemberInput = {
    where: MenuLikeWhereUniqueInput
    update: XOR<MenuLikeUpdateWithoutMemberInput, MenuLikeUncheckedUpdateWithoutMemberInput>
    create: XOR<MenuLikeCreateWithoutMemberInput, MenuLikeUncheckedCreateWithoutMemberInput>
  }

  export type MenuLikeUpdateWithWhereUniqueWithoutMemberInput = {
    where: MenuLikeWhereUniqueInput
    data: XOR<MenuLikeUpdateWithoutMemberInput, MenuLikeUncheckedUpdateWithoutMemberInput>
  }

  export type MenuLikeUpdateManyWithWhereWithoutMemberInput = {
    where: MenuLikeScalarWhereInput
    data: XOR<MenuLikeUpdateManyMutationInput, MenuLikeUncheckedUpdateManyWithoutMemberInput>
  }

  export type MenuLikeScalarWhereInput = {
    AND?: MenuLikeScalarWhereInput | MenuLikeScalarWhereInput[]
    OR?: MenuLikeScalarWhereInput[]
    NOT?: MenuLikeScalarWhereInput | MenuLikeScalarWhereInput[]
    memberId?: StringFilter<"MenuLike"> | string
    menuId?: IntFilter<"MenuLike"> | number
    createdAt?: DateTimeFilter<"MenuLike"> | Date | string
  }

  export type MenuUpsertWithWhereUniqueWithoutRegMemberInput = {
    where: MenuWhereUniqueInput
    update: XOR<MenuUpdateWithoutRegMemberInput, MenuUncheckedUpdateWithoutRegMemberInput>
    create: XOR<MenuCreateWithoutRegMemberInput, MenuUncheckedCreateWithoutRegMemberInput>
  }

  export type MenuUpdateWithWhereUniqueWithoutRegMemberInput = {
    where: MenuWhereUniqueInput
    data: XOR<MenuUpdateWithoutRegMemberInput, MenuUncheckedUpdateWithoutRegMemberInput>
  }

  export type MenuUpdateManyWithWhereWithoutRegMemberInput = {
    where: MenuScalarWhereInput
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyWithoutRegMemberInput>
  }

  export type MenuScalarWhereInput = {
    AND?: MenuScalarWhereInput | MenuScalarWhereInput[]
    OR?: MenuScalarWhereInput[]
    NOT?: MenuScalarWhereInput | MenuScalarWhereInput[]
    id?: IntFilter<"Menu"> | number
    korName?: StringFilter<"Menu"> | string
    engName?: StringFilter<"Menu"> | string
    price?: FloatFilter<"Menu"> | number
    isPublic?: BoolFilter<"Menu"> | boolean
    hasIce?: BoolFilter<"Menu"> | boolean
    hasHot?: BoolFilter<"Menu"> | boolean
    description?: StringNullableFilter<"Menu"> | string | null
    createdAt?: DateTimeFilter<"Menu"> | Date | string
    categoryId?: IntFilter<"Menu"> | number
    regMemberId?: StringFilter<"Menu"> | string
    deletedAt?: DateTimeNullableFilter<"Menu"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Menu"> | Date | string | null
  }

  export type MemberRoleCreateWithoutRoleInput = {
    createdAt?: Date | string
    member: MemberCreateNestedOneWithoutMemberRolesInput
  }

  export type MemberRoleUncheckedCreateWithoutRoleInput = {
    memberId: string
    createdAt?: Date | string
  }

  export type MemberRoleCreateOrConnectWithoutRoleInput = {
    where: MemberRoleWhereUniqueInput
    create: XOR<MemberRoleCreateWithoutRoleInput, MemberRoleUncheckedCreateWithoutRoleInput>
  }

  export type MemberRoleCreateManyRoleInputEnvelope = {
    data: MemberRoleCreateManyRoleInput | MemberRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type MemberRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: MemberRoleWhereUniqueInput
    update: XOR<MemberRoleUpdateWithoutRoleInput, MemberRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<MemberRoleCreateWithoutRoleInput, MemberRoleUncheckedCreateWithoutRoleInput>
  }

  export type MemberRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: MemberRoleWhereUniqueInput
    data: XOR<MemberRoleUpdateWithoutRoleInput, MemberRoleUncheckedUpdateWithoutRoleInput>
  }

  export type MemberRoleUpdateManyWithWhereWithoutRoleInput = {
    where: MemberRoleScalarWhereInput
    data: XOR<MemberRoleUpdateManyMutationInput, MemberRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type MemberCreateWithoutMemberRolesInput = {
    id?: string
    email: string
    username: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    password: string
    profileImage?: string | null
    categories?: CategoryCreateNestedManyWithoutRegMemberInput
    menuLikes?: MenuLikeCreateNestedManyWithoutMemberInput
    menus?: MenuCreateNestedManyWithoutRegMemberInput
  }

  export type MemberUncheckedCreateWithoutMemberRolesInput = {
    id?: string
    email: string
    username: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    password: string
    profileImage?: string | null
    categories?: CategoryUncheckedCreateNestedManyWithoutRegMemberInput
    menuLikes?: MenuLikeUncheckedCreateNestedManyWithoutMemberInput
    menus?: MenuUncheckedCreateNestedManyWithoutRegMemberInput
  }

  export type MemberCreateOrConnectWithoutMemberRolesInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutMemberRolesInput, MemberUncheckedCreateWithoutMemberRolesInput>
  }

  export type RoleCreateWithoutMemberRolesInput = {
    name: string
    createdAt?: Date | string
    description?: string | null
  }

  export type RoleUncheckedCreateWithoutMemberRolesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    description?: string | null
  }

  export type RoleCreateOrConnectWithoutMemberRolesInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutMemberRolesInput, RoleUncheckedCreateWithoutMemberRolesInput>
  }

  export type MemberUpsertWithoutMemberRolesInput = {
    update: XOR<MemberUpdateWithoutMemberRolesInput, MemberUncheckedUpdateWithoutMemberRolesInput>
    create: XOR<MemberCreateWithoutMemberRolesInput, MemberUncheckedCreateWithoutMemberRolesInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutMemberRolesInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutMemberRolesInput, MemberUncheckedUpdateWithoutMemberRolesInput>
  }

  export type MemberUpdateWithoutMemberRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoryUpdateManyWithoutRegMemberNestedInput
    menuLikes?: MenuLikeUpdateManyWithoutMemberNestedInput
    menus?: MenuUpdateManyWithoutRegMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutMemberRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoryUncheckedUpdateManyWithoutRegMemberNestedInput
    menuLikes?: MenuLikeUncheckedUpdateManyWithoutMemberNestedInput
    menus?: MenuUncheckedUpdateManyWithoutRegMemberNestedInput
  }

  export type RoleUpsertWithoutMemberRolesInput = {
    update: XOR<RoleUpdateWithoutMemberRolesInput, RoleUncheckedUpdateWithoutMemberRolesInput>
    create: XOR<RoleCreateWithoutMemberRolesInput, RoleUncheckedCreateWithoutMemberRolesInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutMemberRolesInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutMemberRolesInput, RoleUncheckedUpdateWithoutMemberRolesInput>
  }

  export type RoleUpdateWithoutMemberRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUncheckedUpdateWithoutMemberRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemberCreateWithoutCategoriesInput = {
    id?: string
    email: string
    username: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    password: string
    profileImage?: string | null
    memberRoles?: MemberRoleCreateNestedManyWithoutMemberInput
    menuLikes?: MenuLikeCreateNestedManyWithoutMemberInput
    menus?: MenuCreateNestedManyWithoutRegMemberInput
  }

  export type MemberUncheckedCreateWithoutCategoriesInput = {
    id?: string
    email: string
    username: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    password: string
    profileImage?: string | null
    memberRoles?: MemberRoleUncheckedCreateNestedManyWithoutMemberInput
    menuLikes?: MenuLikeUncheckedCreateNestedManyWithoutMemberInput
    menus?: MenuUncheckedCreateNestedManyWithoutRegMemberInput
  }

  export type MemberCreateOrConnectWithoutCategoriesInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutCategoriesInput, MemberUncheckedCreateWithoutCategoriesInput>
  }

  export type MenuCreateWithoutCategoryInput = {
    korName: string
    engName: string
    price: number
    isPublic?: boolean
    hasIce?: boolean
    hasHot?: boolean
    description?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    images?: MenuImageCreateNestedManyWithoutMenuInput
    likes?: MenuLikeCreateNestedManyWithoutMenuInput
    regMember: MemberCreateNestedOneWithoutMenusInput
  }

  export type MenuUncheckedCreateWithoutCategoryInput = {
    id?: number
    korName: string
    engName: string
    price: number
    isPublic?: boolean
    hasIce?: boolean
    hasHot?: boolean
    description?: string | null
    createdAt?: Date | string
    regMemberId: string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    images?: MenuImageUncheckedCreateNestedManyWithoutMenuInput
    likes?: MenuLikeUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuCreateOrConnectWithoutCategoryInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutCategoryInput, MenuUncheckedCreateWithoutCategoryInput>
  }

  export type MenuCreateManyCategoryInputEnvelope = {
    data: MenuCreateManyCategoryInput | MenuCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type MemberUpsertWithoutCategoriesInput = {
    update: XOR<MemberUpdateWithoutCategoriesInput, MemberUncheckedUpdateWithoutCategoriesInput>
    create: XOR<MemberCreateWithoutCategoriesInput, MemberUncheckedCreateWithoutCategoriesInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutCategoriesInput, MemberUncheckedUpdateWithoutCategoriesInput>
  }

  export type MemberUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    memberRoles?: MemberRoleUpdateManyWithoutMemberNestedInput
    menuLikes?: MenuLikeUpdateManyWithoutMemberNestedInput
    menus?: MenuUpdateManyWithoutRegMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    memberRoles?: MemberRoleUncheckedUpdateManyWithoutMemberNestedInput
    menuLikes?: MenuLikeUncheckedUpdateManyWithoutMemberNestedInput
    menus?: MenuUncheckedUpdateManyWithoutRegMemberNestedInput
  }

  export type MenuUpsertWithWhereUniqueWithoutCategoryInput = {
    where: MenuWhereUniqueInput
    update: XOR<MenuUpdateWithoutCategoryInput, MenuUncheckedUpdateWithoutCategoryInput>
    create: XOR<MenuCreateWithoutCategoryInput, MenuUncheckedCreateWithoutCategoryInput>
  }

  export type MenuUpdateWithWhereUniqueWithoutCategoryInput = {
    where: MenuWhereUniqueInput
    data: XOR<MenuUpdateWithoutCategoryInput, MenuUncheckedUpdateWithoutCategoryInput>
  }

  export type MenuUpdateManyWithWhereWithoutCategoryInput = {
    where: MenuScalarWhereInput
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyWithoutCategoryInput>
  }

  export type MenuImageCreateWithoutMenuInput = {
    name: string
    isDefault?: boolean
  }

  export type MenuImageUncheckedCreateWithoutMenuInput = {
    id?: number
    name: string
    isDefault?: boolean
  }

  export type MenuImageCreateOrConnectWithoutMenuInput = {
    where: MenuImageWhereUniqueInput
    create: XOR<MenuImageCreateWithoutMenuInput, MenuImageUncheckedCreateWithoutMenuInput>
  }

  export type MenuImageCreateManyMenuInputEnvelope = {
    data: MenuImageCreateManyMenuInput | MenuImageCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type MenuLikeCreateWithoutMenuInput = {
    createdAt?: Date | string
    member: MemberCreateNestedOneWithoutMenuLikesInput
  }

  export type MenuLikeUncheckedCreateWithoutMenuInput = {
    memberId: string
    createdAt?: Date | string
  }

  export type MenuLikeCreateOrConnectWithoutMenuInput = {
    where: MenuLikeWhereUniqueInput
    create: XOR<MenuLikeCreateWithoutMenuInput, MenuLikeUncheckedCreateWithoutMenuInput>
  }

  export type MenuLikeCreateManyMenuInputEnvelope = {
    data: MenuLikeCreateManyMenuInput | MenuLikeCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutMenusInput = {
    name: string
    is_public?: boolean
    order?: number
    createdAt?: Date | string
    regMember: MemberCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutMenusInput = {
    id?: number
    name: string
    is_public?: boolean
    order?: number
    regMemberId: string
    createdAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutMenusInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutMenusInput, CategoryUncheckedCreateWithoutMenusInput>
  }

  export type MemberCreateWithoutMenusInput = {
    id?: string
    email: string
    username: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    password: string
    profileImage?: string | null
    categories?: CategoryCreateNestedManyWithoutRegMemberInput
    memberRoles?: MemberRoleCreateNestedManyWithoutMemberInput
    menuLikes?: MenuLikeCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutMenusInput = {
    id?: string
    email: string
    username: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    password: string
    profileImage?: string | null
    categories?: CategoryUncheckedCreateNestedManyWithoutRegMemberInput
    memberRoles?: MemberRoleUncheckedCreateNestedManyWithoutMemberInput
    menuLikes?: MenuLikeUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutMenusInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutMenusInput, MemberUncheckedCreateWithoutMenusInput>
  }

  export type MenuImageUpsertWithWhereUniqueWithoutMenuInput = {
    where: MenuImageWhereUniqueInput
    update: XOR<MenuImageUpdateWithoutMenuInput, MenuImageUncheckedUpdateWithoutMenuInput>
    create: XOR<MenuImageCreateWithoutMenuInput, MenuImageUncheckedCreateWithoutMenuInput>
  }

  export type MenuImageUpdateWithWhereUniqueWithoutMenuInput = {
    where: MenuImageWhereUniqueInput
    data: XOR<MenuImageUpdateWithoutMenuInput, MenuImageUncheckedUpdateWithoutMenuInput>
  }

  export type MenuImageUpdateManyWithWhereWithoutMenuInput = {
    where: MenuImageScalarWhereInput
    data: XOR<MenuImageUpdateManyMutationInput, MenuImageUncheckedUpdateManyWithoutMenuInput>
  }

  export type MenuImageScalarWhereInput = {
    AND?: MenuImageScalarWhereInput | MenuImageScalarWhereInput[]
    OR?: MenuImageScalarWhereInput[]
    NOT?: MenuImageScalarWhereInput | MenuImageScalarWhereInput[]
    id?: IntFilter<"MenuImage"> | number
    name?: StringFilter<"MenuImage"> | string
    isDefault?: BoolFilter<"MenuImage"> | boolean
    menuId?: IntFilter<"MenuImage"> | number
  }

  export type MenuLikeUpsertWithWhereUniqueWithoutMenuInput = {
    where: MenuLikeWhereUniqueInput
    update: XOR<MenuLikeUpdateWithoutMenuInput, MenuLikeUncheckedUpdateWithoutMenuInput>
    create: XOR<MenuLikeCreateWithoutMenuInput, MenuLikeUncheckedCreateWithoutMenuInput>
  }

  export type MenuLikeUpdateWithWhereUniqueWithoutMenuInput = {
    where: MenuLikeWhereUniqueInput
    data: XOR<MenuLikeUpdateWithoutMenuInput, MenuLikeUncheckedUpdateWithoutMenuInput>
  }

  export type MenuLikeUpdateManyWithWhereWithoutMenuInput = {
    where: MenuLikeScalarWhereInput
    data: XOR<MenuLikeUpdateManyMutationInput, MenuLikeUncheckedUpdateManyWithoutMenuInput>
  }

  export type CategoryUpsertWithoutMenusInput = {
    update: XOR<CategoryUpdateWithoutMenusInput, CategoryUncheckedUpdateWithoutMenusInput>
    create: XOR<CategoryCreateWithoutMenusInput, CategoryUncheckedCreateWithoutMenusInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutMenusInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutMenusInput, CategoryUncheckedUpdateWithoutMenusInput>
  }

  export type CategoryUpdateWithoutMenusInput = {
    name?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    regMember?: MemberUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutMenusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    regMemberId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUpsertWithoutMenusInput = {
    update: XOR<MemberUpdateWithoutMenusInput, MemberUncheckedUpdateWithoutMenusInput>
    create: XOR<MemberCreateWithoutMenusInput, MemberUncheckedCreateWithoutMenusInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutMenusInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutMenusInput, MemberUncheckedUpdateWithoutMenusInput>
  }

  export type MemberUpdateWithoutMenusInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoryUpdateManyWithoutRegMemberNestedInput
    memberRoles?: MemberRoleUpdateManyWithoutMemberNestedInput
    menuLikes?: MenuLikeUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutMenusInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoryUncheckedUpdateManyWithoutRegMemberNestedInput
    memberRoles?: MemberRoleUncheckedUpdateManyWithoutMemberNestedInput
    menuLikes?: MenuLikeUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MenuCreateWithoutImagesInput = {
    korName: string
    engName: string
    price: number
    isPublic?: boolean
    hasIce?: boolean
    hasHot?: boolean
    description?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    likes?: MenuLikeCreateNestedManyWithoutMenuInput
    category: CategoryCreateNestedOneWithoutMenusInput
    regMember: MemberCreateNestedOneWithoutMenusInput
  }

  export type MenuUncheckedCreateWithoutImagesInput = {
    id?: number
    korName: string
    engName: string
    price: number
    isPublic?: boolean
    hasIce?: boolean
    hasHot?: boolean
    description?: string | null
    createdAt?: Date | string
    categoryId: number
    regMemberId: string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    likes?: MenuLikeUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuCreateOrConnectWithoutImagesInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutImagesInput, MenuUncheckedCreateWithoutImagesInput>
  }

  export type MenuUpsertWithoutImagesInput = {
    update: XOR<MenuUpdateWithoutImagesInput, MenuUncheckedUpdateWithoutImagesInput>
    create: XOR<MenuCreateWithoutImagesInput, MenuUncheckedCreateWithoutImagesInput>
    where?: MenuWhereInput
  }

  export type MenuUpdateToOneWithWhereWithoutImagesInput = {
    where?: MenuWhereInput
    data: XOR<MenuUpdateWithoutImagesInput, MenuUncheckedUpdateWithoutImagesInput>
  }

  export type MenuUpdateWithoutImagesInput = {
    korName?: StringFieldUpdateOperationsInput | string
    engName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    hasIce?: BoolFieldUpdateOperationsInput | boolean
    hasHot?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: MenuLikeUpdateManyWithoutMenuNestedInput
    category?: CategoryUpdateOneRequiredWithoutMenusNestedInput
    regMember?: MemberUpdateOneRequiredWithoutMenusNestedInput
  }

  export type MenuUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    korName?: StringFieldUpdateOperationsInput | string
    engName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    hasIce?: BoolFieldUpdateOperationsInput | boolean
    hasHot?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    regMemberId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: MenuLikeUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MemberCreateWithoutMenuLikesInput = {
    id?: string
    email: string
    username: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    password: string
    profileImage?: string | null
    categories?: CategoryCreateNestedManyWithoutRegMemberInput
    memberRoles?: MemberRoleCreateNestedManyWithoutMemberInput
    menus?: MenuCreateNestedManyWithoutRegMemberInput
  }

  export type MemberUncheckedCreateWithoutMenuLikesInput = {
    id?: string
    email: string
    username: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    password: string
    profileImage?: string | null
    categories?: CategoryUncheckedCreateNestedManyWithoutRegMemberInput
    memberRoles?: MemberRoleUncheckedCreateNestedManyWithoutMemberInput
    menus?: MenuUncheckedCreateNestedManyWithoutRegMemberInput
  }

  export type MemberCreateOrConnectWithoutMenuLikesInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutMenuLikesInput, MemberUncheckedCreateWithoutMenuLikesInput>
  }

  export type MenuCreateWithoutLikesInput = {
    korName: string
    engName: string
    price: number
    isPublic?: boolean
    hasIce?: boolean
    hasHot?: boolean
    description?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    images?: MenuImageCreateNestedManyWithoutMenuInput
    category: CategoryCreateNestedOneWithoutMenusInput
    regMember: MemberCreateNestedOneWithoutMenusInput
  }

  export type MenuUncheckedCreateWithoutLikesInput = {
    id?: number
    korName: string
    engName: string
    price: number
    isPublic?: boolean
    hasIce?: boolean
    hasHot?: boolean
    description?: string | null
    createdAt?: Date | string
    categoryId: number
    regMemberId: string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    images?: MenuImageUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuCreateOrConnectWithoutLikesInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutLikesInput, MenuUncheckedCreateWithoutLikesInput>
  }

  export type MemberUpsertWithoutMenuLikesInput = {
    update: XOR<MemberUpdateWithoutMenuLikesInput, MemberUncheckedUpdateWithoutMenuLikesInput>
    create: XOR<MemberCreateWithoutMenuLikesInput, MemberUncheckedCreateWithoutMenuLikesInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutMenuLikesInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutMenuLikesInput, MemberUncheckedUpdateWithoutMenuLikesInput>
  }

  export type MemberUpdateWithoutMenuLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoryUpdateManyWithoutRegMemberNestedInput
    memberRoles?: MemberRoleUpdateManyWithoutMemberNestedInput
    menus?: MenuUpdateManyWithoutRegMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutMenuLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoryUncheckedUpdateManyWithoutRegMemberNestedInput
    memberRoles?: MemberRoleUncheckedUpdateManyWithoutMemberNestedInput
    menus?: MenuUncheckedUpdateManyWithoutRegMemberNestedInput
  }

  export type MenuUpsertWithoutLikesInput = {
    update: XOR<MenuUpdateWithoutLikesInput, MenuUncheckedUpdateWithoutLikesInput>
    create: XOR<MenuCreateWithoutLikesInput, MenuUncheckedCreateWithoutLikesInput>
    where?: MenuWhereInput
  }

  export type MenuUpdateToOneWithWhereWithoutLikesInput = {
    where?: MenuWhereInput
    data: XOR<MenuUpdateWithoutLikesInput, MenuUncheckedUpdateWithoutLikesInput>
  }

  export type MenuUpdateWithoutLikesInput = {
    korName?: StringFieldUpdateOperationsInput | string
    engName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    hasIce?: BoolFieldUpdateOperationsInput | boolean
    hasHot?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MenuImageUpdateManyWithoutMenuNestedInput
    category?: CategoryUpdateOneRequiredWithoutMenusNestedInput
    regMember?: MemberUpdateOneRequiredWithoutMenusNestedInput
  }

  export type MenuUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    korName?: StringFieldUpdateOperationsInput | string
    engName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    hasIce?: BoolFieldUpdateOperationsInput | boolean
    hasHot?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    regMemberId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MenuImageUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type CategoryCreateManyRegMemberInput = {
    id?: number
    name: string
    is_public?: boolean
    order?: number
    createdAt?: Date | string
  }

  export type MemberRoleCreateManyMemberInput = {
    roleId: number
    createdAt?: Date | string
  }

  export type MenuLikeCreateManyMemberInput = {
    menuId: number
    createdAt?: Date | string
  }

  export type MenuCreateManyRegMemberInput = {
    id?: number
    korName: string
    engName: string
    price: number
    isPublic?: boolean
    hasIce?: boolean
    hasHot?: boolean
    description?: string | null
    createdAt?: Date | string
    categoryId: number
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type CategoryUpdateWithoutRegMemberInput = {
    name?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menus?: MenuUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutRegMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menus?: MenuUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutRegMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberRoleUpdateWithoutMemberInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutMemberRolesNestedInput
  }

  export type MemberRoleUncheckedUpdateWithoutMemberInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberRoleUncheckedUpdateManyWithoutMemberInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuLikeUpdateWithoutMemberInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menu?: MenuUpdateOneRequiredWithoutLikesNestedInput
  }

  export type MenuLikeUncheckedUpdateWithoutMemberInput = {
    menuId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuLikeUncheckedUpdateManyWithoutMemberInput = {
    menuId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuUpdateWithoutRegMemberInput = {
    korName?: StringFieldUpdateOperationsInput | string
    engName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    hasIce?: BoolFieldUpdateOperationsInput | boolean
    hasHot?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MenuImageUpdateManyWithoutMenuNestedInput
    likes?: MenuLikeUpdateManyWithoutMenuNestedInput
    category?: CategoryUpdateOneRequiredWithoutMenusNestedInput
  }

  export type MenuUncheckedUpdateWithoutRegMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    korName?: StringFieldUpdateOperationsInput | string
    engName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    hasIce?: BoolFieldUpdateOperationsInput | boolean
    hasHot?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MenuImageUncheckedUpdateManyWithoutMenuNestedInput
    likes?: MenuLikeUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateManyWithoutRegMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    korName?: StringFieldUpdateOperationsInput | string
    engName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    hasIce?: BoolFieldUpdateOperationsInput | boolean
    hasHot?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MemberRoleCreateManyRoleInput = {
    memberId: string
    createdAt?: Date | string
  }

  export type MemberRoleUpdateWithoutRoleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutMemberRolesNestedInput
  }

  export type MemberRoleUncheckedUpdateWithoutRoleInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberRoleUncheckedUpdateManyWithoutRoleInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuCreateManyCategoryInput = {
    id?: number
    korName: string
    engName: string
    price: number
    isPublic?: boolean
    hasIce?: boolean
    hasHot?: boolean
    description?: string | null
    createdAt?: Date | string
    regMemberId: string
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type MenuUpdateWithoutCategoryInput = {
    korName?: StringFieldUpdateOperationsInput | string
    engName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    hasIce?: BoolFieldUpdateOperationsInput | boolean
    hasHot?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MenuImageUpdateManyWithoutMenuNestedInput
    likes?: MenuLikeUpdateManyWithoutMenuNestedInput
    regMember?: MemberUpdateOneRequiredWithoutMenusNestedInput
  }

  export type MenuUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    korName?: StringFieldUpdateOperationsInput | string
    engName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    hasIce?: BoolFieldUpdateOperationsInput | boolean
    hasHot?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    regMemberId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MenuImageUncheckedUpdateManyWithoutMenuNestedInput
    likes?: MenuLikeUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    korName?: StringFieldUpdateOperationsInput | string
    engName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    hasIce?: BoolFieldUpdateOperationsInput | boolean
    hasHot?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    regMemberId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MenuImageCreateManyMenuInput = {
    id?: number
    name: string
    isDefault?: boolean
  }

  export type MenuLikeCreateManyMenuInput = {
    memberId: string
    createdAt?: Date | string
  }

  export type MenuImageUpdateWithoutMenuInput = {
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MenuImageUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MenuImageUncheckedUpdateManyWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MenuLikeUpdateWithoutMenuInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutMenuLikesNestedInput
  }

  export type MenuLikeUncheckedUpdateWithoutMenuInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuLikeUncheckedUpdateManyWithoutMenuInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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