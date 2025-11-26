import { ElementContracts } from './element-contracts';
import { SharedContracts } from './shared-contracts';
export declare namespace ContentTypeSnippetContracts {
    interface IContentTypeSnippetContract {
        id: string;
        name: string;
        codename: string;
        last_modified: string;
        external_id?: string;
        elements: ElementContracts.IContentTypeElementContract[];
    }
    interface IContentTypeSnippetListResponseContract {
        snippets: IContentTypeSnippetContract[];
        pagination: SharedContracts.IPaginationModelContract;
    }
    interface IViewContentTypeSnippetResponseContract extends IContentTypeSnippetContract {
    }
    interface IAddContentTypeSnippetResponseContract extends IContentTypeSnippetContract {
    }
    interface IModifyContentTypeSnippetResponseContract extends IContentTypeSnippetContract {
    }
    interface IDeleteContentTypeSnippetResponseContract {
    }
}
