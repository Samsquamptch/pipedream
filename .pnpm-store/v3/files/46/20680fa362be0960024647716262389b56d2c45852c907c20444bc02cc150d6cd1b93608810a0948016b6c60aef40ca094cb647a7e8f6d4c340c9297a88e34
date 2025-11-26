"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environmentMapper = exports.EnvironmentMapper = void 0;
const models_1 = require("../models");
const responses_1 = require("../responses");
const base_mapper_1 = require("./base-mapper");
var CloneEnvironmentModel = models_1.EnvironmentModels.CloneEnvironmentModel;
class EnvironmentMapper extends base_mapper_1.BaseMapper {
    mapGetEnvironmentCloningStateResponse(response) {
        return new responses_1.EnvironmentResponses.GetCloningStateResponse(super.mapResponseDebug(response), response.data, {
            cloningInfo: new models_1.EnvironmentModels.EnvironmentCloningStateModel(response.data.cloning_state)
        });
    }
    mapModifyEnvironmentResponse(response) {
        return new responses_1.EnvironmentResponses.ModifyEnvironmentResponse(super.mapResponseDebug(response), response.data, new models_1.EnvironmentModels.EnvironmentModel(response.data.id, response.data.name, response.data.is_production));
    }
    mapCloneEnvironmentResponse(response) {
        return new responses_1.EnvironmentResponses.CloneEnvironmentResponse(super.mapResponseDebug(response), response.data, new CloneEnvironmentModel(response.data.id, response.data.management_api_key, response.data.delivery_preview_api_key, response.data.secured_delivery_api_key));
    }
    mapProjectValidationIssuesListResponse(response) {
        return new responses_1.EnvironmentResponses.EnvironmentValidationIssuesListResponse(super.mapResponseDebug(response), response.data, {
            items: response.data.issues.map((m) => this.mapEnvironmentValidationIssue(m)),
            pagination: super.mapPagination(response.data.pagination)
        });
    }
    mapStartEnvironmentValidationResponse(response) {
        return new responses_1.EnvironmentResponses.StartEnvironmentValidationResponse(super.mapResponseDebug(response), response.data, {
            id: response.data.id,
            status: response.data.status,
            validation_result: response.data.validation_result
        });
    }
    mapCheckEnvironmentValidationResponse(response) {
        return new responses_1.EnvironmentResponses.CheckEnvironmentValidationResponse(super.mapResponseDebug(response), response.data, {
            id: response.data.id,
            status: response.data.status,
            validation_result: response.data.validation_result
        });
    }
    mapEnvironmentInformationResponse(response) {
        return new responses_1.EnvironmentResponses.EnvironmentInformationResponse(super.mapResponseDebug(response), response.data, {
            project: new models_1.EnvironmentModels.EnvironmentInformationModel(response.data.id, response.data.name, response.data.environment)
        });
    }
    mapProjectModel(raw) {
        return new models_1.EnvironmentModels.EnvironmentReportModel(raw.id, raw.name);
    }
    mapTypeModel(raw) {
        return new models_1.EnvironmentModels.EnvironmentTypeModel(raw.id, raw.name, raw.codename);
    }
    mapItemModel(raw) {
        return new models_1.EnvironmentModels.EnvironmentVariantContentItemModel(raw.id, raw.name, raw.codename);
    }
    mapLanguageModel(raw) {
        return new models_1.EnvironmentModels.EnvironmentVariantLanguageModel(raw.id, raw.name, raw.codename);
    }
    mapIssueModel(raw) {
        return new models_1.EnvironmentModels.EnvironmentIssueModel(this.mapVariantElementModel(raw.element), raw.messages);
    }
    mapTypeIssue(raw) {
        return new models_1.EnvironmentModels.EnvironmentTypeIssueModel(this.mapTypeModel(raw.type), raw.issues.map((m) => this.mapIssueModel(m)));
    }
    mapVariantIssue(raw) {
        return new models_1.EnvironmentModels.EnvironmentVariantIssueModel(this.mapItemModel(raw.item), this.mapLanguageModel(raw.language), raw.issues.map((m) => this.mapIssueModel(m)));
    }
    mapVariantElementModel(raw) {
        return new models_1.EnvironmentModels.EnvironmentVariantElementModel(raw.id, raw.name, raw.codename);
    }
    mapEnvironmentValidationIssue(raw) {
        if (raw.issue_type === 'variant_issue') {
            return new models_1.EnvironmentModels.EnvironmentValidationVariantIssueModel(this.mapItemModel(raw.item), this.mapLanguageModel(raw.language), raw.issues.map((m) => this.mapIssueModel(m)));
        }
        if (raw.issue_type === 'type_issue') {
            return new models_1.EnvironmentModels.EnvironmentValidationTypeIssueModel(this.mapTypeModel(raw.type), raw.issues.map((m) => this.mapIssueModel(m)));
        }
        throw Error(`Unsupported issue type '${raw.issue_type}'`);
    }
}
exports.EnvironmentMapper = EnvironmentMapper;
exports.environmentMapper = new EnvironmentMapper();
//# sourceMappingURL=environment-mapper.js.map