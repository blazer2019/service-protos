import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { CreateUserRequest, GetUserDetailsRequest, UpdateUserRequest } from "../request/user-service-request";
import { CreateUserResponse, GetUserDetailsResponse, UpdateUserResponse } from "../response/user-service-response";
export declare const protobufPackage = "UserService";
/** User service definition */
export type UserServiceService = typeof UserServiceService;
export declare const UserServiceService: {
    readonly createUser: {
        readonly path: "/UserService.UserService/CreateUser";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateUserRequest;
        readonly responseSerialize: (value: CreateUserResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateUserResponse;
    };
    readonly getUserDetails: {
        readonly path: "/UserService.UserService/GetUserDetails";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetUserDetailsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetUserDetailsRequest;
        readonly responseSerialize: (value: GetUserDetailsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetUserDetailsResponse;
    };
    readonly updateUser: {
        readonly path: "/UserService.UserService/UpdateUser";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateUserRequest;
        readonly responseSerialize: (value: UpdateUserResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateUserResponse;
    };
};
export interface UserServiceServer extends UntypedServiceImplementation {
    createUser: handleUnaryCall<CreateUserRequest, CreateUserResponse>;
    getUserDetails: handleUnaryCall<GetUserDetailsRequest, GetUserDetailsResponse>;
    updateUser: handleUnaryCall<UpdateUserRequest, UpdateUserResponse>;
}
export interface UserServiceClient extends Client {
    createUser(request: CreateUserRequest, callback: (error: ServiceError | null, response: CreateUserResponse) => void): ClientUnaryCall;
    createUser(request: CreateUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateUserResponse) => void): ClientUnaryCall;
    createUser(request: CreateUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateUserResponse) => void): ClientUnaryCall;
    getUserDetails(request: GetUserDetailsRequest, callback: (error: ServiceError | null, response: GetUserDetailsResponse) => void): ClientUnaryCall;
    getUserDetails(request: GetUserDetailsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetUserDetailsResponse) => void): ClientUnaryCall;
    getUserDetails(request: GetUserDetailsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetUserDetailsResponse) => void): ClientUnaryCall;
    updateUser(request: UpdateUserRequest, callback: (error: ServiceError | null, response: UpdateUserResponse) => void): ClientUnaryCall;
    updateUser(request: UpdateUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateUserResponse) => void): ClientUnaryCall;
    updateUser(request: UpdateUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateUserResponse) => void): ClientUnaryCall;
}
export declare const UserServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): UserServiceClient;
    service: typeof UserServiceService;
    serviceName: string;
};
