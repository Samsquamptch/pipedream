import { IManagementClientConfig } from '../../config';
import { GenericResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class DeleteQuery extends BaseQuery<GenericResponses.GenericResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    action: string;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, action: string);
    toPromise(): Promise<GenericResponses.GenericResponse>;
    protected getAction(): string;
}
