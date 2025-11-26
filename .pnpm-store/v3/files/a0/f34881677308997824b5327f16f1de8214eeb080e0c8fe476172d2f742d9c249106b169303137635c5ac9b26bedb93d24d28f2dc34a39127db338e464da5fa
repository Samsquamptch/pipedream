import { IManagementClientConfig } from '../../config';
import { Identifiers, SpaceModels } from '../../models';
import { SpaceResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class ModifySpaceQuery extends BaseQuery<SpaceResponses.ModifySpaceResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    identifier: Identifiers.SpaceIdentifier;
    data: SpaceModels.IModifySpaceData[];
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.SpaceIdentifier, data: SpaceModels.IModifySpaceData[]);
    toPromise(): Promise<SpaceResponses.ModifySpaceResponse>;
    protected getAction(): string;
}
