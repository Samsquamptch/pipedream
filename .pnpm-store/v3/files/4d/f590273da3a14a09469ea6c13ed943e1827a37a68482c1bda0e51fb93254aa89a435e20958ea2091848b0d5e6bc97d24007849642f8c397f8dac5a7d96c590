export class GenericElementMapper {
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
//# sourceMappingURL=generic-element.mapper.js.map