import { EnvironmentModels } from '../models';
import { EnvironmentResponses } from '../responses';
import { BaseMapper } from './base-mapper';
var CloneEnvironmentModel = EnvironmentModels.CloneEnvironmentModel;
export class EnvironmentMapper extends BaseMapper {
    mapGetEnvironmentCloningStateResponse(response) {
        return new EnvironmentResponses.GetCloningStateResponse(super.mapResponseDebug(response), response.data, {
            cloningInfo: new EnvironmentModels.EnvironmentCloningStateModel(response.data.cloning_state)
        });
    }
    mapModifyEnvironmentResponse(response) {
        return new EnvironmentResponses.ModifyEnvironmentResponse(super.mapResponseDebug(response), response.data, new EnvironmentModels.EnvironmentModel(response.data.id, response.data.name, response.data.is_production));
    }
    mapCloneEnvironmentResponse(response) {
        return new EnvironmentResponses.CloneEnvironmentResponse(super.mapResponseDebug(response), response.data, new CloneEnvironmentModel(response.data.id, response.data.management_api_key, response.data.delivery_preview_api_key, response.data.secured_delivery_api_key));
    }
    mapProjectValidationIssuesListResponse(response) {
        return new EnvironmentResponses.EnvironmentValidationIssuesListResponse(super.mapResponseDebug(response), response.data, {
            items: response.data.issues.map((m) => this.mapEnvironmentValidationIssue(m)),
            pagination: super.mapPagination(response.data.pagination)
        });
    }
    mapStartEnvironmentValidationResponse(response) {
        return new EnvironmentResponses.StartEnvironmentValidationResponse(super.mapResponseDebug(response), response.data, {
            id: response.data.id,
            status: response.data.status,
            validation_result: response.data.validation_result
        });
    }
    mapCheckEnvironmentValidationResponse(response) {
        return new EnvironmentResponses.CheckEnvironmentValidationResponse(super.mapResponseDebug(response), response.data, {
            id: response.data.id,
            status: response.data.status,
            validation_result: response.data.validation_result
        });
    }
    mapEnvironmentInformationResponse(response) {
        return new EnvironmentResponses.EnvironmentInformationResponse(super.mapResponseDebug(response), response.data, {
            project: new EnvironmentModels.EnvironmentInformationModel(response.data.id, response.data.name, response.data.environment)
        });
    }
    mapProjectModel(raw) {
        return new EnvironmentModels.EnvironmentReportModel(raw.id, raw.name);
    }
    mapTypeModel(raw) {
        return new EnvironmentModels.EnvironmentTypeModel(raw.id, raw.name, raw.codename);
    }
    mapItemModel(raw) {
        return new EnvironmentModels.EnvironmentVariantContentItemModel(raw.id, raw.name, raw.codename);
    }
    mapLanguageModel(raw) {
        return new EnvironmentModels.EnvironmentVariantLanguageModel(raw.id, raw.name, raw.codename);
    }
    mapIssueModel(raw) {
        return new EnvironmentModels.EnvironmentIssueModel(this.mapVariantElementModel(raw.element), raw.messages);
    }
    mapTypeIssue(raw) {
        return new EnvironmentModels.EnvironmentTypeIssueModel(this.mapTypeModel(raw.type), raw.issues.map((m) => this.mapIssueModel(m)));
    }
    mapVariantIssue(raw) {
        return new EnvironmentModels.EnvironmentVariantIssueModel(this.mapItemModel(raw.item), this.mapLanguageModel(raw.language), raw.issues.map((m) => this.mapIssueModel(m)));
    }
    mapVariantElementModel(raw) {
        return new EnvironmentModels.EnvironmentVariantElementModel(raw.id, raw.name, raw.codename);
    }
    mapEnvironmentValidationIssue(raw) {
        if (raw.issue_type === 'variant_issue') {
            return new EnvironmentModels.EnvironmentValidationVariantIssueModel(this.mapItemModel(raw.item), this.mapLanguageModel(raw.language), raw.issues.map((m) => this.mapIssueModel(m)));
        }
        if (raw.issue_type === 'type_issue') {
            return new EnvironmentModels.EnvironmentValidationTypeIssueModel(this.mapTypeModel(raw.type), raw.issues.map((m) => this.mapIssueModel(m)));
        }
        throw Error(`Unsupported issue type '${raw.issue_type}'`);
    }
}
export const environmentMapper = new EnvironmentMapper();
//# sourceMappingURL=environment-mapper.js.map