"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genericMapper = exports.GenericMapper = void 0;
const responses_1 = require("../responses");
const base_mapper_1 = require("./base-mapper");
class GenericMapper extends base_mapper_1.BaseMapper {
    mapGenericResponse(response) {
        return new responses_1.GenericResponses.GenericResponse(super.mapResponseDebug(response), response.data);
    }
}
exports.GenericMapper = GenericMapper;
exports.genericMapper = new GenericMapper();
//# sourceMappingURL=generic-mapper.js.map