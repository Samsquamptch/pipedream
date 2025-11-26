export declare namespace PreviewContracts {
    interface IPreviewSpaceContract {
        id: string;
    }
    interface IPreviewContentTypeContract {
        id: string;
    }
    interface IPreviewUrlPatternContract {
        space: IPreviewSpaceContract | null;
        url_pattern: string;
    }
    interface IPreviewUrlPatternsContract {
        content_type: IPreviewContentTypeContract;
        url_patterns: IPreviewUrlPatternContract[];
    }
    interface IPreviewSpaceDomainContract {
        space: IPreviewSpaceContract;
        domain: string;
    }
    interface IPreviewConfigurationContract {
        space_domains: IPreviewSpaceDomainContract[];
        preview_url_patterns: IPreviewUrlPatternsContract[];
    }
}
