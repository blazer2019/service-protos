import _m0 from "protobufjs/minimal";
import { Status } from "../common";
export declare const protobufPackage = "UserService";
/** User response message containing user details */
export interface UserResponse {
    /** Unique identifier for the user */
    userId: number;
    /** Username of the user */
    userName: string;
    /** 10-digit mobile number */
    mobile: number;
    /** FCM token for notifications */
    fcmToken: string;
    /** Email address */
    email: string;
    /** Type of user (e.g., 'normal', 'admin', etc.) */
    userType: string;
}
/** Response message for creating a user */
export interface CreateUserResponse {
    status: Status | undefined;
    /** The created user details */
    user: UserResponse | undefined;
}
/** Response message for updating a user */
export interface UpdateUserResponse {
    status: Status | undefined;
    /** The updated user details */
    user: UserResponse | undefined;
}
/** Response message for retrieving user details */
export interface GetUserDetailsResponse {
    status: Status | undefined;
    /** User details */
    user: UserResponse | undefined;
}
export declare const UserResponse: {
    encode(message: UserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserResponse;
    fromJSON(object: any): UserResponse;
    toJSON(message: UserResponse): unknown;
    create<I extends Exact<DeepPartial<UserResponse>, I>>(base?: I): UserResponse;
    fromPartial<I extends Exact<DeepPartial<UserResponse>, I>>(object: I): UserResponse;
};
export declare const CreateUserResponse: {
    encode(message: CreateUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserResponse;
    fromJSON(object: any): CreateUserResponse;
    toJSON(message: CreateUserResponse): unknown;
    create<I extends Exact<DeepPartial<CreateUserResponse>, I>>(base?: I): CreateUserResponse;
    fromPartial<I extends Exact<DeepPartial<CreateUserResponse>, I>>(object: I): CreateUserResponse;
};
export declare const UpdateUserResponse: {
    encode(message: UpdateUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserResponse;
    fromJSON(object: any): UpdateUserResponse;
    toJSON(message: UpdateUserResponse): unknown;
    create<I extends Exact<DeepPartial<UpdateUserResponse>, I>>(base?: I): UpdateUserResponse;
    fromPartial<I extends Exact<DeepPartial<UpdateUserResponse>, I>>(object: I): UpdateUserResponse;
};
export declare const GetUserDetailsResponse: {
    encode(message: GetUserDetailsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetUserDetailsResponse;
    fromJSON(object: any): GetUserDetailsResponse;
    toJSON(message: GetUserDetailsResponse): unknown;
    create<I extends Exact<DeepPartial<GetUserDetailsResponse>, I>>(base?: I): GetUserDetailsResponse;
    fromPartial<I extends Exact<DeepPartial<GetUserDetailsResponse>, I>>(object: I): GetUserDetailsResponse;
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
