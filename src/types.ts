// src/types.ts
export type CloudflareBindings = {
    DB: D1Database;
    EMAIL_STATS_KV: KVNamespace;
};

export interface ForwardableEmailMessage {
    readonly from: string;
    readonly to: string;
    readonly raw: ReadableStream;
    readonly rawSize: number;

    setReject(reason: string): Promise<void>;

    forward(rcptTo: string, headers?: Headers): Promise<void>;
}