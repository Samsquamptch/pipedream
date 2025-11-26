import type { Readable } from 'node:stream';
import type { AssemblyStatus } from './alphalib/types/assemblyStatus.ts';
import type { UploadProgress } from './Transloadit.ts';
export interface Stream {
    path?: string;
    stream: Readable;
}
interface SendTusRequestOptions {
    streamsMap: Record<string, Stream>;
    assembly: AssemblyStatus;
    requestedChunkSize: number;
    uploadConcurrency: number;
    onProgress: (options: UploadProgress) => void;
}
export declare function sendTusRequest({ streamsMap, assembly, requestedChunkSize, uploadConcurrency, onProgress, }: SendTusRequestOptions): Promise<void>;
export {};
//# sourceMappingURL=tus.d.ts.map