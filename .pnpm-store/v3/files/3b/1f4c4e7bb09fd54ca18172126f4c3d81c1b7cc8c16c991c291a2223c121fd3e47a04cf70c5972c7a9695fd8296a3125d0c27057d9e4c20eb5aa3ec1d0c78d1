import { IResponse } from '@kontent-ai/core-sdk';
import { SharedModels } from '../models';
export declare namespace BaseResponses {
    interface IContentManagementResponseDebug {
        response: IResponse<any>;
    }
    interface IContentManagementResponse {
        data: any;
        rawData: any;
        debug: IContentManagementResponseDebug;
    }
    interface IContentManagementListResponse {
        data: {
            items: any[];
            pagination: SharedModels.Pagination;
        };
        rawData: any;
        debug: IContentManagementResponseDebug;
    }
    interface IContentManagementListAllResponse {
        responses: any[];
        data: {
            items: any[];
        };
    }
    abstract class ContentManagementListAllResponse<TResponse extends IContentManagementListResponse, TData> implements IContentManagementListAllResponse {
        responses: TResponse[];
        data: {
            items: TData[];
        };
        constructor(obj: {
            responses: TResponse[];
            items: TData[];
        });
    }
    abstract class BaseContentManagementListResponse<TRawData, TItem> implements IContentManagementResponse {
        debug: IContentManagementResponseDebug;
        rawData: TRawData;
        data: {
            items: TItem[];
            pagination: SharedModels.Pagination;
        };
        constructor(debug: IContentManagementResponseDebug, rawData: TRawData, data: {
            items: TItem[];
            pagination: SharedModels.Pagination;
        });
    }
    abstract class BaseContentManagementResponse<TRawData, TData> implements IContentManagementResponse {
        debug: IContentManagementResponseDebug;
        rawData: TRawData;
        data: TData;
        constructor(debug: IContentManagementResponseDebug, rawData: TRawData, data: TData);
    }
    class EmptyContentManagementResponse extends BaseResponses.BaseContentManagementResponse<void, void> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: void, data: void);
    }
}
