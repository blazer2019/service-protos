import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "UserServiceRequest";
/** User-specific request and response data */
export interface CreateUserRequest {
    userName: string;
    /** Mobile as a 10-digit integer */
    mobile: number;
    fcmToken: string;
    /** Optional */
    email: string;
    /** User type as string */
    userType: string;
}
/** Request message for updating a user */
export interface UpdateUserRequest {
    /** Unique identifier for the user as a number */
    userId: number;
    userName: string;
    /** Mobile as a 10-digit integer */
    mobile: number;
    fcmToken: string;
    /** Optional */
    email: string;
    /** User type as string */
    userType: string;
}
export interface GetUserDetailsRequest {
    /** Unique identifier for the user  Or another identifier */
    userId: number;
}
export declare const CreateUserRequest: {
    encode(message: CreateUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserRequest;
    fromJSON(object: any): CreateUserRequest;
    toJSON(message: CreateUserRequest): unknown;
    create<I extends Exact<DeepPartial<CreateUserRequest>, I>>(base?: I): CreateUserRequest;
    fromPartial<I extends Exact<DeepPartial<CreateUserRequest>, I>>(object: I): CreateUserRequest;
};
export declare const UpdateUserRequest: {
    encode(message: UpdateUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserRequest;
    fromJSON(object: any): UpdateUserRequest;
    toJSON(message: UpdateUserRequest): unknown;
    create<I extends Exact<DeepPartial<UpdateUserRequest>, I>>(base?: I): UpdateUserRequest;
    fromPartial<I extends Exact<DeepPartial<UpdateUserRequest>, I>>(object: I): UpdateUserRequest;
};
export declare const GetUserDetailsRequest: {
    encode(message: GetUserDetailsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetUserDetailsRequest;
    fromJSON(object: any): GetUserDetailsRequest;
    toJSON(message: GetUserDetailsRequest): unknown;
    create<I extends Exact<DeepPartial<GetUserDetailsRequest>, I>>(base?: I): GetUserDetailsRequest;
    fromPartial<I extends Exact<DeepPartial<GetUserDetailsRequest>, I>>(object: I): GetUserDetailsRequest;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
