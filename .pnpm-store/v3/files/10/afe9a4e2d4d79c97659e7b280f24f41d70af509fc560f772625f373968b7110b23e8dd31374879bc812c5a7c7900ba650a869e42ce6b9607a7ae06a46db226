import { SharedModels } from '../shared/shared-models';
import { PreviewContracts } from '../../contracts';
export declare namespace PreviewModels {
    interface IPreviewSpace {
        id: string;
    }
    interface IPreviewContentType {
        id: string;
    }
    interface IPreviewUrlPattern {
        space: IPreviewSpace | null;
        urlPattern: string;
    }
    interface IPreviewUrlPatterns {
        contentType: IPreviewContentType;
        urlPatterns: IPreviewUrlPattern[];
    }
    interface IPreviewSpaceDomain {
        space: IPreviewSpace;
        domain: string;
    }
    class PreviewConfiguration implements SharedModels.IBaseModel<PreviewContracts.IPreviewConfigurationContract> {
        spaceDomains: IPreviewSpaceDomain[];
        previewUrlPatterns: IPreviewUrlPatterns[];
        _raw: PreviewContracts.IPreviewConfigurationContract;
        constructor(data: {
            spaceDomains: IPreviewSpaceDomain[];
            previewUrlPatterns: IPreviewUrlPatterns[];
            _raw: PreviewContracts.IPreviewConfigurationContract;
        });
    }
    interface IModifyPreviewConfigurationData {
        space_domains: {
            space: {
                id?: string;
                codename?: string;
            };
            domain: string;
        }[];
        preview_url_patterns: {
            content_type: {
                id?: string;
                codename?: string;
                external_id?: string;
            };
            url_patterns: {
                space: null | {
                    id?: string;
                    codename?: string;
                };
                url_pattern: string;
            }[];
        }[];
    }
}
