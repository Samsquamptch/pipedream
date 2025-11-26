import { IManagementClientConfig } from '../../config';
import { Identifiers, WorkflowModels } from '../../models';
import { BaseResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class PublishLanguageVariantQuery extends BaseQuery<BaseResponses.EmptyContentManagementResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    contentItemIdentifier: Identifiers.ContentItemIdentifier;
    languageIdentifier: Identifiers.LanguageIdentifier;
    data?: WorkflowModels.IPublishLanguageVariantData | undefined;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, contentItemIdentifier: Identifiers.ContentItemIdentifier, languageIdentifier: Identifiers.LanguageIdentifier, data?: WorkflowModels.IPublishLanguageVariantData | undefined);
    toPromise(): Promise<BaseResponses.EmptyContentManagementResponse>;
    protected getAction(): string;
}
