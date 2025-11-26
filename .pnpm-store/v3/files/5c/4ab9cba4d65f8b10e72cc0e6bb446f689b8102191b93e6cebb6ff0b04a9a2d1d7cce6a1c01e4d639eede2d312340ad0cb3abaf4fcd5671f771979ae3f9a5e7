import { LanguageVariantElementsBuilder } from '../../models/language-variants/language-variant-elements-builder';
import { LanguageVariantContracts } from '../../contracts';
import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { LanguageVariantResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class UpsertLanguageVariantQuery extends BaseQuery<LanguageVariantResponses.UpsertLanguageVariantResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    protected contentItemIdentifier: Identifiers.ContentItemIdentifier;
    protected languageIdentifier: Identifiers.LanguageIdentifier;
    data: (builder: LanguageVariantElementsBuilder) => LanguageVariantContracts.IUpsertLanguageVariantPostContract;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, contentItemIdentifier: Identifiers.ContentItemIdentifier, languageIdentifier: Identifiers.LanguageIdentifier, data: (builder: LanguageVariantElementsBuilder) => LanguageVariantContracts.IUpsertLanguageVariantPostContract);
    toPromise(): Promise<LanguageVariantResponses.UpsertLanguageVariantResponse>;
    protected getAction(): string;
}
