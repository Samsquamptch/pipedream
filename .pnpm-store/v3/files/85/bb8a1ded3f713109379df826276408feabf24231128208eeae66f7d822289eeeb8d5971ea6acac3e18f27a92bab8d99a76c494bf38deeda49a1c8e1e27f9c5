import { BaseResponses } from '../base-responses';
import { EnvironmentContracts } from '../../contracts';
import { EnvironmentModels } from '../../models/environments/environment.models';
import { SharedModels } from '../../models';
export declare namespace EnvironmentResponses {
    class EnvironmentValidationIssuesListResponse extends BaseResponses.BaseContentManagementListResponse<EnvironmentContracts.IEnvironmentValidationListResponseContract, EnvironmentModels.EnvironmentValidationVariantIssueModel | EnvironmentModels.EnvironmentValidationTypeIssueModel> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: EnvironmentContracts.IEnvironmentValidationListResponseContract, data: {
            items: (EnvironmentModels.EnvironmentValidationVariantIssueModel | EnvironmentModels.EnvironmentValidationTypeIssueModel)[];
            pagination: SharedModels.Pagination;
        });
    }
    class EnvironmentValidationIssuesListAllResponse extends BaseResponses.ContentManagementListAllResponse<EnvironmentValidationIssuesListResponse, EnvironmentModels.EnvironmentValidationVariantIssueModel> {
        constructor(data: {
            items: EnvironmentModels.EnvironmentValidationVariantIssueModel[];
            responses: EnvironmentValidationIssuesListResponse[];
        });
    }
    class StartEnvironmentValidationResponse extends BaseResponses.BaseContentManagementResponse<EnvironmentContracts.IStartEnvironmentValidationResponseContract, {
        id: string;
        status: EnvironmentContracts.EnvironmentValidationStatus;
        validation_result: EnvironmentContracts.EnvironmentValidationResult;
    }> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: EnvironmentContracts.IStartEnvironmentValidationResponseContract, data: {
            id: string;
            status: EnvironmentContracts.EnvironmentValidationStatus;
            validation_result: EnvironmentContracts.EnvironmentValidationResult;
        });
    }
    class CheckEnvironmentValidationResponse extends BaseResponses.BaseContentManagementResponse<EnvironmentContracts.ICheckEnvironmentValidationResponseContract, {
        id: string;
        status: EnvironmentContracts.EnvironmentValidationStatus;
        validation_result: EnvironmentContracts.EnvironmentValidationResult;
    }> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: EnvironmentContracts.ICheckEnvironmentValidationResponseContract, data: {
            id: string;
            status: EnvironmentContracts.EnvironmentValidationStatus;
            validation_result: EnvironmentContracts.EnvironmentValidationResult;
        });
    }
    class EnvironmentInformationResponse extends BaseResponses.BaseContentManagementResponse<EnvironmentContracts.IEnvironmentInformationResponseContract, {
        project: EnvironmentModels.EnvironmentInformationModel;
    }> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: EnvironmentContracts.IEnvironmentInformationResponseContract, data: {
            project: EnvironmentModels.EnvironmentInformationModel;
        });
    }
    class GetCloningStateResponse extends BaseResponses.BaseContentManagementResponse<EnvironmentContracts.IEnvironmentCloningStateResponseContract, {
        cloningInfo: EnvironmentModels.EnvironmentCloningStateModel;
    }> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: EnvironmentContracts.IEnvironmentCloningStateResponseContract, data: {
            cloningInfo: EnvironmentModels.EnvironmentCloningStateModel;
        });
    }
    class ModifyEnvironmentResponse extends BaseResponses.BaseContentManagementResponse<EnvironmentContracts.IModifyEnvironmentResponseContract, EnvironmentModels.EnvironmentModel> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: EnvironmentContracts.IModifyEnvironmentResponseContract, data: EnvironmentModels.EnvironmentModel);
    }
    class CloneEnvironmentResponse extends BaseResponses.BaseContentManagementResponse<EnvironmentContracts.ICloneEnvironmentResponseContract, EnvironmentModels.CloneEnvironmentModel> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: EnvironmentContracts.ICloneEnvironmentResponseContract, data: EnvironmentModels.CloneEnvironmentModel);
    }
}
