import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ManagementQueryService } from '../services';
export declare class SpaceIdentifierQuery<TResult> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    protected buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.SpaceIdentifier) => TResult;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.SpaceIdentifier) => TResult);
    /**
    * Gets using internal Id
    * @param id Internal Id of space
    */
    bySpaceId(id: string): TResult;
    /**
    * Gets query using external Id
    * @param id External Id of space
    */
    bySpaceExternalId(id: string): TResult;
    /**
    * Gets query using codename
    * @param codename Codename of space
    */
    bySpaceCodename(codename: string): TResult;
}
