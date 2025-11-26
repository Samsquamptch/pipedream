import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { LanguageVariantResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class ListLanguageVariantsOfItemQuery extends BaseQuery<LanguageVariantResponses.ListLanguageVariantsOfItemResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    protected identifier: Identifiers.ContentItemIdentifier;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.ContentItemIdentifier);
    toPromise(): Promise<LanguageVariantResponses.ListLanguageVariantsOfItemResponse>;
    protected getAction(): string;
}
