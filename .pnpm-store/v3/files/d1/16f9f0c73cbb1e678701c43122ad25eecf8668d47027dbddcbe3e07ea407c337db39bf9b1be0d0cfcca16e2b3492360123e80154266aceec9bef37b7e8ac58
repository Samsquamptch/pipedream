import { ElementContracts } from './element-contracts';
import { SharedContracts } from './shared-contracts';
export declare namespace ContentTypeContracts {
    interface IContentTypeContract {
        id: string;
        name: string;
        codename: string;
        last_modified: string;
        elements: ElementContracts.IContentTypeElementContract[];
        external_id?: string;
        content_groups?: IContentTypeGroup[];
    }
    interface IContentTypeListResponseContract {
        types: IContentTypeContract[];
        pagination: SharedContracts.IPaginationModelContract;
    }
    interface IModifyContentTypeResponseContract extends IContentTypeContract {
    }
    interface IViewContentTypeResponseContract extends IContentTypeContract {
    }
    interface IDeleteContentTypeResponseContract {
    }
    interface IAddContentTypeResponseContract extends IContentTypeContract {
    }
    interface IContentTypeGroup {
        name: string;
        codename?: string;
        external_id?: string;
        id?: string;
    }
}
