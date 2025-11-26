import { IManagementClientConfig } from '../../config';
import { SpaceResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
import { SpaceModels } from '../../models';
export declare class AddSpaceQuery extends BaseQuery<SpaceResponses.AddSpaceResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    data: SpaceModels.IAddSpaceData;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, data: SpaceModels.IAddSpaceData);
    toPromise(): Promise<SpaceResponses.AddSpaceResponse>;
    protected getAction(): string;
}
