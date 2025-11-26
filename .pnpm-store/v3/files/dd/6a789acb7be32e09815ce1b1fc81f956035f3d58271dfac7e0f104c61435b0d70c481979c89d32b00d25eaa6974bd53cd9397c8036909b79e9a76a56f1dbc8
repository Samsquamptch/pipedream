import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { SpaceResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class ViewSpaceQuery extends BaseQuery<SpaceResponses.ViewSpaceResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    identifier: Identifiers.SpaceIdentifier;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.SpaceIdentifier);
    toPromise(): Promise<SpaceResponses.ViewSpaceResponse>;
    protected getAction(): string;
}
