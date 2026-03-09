
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Dossier
 * 
 */
export type Dossier = $Result.DefaultSelection<Prisma.$DossierPayload>
/**
 * Model DocumentRequirement
 * 
 */
export type DocumentRequirement = $Result.DefaultSelection<Prisma.$DocumentRequirementPayload>
/**
 * Model UserDocument
 * 
 */
export type UserDocument = $Result.DefaultSelection<Prisma.$UserDocumentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CategoryType: {
  ARRENDADOR: 'ARRENDADOR',
  ARRENDATARIO: 'ARRENDATARIO',
  SOLIDARIO_SIN: 'SOLIDARIO_SIN',
  SOLIDARIO_CON: 'SOLIDARIO_CON',
  EMPRESA: 'EMPRESA'
};

export type CategoryType = (typeof CategoryType)[keyof typeof CategoryType]


export const DossierStatus: {
  INCOMPLETO: 'INCOMPLETO',
  REVISION: 'REVISION',
  APROBADO: 'APROBADO',
  RECHAZADO: 'RECHAZADO'
};

export type DossierStatus = (typeof DossierStatus)[keyof typeof DossierStatus]


export const DocumentStatus: {
  PENDIENTE: 'PENDIENTE',
  VALIDADO: 'VALIDADO',
  ERROR: 'ERROR'
};

export type DocumentStatus = (typeof DocumentStatus)[keyof typeof DocumentStatus]

}

export type CategoryType = $Enums.CategoryType

export const CategoryType: typeof $Enums.CategoryType

export type DossierStatus = $Enums.DossierStatus

export const DossierStatus: typeof $Enums.DossierStatus

export type DocumentStatus = $Enums.DocumentStatus

