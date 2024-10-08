import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "common";
/** Status structure for common responses */
export interface Status {
    success: boolean;
    /** Error message */
    errorMsg: string;
    /** Error code */
    errorCode: string;
    /** Error name */
    errorName: string;
}
export declare const Status: {
    encode(message: Status, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Status;
    fromJSON(object: any): Status;
    toJSON(message: Status): unknown;
    create<I extends Exact<DeepPartial<Status>, I>>(base?: I): Status;
    fromPartial<I extends Exact<DeepPartial<Status>, I>>(object: I): Status;
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
