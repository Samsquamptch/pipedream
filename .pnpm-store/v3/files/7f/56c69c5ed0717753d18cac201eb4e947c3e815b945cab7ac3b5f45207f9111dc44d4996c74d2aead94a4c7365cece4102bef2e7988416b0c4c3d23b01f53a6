import { Readable } from 'node:stream';
export default class PaginationStream extends Readable {
    _fetchPage;
    _nitems;
    _pageno = 0;
    _items = [];
    _itemsRead = 0;
    constructor(fetchPage) {
        super({ objectMode: true });
        this._fetchPage = fetchPage;
    }
    async _read() {
        if (this._items.length > 0) {
            this._itemsRead++;
            process.nextTick(() => this.push(this._items.pop()));
            return;
        }
        if (this._nitems != null && this._itemsRead >= this._nitems) {
            process.nextTick(() => this.push(null));
            return;
        }
        try {
            const { items, ...rest } = await this._fetchPage(++this._pageno);
            if ('count' in rest) {
                this._nitems = rest.count;
            }
            this._items = Array.from(items);
            this._items.reverse();
            this._read();
        }
        catch (err) {
            this.emit('error', err);
        }
    }
}
//# sourceMappingURL=PaginationStream.js.map