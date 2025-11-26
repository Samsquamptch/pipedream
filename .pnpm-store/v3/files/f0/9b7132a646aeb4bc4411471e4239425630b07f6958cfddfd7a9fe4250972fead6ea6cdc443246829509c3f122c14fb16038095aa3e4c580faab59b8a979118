import { SharedContracts } from './shared-contracts';
export declare namespace EnvironmentContracts {
    interface IEnvironmentCloningStateResponseContract {
        cloning_state: 'in_progress' | 'failed' | 'done';
    }
    interface IDeleteEnvironmentResponseContract {
    }
    interface IEnvironmentResponseContract {
        id: string;
        name: string;
        is_production: boolean;
    }
    interface IModifyEnvironmentResponseContract extends IEnvironmentResponseContract {
    }
    interface ICloneEnvironmentResponseContract {
        id: string;
        management_api_key: string;
        delivery_preview_api_key: string;
        secured_delivery_api_key: string;
    }
    interface IMarkEnvironmentAsProductionResponseContract {
    }
    interface IEnvironmentInformationResponseContract {
        id: string;
        name: string;
        environment: string;
    }
    type EnvironmentValidationIssueType = 'type_issue' | 'variant_issue';
    interface IEnvironmentValidationItemIssueContract {
        element: IEnvironmentVariantElementContract;
        messages: string[];
    }
    interface IEnvironmentValidationIssueContract {
        issue_type: EnvironmentValidationIssueType;
        item?: IEnvironmentVariantContentItemContract;
        type?: IEnvironmentTypeContract;
        language?: IEnvironmentVariantLanguageContract;
        issues: IEnvironmentValidationItemIssueContract[];
    }
    interface IEnvironmentValidationListResponseContract {
        issues: IEnvironmentValidationIssueContract[];
        pagination: SharedContracts.IPaginationModelContract;
    }
    type EnvironmentValidationStatus = 'finished' | 'queued' | 'failed';
    type EnvironmentValidationResult = 'none' | 'no_issues' | 'issues_found';
    interface IStartEnvironmentValidationResponseContract {
        id: string;
        status: EnvironmentValidationStatus;
        validation_result: EnvironmentValidationResult;
    }
    interface ICheckEnvironmentValidationResponseContract {
        id: string;
        status: EnvironmentValidationStatus;
        validation_result: EnvironmentValidationResult;
    }
    interface IEnvironmentReportModelContract {
        id: string;
        name: string;
    }
    interface IEnvironmentVariantContentItemContract {
        id: string;
        name: string;
        codename: string;
    }
    interface IEnvironmentVariantLanguageContract {
        id: string;
        name: string;
        codename: string;
    }
    interface IEnvironmentVariantElementContract {
        id: string;
        name: string;
        codename: string;
    }
    interface IEnvironmentTypeContract {
        id: string;
        name: string;
        codename: string;
    }
    interface IEnvironmentTypeIssueContract {
        type: IEnvironmentTypeContract;
        issues: IEnvironmentIssueContract[];
    }
    interface IEnvironmentIssueContract {
        element: IEnvironmentVariantElementContract;
        messages: string[];
    }
    interface IEnvironmentVariantIssueContract {
        item: IEnvironmentVariantContentItemContract;
        language: IEnvironmentVariantLanguageContract;
        issues: IEnvironmentIssueContract[];
    }
}
