import { type CallContext, type CallOptions } from "nice-grpc-common";
import { CreateUserRequest, GetUserDetailsRequest, UpdateUserRequest } from "./request";
import { CreateUserResponse, GetUserDetailsResponse, UpdateUserResponse } from "./response";
export declare const protobufPackage = "UserService";
/** User service definition */
export type UserServiceDefinition = typeof UserServiceDefinition;
export declare const UserServiceDefinition: {
    readonly name: "UserService";
    readonly fullName: "UserService.UserService";
    readonly methods: {
        readonly createUser: {
            readonly name: "CreateUser";
            readonly requestType: {
                encode(message: CreateUserRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): CreateUserRequest;
                fromJSON(object: any): CreateUserRequest;
                toJSON(message: CreateUserRequest): unknown;
                create<I extends import("./request").Exact<import("./request").DeepPartial<CreateUserRequest>, I>>(base?: I): CreateUserRequest;
                fromPartial<I extends import("./request").Exact<import("./request").DeepPartial<CreateUserRequest>, I>>(object: I): CreateUserRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CreateUserResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): CreateUserResponse;
                fromJSON(object: any): CreateUserResponse;
                toJSON(message: CreateUserResponse): unknown;
                create<I extends import("./response").Exact<import("./response").DeepPartial<CreateUserResponse>, I>>(base?: I): CreateUserResponse;
                fromPartial<I extends import("./response").Exact<import("./response").DeepPartial<CreateUserResponse>, I>>(object: I): CreateUserResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getUserDetails: {
            readonly name: "GetUserDetails";
            readonly requestType: {
                encode(message: GetUserDetailsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): GetUserDetailsRequest;
                fromJSON(object: any): GetUserDetailsRequest;
                toJSON(message: GetUserDetailsRequest): unknown;
                create<I extends import("./request").Exact<import("./request").DeepPartial<GetUserDetailsRequest>, I>>(base?: I): GetUserDetailsRequest;
                fromPartial<I extends import("./request").Exact<import("./request").DeepPartial<GetUserDetailsRequest>, I>>(object: I): GetUserDetailsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetUserDetailsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): GetUserDetailsResponse;
                fromJSON(object: any): GetUserDetailsResponse;
                toJSON(message: GetUserDetailsResponse): unknown;
                create<I extends import("./response").Exact<import("./response").DeepPartial<GetUserDetailsResponse>, I>>(base?: I): GetUserDetailsResponse;
                fromPartial<I extends import("./response").Exact<import("./response").DeepPartial<GetUserDetailsResponse>, I>>(object: I): GetUserDetailsResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly updateUser: {
            readonly name: "UpdateUser";
            readonly requestType: {
                encode(message: UpdateUserRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): UpdateUserRequest;
                fromJSON(object: any): UpdateUserRequest;
                toJSON(message: UpdateUserRequest): unknown;
                create<I extends import("./request").Exact<import("./request").DeepPartial<UpdateUserRequest>, I>>(base?: I): UpdateUserRequest;
                fromPartial<I extends import("./request").Exact<import("./request").DeepPartial<UpdateUserRequest>, I>>(object: I): UpdateUserRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateUserResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): UpdateUserResponse;
                fromJSON(object: any): UpdateUserResponse;
                toJSON(message: UpdateUserResponse): unknown;
                create<I extends import("./response").Exact<import("./response").DeepPartial<UpdateUserResponse>, I>>(base?: I): UpdateUserResponse;
                fromPartial<I extends import("./response").Exact<import("./response").DeepPartial<UpdateUserResponse>, I>>(object: I): UpdateUserResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface UserServiceImplementation<CallContextExt = {}> {
    createUser(request: CreateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateUserResponse>>;
    getUserDetails(request: GetUserDetailsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserDetailsResponse>>;
    updateUser(request: UpdateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateUserResponse>>;
}
export interface UserServiceClient<CallOptionsExt = {}> {
    createUser(request: DeepPartial<CreateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateUserResponse>;
    getUserDetails(request: DeepPartial<GetUserDetailsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserDetailsResponse>;
    updateUser(request: DeepPartial<UpdateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateUserResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
