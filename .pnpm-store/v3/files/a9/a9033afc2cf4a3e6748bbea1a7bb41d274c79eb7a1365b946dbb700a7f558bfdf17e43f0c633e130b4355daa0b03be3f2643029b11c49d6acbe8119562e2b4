"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncMapper = void 0;
class SyncMapper {
    mapContentItemDelta(itemDeltaContract) {
        var _a, _b;
        const systemContract = itemDeltaContract.data.system;
        const elements = itemDeltaContract.data.elements
            ? itemDeltaContract.data.elements
            : {};
        return {
            changeType: itemDeltaContract.change_type,
            timestamp: itemDeltaContract.timestamp,
            data: {
                elements: elements,
                system: {
                    codename: systemContract.codename,
                    collection: systemContract.collection,
                    id: systemContract.id,
                    language: systemContract.language,
                    lastModified: systemContract.last_modified,
                    name: systemContract.name,
                    sitemapLocations: systemContract.sitemap_locations,
                    type: systemContract.type,
                    workflowStep: (_a = systemContract.workflow_step) !== null && _a !== void 0 ? _a : null,
                    workflow: (_b = systemContract.workflow) !== null && _b !== void 0 ? _b : null
                }
            }
        };
    }
}
exports.SyncMapper = SyncMapper;
//# sourceMappingURL=sync.mapper.js.map