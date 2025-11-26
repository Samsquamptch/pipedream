import { GenericResponses } from '../responses';
import { BaseMapper } from './base-mapper';
export class GenericMapper extends BaseMapper {
    mapGenericResponse(response) {
        return new GenericResponses.GenericResponse(super.mapResponseDebug(response), response.data);
    }
}
export const genericMapper = new GenericMapper();
//# sourceMappingURL=generic-mapper.js.map