export const DocumentStatus: typeof $Enums.DocumentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dossier`: Exposes CRUD operations for the **Dossier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dossiers
    * const dossiers = await prisma.dossier.findMany()
    * ```
    */
  get dossier(): Prisma.DossierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentRequirement`: Exposes CRUD operations for the **DocumentRequirement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentRequirements
    * const documentRequirements = await prisma.documentRequirement.findMany()
    * ```
    */
  get documentRequirement(): Prisma.DocumentRequirementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userDocument`: Exposes CRUD operations for the **UserDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserDocuments
    * const userDocuments = await prisma.userDocument.findMany()
    * ```
    */
  get userDocument(): Prisma.UserDocumentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
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
    User: 'User',
    Dossier: 'Dossier',
    DocumentRequirement: 'DocumentRequirement',
    UserDocument: 'UserDocument'
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
      modelProps: "user" | "dossier" | "documentRequirement" | "userDocument"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Dossier: {
        payload: Prisma.$DossierPayload<ExtArgs>
        fields: Prisma.DossierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DossierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DossierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DossierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DossierPayload>
          }
          findFirst: {
            args: Prisma.DossierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DossierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DossierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DossierPayload>
          }
          findMany: {
            args: Prisma.DossierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DossierPayload>[]
          }
          create: {
            args: Prisma.DossierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DossierPayload>
          }
          createMany: {
            args: Prisma.DossierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DossierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DossierPayload>[]
          }
          delete: {
            args: Prisma.DossierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DossierPayload>
          }
          update: {
            args: Prisma.DossierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DossierPayload>
          }
          deleteMany: {
            args: Prisma.DossierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DossierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DossierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DossierPayload>[]
          }
          upsert: {
            args: Prisma.DossierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DossierPayload>
          }
          aggregate: {
            args: Prisma.DossierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDossier>
          }
          groupBy: {
            args: Prisma.DossierGroupByArgs<ExtArgs>
            result: $Utils.Optional<DossierGroupByOutputType>[]
          }
          count: {
            args: Prisma.DossierCountArgs<ExtArgs>
            result: $Utils.Optional<DossierCountAggregateOutputType> | number
          }
        }
      }
      DocumentRequirement: {
        payload: Prisma.$DocumentRequirementPayload<ExtArgs>
        fields: Prisma.DocumentRequirementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentRequirementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRequirementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentRequirementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRequirementPayload>
          }
          findFirst: {
            args: Prisma.DocumentRequirementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRequirementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentRequirementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRequirementPayload>
          }
          findMany: {
            args: Prisma.DocumentRequirementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRequirementPayload>[]
          }
          create: {
            args: Prisma.DocumentRequirementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRequirementPayload>
          }
          createMany: {
            args: Prisma.DocumentRequirementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentRequirementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRequirementPayload>[]
          }
          delete: {
            args: Prisma.DocumentRequirementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRequirementPayload>
          }
          update: {
            args: Prisma.DocumentRequirementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRequirementPayload>
          }
          deleteMany: {
            args: Prisma.DocumentRequirementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentRequirementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentRequirementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRequirementPayload>[]
          }
          upsert: {
            args: Prisma.DocumentRequirementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRequirementPayload>
          }
          aggregate: {
            args: Prisma.DocumentRequirementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentRequirement>
          }
          groupBy: {
            args: Prisma.DocumentRequirementGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentRequirementGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentRequirementCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentRequirementCountAggregateOutputType> | number
          }
        }
      }
      UserDocument: {
        payload: Prisma.$UserDocumentPayload<ExtArgs>
        fields: Prisma.UserDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDocumentPayload>
          }
          findFirst: {
            args: Prisma.UserDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDocumentPayload>
          }
          findMany: {
            args: Prisma.UserDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDocumentPayload>[]
          }
          create: {
            args: Prisma.UserDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDocumentPayload>
          }
          createMany: {
            args: Prisma.UserDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDocumentPayload>[]
          }
          delete: {
            args: Prisma.UserDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDocumentPayload>
          }
          update: {
            args: Prisma.UserDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDocumentPayload>
          }
          deleteMany: {
            args: Prisma.UserDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDocumentPayload>[]
          }
          upsert: {
            args: Prisma.UserDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDocumentPayload>
          }
          aggregate: {
            args: Prisma.UserDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserDocument>
          }
          groupBy: {
            args: Prisma.UserDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<UserDocumentCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
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
    user?: UserOmit
    dossier?: DossierOmit
    documentRequirement?: DocumentRequirementOmit
    userDocument?: UserDocumentOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    dossiers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dossiers?: boolean | UserCountOutputTypeCountDossiersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDossiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DossierWhereInput
  }


  /**
   * Count Type DossierCountOutputType
   */

  export type DossierCountOutputType = {
    documents: number
  }

  export type DossierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | DossierCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * DossierCountOutputType without action
   */
  export type DossierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DossierCountOutputType
     */
    select?: DossierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DossierCountOutputType without action
   */
  export type DossierCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDocumentWhereInput
  }


  /**
   * Count Type DocumentRequirementCountOutputType
   */

  export type DocumentRequirementCountOutputType = {
    documents: number
  }

  export type DocumentRequirementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | DocumentRequirementCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * DocumentRequirementCountOutputType without action
   */
  export type DocumentRequirementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRequirementCountOutputType
     */
    select?: DocumentRequirementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentRequirementCountOutputType without action
   */
  export type DocumentRequirementCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDocumentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dossiers?: boolean | User$dossiersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dossiers?: boolean | User$dossiersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      dossiers: Prisma.$DossierPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dossiers<T extends User$dossiersArgs<ExtArgs> = {}>(args?: Subset<T, User$dossiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.dossiers
   */
  export type User$dossiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierInclude<ExtArgs> | null
    where?: DossierWhereInput
    orderBy?: DossierOrderByWithRelationInput | DossierOrderByWithRelationInput[]
    cursor?: DossierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DossierScalarFieldEnum | DossierScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Dossier
   */

  export type AggregateDossier = {
    _count: DossierCountAggregateOutputType | null
    _min: DossierMinAggregateOutputType | null
    _max: DossierMaxAggregateOutputType | null
  }

  export type DossierMinAggregateOutputType = {
    id: string | null
    userId: string | null
    category: $Enums.CategoryType | null
    status: $Enums.DossierStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DossierMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    category: $Enums.CategoryType | null
    status: $Enums.DossierStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DossierCountAggregateOutputType = {
    id: number
    userId: number
    category: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DossierMinAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DossierMaxAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DossierCountAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DossierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dossier to aggregate.
     */
    where?: DossierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dossiers to fetch.
     */
    orderBy?: DossierOrderByWithRelationInput | DossierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DossierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dossiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dossiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dossiers
    **/
    _count?: true | DossierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DossierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DossierMaxAggregateInputType
  }

  export type GetDossierAggregateType<T extends DossierAggregateArgs> = {
        [P in keyof T & keyof AggregateDossier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDossier[P]>
      : GetScalarType<T[P], AggregateDossier[P]>
  }




  export type DossierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DossierWhereInput
    orderBy?: DossierOrderByWithAggregationInput | DossierOrderByWithAggregationInput[]
    by: DossierScalarFieldEnum[] | DossierScalarFieldEnum
    having?: DossierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DossierCountAggregateInputType | true
    _min?: DossierMinAggregateInputType
    _max?: DossierMaxAggregateInputType
  }

  export type DossierGroupByOutputType = {
    id: string
    userId: string
    category: $Enums.CategoryType
    status: $Enums.DossierStatus
    createdAt: Date
    updatedAt: Date
    _count: DossierCountAggregateOutputType | null
    _min: DossierMinAggregateOutputType | null
    _max: DossierMaxAggregateOutputType | null
  }

  type GetDossierGroupByPayload<T extends DossierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DossierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DossierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DossierGroupByOutputType[P]>
            : GetScalarType<T[P], DossierGroupByOutputType[P]>
        }
      >
    >


  export type DossierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    category?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | Dossier$documentsArgs<ExtArgs>
    _count?: boolean | DossierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dossier"]>

  export type DossierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    category?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dossier"]>

  export type DossierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    category?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dossier"]>

  export type DossierSelectScalar = {
    id?: boolean
    userId?: boolean
    category?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DossierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "category" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["dossier"]>
  export type DossierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | Dossier$documentsArgs<ExtArgs>
    _count?: boolean | DossierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DossierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DossierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DossierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dossier"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      documents: Prisma.$UserDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      category: $Enums.CategoryType
      status: $Enums.DossierStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dossier"]>
    composites: {}
  }

  type DossierGetPayload<S extends boolean | null | undefined | DossierDefaultArgs> = $Result.GetResult<Prisma.$DossierPayload, S>

  type DossierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DossierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DossierCountAggregateInputType | true
    }

  export interface DossierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dossier'], meta: { name: 'Dossier' } }
    /**
     * Find zero or one Dossier that matches the filter.
     * @param {DossierFindUniqueArgs} args - Arguments to find a Dossier
     * @example
     * // Get one Dossier
     * const dossier = await prisma.dossier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DossierFindUniqueArgs>(args: SelectSubset<T, DossierFindUniqueArgs<ExtArgs>>): Prisma__DossierClient<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dossier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DossierFindUniqueOrThrowArgs} args - Arguments to find a Dossier
     * @example
     * // Get one Dossier
     * const dossier = await prisma.dossier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DossierFindUniqueOrThrowArgs>(args: SelectSubset<T, DossierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DossierClient<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dossier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DossierFindFirstArgs} args - Arguments to find a Dossier
     * @example
     * // Get one Dossier
     * const dossier = await prisma.dossier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DossierFindFirstArgs>(args?: SelectSubset<T, DossierFindFirstArgs<ExtArgs>>): Prisma__DossierClient<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dossier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DossierFindFirstOrThrowArgs} args - Arguments to find a Dossier
     * @example
     * // Get one Dossier
     * const dossier = await prisma.dossier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DossierFindFirstOrThrowArgs>(args?: SelectSubset<T, DossierFindFirstOrThrowArgs<ExtArgs>>): Prisma__DossierClient<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dossiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DossierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dossiers
     * const dossiers = await prisma.dossier.findMany()
     * 
     * // Get first 10 Dossiers
     * const dossiers = await prisma.dossier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dossierWithIdOnly = await prisma.dossier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DossierFindManyArgs>(args?: SelectSubset<T, DossierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dossier.
     * @param {DossierCreateArgs} args - Arguments to create a Dossier.
     * @example
     * // Create one Dossier
     * const Dossier = await prisma.dossier.create({
     *   data: {
     *     // ... data to create a Dossier
     *   }
     * })
     * 
     */
    create<T extends DossierCreateArgs>(args: SelectSubset<T, DossierCreateArgs<ExtArgs>>): Prisma__DossierClient<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dossiers.
     * @param {DossierCreateManyArgs} args - Arguments to create many Dossiers.
     * @example
     * // Create many Dossiers
     * const dossier = await prisma.dossier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DossierCreateManyArgs>(args?: SelectSubset<T, DossierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dossiers and returns the data saved in the database.
     * @param {DossierCreateManyAndReturnArgs} args - Arguments to create many Dossiers.
     * @example
     * // Create many Dossiers
     * const dossier = await prisma.dossier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dossiers and only return the `id`
     * const dossierWithIdOnly = await prisma.dossier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DossierCreateManyAndReturnArgs>(args?: SelectSubset<T, DossierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dossier.
     * @param {DossierDeleteArgs} args - Arguments to delete one Dossier.
     * @example
     * // Delete one Dossier
     * const Dossier = await prisma.dossier.delete({
     *   where: {
     *     // ... filter to delete one Dossier
     *   }
     * })
     * 
     */
    delete<T extends DossierDeleteArgs>(args: SelectSubset<T, DossierDeleteArgs<ExtArgs>>): Prisma__DossierClient<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dossier.
     * @param {DossierUpdateArgs} args - Arguments to update one Dossier.
     * @example
     * // Update one Dossier
     * const dossier = await prisma.dossier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DossierUpdateArgs>(args: SelectSubset<T, DossierUpdateArgs<ExtArgs>>): Prisma__DossierClient<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dossiers.
     * @param {DossierDeleteManyArgs} args - Arguments to filter Dossiers to delete.
     * @example
     * // Delete a few Dossiers
     * const { count } = await prisma.dossier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DossierDeleteManyArgs>(args?: SelectSubset<T, DossierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dossiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DossierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dossiers
     * const dossier = await prisma.dossier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DossierUpdateManyArgs>(args: SelectSubset<T, DossierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dossiers and returns the data updated in the database.
     * @param {DossierUpdateManyAndReturnArgs} args - Arguments to update many Dossiers.
     * @example
     * // Update many Dossiers
     * const dossier = await prisma.dossier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dossiers and only return the `id`
     * const dossierWithIdOnly = await prisma.dossier.updateManyAndReturn({
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
    updateManyAndReturn<T extends DossierUpdateManyAndReturnArgs>(args: SelectSubset<T, DossierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dossier.
     * @param {DossierUpsertArgs} args - Arguments to update or create a Dossier.
     * @example
     * // Update or create a Dossier
     * const dossier = await prisma.dossier.upsert({
     *   create: {
     *     // ... data to create a Dossier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dossier we want to update
     *   }
     * })
     */
    upsert<T extends DossierUpsertArgs>(args: SelectSubset<T, DossierUpsertArgs<ExtArgs>>): Prisma__DossierClient<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dossiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DossierCountArgs} args - Arguments to filter Dossiers to count.
     * @example
     * // Count the number of Dossiers
     * const count = await prisma.dossier.count({
     *   where: {
     *     // ... the filter for the Dossiers we want to count
     *   }
     * })
    **/
    count<T extends DossierCountArgs>(
      args?: Subset<T, DossierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DossierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dossier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DossierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DossierAggregateArgs>(args: Subset<T, DossierAggregateArgs>): Prisma.PrismaPromise<GetDossierAggregateType<T>>

    /**
     * Group by Dossier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DossierGroupByArgs} args - Group by arguments.
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
      T extends DossierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DossierGroupByArgs['orderBy'] }
        : { orderBy?: DossierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DossierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDossierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dossier model
   */
  readonly fields: DossierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dossier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DossierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documents<T extends Dossier$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Dossier$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Dossier model
   */
  interface DossierFieldRefs {
    readonly id: FieldRef<"Dossier", 'String'>
    readonly userId: FieldRef<"Dossier", 'String'>
    readonly category: FieldRef<"Dossier", 'CategoryType'>
    readonly status: FieldRef<"Dossier", 'DossierStatus'>
    readonly createdAt: FieldRef<"Dossier", 'DateTime'>
    readonly updatedAt: FieldRef<"Dossier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dossier findUnique
   */
  export type DossierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierInclude<ExtArgs> | null
    /**
     * Filter, which Dossier to fetch.
     */
    where: DossierWhereUniqueInput
  }

  /**
   * Dossier findUniqueOrThrow
   */
  export type DossierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierInclude<ExtArgs> | null
    /**
     * Filter, which Dossier to fetch.
     */
    where: DossierWhereUniqueInput
  }

  /**
   * Dossier findFirst
   */
  export type DossierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierInclude<ExtArgs> | null
    /**
     * Filter, which Dossier to fetch.
     */
    where?: DossierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dossiers to fetch.
     */
    orderBy?: DossierOrderByWithRelationInput | DossierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dossiers.
     */
    cursor?: DossierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dossiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dossiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dossiers.
     */
    distinct?: DossierScalarFieldEnum | DossierScalarFieldEnum[]
  }

  /**
   * Dossier findFirstOrThrow
   */
  export type DossierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierInclude<ExtArgs> | null
    /**
     * Filter, which Dossier to fetch.
     */
    where?: DossierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dossiers to fetch.
     */
    orderBy?: DossierOrderByWithRelationInput | DossierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dossiers.
     */
    cursor?: DossierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dossiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dossiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dossiers.
     */
    distinct?: DossierScalarFieldEnum | DossierScalarFieldEnum[]
  }

  /**
   * Dossier findMany
   */
  export type DossierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierInclude<ExtArgs> | null
    /**
     * Filter, which Dossiers to fetch.
     */
    where?: DossierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dossiers to fetch.
     */
    orderBy?: DossierOrderByWithRelationInput | DossierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dossiers.
     */
    cursor?: DossierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dossiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dossiers.
     */
    skip?: number
    distinct?: DossierScalarFieldEnum | DossierScalarFieldEnum[]
  }

  /**
   * Dossier create
   */
  export type DossierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierInclude<ExtArgs> | null
    /**
     * The data needed to create a Dossier.
     */
    data: XOR<DossierCreateInput, DossierUncheckedCreateInput>
  }

  /**
   * Dossier createMany
   */
  export type DossierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dossiers.
     */
    data: DossierCreateManyInput | DossierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dossier createManyAndReturn
   */
  export type DossierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * The data used to create many Dossiers.
     */
    data: DossierCreateManyInput | DossierCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dossier update
   */
  export type DossierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierInclude<ExtArgs> | null
    /**
     * The data needed to update a Dossier.
     */
    data: XOR<DossierUpdateInput, DossierUncheckedUpdateInput>
    /**
     * Choose, which Dossier to update.
     */
    where: DossierWhereUniqueInput
  }

  /**
   * Dossier updateMany
   */
  export type DossierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dossiers.
     */
    data: XOR<DossierUpdateManyMutationInput, DossierUncheckedUpdateManyInput>
    /**
     * Filter which Dossiers to update
     */
    where?: DossierWhereInput
    /**
     * Limit how many Dossiers to update.
     */
    limit?: number
  }

  /**
   * Dossier updateManyAndReturn
   */
  export type DossierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * The data used to update Dossiers.
     */
    data: XOR<DossierUpdateManyMutationInput, DossierUncheckedUpdateManyInput>
    /**
     * Filter which Dossiers to update
     */
    where?: DossierWhereInput
    /**
     * Limit how many Dossiers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dossier upsert
   */
  export type DossierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierInclude<ExtArgs> | null
    /**
     * The filter to search for the Dossier to update in case it exists.
     */
    where: DossierWhereUniqueInput
    /**
     * In case the Dossier found by the `where` argument doesn't exist, create a new Dossier with this data.
     */
    create: XOR<DossierCreateInput, DossierUncheckedCreateInput>
    /**
     * In case the Dossier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DossierUpdateInput, DossierUncheckedUpdateInput>
  }

  /**
   * Dossier delete
   */
  export type DossierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierInclude<ExtArgs> | null
    /**
     * Filter which Dossier to delete.
     */
    where: DossierWhereUniqueInput
  }

  /**
   * Dossier deleteMany
   */
  export type DossierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dossiers to delete
     */
    where?: DossierWhereInput
    /**
     * Limit how many Dossiers to delete.
     */
    limit?: number
  }

  /**
   * Dossier.documents
   */
  export type Dossier$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocument
     */
    select?: UserDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocument
     */
    omit?: UserDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocumentInclude<ExtArgs> | null
    where?: UserDocumentWhereInput
    orderBy?: UserDocumentOrderByWithRelationInput | UserDocumentOrderByWithRelationInput[]
    cursor?: UserDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDocumentScalarFieldEnum | UserDocumentScalarFieldEnum[]
  }

  /**
   * Dossier without action
   */
  export type DossierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierInclude<ExtArgs> | null
  }


  /**
   * Model DocumentRequirement
   */

  export type AggregateDocumentRequirement = {
    _count: DocumentRequirementCountAggregateOutputType | null
    _avg: DocumentRequirementAvgAggregateOutputType | null
    _sum: DocumentRequirementSumAggregateOutputType | null
    _min: DocumentRequirementMinAggregateOutputType | null
    _max: DocumentRequirementMaxAggregateOutputType | null
  }

  export type DocumentRequirementAvgAggregateOutputType = {
    id: number | null
  }

  export type DocumentRequirementSumAggregateOutputType = {
    id: number | null
  }

  export type DocumentRequirementMinAggregateOutputType = {
    id: number | null
    category: $Enums.CategoryType | null
    name: string | null
    description: string | null
    isRequired: boolean | null
  }

  export type DocumentRequirementMaxAggregateOutputType = {
    id: number | null
    category: $Enums.CategoryType | null
    name: string | null
    description: string | null
    isRequired: boolean | null
  }

  export type DocumentRequirementCountAggregateOutputType = {
    id: number
    category: number
    name: number
    description: number
    isRequired: number
    _all: number
  }


  export type DocumentRequirementAvgAggregateInputType = {
    id?: true
  }

  export type DocumentRequirementSumAggregateInputType = {
    id?: true
  }

  export type DocumentRequirementMinAggregateInputType = {
    id?: true
    category?: true
    name?: true
    description?: true
    isRequired?: true
  }

  export type DocumentRequirementMaxAggregateInputType = {
    id?: true
    category?: true
    name?: true
    description?: true
    isRequired?: true
  }

  export type DocumentRequirementCountAggregateInputType = {
    id?: true
    category?: true
    name?: true
    description?: true
    isRequired?: true
    _all?: true
  }

  export type DocumentRequirementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentRequirement to aggregate.
     */
    where?: DocumentRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentRequirements to fetch.
     */
    orderBy?: DocumentRequirementOrderByWithRelationInput | DocumentRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentRequirements
    **/
    _count?: true | DocumentRequirementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentRequirementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentRequirementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentRequirementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentRequirementMaxAggregateInputType
  }

  export type GetDocumentRequirementAggregateType<T extends DocumentRequirementAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentRequirement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentRequirement[P]>
      : GetScalarType<T[P], AggregateDocumentRequirement[P]>
  }




  export type DocumentRequirementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentRequirementWhereInput
    orderBy?: DocumentRequirementOrderByWithAggregationInput | DocumentRequirementOrderByWithAggregationInput[]
    by: DocumentRequirementScalarFieldEnum[] | DocumentRequirementScalarFieldEnum
    having?: DocumentRequirementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentRequirementCountAggregateInputType | true
    _avg?: DocumentRequirementAvgAggregateInputType
    _sum?: DocumentRequirementSumAggregateInputType
    _min?: DocumentRequirementMinAggregateInputType
    _max?: DocumentRequirementMaxAggregateInputType
  }

  export type DocumentRequirementGroupByOutputType = {
    id: number
    category: $Enums.CategoryType
    name: string
    description: string | null
    isRequired: boolean
    _count: DocumentRequirementCountAggregateOutputType | null
    _avg: DocumentRequirementAvgAggregateOutputType | null
    _sum: DocumentRequirementSumAggregateOutputType | null
    _min: DocumentRequirementMinAggregateOutputType | null
    _max: DocumentRequirementMaxAggregateOutputType | null
  }

  type GetDocumentRequirementGroupByPayload<T extends DocumentRequirementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentRequirementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentRequirementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentRequirementGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentRequirementGroupByOutputType[P]>
        }
      >
    >


  export type DocumentRequirementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    name?: boolean
    description?: boolean
    isRequired?: boolean
    documents?: boolean | DocumentRequirement$documentsArgs<ExtArgs>
    _count?: boolean | DocumentRequirementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentRequirement"]>

  export type DocumentRequirementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    name?: boolean
    description?: boolean
    isRequired?: boolean
  }, ExtArgs["result"]["documentRequirement"]>

  export type DocumentRequirementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    name?: boolean
    description?: boolean
    isRequired?: boolean
  }, ExtArgs["result"]["documentRequirement"]>

  export type DocumentRequirementSelectScalar = {
    id?: boolean
    category?: boolean
    name?: boolean
    description?: boolean
    isRequired?: boolean
  }

  export type DocumentRequirementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "name" | "description" | "isRequired", ExtArgs["result"]["documentRequirement"]>
  export type DocumentRequirementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | DocumentRequirement$documentsArgs<ExtArgs>
    _count?: boolean | DocumentRequirementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentRequirementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DocumentRequirementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DocumentRequirementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentRequirement"
    objects: {
      documents: Prisma.$UserDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category: $Enums.CategoryType
      name: string
      description: string | null
      isRequired: boolean
    }, ExtArgs["result"]["documentRequirement"]>
    composites: {}
  }

  type DocumentRequirementGetPayload<S extends boolean | null | undefined | DocumentRequirementDefaultArgs> = $Result.GetResult<Prisma.$DocumentRequirementPayload, S>

  type DocumentRequirementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentRequirementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentRequirementCountAggregateInputType | true
    }

  export interface DocumentRequirementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentRequirement'], meta: { name: 'DocumentRequirement' } }
    /**
     * Find zero or one DocumentRequirement that matches the filter.
     * @param {DocumentRequirementFindUniqueArgs} args - Arguments to find a DocumentRequirement
     * @example
     * // Get one DocumentRequirement
     * const documentRequirement = await prisma.documentRequirement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentRequirementFindUniqueArgs>(args: SelectSubset<T, DocumentRequirementFindUniqueArgs<ExtArgs>>): Prisma__DocumentRequirementClient<$Result.GetResult<Prisma.$DocumentRequirementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentRequirement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentRequirementFindUniqueOrThrowArgs} args - Arguments to find a DocumentRequirement
     * @example
     * // Get one DocumentRequirement
     * const documentRequirement = await prisma.documentRequirement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentRequirementFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentRequirementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentRequirementClient<$Result.GetResult<Prisma.$DocumentRequirementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentRequirement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentRequirementFindFirstArgs} args - Arguments to find a DocumentRequirement
     * @example
     * // Get one DocumentRequirement
     * const documentRequirement = await prisma.documentRequirement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentRequirementFindFirstArgs>(args?: SelectSubset<T, DocumentRequirementFindFirstArgs<ExtArgs>>): Prisma__DocumentRequirementClient<$Result.GetResult<Prisma.$DocumentRequirementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentRequirement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentRequirementFindFirstOrThrowArgs} args - Arguments to find a DocumentRequirement
     * @example
     * // Get one DocumentRequirement
     * const documentRequirement = await prisma.documentRequirement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentRequirementFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentRequirementFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentRequirementClient<$Result.GetResult<Prisma.$DocumentRequirementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentRequirements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentRequirementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentRequirements
     * const documentRequirements = await prisma.documentRequirement.findMany()
     * 
     * // Get first 10 DocumentRequirements
     * const documentRequirements = await prisma.documentRequirement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentRequirementWithIdOnly = await prisma.documentRequirement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentRequirementFindManyArgs>(args?: SelectSubset<T, DocumentRequirementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentRequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentRequirement.
     * @param {DocumentRequirementCreateArgs} args - Arguments to create a DocumentRequirement.
     * @example
     * // Create one DocumentRequirement
     * const DocumentRequirement = await prisma.documentRequirement.create({
     *   data: {
     *     // ... data to create a DocumentRequirement
     *   }
     * })
     * 
     */
    create<T extends DocumentRequirementCreateArgs>(args: SelectSubset<T, DocumentRequirementCreateArgs<ExtArgs>>): Prisma__DocumentRequirementClient<$Result.GetResult<Prisma.$DocumentRequirementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentRequirements.
     * @param {DocumentRequirementCreateManyArgs} args - Arguments to create many DocumentRequirements.
     * @example
     * // Create many DocumentRequirements
     * const documentRequirement = await prisma.documentRequirement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentRequirementCreateManyArgs>(args?: SelectSubset<T, DocumentRequirementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentRequirements and returns the data saved in the database.
     * @param {DocumentRequirementCreateManyAndReturnArgs} args - Arguments to create many DocumentRequirements.
     * @example
     * // Create many DocumentRequirements
     * const documentRequirement = await prisma.documentRequirement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentRequirements and only return the `id`
     * const documentRequirementWithIdOnly = await prisma.documentRequirement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentRequirementCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentRequirementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentRequirementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentRequirement.
     * @param {DocumentRequirementDeleteArgs} args - Arguments to delete one DocumentRequirement.
     * @example
     * // Delete one DocumentRequirement
     * const DocumentRequirement = await prisma.documentRequirement.delete({
     *   where: {
     *     // ... filter to delete one DocumentRequirement
     *   }
     * })
     * 
     */
    delete<T extends DocumentRequirementDeleteArgs>(args: SelectSubset<T, DocumentRequirementDeleteArgs<ExtArgs>>): Prisma__DocumentRequirementClient<$Result.GetResult<Prisma.$DocumentRequirementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentRequirement.
     * @param {DocumentRequirementUpdateArgs} args - Arguments to update one DocumentRequirement.
     * @example
     * // Update one DocumentRequirement
     * const documentRequirement = await prisma.documentRequirement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentRequirementUpdateArgs>(args: SelectSubset<T, DocumentRequirementUpdateArgs<ExtArgs>>): Prisma__DocumentRequirementClient<$Result.GetResult<Prisma.$DocumentRequirementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentRequirements.
     * @param {DocumentRequirementDeleteManyArgs} args - Arguments to filter DocumentRequirements to delete.
     * @example
     * // Delete a few DocumentRequirements
     * const { count } = await prisma.documentRequirement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentRequirementDeleteManyArgs>(args?: SelectSubset<T, DocumentRequirementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentRequirementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentRequirements
     * const documentRequirement = await prisma.documentRequirement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentRequirementUpdateManyArgs>(args: SelectSubset<T, DocumentRequirementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentRequirements and returns the data updated in the database.
     * @param {DocumentRequirementUpdateManyAndReturnArgs} args - Arguments to update many DocumentRequirements.
     * @example
     * // Update many DocumentRequirements
     * const documentRequirement = await prisma.documentRequirement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentRequirements and only return the `id`
     * const documentRequirementWithIdOnly = await prisma.documentRequirement.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocumentRequirementUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentRequirementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentRequirementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentRequirement.
     * @param {DocumentRequirementUpsertArgs} args - Arguments to update or create a DocumentRequirement.
     * @example
     * // Update or create a DocumentRequirement
     * const documentRequirement = await prisma.documentRequirement.upsert({
     *   create: {
     *     // ... data to create a DocumentRequirement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentRequirement we want to update
     *   }
     * })
     */
    upsert<T extends DocumentRequirementUpsertArgs>(args: SelectSubset<T, DocumentRequirementUpsertArgs<ExtArgs>>): Prisma__DocumentRequirementClient<$Result.GetResult<Prisma.$DocumentRequirementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentRequirementCountArgs} args - Arguments to filter DocumentRequirements to count.
     * @example
     * // Count the number of DocumentRequirements
     * const count = await prisma.documentRequirement.count({
     *   where: {
     *     // ... the filter for the DocumentRequirements we want to count
     *   }
     * })
    **/
    count<T extends DocumentRequirementCountArgs>(
      args?: Subset<T, DocumentRequirementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentRequirementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentRequirementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentRequirementAggregateArgs>(args: Subset<T, DocumentRequirementAggregateArgs>): Prisma.PrismaPromise<GetDocumentRequirementAggregateType<T>>

    /**
     * Group by DocumentRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentRequirementGroupByArgs} args - Group by arguments.
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
      T extends DocumentRequirementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentRequirementGroupByArgs['orderBy'] }
        : { orderBy?: DocumentRequirementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentRequirementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentRequirementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentRequirement model
   */
  readonly fields: DocumentRequirementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentRequirement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentRequirementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documents<T extends DocumentRequirement$documentsArgs<ExtArgs> = {}>(args?: Subset<T, DocumentRequirement$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DocumentRequirement model
   */
  interface DocumentRequirementFieldRefs {
    readonly id: FieldRef<"DocumentRequirement", 'Int'>
    readonly category: FieldRef<"DocumentRequirement", 'CategoryType'>
    readonly name: FieldRef<"DocumentRequirement", 'String'>
    readonly description: FieldRef<"DocumentRequirement", 'String'>
    readonly isRequired: FieldRef<"DocumentRequirement", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * DocumentRequirement findUnique
   */
  export type DocumentRequirementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRequirement
     */
    select?: DocumentRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRequirement
     */
    omit?: DocumentRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentRequirementInclude<ExtArgs> | null
    /**
     * Filter, which DocumentRequirement to fetch.
     */
    where: DocumentRequirementWhereUniqueInput
  }

  /**
   * DocumentRequirement findUniqueOrThrow
   */
  export type DocumentRequirementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRequirement
     */
    select?: DocumentRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRequirement
     */
    omit?: DocumentRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentRequirementInclude<ExtArgs> | null
    /**
     * Filter, which DocumentRequirement to fetch.
     */
    where: DocumentRequirementWhereUniqueInput
  }

  /**
   * DocumentRequirement findFirst
   */
  export type DocumentRequirementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRequirement
     */
    select?: DocumentRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRequirement
     */
    omit?: DocumentRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentRequirementInclude<ExtArgs> | null
    /**
     * Filter, which DocumentRequirement to fetch.
     */
    where?: DocumentRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentRequirements to fetch.
     */
    orderBy?: DocumentRequirementOrderByWithRelationInput | DocumentRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentRequirements.
     */
    cursor?: DocumentRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentRequirements.
     */
    distinct?: DocumentRequirementScalarFieldEnum | DocumentRequirementScalarFieldEnum[]
  }

  /**
   * DocumentRequirement findFirstOrThrow
   */
  export type DocumentRequirementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRequirement
     */
    select?: DocumentRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRequirement
     */
    omit?: DocumentRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentRequirementInclude<ExtArgs> | null
    /**
     * Filter, which DocumentRequirement to fetch.
     */
    where?: DocumentRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentRequirements to fetch.
     */
    orderBy?: DocumentRequirementOrderByWithRelationInput | DocumentRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentRequirements.
     */
    cursor?: DocumentRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentRequirements.
     */
    distinct?: DocumentRequirementScalarFieldEnum | DocumentRequirementScalarFieldEnum[]
  }

  /**
   * DocumentRequirement findMany
   */
  export type DocumentRequirementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRequirement
     */
    select?: DocumentRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRequirement
     */
    omit?: DocumentRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentRequirementInclude<ExtArgs> | null
    /**
     * Filter, which DocumentRequirements to fetch.
     */
    where?: DocumentRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentRequirements to fetch.
     */
    orderBy?: DocumentRequirementOrderByWithRelationInput | DocumentRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentRequirements.
     */
    cursor?: DocumentRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentRequirements.
     */
    skip?: number
    distinct?: DocumentRequirementScalarFieldEnum | DocumentRequirementScalarFieldEnum[]
  }

  /**
   * DocumentRequirement create
   */
  export type DocumentRequirementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRequirement
     */
    select?: DocumentRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRequirement
     */
    omit?: DocumentRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentRequirementInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentRequirement.
     */
    data: XOR<DocumentRequirementCreateInput, DocumentRequirementUncheckedCreateInput>
  }

  /**
   * DocumentRequirement createMany
   */
  export type DocumentRequirementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentRequirements.
     */
    data: DocumentRequirementCreateManyInput | DocumentRequirementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentRequirement createManyAndReturn
   */
  export type DocumentRequirementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRequirement
     */
    select?: DocumentRequirementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRequirement
     */
    omit?: DocumentRequirementOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentRequirements.
     */
    data: DocumentRequirementCreateManyInput | DocumentRequirementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentRequirement update
   */
  export type DocumentRequirementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRequirement
     */
    select?: DocumentRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRequirement
     */
    omit?: DocumentRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentRequirementInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentRequirement.
     */
    data: XOR<DocumentRequirementUpdateInput, DocumentRequirementUncheckedUpdateInput>
    /**
     * Choose, which DocumentRequirement to update.
     */
    where: DocumentRequirementWhereUniqueInput
  }

  /**
   * DocumentRequirement updateMany
   */
  export type DocumentRequirementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentRequirements.
     */
    data: XOR<DocumentRequirementUpdateManyMutationInput, DocumentRequirementUncheckedUpdateManyInput>
    /**
     * Filter which DocumentRequirements to update
     */
    where?: DocumentRequirementWhereInput
    /**
     * Limit how many DocumentRequirements to update.
     */
    limit?: number
  }

  /**
   * DocumentRequirement updateManyAndReturn
   */
  export type DocumentRequirementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRequirement
     */
    select?: DocumentRequirementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRequirement
     */
    omit?: DocumentRequirementOmit<ExtArgs> | null
    /**
     * The data used to update DocumentRequirements.
     */
    data: XOR<DocumentRequirementUpdateManyMutationInput, DocumentRequirementUncheckedUpdateManyInput>
    /**
     * Filter which DocumentRequirements to update
     */
    where?: DocumentRequirementWhereInput
    /**
     * Limit how many DocumentRequirements to update.
     */
    limit?: number
  }

  /**
   * DocumentRequirement upsert
   */
  export type DocumentRequirementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRequirement
     */
    select?: DocumentRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRequirement
     */
    omit?: DocumentRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentRequirementInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentRequirement to update in case it exists.
     */
    where: DocumentRequirementWhereUniqueInput
    /**
     * In case the DocumentRequirement found by the `where` argument doesn't exist, create a new DocumentRequirement with this data.
     */
    create: XOR<DocumentRequirementCreateInput, DocumentRequirementUncheckedCreateInput>
    /**
     * In case the DocumentRequirement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentRequirementUpdateInput, DocumentRequirementUncheckedUpdateInput>
  }

  /**
   * DocumentRequirement delete
   */
  export type DocumentRequirementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRequirement
     */
    select?: DocumentRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRequirement
     */
    omit?: DocumentRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentRequirementInclude<ExtArgs> | null
    /**
     * Filter which DocumentRequirement to delete.
     */
    where: DocumentRequirementWhereUniqueInput
  }

  /**
   * DocumentRequirement deleteMany
   */
  export type DocumentRequirementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentRequirements to delete
     */
    where?: DocumentRequirementWhereInput
    /**
     * Limit how many DocumentRequirements to delete.
     */
    limit?: number
  }

  /**
   * DocumentRequirement.documents
   */
  export type DocumentRequirement$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocument
     */
    select?: UserDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocument
     */
    omit?: UserDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocumentInclude<ExtArgs> | null
    where?: UserDocumentWhereInput
    orderBy?: UserDocumentOrderByWithRelationInput | UserDocumentOrderByWithRelationInput[]
    cursor?: UserDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDocumentScalarFieldEnum | UserDocumentScalarFieldEnum[]
  }

  /**
   * DocumentRequirement without action
   */
  export type DocumentRequirementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRequirement
     */
    select?: DocumentRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRequirement
     */
    omit?: DocumentRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentRequirementInclude<ExtArgs> | null
  }


  /**
   * Model UserDocument
   */

  export type AggregateUserDocument = {
    _count: UserDocumentCountAggregateOutputType | null
    _avg: UserDocumentAvgAggregateOutputType | null
    _sum: UserDocumentSumAggregateOutputType | null
    _min: UserDocumentMinAggregateOutputType | null
    _max: UserDocumentMaxAggregateOutputType | null
  }

  export type UserDocumentAvgAggregateOutputType = {
    requirementId: number | null
  }

  export type UserDocumentSumAggregateOutputType = {
    requirementId: number | null
  }

  export type UserDocumentMinAggregateOutputType = {
    id: string | null
    dossierId: string | null
    requirementId: number | null
    fileUrl: string | null
    fileName: string | null
    status: $Enums.DocumentStatus | null
    rejectionReason: string | null
    uploadedAt: Date | null
  }

  export type UserDocumentMaxAggregateOutputType = {
    id: string | null
    dossierId: string | null
    requirementId: number | null
    fileUrl: string | null
    fileName: string | null
    status: $Enums.DocumentStatus | null
    rejectionReason: string | null
    uploadedAt: Date | null
  }

  export type UserDocumentCountAggregateOutputType = {
    id: number
    dossierId: number
    requirementId: number
    fileUrl: number
    fileName: number
    status: number
    rejectionReason: number
    uploadedAt: number
    _all: number
  }


  export type UserDocumentAvgAggregateInputType = {
    requirementId?: true
  }

  export type UserDocumentSumAggregateInputType = {
    requirementId?: true
  }

  export type UserDocumentMinAggregateInputType = {
    id?: true
    dossierId?: true
    requirementId?: true
    fileUrl?: true
    fileName?: true
    status?: true
    rejectionReason?: true
    uploadedAt?: true
  }

  export type UserDocumentMaxAggregateInputType = {
    id?: true
    dossierId?: true
    requirementId?: true
    fileUrl?: true
    fileName?: true
    status?: true
    rejectionReason?: true
    uploadedAt?: true
  }

  export type UserDocumentCountAggregateInputType = {
    id?: true
    dossierId?: true
    requirementId?: true
    fileUrl?: true
    fileName?: true
    status?: true
    rejectionReason?: true
    uploadedAt?: true
    _all?: true
  }

  export type UserDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDocument to aggregate.
     */
    where?: UserDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDocuments to fetch.
     */
    orderBy?: UserDocumentOrderByWithRelationInput | UserDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserDocuments
    **/
    _count?: true | UserDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDocumentMaxAggregateInputType
  }

  export type GetUserDocumentAggregateType<T extends UserDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateUserDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserDocument[P]>
      : GetScalarType<T[P], AggregateUserDocument[P]>
  }




  export type UserDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDocumentWhereInput
    orderBy?: UserDocumentOrderByWithAggregationInput | UserDocumentOrderByWithAggregationInput[]
    by: UserDocumentScalarFieldEnum[] | UserDocumentScalarFieldEnum
    having?: UserDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDocumentCountAggregateInputType | true
    _avg?: UserDocumentAvgAggregateInputType
    _sum?: UserDocumentSumAggregateInputType
    _min?: UserDocumentMinAggregateInputType
    _max?: UserDocumentMaxAggregateInputType
  }

  export type UserDocumentGroupByOutputType = {
    id: string
    dossierId: string
    requirementId: number
    fileUrl: string
    fileName: string
    status: $Enums.DocumentStatus
    rejectionReason: string | null
    uploadedAt: Date
    _count: UserDocumentCountAggregateOutputType | null
    _avg: UserDocumentAvgAggregateOutputType | null
    _sum: UserDocumentSumAggregateOutputType | null
    _min: UserDocumentMinAggregateOutputType | null
    _max: UserDocumentMaxAggregateOutputType | null
  }

  type GetUserDocumentGroupByPayload<T extends UserDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], UserDocumentGroupByOutputType[P]>
        }
      >
    >


  export type UserDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dossierId?: boolean
    requirementId?: boolean
    fileUrl?: boolean
    fileName?: boolean
    status?: boolean
    rejectionReason?: boolean
    uploadedAt?: boolean
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
    requirement?: boolean | DocumentRequirementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDocument"]>

  export type UserDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dossierId?: boolean
    requirementId?: boolean
    fileUrl?: boolean
    fileName?: boolean
    status?: boolean
    rejectionReason?: boolean
    uploadedAt?: boolean
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
    requirement?: boolean | DocumentRequirementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDocument"]>

  export type UserDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dossierId?: boolean
    requirementId?: boolean
    fileUrl?: boolean
    fileName?: boolean
    status?: boolean
    rejectionReason?: boolean
    uploadedAt?: boolean
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
    requirement?: boolean | DocumentRequirementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDocument"]>

  export type UserDocumentSelectScalar = {
    id?: boolean
    dossierId?: boolean
    requirementId?: boolean
    fileUrl?: boolean
    fileName?: boolean
    status?: boolean
    rejectionReason?: boolean
    uploadedAt?: boolean
  }

  export type UserDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dossierId" | "requirementId" | "fileUrl" | "fileName" | "status" | "rejectionReason" | "uploadedAt", ExtArgs["result"]["userDocument"]>
  export type UserDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
    requirement?: boolean | DocumentRequirementDefaultArgs<ExtArgs>
  }
  export type UserDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
    requirement?: boolean | DocumentRequirementDefaultArgs<ExtArgs>
  }
  export type UserDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
    requirement?: boolean | DocumentRequirementDefaultArgs<ExtArgs>
  }

  export type $UserDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserDocument"
    objects: {
      dossier: Prisma.$DossierPayload<ExtArgs>
      requirement: Prisma.$DocumentRequirementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dossierId: string
      requirementId: number
      fileUrl: string
      fileName: string
      status: $Enums.DocumentStatus
      rejectionReason: string | null
      uploadedAt: Date
    }, ExtArgs["result"]["userDocument"]>
    composites: {}
  }

  type UserDocumentGetPayload<S extends boolean | null | undefined | UserDocumentDefaultArgs> = $Result.GetResult<Prisma.$UserDocumentPayload, S>

  type UserDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserDocumentCountAggregateInputType | true
    }

  export interface UserDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserDocument'], meta: { name: 'UserDocument' } }
    /**
     * Find zero or one UserDocument that matches the filter.
     * @param {UserDocumentFindUniqueArgs} args - Arguments to find a UserDocument
     * @example
     * // Get one UserDocument
     * const userDocument = await prisma.userDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDocumentFindUniqueArgs>(args: SelectSubset<T, UserDocumentFindUniqueArgs<ExtArgs>>): Prisma__UserDocumentClient<$Result.GetResult<Prisma.$UserDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDocumentFindUniqueOrThrowArgs} args - Arguments to find a UserDocument
     * @example
     * // Get one UserDocument
     * const userDocument = await prisma.userDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDocumentClient<$Result.GetResult<Prisma.$UserDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDocumentFindFirstArgs} args - Arguments to find a UserDocument
     * @example
     * // Get one UserDocument
     * const userDocument = await prisma.userDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDocumentFindFirstArgs>(args?: SelectSubset<T, UserDocumentFindFirstArgs<ExtArgs>>): Prisma__UserDocumentClient<$Result.GetResult<Prisma.$UserDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDocumentFindFirstOrThrowArgs} args - Arguments to find a UserDocument
     * @example
     * // Get one UserDocument
     * const userDocument = await prisma.userDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDocumentClient<$Result.GetResult<Prisma.$UserDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserDocuments
     * const userDocuments = await prisma.userDocument.findMany()
     * 
     * // Get first 10 UserDocuments
     * const userDocuments = await prisma.userDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userDocumentWithIdOnly = await prisma.userDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserDocumentFindManyArgs>(args?: SelectSubset<T, UserDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserDocument.
     * @param {UserDocumentCreateArgs} args - Arguments to create a UserDocument.
     * @example
     * // Create one UserDocument
     * const UserDocument = await prisma.userDocument.create({
     *   data: {
     *     // ... data to create a UserDocument
     *   }
     * })
     * 
     */
    create<T extends UserDocumentCreateArgs>(args: SelectSubset<T, UserDocumentCreateArgs<ExtArgs>>): Prisma__UserDocumentClient<$Result.GetResult<Prisma.$UserDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserDocuments.
     * @param {UserDocumentCreateManyArgs} args - Arguments to create many UserDocuments.
     * @example
     * // Create many UserDocuments
     * const userDocument = await prisma.userDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDocumentCreateManyArgs>(args?: SelectSubset<T, UserDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserDocuments and returns the data saved in the database.
     * @param {UserDocumentCreateManyAndReturnArgs} args - Arguments to create many UserDocuments.
     * @example
     * // Create many UserDocuments
     * const userDocument = await prisma.userDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserDocuments and only return the `id`
     * const userDocumentWithIdOnly = await prisma.userDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserDocument.
     * @param {UserDocumentDeleteArgs} args - Arguments to delete one UserDocument.
     * @example
     * // Delete one UserDocument
     * const UserDocument = await prisma.userDocument.delete({
     *   where: {
     *     // ... filter to delete one UserDocument
     *   }
     * })
     * 
     */
    delete<T extends UserDocumentDeleteArgs>(args: SelectSubset<T, UserDocumentDeleteArgs<ExtArgs>>): Prisma__UserDocumentClient<$Result.GetResult<Prisma.$UserDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserDocument.
     * @param {UserDocumentUpdateArgs} args - Arguments to update one UserDocument.
     * @example
     * // Update one UserDocument
     * const userDocument = await prisma.userDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDocumentUpdateArgs>(args: SelectSubset<T, UserDocumentUpdateArgs<ExtArgs>>): Prisma__UserDocumentClient<$Result.GetResult<Prisma.$UserDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserDocuments.
     * @param {UserDocumentDeleteManyArgs} args - Arguments to filter UserDocuments to delete.
     * @example
     * // Delete a few UserDocuments
     * const { count } = await prisma.userDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDocumentDeleteManyArgs>(args?: SelectSubset<T, UserDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserDocuments
     * const userDocument = await prisma.userDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDocumentUpdateManyArgs>(args: SelectSubset<T, UserDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDocuments and returns the data updated in the database.
     * @param {UserDocumentUpdateManyAndReturnArgs} args - Arguments to update many UserDocuments.
     * @example
     * // Update many UserDocuments
     * const userDocument = await prisma.userDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserDocuments and only return the `id`
     * const userDocumentWithIdOnly = await prisma.userDocument.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, UserDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserDocument.
     * @param {UserDocumentUpsertArgs} args - Arguments to update or create a UserDocument.
     * @example
     * // Update or create a UserDocument
     * const userDocument = await prisma.userDocument.upsert({
     *   create: {
     *     // ... data to create a UserDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserDocument we want to update
     *   }
     * })
     */
    upsert<T extends UserDocumentUpsertArgs>(args: SelectSubset<T, UserDocumentUpsertArgs<ExtArgs>>): Prisma__UserDocumentClient<$Result.GetResult<Prisma.$UserDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDocumentCountArgs} args - Arguments to filter UserDocuments to count.
     * @example
     * // Count the number of UserDocuments
     * const count = await prisma.userDocument.count({
     *   where: {
     *     // ... the filter for the UserDocuments we want to count
     *   }
     * })
    **/
    count<T extends UserDocumentCountArgs>(
      args?: Subset<T, UserDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserDocumentAggregateArgs>(args: Subset<T, UserDocumentAggregateArgs>): Prisma.PrismaPromise<GetUserDocumentAggregateType<T>>

    /**
     * Group by UserDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDocumentGroupByArgs} args - Group by arguments.
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
      T extends UserDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDocumentGroupByArgs['orderBy'] }
        : { orderBy?: UserDocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserDocument model
   */
  readonly fields: UserDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dossier<T extends DossierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DossierDefaultArgs<ExtArgs>>): Prisma__DossierClient<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requirement<T extends DocumentRequirementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentRequirementDefaultArgs<ExtArgs>>): Prisma__DocumentRequirementClient<$Result.GetResult<Prisma.$DocumentRequirementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserDocument model
   */
  interface UserDocumentFieldRefs {
    readonly id: FieldRef<"UserDocument", 'String'>
    readonly dossierId: FieldRef<"UserDocument", 'String'>
    readonly requirementId: FieldRef<"UserDocument", 'Int'>
    readonly fileUrl: FieldRef<"UserDocument", 'String'>
    readonly fileName: FieldRef<"UserDocument", 'String'>
    readonly status: FieldRef<"UserDocument", 'DocumentStatus'>
    readonly rejectionReason: FieldRef<"UserDocument", 'String'>
    readonly uploadedAt: FieldRef<"UserDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserDocument findUnique
   */
  export type UserDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocument
     */
    select?: UserDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocument
     */
    omit?: UserDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocumentInclude<ExtArgs> | null
    /**
     * Filter, which UserDocument to fetch.
     */
    where: UserDocumentWhereUniqueInput
  }

  /**
   * UserDocument findUniqueOrThrow
   */
  export type UserDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocument
     */
    select?: UserDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocument
     */
    omit?: UserDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocumentInclude<ExtArgs> | null
    /**
     * Filter, which UserDocument to fetch.
     */
    where: UserDocumentWhereUniqueInput
  }

  /**
   * UserDocument findFirst
   */
  export type UserDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocument
     */
    select?: UserDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocument
     */
    omit?: UserDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocumentInclude<ExtArgs> | null
    /**
     * Filter, which UserDocument to fetch.
     */
    where?: UserDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDocuments to fetch.
     */
    orderBy?: UserDocumentOrderByWithRelationInput | UserDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDocuments.
     */
    cursor?: UserDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDocuments.
     */
    distinct?: UserDocumentScalarFieldEnum | UserDocumentScalarFieldEnum[]
  }

  /**
   * UserDocument findFirstOrThrow
   */
  export type UserDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocument
     */
    select?: UserDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocument
     */
    omit?: UserDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocumentInclude<ExtArgs> | null
    /**
     * Filter, which UserDocument to fetch.
     */
    where?: UserDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDocuments to fetch.
     */
    orderBy?: UserDocumentOrderByWithRelationInput | UserDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDocuments.
     */
    cursor?: UserDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDocuments.
     */
    distinct?: UserDocumentScalarFieldEnum | UserDocumentScalarFieldEnum[]
  }

  /**
   * UserDocument findMany
   */
  export type UserDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocument
     */
    select?: UserDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocument
     */
    omit?: UserDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocumentInclude<ExtArgs> | null
    /**
     * Filter, which UserDocuments to fetch.
     */
    where?: UserDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDocuments to fetch.
     */
    orderBy?: UserDocumentOrderByWithRelationInput | UserDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserDocuments.
     */
    cursor?: UserDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDocuments.
     */
    skip?: number
    distinct?: UserDocumentScalarFieldEnum | UserDocumentScalarFieldEnum[]
  }

  /**
   * UserDocument create
   */
  export type UserDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocument
     */
    select?: UserDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocument
     */
    omit?: UserDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a UserDocument.
     */
    data: XOR<UserDocumentCreateInput, UserDocumentUncheckedCreateInput>
  }

  /**
   * UserDocument createMany
   */
  export type UserDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserDocuments.
     */
    data: UserDocumentCreateManyInput | UserDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserDocument createManyAndReturn
   */
  export type UserDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocument
     */
    select?: UserDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocument
     */
    omit?: UserDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many UserDocuments.
     */
    data: UserDocumentCreateManyInput | UserDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDocument update
   */
  export type UserDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocument
     */
    select?: UserDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocument
     */
    omit?: UserDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a UserDocument.
     */
    data: XOR<UserDocumentUpdateInput, UserDocumentUncheckedUpdateInput>
    /**
     * Choose, which UserDocument to update.
     */
    where: UserDocumentWhereUniqueInput
  }

  /**
   * UserDocument updateMany
   */
  export type UserDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserDocuments.
     */
    data: XOR<UserDocumentUpdateManyMutationInput, UserDocumentUncheckedUpdateManyInput>
    /**
     * Filter which UserDocuments to update
     */
    where?: UserDocumentWhereInput
    /**
     * Limit how many UserDocuments to update.
     */
    limit?: number
  }

  /**
   * UserDocument updateManyAndReturn
   */
  export type UserDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocument
     */
    select?: UserDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocument
     */
    omit?: UserDocumentOmit<ExtArgs> | null
    /**
     * The data used to update UserDocuments.
     */
    data: XOR<UserDocumentUpdateManyMutationInput, UserDocumentUncheckedUpdateManyInput>
    /**
     * Filter which UserDocuments to update
     */
    where?: UserDocumentWhereInput
    /**
     * Limit how many UserDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDocument upsert
   */
  export type UserDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocument
     */
    select?: UserDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocument
     */
    omit?: UserDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the UserDocument to update in case it exists.
     */
    where: UserDocumentWhereUniqueInput
    /**
     * In case the UserDocument found by the `where` argument doesn't exist, create a new UserDocument with this data.
     */
    create: XOR<UserDocumentCreateInput, UserDocumentUncheckedCreateInput>
    /**
     * In case the UserDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDocumentUpdateInput, UserDocumentUncheckedUpdateInput>
  }

  /**
   * UserDocument delete
   */
  export type UserDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocument
     */
    select?: UserDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocument
     */
    omit?: UserDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocumentInclude<ExtArgs> | null
    /**
     * Filter which UserDocument to delete.
     */
    where: UserDocumentWhereUniqueInput
  }

  /**
   * UserDocument deleteMany
   */
  export type UserDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDocuments to delete
     */
    where?: UserDocumentWhereInput
    /**
     * Limit how many UserDocuments to delete.
     */
    limit?: number
  }

  /**
   * UserDocument without action
   */
  export type UserDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocument
     */
    select?: UserDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocument
     */
    omit?: UserDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocumentInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DossierScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    category: 'category',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DossierScalarFieldEnum = (typeof DossierScalarFieldEnum)[keyof typeof DossierScalarFieldEnum]


  export const DocumentRequirementScalarFieldEnum: {
    id: 'id',
    category: 'category',
    name: 'name',
    description: 'description',
    isRequired: 'isRequired'
  };

  export type DocumentRequirementScalarFieldEnum = (typeof DocumentRequirementScalarFieldEnum)[keyof typeof DocumentRequirementScalarFieldEnum]


  export const UserDocumentScalarFieldEnum: {
    id: 'id',
    dossierId: 'dossierId',
    requirementId: 'requirementId',
    fileUrl: 'fileUrl',
    fileName: 'fileName',
    status: 'status',
    rejectionReason: 'rejectionReason',
    uploadedAt: 'uploadedAt'
  };

  export type UserDocumentScalarFieldEnum = (typeof UserDocumentScalarFieldEnum)[keyof typeof UserDocumentScalarFieldEnum]


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
   * Reference to a field of type 'CategoryType'
   */
  export type EnumCategoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryType'>
    


  /**
   * Reference to a field of type 'CategoryType[]'
   */
  export type ListEnumCategoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryType[]'>
    


  /**
   * Reference to a field of type 'DossierStatus'
   */
  export type EnumDossierStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DossierStatus'>
    


  /**
   * Reference to a field of type 'DossierStatus[]'
   */
  export type ListEnumDossierStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DossierStatus[]'>
    


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
   * Reference to a field of type 'DocumentStatus'
   */
  export type EnumDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentStatus'>
    


  /**
   * Reference to a field of type 'DocumentStatus[]'
   */
  export type ListEnumDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentStatus[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    dossiers?: DossierListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossiers?: DossierOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    dossiers?: DossierListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DossierWhereInput = {
    AND?: DossierWhereInput | DossierWhereInput[]
    OR?: DossierWhereInput[]
    NOT?: DossierWhereInput | DossierWhereInput[]
    id?: StringFilter<"Dossier"> | string
    userId?: StringFilter<"Dossier"> | string
    category?: EnumCategoryTypeFilter<"Dossier"> | $Enums.CategoryType
    status?: EnumDossierStatusFilter<"Dossier"> | $Enums.DossierStatus
    createdAt?: DateTimeFilter<"Dossier"> | Date | string
    updatedAt?: DateTimeFilter<"Dossier"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    documents?: UserDocumentListRelationFilter
  }

  export type DossierOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    documents?: UserDocumentOrderByRelationAggregateInput
  }

  export type DossierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DossierWhereInput | DossierWhereInput[]
    OR?: DossierWhereInput[]
    NOT?: DossierWhereInput | DossierWhereInput[]
    userId?: StringFilter<"Dossier"> | string
    category?: EnumCategoryTypeFilter<"Dossier"> | $Enums.CategoryType
    status?: EnumDossierStatusFilter<"Dossier"> | $Enums.DossierStatus
    createdAt?: DateTimeFilter<"Dossier"> | Date | string
    updatedAt?: DateTimeFilter<"Dossier"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    documents?: UserDocumentListRelationFilter
  }, "id">

  export type DossierOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DossierCountOrderByAggregateInput
    _max?: DossierMaxOrderByAggregateInput
    _min?: DossierMinOrderByAggregateInput
  }

  export type DossierScalarWhereWithAggregatesInput = {
    AND?: DossierScalarWhereWithAggregatesInput | DossierScalarWhereWithAggregatesInput[]
    OR?: DossierScalarWhereWithAggregatesInput[]
    NOT?: DossierScalarWhereWithAggregatesInput | DossierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dossier"> | string
    userId?: StringWithAggregatesFilter<"Dossier"> | string
    category?: EnumCategoryTypeWithAggregatesFilter<"Dossier"> | $Enums.CategoryType
    status?: EnumDossierStatusWithAggregatesFilter<"Dossier"> | $Enums.DossierStatus
    createdAt?: DateTimeWithAggregatesFilter<"Dossier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dossier"> | Date | string
  }

  export type DocumentRequirementWhereInput = {
    AND?: DocumentRequirementWhereInput | DocumentRequirementWhereInput[]
    OR?: DocumentRequirementWhereInput[]
    NOT?: DocumentRequirementWhereInput | DocumentRequirementWhereInput[]
    id?: IntFilter<"DocumentRequirement"> | number
    category?: EnumCategoryTypeFilter<"DocumentRequirement"> | $Enums.CategoryType
    name?: StringFilter<"DocumentRequirement"> | string
    description?: StringNullableFilter<"DocumentRequirement"> | string | null
    isRequired?: BoolFilter<"DocumentRequirement"> | boolean
    documents?: UserDocumentListRelationFilter
  }

  export type DocumentRequirementOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isRequired?: SortOrder
    documents?: UserDocumentOrderByRelationAggregateInput
  }

  export type DocumentRequirementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DocumentRequirementWhereInput | DocumentRequirementWhereInput[]
    OR?: DocumentRequirementWhereInput[]
    NOT?: DocumentRequirementWhereInput | DocumentRequirementWhereInput[]
    category?: EnumCategoryTypeFilter<"DocumentRequirement"> | $Enums.CategoryType
    name?: StringFilter<"DocumentRequirement"> | string
    description?: StringNullableFilter<"DocumentRequirement"> | string | null
    isRequired?: BoolFilter<"DocumentRequirement"> | boolean
    documents?: UserDocumentListRelationFilter
  }, "id">

  export type DocumentRequirementOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isRequired?: SortOrder
    _count?: DocumentRequirementCountOrderByAggregateInput
    _avg?: DocumentRequirementAvgOrderByAggregateInput
    _max?: DocumentRequirementMaxOrderByAggregateInput
    _min?: DocumentRequirementMinOrderByAggregateInput
    _sum?: DocumentRequirementSumOrderByAggregateInput
  }

  export type DocumentRequirementScalarWhereWithAggregatesInput = {
    AND?: DocumentRequirementScalarWhereWithAggregatesInput | DocumentRequirementScalarWhereWithAggregatesInput[]
    OR?: DocumentRequirementScalarWhereWithAggregatesInput[]
    NOT?: DocumentRequirementScalarWhereWithAggregatesInput | DocumentRequirementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DocumentRequirement"> | number
    category?: EnumCategoryTypeWithAggregatesFilter<"DocumentRequirement"> | $Enums.CategoryType
    name?: StringWithAggregatesFilter<"DocumentRequirement"> | string
    description?: StringNullableWithAggregatesFilter<"DocumentRequirement"> | string | null
    isRequired?: BoolWithAggregatesFilter<"DocumentRequirement"> | boolean
  }

  export type UserDocumentWhereInput = {
    AND?: UserDocumentWhereInput | UserDocumentWhereInput[]
    OR?: UserDocumentWhereInput[]
    NOT?: UserDocumentWhereInput | UserDocumentWhereInput[]
    id?: StringFilter<"UserDocument"> | string
    dossierId?: StringFilter<"UserDocument"> | string
    requirementId?: IntFilter<"UserDocument"> | number
    fileUrl?: StringFilter<"UserDocument"> | string
    fileName?: StringFilter<"UserDocument"> | string
    status?: EnumDocumentStatusFilter<"UserDocument"> | $Enums.DocumentStatus
    rejectionReason?: StringNullableFilter<"UserDocument"> | string | null
    uploadedAt?: DateTimeFilter<"UserDocument"> | Date | string
    dossier?: XOR<DossierScalarRelationFilter, DossierWhereInput>
    requirement?: XOR<DocumentRequirementScalarRelationFilter, DocumentRequirementWhereInput>
  }

  export type UserDocumentOrderByWithRelationInput = {
    id?: SortOrder
    dossierId?: SortOrder
    requirementId?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    dossier?: DossierOrderByWithRelationInput
    requirement?: DocumentRequirementOrderByWithRelationInput
  }

  export type UserDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserDocumentWhereInput | UserDocumentWhereInput[]
    OR?: UserDocumentWhereInput[]
    NOT?: UserDocumentWhereInput | UserDocumentWhereInput[]
    dossierId?: StringFilter<"UserDocument"> | string
    requirementId?: IntFilter<"UserDocument"> | number
    fileUrl?: StringFilter<"UserDocument"> | string
    fileName?: StringFilter<"UserDocument"> | string
    status?: EnumDocumentStatusFilter<"UserDocument"> | $Enums.DocumentStatus
    rejectionReason?: StringNullableFilter<"UserDocument"> | string | null
    uploadedAt?: DateTimeFilter<"UserDocument"> | Date | string
    dossier?: XOR<DossierScalarRelationFilter, DossierWhereInput>
    requirement?: XOR<DocumentRequirementScalarRelationFilter, DocumentRequirementWhereInput>
  }, "id">

  export type UserDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    dossierId?: SortOrder
    requirementId?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    _count?: UserDocumentCountOrderByAggregateInput
    _avg?: UserDocumentAvgOrderByAggregateInput
    _max?: UserDocumentMaxOrderByAggregateInput
    _min?: UserDocumentMinOrderByAggregateInput
    _sum?: UserDocumentSumOrderByAggregateInput
  }

  export type UserDocumentScalarWhereWithAggregatesInput = {
    AND?: UserDocumentScalarWhereWithAggregatesInput | UserDocumentScalarWhereWithAggregatesInput[]
    OR?: UserDocumentScalarWhereWithAggregatesInput[]
    NOT?: UserDocumentScalarWhereWithAggregatesInput | UserDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserDocument"> | string
    dossierId?: StringWithAggregatesFilter<"UserDocument"> | string
    requirementId?: IntWithAggregatesFilter<"UserDocument"> | number
    fileUrl?: StringWithAggregatesFilter<"UserDocument"> | string
    fileName?: StringWithAggregatesFilter<"UserDocument"> | string
    status?: EnumDocumentStatusWithAggregatesFilter<"UserDocument"> | $Enums.DocumentStatus
    rejectionReason?: StringNullableWithAggregatesFilter<"UserDocument"> | string | null
    uploadedAt?: DateTimeWithAggregatesFilter<"UserDocument"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dossiers?: DossierCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dossiers?: DossierUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dossiers?: DossierUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dossiers?: DossierUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DossierCreateInput = {
    id?: string
    category: $Enums.CategoryType
    status?: $Enums.DossierStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDossiersInput
    documents?: UserDocumentCreateNestedManyWithoutDossierInput
  }

  export type DossierUncheckedCreateInput = {
    id?: string
    userId: string
    category: $Enums.CategoryType
    status?: $Enums.DossierStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: UserDocumentUncheckedCreateNestedManyWithoutDossierInput
  }

  export type DossierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    status?: EnumDossierStatusFieldUpdateOperationsInput | $Enums.DossierStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDossiersNestedInput
    documents?: UserDocumentUpdateManyWithoutDossierNestedInput
  }

  export type DossierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    status?: EnumDossierStatusFieldUpdateOperationsInput | $Enums.DossierStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: UserDocumentUncheckedUpdateManyWithoutDossierNestedInput
  }

  export type DossierCreateManyInput = {
    id?: string
    userId: string
    category: $Enums.CategoryType
    status?: $Enums.DossierStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DossierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    status?: EnumDossierStatusFieldUpdateOperationsInput | $Enums.DossierStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DossierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    status?: EnumDossierStatusFieldUpdateOperationsInput | $Enums.DossierStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentRequirementCreateInput = {
    category: $Enums.CategoryType
    name: string
    description?: string | null
    isRequired?: boolean
    documents?: UserDocumentCreateNestedManyWithoutRequirementInput
  }

  export type DocumentRequirementUncheckedCreateInput = {
    id?: number
    category: $Enums.CategoryType
    name: string
    description?: string | null
    isRequired?: boolean
    documents?: UserDocumentUncheckedCreateNestedManyWithoutRequirementInput
  }

  export type DocumentRequirementUpdateInput = {
    category?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    documents?: UserDocumentUpdateManyWithoutRequirementNestedInput
  }

  export type DocumentRequirementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    documents?: UserDocumentUncheckedUpdateManyWithoutRequirementNestedInput
  }

  export type DocumentRequirementCreateManyInput = {
    id?: number
    category: $Enums.CategoryType
    name: string
    description?: string | null
    isRequired?: boolean
  }

  export type DocumentRequirementUpdateManyMutationInput = {
    category?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DocumentRequirementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserDocumentCreateInput = {
    id?: string
    fileUrl: string
    fileName: string
    status?: $Enums.DocumentStatus
    rejectionReason?: string | null
    uploadedAt?: Date | string
    dossier: DossierCreateNestedOneWithoutDocumentsInput
    requirement: DocumentRequirementCreateNestedOneWithoutDocumentsInput
  }

  export type UserDocumentUncheckedCreateInput = {
    id?: string
    dossierId: string
    requirementId: number
    fileUrl: string
    fileName: string
    status?: $Enums.DocumentStatus
    rejectionReason?: string | null
    uploadedAt?: Date | string
  }

  export type UserDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dossier?: DossierUpdateOneRequiredWithoutDocumentsNestedInput
    requirement?: DocumentRequirementUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type UserDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dossierId?: StringFieldUpdateOperationsInput | string
    requirementId?: IntFieldUpdateOperationsInput | number
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDocumentCreateManyInput = {
    id?: string
    dossierId: string
    requirementId: number
    fileUrl: string
    fileName: string
    status?: $Enums.DocumentStatus
    rejectionReason?: string | null
    uploadedAt?: Date | string
  }

  export type UserDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dossierId?: StringFieldUpdateOperationsInput | string
    requirementId?: IntFieldUpdateOperationsInput | number
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DossierListRelationFilter = {
    every?: DossierWhereInput
    some?: DossierWhereInput
    none?: DossierWhereInput
  }

  export type DossierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumCategoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeFilter<$PrismaModel> | $Enums.CategoryType
  }

  export type EnumDossierStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DossierStatus | EnumDossierStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DossierStatus[] | ListEnumDossierStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DossierStatus[] | ListEnumDossierStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDossierStatusFilter<$PrismaModel> | $Enums.DossierStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserDocumentListRelationFilter = {
    every?: UserDocumentWhereInput
    some?: UserDocumentWhereInput
    none?: UserDocumentWhereInput
  }

  export type UserDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DossierCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DossierMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DossierMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCategoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.CategoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryTypeFilter<$PrismaModel>
    _max?: NestedEnumCategoryTypeFilter<$PrismaModel>
  }

  export type EnumDossierStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DossierStatus | EnumDossierStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DossierStatus[] | ListEnumDossierStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DossierStatus[] | ListEnumDossierStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDossierStatusWithAggregatesFilter<$PrismaModel> | $Enums.DossierStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDossierStatusFilter<$PrismaModel>
    _max?: NestedEnumDossierStatusFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DocumentRequirementCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isRequired?: SortOrder
  }

  export type DocumentRequirementAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DocumentRequirementMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isRequired?: SortOrder
  }

  export type DocumentRequirementMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isRequired?: SortOrder
  }

  export type DocumentRequirementSumOrderByAggregateInput = {
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusFilter<$PrismaModel> | $Enums.DocumentStatus
  }

  export type DossierScalarRelationFilter = {
    is?: DossierWhereInput
    isNot?: DossierWhereInput
  }

  export type DocumentRequirementScalarRelationFilter = {
    is?: DocumentRequirementWhereInput
    isNot?: DocumentRequirementWhereInput
  }

  export type UserDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    dossierId?: SortOrder
    requirementId?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    uploadedAt?: SortOrder
  }

  export type UserDocumentAvgOrderByAggregateInput = {
    requirementId?: SortOrder
  }

  export type UserDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    dossierId?: SortOrder
    requirementId?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    uploadedAt?: SortOrder
  }

  export type UserDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    dossierId?: SortOrder
    requirementId?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    uploadedAt?: SortOrder
  }

  export type UserDocumentSumOrderByAggregateInput = {
    requirementId?: SortOrder
  }

  export type EnumDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumDocumentStatusFilter<$PrismaModel>
  }

  export type DossierCreateNestedManyWithoutUserInput = {
    create?: XOR<DossierCreateWithoutUserInput, DossierUncheckedCreateWithoutUserInput> | DossierCreateWithoutUserInput[] | DossierUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DossierCreateOrConnectWithoutUserInput | DossierCreateOrConnectWithoutUserInput[]
    createMany?: DossierCreateManyUserInputEnvelope
    connect?: DossierWhereUniqueInput | DossierWhereUniqueInput[]
  }

  export type DossierUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DossierCreateWithoutUserInput, DossierUncheckedCreateWithoutUserInput> | DossierCreateWithoutUserInput[] | DossierUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DossierCreateOrConnectWithoutUserInput | DossierCreateOrConnectWithoutUserInput[]
    createMany?: DossierCreateManyUserInputEnvelope
    connect?: DossierWhereUniqueInput | DossierWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DossierUpdateManyWithoutUserNestedInput = {
    create?: XOR<DossierCreateWithoutUserInput, DossierUncheckedCreateWithoutUserInput> | DossierCreateWithoutUserInput[] | DossierUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DossierCreateOrConnectWithoutUserInput | DossierCreateOrConnectWithoutUserInput[]
    upsert?: DossierUpsertWithWhereUniqueWithoutUserInput | DossierUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DossierCreateManyUserInputEnvelope
    set?: DossierWhereUniqueInput | DossierWhereUniqueInput[]
    disconnect?: DossierWhereUniqueInput | DossierWhereUniqueInput[]
    delete?: DossierWhereUniqueInput | DossierWhereUniqueInput[]
    connect?: DossierWhereUniqueInput | DossierWhereUniqueInput[]
    update?: DossierUpdateWithWhereUniqueWithoutUserInput | DossierUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DossierUpdateManyWithWhereWithoutUserInput | DossierUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DossierScalarWhereInput | DossierScalarWhereInput[]
  }

  export type DossierUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DossierCreateWithoutUserInput, DossierUncheckedCreateWithoutUserInput> | DossierCreateWithoutUserInput[] | DossierUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DossierCreateOrConnectWithoutUserInput | DossierCreateOrConnectWithoutUserInput[]
    upsert?: DossierUpsertWithWhereUniqueWithoutUserInput | DossierUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DossierCreateManyUserInputEnvelope
    set?: DossierWhereUniqueInput | DossierWhereUniqueInput[]
    disconnect?: DossierWhereUniqueInput | DossierWhereUniqueInput[]
    delete?: DossierWhereUniqueInput | DossierWhereUniqueInput[]
    connect?: DossierWhereUniqueInput | DossierWhereUniqueInput[]
    update?: DossierUpdateWithWhereUniqueWithoutUserInput | DossierUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DossierUpdateManyWithWhereWithoutUserInput | DossierUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DossierScalarWhereInput | DossierScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDossiersInput = {
    create?: XOR<UserCreateWithoutDossiersInput, UserUncheckedCreateWithoutDossiersInput>
    connectOrCreate?: UserCreateOrConnectWithoutDossiersInput
    connect?: UserWhereUniqueInput
  }

  export type UserDocumentCreateNestedManyWithoutDossierInput = {
    create?: XOR<UserDocumentCreateWithoutDossierInput, UserDocumentUncheckedCreateWithoutDossierInput> | UserDocumentCreateWithoutDossierInput[] | UserDocumentUncheckedCreateWithoutDossierInput[]
    connectOrCreate?: UserDocumentCreateOrConnectWithoutDossierInput | UserDocumentCreateOrConnectWithoutDossierInput[]
    createMany?: UserDocumentCreateManyDossierInputEnvelope
    connect?: UserDocumentWhereUniqueInput | UserDocumentWhereUniqueInput[]
  }

  export type UserDocumentUncheckedCreateNestedManyWithoutDossierInput = {
    create?: XOR<UserDocumentCreateWithoutDossierInput, UserDocumentUncheckedCreateWithoutDossierInput> | UserDocumentCreateWithoutDossierInput[] | UserDocumentUncheckedCreateWithoutDossierInput[]
    connectOrCreate?: UserDocumentCreateOrConnectWithoutDossierInput | UserDocumentCreateOrConnectWithoutDossierInput[]
    createMany?: UserDocumentCreateManyDossierInputEnvelope
    connect?: UserDocumentWhereUniqueInput | UserDocumentWhereUniqueInput[]
  }

  export type EnumCategoryTypeFieldUpdateOperationsInput = {
    set?: $Enums.CategoryType
  }

  export type EnumDossierStatusFieldUpdateOperationsInput = {
    set?: $Enums.DossierStatus
  }

  export type UserUpdateOneRequiredWithoutDossiersNestedInput = {
    create?: XOR<UserCreateWithoutDossiersInput, UserUncheckedCreateWithoutDossiersInput>
    connectOrCreate?: UserCreateOrConnectWithoutDossiersInput
    upsert?: UserUpsertWithoutDossiersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDossiersInput, UserUpdateWithoutDossiersInput>, UserUncheckedUpdateWithoutDossiersInput>
  }

  export type UserDocumentUpdateManyWithoutDossierNestedInput = {
    create?: XOR<UserDocumentCreateWithoutDossierInput, UserDocumentUncheckedCreateWithoutDossierInput> | UserDocumentCreateWithoutDossierInput[] | UserDocumentUncheckedCreateWithoutDossierInput[]
    connectOrCreate?: UserDocumentCreateOrConnectWithoutDossierInput | UserDocumentCreateOrConnectWithoutDossierInput[]
    upsert?: UserDocumentUpsertWithWhereUniqueWithoutDossierInput | UserDocumentUpsertWithWhereUniqueWithoutDossierInput[]
    createMany?: UserDocumentCreateManyDossierInputEnvelope
    set?: UserDocumentWhereUniqueInput | UserDocumentWhereUniqueInput[]
    disconnect?: UserDocumentWhereUniqueInput | UserDocumentWhereUniqueInput[]
    delete?: UserDocumentWhereUniqueInput | UserDocumentWhereUniqueInput[]
    connect?: UserDocumentWhereUniqueInput | UserDocumentWhereUniqueInput[]
    update?: UserDocumentUpdateWithWhereUniqueWithoutDossierInput | UserDocumentUpdateWithWhereUniqueWithoutDossierInput[]
    updateMany?: UserDocumentUpdateManyWithWhereWithoutDossierInput | UserDocumentUpdateManyWithWhereWithoutDossierInput[]
    deleteMany?: UserDocumentScalarWhereInput | UserDocumentScalarWhereInput[]
  }

  export type UserDocumentUncheckedUpdateManyWithoutDossierNestedInput = {
    create?: XOR<UserDocumentCreateWithoutDossierInput, UserDocumentUncheckedCreateWithoutDossierInput> | UserDocumentCreateWithoutDossierInput[] | UserDocumentUncheckedCreateWithoutDossierInput[]
    connectOrCreate?: UserDocumentCreateOrConnectWithoutDossierInput | UserDocumentCreateOrConnectWithoutDossierInput[]
    upsert?: UserDocumentUpsertWithWhereUniqueWithoutDossierInput | UserDocumentUpsertWithWhereUniqueWithoutDossierInput[]
    createMany?: UserDocumentCreateManyDossierInputEnvelope
    set?: UserDocumentWhereUniqueInput | UserDocumentWhereUniqueInput[]
    disconnect?: UserDocumentWhereUniqueInput | UserDocumentWhereUniqueInput[]
    delete?: UserDocumentWhereUniqueInput | UserDocumentWhereUniqueInput[]
    connect?: UserDocumentWhereUniqueInput | UserDocumentWhereUniqueInput[]
    update?: UserDocumentUpdateWithWhereUniqueWithoutDossierInput | UserDocumentUpdateWithWhereUniqueWithoutDossierInput[]
    updateMany?: UserDocumentUpdateManyWithWhereWithoutDossierInput | UserDocumentUpdateManyWithWhereWithoutDossierInput[]
    deleteMany?: UserDocumentScalarWhereInput | UserDocumentScalarWhereInput[]
  }

  export type UserDocumentCreateNestedManyWithoutRequirementInput = {
    create?: XOR<UserDocumentCreateWithoutRequirementInput, UserDocumentUncheckedCreateWithoutRequirementInput> | UserDocumentCreateWithoutRequirementInput[] | UserDocumentUncheckedCreateWithoutRequirementInput[]
    connectOrCreate?: UserDocumentCreateOrConnectWithoutRequirementInput | UserDocumentCreateOrConnectWithoutRequirementInput[]
    createMany?: UserDocumentCreateManyRequirementInputEnvelope
    connect?: UserDocumentWhereUniqueInput | UserDocumentWhereUniqueInput[]
  }

  export type UserDocumentUncheckedCreateNestedManyWithoutRequirementInput = {
    create?: XOR<UserDocumentCreateWithoutRequirementInput, UserDocumentUncheckedCreateWithoutRequirementInput> | UserDocumentCreateWithoutRequirementInput[] | UserDocumentUncheckedCreateWithoutRequirementInput[]
    connectOrCreate?: UserDocumentCreateOrConnectWithoutRequirementInput | UserDocumentCreateOrConnectWithoutRequirementInput[]
    createMany?: UserDocumentCreateManyRequirementInputEnvelope
    connect?: UserDocumentWhereUniqueInput | UserDocumentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserDocumentUpdateManyWithoutRequirementNestedInput = {
    create?: XOR<UserDocumentCreateWithoutRequirementInput, UserDocumentUncheckedCreateWithoutRequirementInput> | UserDocumentCreateWithoutRequirementInput[] | UserDocumentUncheckedCreateWithoutRequirementInput[]
    connectOrCreate?: UserDocumentCreateOrConnectWithoutRequirementInput | UserDocumentCreateOrConnectWithoutRequirementInput[]
    upsert?: UserDocumentUpsertWithWhereUniqueWithoutRequirementInput | UserDocumentUpsertWithWhereUniqueWithoutRequirementInput[]
    createMany?: UserDocumentCreateManyRequirementInputEnvelope
    set?: UserDocumentWhereUniqueInput | UserDocumentWhereUniqueInput[]
    disconnect?: UserDocumentWhereUniqueInput | UserDocumentWhereUniqueInput[]
    delete?: UserDocumentWhereUniqueInput | UserDocumentWhereUniqueInput[]
    connect?: UserDocumentWhereUniqueInput | UserDocumentWhereUniqueInput[]
    update?: UserDocumentUpdateWithWhereUniqueWithoutRequirementInput | UserDocumentUpdateWithWhereUniqueWithoutRequirementInput[]
    updateMany?: UserDocumentUpdateManyWithWhereWithoutRequirementInput | UserDocumentUpdateManyWithWhereWithoutRequirementInput[]
    deleteMany?: UserDocumentScalarWhereInput | UserDocumentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserDocumentUncheckedUpdateManyWithoutRequirementNestedInput = {
    create?: XOR<UserDocumentCreateWithoutRequirementInput, UserDocumentUncheckedCreateWithoutRequirementInput> | UserDocumentCreateWithoutRequirementInput[] | UserDocumentUncheckedCreateWithoutRequirementInput[]
    connectOrCreate?: UserDocumentCreateOrConnectWithoutRequirementInput | UserDocumentCreateOrConnectWithoutRequirementInput[]
    upsert?: UserDocumentUpsertWithWhereUniqueWithoutRequirementInput | UserDocumentUpsertWithWhereUniqueWithoutRequirementInput[]
    createMany?: UserDocumentCreateManyRequirementInputEnvelope
    set?: UserDocumentWhereUniqueInput | UserDocumentWhereUniqueInput[]
    disconnect?: UserDocumentWhereUniqueInput | UserDocumentWhereUniqueInput[]
    delete?: UserDocumentWhereUniqueInput | UserDocumentWhereUniqueInput[]
    connect?: UserDocumentWhereUniqueInput | UserDocumentWhereUniqueInput[]
    update?: UserDocumentUpdateWithWhereUniqueWithoutRequirementInput | UserDocumentUpdateWithWhereUniqueWithoutRequirementInput[]
    updateMany?: UserDocumentUpdateManyWithWhereWithoutRequirementInput | UserDocumentUpdateManyWithWhereWithoutRequirementInput[]
    deleteMany?: UserDocumentScalarWhereInput | UserDocumentScalarWhereInput[]
  }

  export type DossierCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<DossierCreateWithoutDocumentsInput, DossierUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DossierCreateOrConnectWithoutDocumentsInput
    connect?: DossierWhereUniqueInput
  }

  export type DocumentRequirementCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<DocumentRequirementCreateWithoutDocumentsInput, DocumentRequirementUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DocumentRequirementCreateOrConnectWithoutDocumentsInput
    connect?: DocumentRequirementWhereUniqueInput
  }

  export type EnumDocumentStatusFieldUpdateOperationsInput = {
    set?: $Enums.DocumentStatus
  }

  export type DossierUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<DossierCreateWithoutDocumentsInput, DossierUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DossierCreateOrConnectWithoutDocumentsInput
    upsert?: DossierUpsertWithoutDocumentsInput
    connect?: DossierWhereUniqueInput
    update?: XOR<XOR<DossierUpdateToOneWithWhereWithoutDocumentsInput, DossierUpdateWithoutDocumentsInput>, DossierUncheckedUpdateWithoutDocumentsInput>
  }

  export type DocumentRequirementUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<DocumentRequirementCreateWithoutDocumentsInput, DocumentRequirementUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DocumentRequirementCreateOrConnectWithoutDocumentsInput
    upsert?: DocumentRequirementUpsertWithoutDocumentsInput
    connect?: DocumentRequirementWhereUniqueInput
    update?: XOR<XOR<DocumentRequirementUpdateToOneWithWhereWithoutDocumentsInput, DocumentRequirementUpdateWithoutDocumentsInput>, DocumentRequirementUncheckedUpdateWithoutDocumentsInput>
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

  export type NestedEnumCategoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeFilter<$PrismaModel> | $Enums.CategoryType
  }

  export type NestedEnumDossierStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DossierStatus | EnumDossierStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DossierStatus[] | ListEnumDossierStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DossierStatus[] | ListEnumDossierStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDossierStatusFilter<$PrismaModel> | $Enums.DossierStatus
  }

  export type NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.CategoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryTypeFilter<$PrismaModel>
    _max?: NestedEnumCategoryTypeFilter<$PrismaModel>
  }

  export type NestedEnumDossierStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DossierStatus | EnumDossierStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DossierStatus[] | ListEnumDossierStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DossierStatus[] | ListEnumDossierStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDossierStatusWithAggregatesFilter<$PrismaModel> | $Enums.DossierStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDossierStatusFilter<$PrismaModel>
    _max?: NestedEnumDossierStatusFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusFilter<$PrismaModel> | $Enums.DocumentStatus
  }

  export type NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumDocumentStatusFilter<$PrismaModel>
  }

  export type DossierCreateWithoutUserInput = {
    id?: string
    category: $Enums.CategoryType
    status?: $Enums.DossierStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: UserDocumentCreateNestedManyWithoutDossierInput
  }

  export type DossierUncheckedCreateWithoutUserInput = {
    id?: string
    category: $Enums.CategoryType
    status?: $Enums.DossierStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: UserDocumentUncheckedCreateNestedManyWithoutDossierInput
  }

  export type DossierCreateOrConnectWithoutUserInput = {
    where: DossierWhereUniqueInput
    create: XOR<DossierCreateWithoutUserInput, DossierUncheckedCreateWithoutUserInput>
  }

  export type DossierCreateManyUserInputEnvelope = {
    data: DossierCreateManyUserInput | DossierCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DossierUpsertWithWhereUniqueWithoutUserInput = {
    where: DossierWhereUniqueInput
    update: XOR<DossierUpdateWithoutUserInput, DossierUncheckedUpdateWithoutUserInput>
    create: XOR<DossierCreateWithoutUserInput, DossierUncheckedCreateWithoutUserInput>
  }

  export type DossierUpdateWithWhereUniqueWithoutUserInput = {
    where: DossierWhereUniqueInput
    data: XOR<DossierUpdateWithoutUserInput, DossierUncheckedUpdateWithoutUserInput>
  }

  export type DossierUpdateManyWithWhereWithoutUserInput = {
    where: DossierScalarWhereInput
    data: XOR<DossierUpdateManyMutationInput, DossierUncheckedUpdateManyWithoutUserInput>
  }

  export type DossierScalarWhereInput = {
    AND?: DossierScalarWhereInput | DossierScalarWhereInput[]
    OR?: DossierScalarWhereInput[]
    NOT?: DossierScalarWhereInput | DossierScalarWhereInput[]
    id?: StringFilter<"Dossier"> | string
    userId?: StringFilter<"Dossier"> | string
    category?: EnumCategoryTypeFilter<"Dossier"> | $Enums.CategoryType
    status?: EnumDossierStatusFilter<"Dossier"> | $Enums.DossierStatus
    createdAt?: DateTimeFilter<"Dossier"> | Date | string
    updatedAt?: DateTimeFilter<"Dossier"> | Date | string
  }

  export type UserCreateWithoutDossiersInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutDossiersInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutDossiersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDossiersInput, UserUncheckedCreateWithoutDossiersInput>
  }

  export type UserDocumentCreateWithoutDossierInput = {
    id?: string
    fileUrl: string
    fileName: string
    status?: $Enums.DocumentStatus
    rejectionReason?: string | null
    uploadedAt?: Date | string
    requirement: DocumentRequirementCreateNestedOneWithoutDocumentsInput
  }

  export type UserDocumentUncheckedCreateWithoutDossierInput = {
    id?: string
    requirementId: number
    fileUrl: string
    fileName: string
    status?: $Enums.DocumentStatus
    rejectionReason?: string | null
    uploadedAt?: Date | string
  }

  export type UserDocumentCreateOrConnectWithoutDossierInput = {
    where: UserDocumentWhereUniqueInput
    create: XOR<UserDocumentCreateWithoutDossierInput, UserDocumentUncheckedCreateWithoutDossierInput>
  }

  export type UserDocumentCreateManyDossierInputEnvelope = {
    data: UserDocumentCreateManyDossierInput | UserDocumentCreateManyDossierInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDossiersInput = {
    update: XOR<UserUpdateWithoutDossiersInput, UserUncheckedUpdateWithoutDossiersInput>
    create: XOR<UserCreateWithoutDossiersInput, UserUncheckedCreateWithoutDossiersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDossiersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDossiersInput, UserUncheckedUpdateWithoutDossiersInput>
  }

  export type UserUpdateWithoutDossiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutDossiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDocumentUpsertWithWhereUniqueWithoutDossierInput = {
    where: UserDocumentWhereUniqueInput
    update: XOR<UserDocumentUpdateWithoutDossierInput, UserDocumentUncheckedUpdateWithoutDossierInput>
    create: XOR<UserDocumentCreateWithoutDossierInput, UserDocumentUncheckedCreateWithoutDossierInput>
  }

  export type UserDocumentUpdateWithWhereUniqueWithoutDossierInput = {
    where: UserDocumentWhereUniqueInput
    data: XOR<UserDocumentUpdateWithoutDossierInput, UserDocumentUncheckedUpdateWithoutDossierInput>
  }

  export type UserDocumentUpdateManyWithWhereWithoutDossierInput = {
    where: UserDocumentScalarWhereInput
    data: XOR<UserDocumentUpdateManyMutationInput, UserDocumentUncheckedUpdateManyWithoutDossierInput>
  }

  export type UserDocumentScalarWhereInput = {
    AND?: UserDocumentScalarWhereInput | UserDocumentScalarWhereInput[]
    OR?: UserDocumentScalarWhereInput[]
    NOT?: UserDocumentScalarWhereInput | UserDocumentScalarWhereInput[]
    id?: StringFilter<"UserDocument"> | string
    dossierId?: StringFilter<"UserDocument"> | string
    requirementId?: IntFilter<"UserDocument"> | number
    fileUrl?: StringFilter<"UserDocument"> | string
    fileName?: StringFilter<"UserDocument"> | string
    status?: EnumDocumentStatusFilter<"UserDocument"> | $Enums.DocumentStatus
    rejectionReason?: StringNullableFilter<"UserDocument"> | string | null
    uploadedAt?: DateTimeFilter<"UserDocument"> | Date | string
  }

  export type UserDocumentCreateWithoutRequirementInput = {
    id?: string
    fileUrl: string
    fileName: string
    status?: $Enums.DocumentStatus
    rejectionReason?: string | null
    uploadedAt?: Date | string
    dossier: DossierCreateNestedOneWithoutDocumentsInput
  }

  export type UserDocumentUncheckedCreateWithoutRequirementInput = {
    id?: string
    dossierId: string
    fileUrl: string
    fileName: string
    status?: $Enums.DocumentStatus
    rejectionReason?: string | null
    uploadedAt?: Date | string
  }

  export type UserDocumentCreateOrConnectWithoutRequirementInput = {
    where: UserDocumentWhereUniqueInput
    create: XOR<UserDocumentCreateWithoutRequirementInput, UserDocumentUncheckedCreateWithoutRequirementInput>
  }

  export type UserDocumentCreateManyRequirementInputEnvelope = {
    data: UserDocumentCreateManyRequirementInput | UserDocumentCreateManyRequirementInput[]
    skipDuplicates?: boolean
  }

  export type UserDocumentUpsertWithWhereUniqueWithoutRequirementInput = {
    where: UserDocumentWhereUniqueInput
    update: XOR<UserDocumentUpdateWithoutRequirementInput, UserDocumentUncheckedUpdateWithoutRequirementInput>
    create: XOR<UserDocumentCreateWithoutRequirementInput, UserDocumentUncheckedCreateWithoutRequirementInput>
  }

  export type UserDocumentUpdateWithWhereUniqueWithoutRequirementInput = {
    where: UserDocumentWhereUniqueInput
    data: XOR<UserDocumentUpdateWithoutRequirementInput, UserDocumentUncheckedUpdateWithoutRequirementInput>
  }

  export type UserDocumentUpdateManyWithWhereWithoutRequirementInput = {
    where: UserDocumentScalarWhereInput
    data: XOR<UserDocumentUpdateManyMutationInput, UserDocumentUncheckedUpdateManyWithoutRequirementInput>
  }

  export type DossierCreateWithoutDocumentsInput = {
    id?: string
    category: $Enums.CategoryType
    status?: $Enums.DossierStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDossiersInput
  }

  export type DossierUncheckedCreateWithoutDocumentsInput = {
    id?: string
    userId: string
    category: $Enums.CategoryType
    status?: $Enums.DossierStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DossierCreateOrConnectWithoutDocumentsInput = {
    where: DossierWhereUniqueInput
    create: XOR<DossierCreateWithoutDocumentsInput, DossierUncheckedCreateWithoutDocumentsInput>
  }

  export type DocumentRequirementCreateWithoutDocumentsInput = {
    category: $Enums.CategoryType
    name: string
    description?: string | null
    isRequired?: boolean
  }

  export type DocumentRequirementUncheckedCreateWithoutDocumentsInput = {
    id?: number
    category: $Enums.CategoryType
    name: string
    description?: string | null
    isRequired?: boolean
  }

  export type DocumentRequirementCreateOrConnectWithoutDocumentsInput = {
    where: DocumentRequirementWhereUniqueInput
    create: XOR<DocumentRequirementCreateWithoutDocumentsInput, DocumentRequirementUncheckedCreateWithoutDocumentsInput>
  }

  export type DossierUpsertWithoutDocumentsInput = {
    update: XOR<DossierUpdateWithoutDocumentsInput, DossierUncheckedUpdateWithoutDocumentsInput>
    create: XOR<DossierCreateWithoutDocumentsInput, DossierUncheckedCreateWithoutDocumentsInput>
    where?: DossierWhereInput
  }

  export type DossierUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: DossierWhereInput
    data: XOR<DossierUpdateWithoutDocumentsInput, DossierUncheckedUpdateWithoutDocumentsInput>
  }

  export type DossierUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    status?: EnumDossierStatusFieldUpdateOperationsInput | $Enums.DossierStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDossiersNestedInput
  }

  export type DossierUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    status?: EnumDossierStatusFieldUpdateOperationsInput | $Enums.DossierStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentRequirementUpsertWithoutDocumentsInput = {
    update: XOR<DocumentRequirementUpdateWithoutDocumentsInput, DocumentRequirementUncheckedUpdateWithoutDocumentsInput>
    create: XOR<DocumentRequirementCreateWithoutDocumentsInput, DocumentRequirementUncheckedCreateWithoutDocumentsInput>
    where?: DocumentRequirementWhereInput
  }

  export type DocumentRequirementUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: DocumentRequirementWhereInput
    data: XOR<DocumentRequirementUpdateWithoutDocumentsInput, DocumentRequirementUncheckedUpdateWithoutDocumentsInput>
  }

  export type DocumentRequirementUpdateWithoutDocumentsInput = {
    category?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DocumentRequirementUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DossierCreateManyUserInput = {
    id?: string
    category: $Enums.CategoryType
    status?: $Enums.DossierStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DossierUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    status?: EnumDossierStatusFieldUpdateOperationsInput | $Enums.DossierStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: UserDocumentUpdateManyWithoutDossierNestedInput
  }

  export type DossierUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    status?: EnumDossierStatusFieldUpdateOperationsInput | $Enums.DossierStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: UserDocumentUncheckedUpdateManyWithoutDossierNestedInput
  }

  export type DossierUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    status?: EnumDossierStatusFieldUpdateOperationsInput | $Enums.DossierStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDocumentCreateManyDossierInput = {
    id?: string
    requirementId: number
    fileUrl: string
    fileName: string
    status?: $Enums.DocumentStatus
    rejectionReason?: string | null
    uploadedAt?: Date | string
  }

  export type UserDocumentUpdateWithoutDossierInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requirement?: DocumentRequirementUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type UserDocumentUncheckedUpdateWithoutDossierInput = {
    id?: StringFieldUpdateOperationsInput | string
    requirementId?: IntFieldUpdateOperationsInput | number
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDocumentUncheckedUpdateManyWithoutDossierInput = {
    id?: StringFieldUpdateOperationsInput | string
    requirementId?: IntFieldUpdateOperationsInput | number
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDocumentCreateManyRequirementInput = {
    id?: string
    dossierId: string
    fileUrl: string
    fileName: string
    status?: $Enums.DocumentStatus
    rejectionReason?: string | null
    uploadedAt?: Date | string
  }

  export type UserDocumentUpdateWithoutRequirementInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dossier?: DossierUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type UserDocumentUncheckedUpdateWithoutRequirementInput = {
    id?: StringFieldUpdateOperationsInput | string
    dossierId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDocumentUncheckedUpdateManyWithoutRequirementInput = {
    id?: StringFieldUpdateOperationsInput | string
    dossierId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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