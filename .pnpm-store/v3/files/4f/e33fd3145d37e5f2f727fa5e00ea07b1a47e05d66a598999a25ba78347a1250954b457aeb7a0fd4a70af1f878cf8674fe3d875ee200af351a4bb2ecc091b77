import { Readable } from 'node:stream';
import type { PaginationList, PaginationListWithCount } from './apiTypes.ts';
type FetchPage<T> = (pageno: number) => PaginationList<T> | PromiseLike<PaginationList<T>> | PaginationListWithCount<T> | PromiseLike<PaginationListWithCount<T>>;
export default class PaginationStream<T> extends Readable {
    private _fetchPage;
    private _nitems?;
    private _pageno;
    private _items;
    private _itemsRead;
    constructor(fetchPage: FetchPage<T>);
    _read(): Promise<void>;
}
export {};
//# sourceMappingURL=PaginationStream.d.ts.map