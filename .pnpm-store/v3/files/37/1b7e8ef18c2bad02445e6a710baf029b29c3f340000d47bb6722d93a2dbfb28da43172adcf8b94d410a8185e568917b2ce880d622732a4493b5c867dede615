"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericElementMapper = void 0;
class GenericElementMapper {
    mapElement(response) {
        if (!response) {
            throw Error(`Invalid response for mapping element`);
        }
        const element = response;
        return {
            codename: element.codename,
            name: element.name,
            type: element.type,
            options: element.options ? element.options : [],
            taxonomyGroup: element.taxonomy_group
        };
    }
}
exports.GenericElementMapper = GenericElementMapper;
//# sourceMappingURL=generic-element.mapper.js.map