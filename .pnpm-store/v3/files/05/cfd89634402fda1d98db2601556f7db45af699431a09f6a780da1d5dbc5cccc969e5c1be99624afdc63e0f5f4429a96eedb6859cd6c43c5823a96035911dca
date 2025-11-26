import { PreviewModels } from '../models';
import { BaseMapper } from './base-mapper';
import { PreviewResponses } from '../responses/preview/preview-responses';
export class PreviewMapper extends BaseMapper {
    mapPreviewConfigurationResponse(response) {
        return new PreviewResponses.PreviewConfigurationResponse(super.mapResponseDebug(response), response.data, this.mapPreviewConfiguration(response.data));
    }
    mapModifyConfigurationResponse(response) {
        return new PreviewResponses.ModifyConfigurationResponse(super.mapResponseDebug(response), response.data, this.mapPreviewConfiguration(response.data));
    }
    mapPreviewConfiguration(rawItem) {
        return new PreviewModels.PreviewConfiguration({
            _raw: rawItem,
            previewUrlPatterns: rawItem.preview_url_patterns.map((urlPatternsContract) => {
                const urlPatterns = {
                    contentType: urlPatternsContract.content_type,
                    urlPatterns: urlPatternsContract.url_patterns.map((urlPatternContract) => {
                        const urlPattern = {
                            space: urlPatternContract.space,
                            urlPattern: urlPatternContract.url_pattern
                        };
                        return urlPattern;
                    })
                };
                return urlPatterns;
            }),
            spaceDomains: rawItem.space_domains
        });
    }
}
export const previewMapper = new PreviewMapper();
//# sourceMappingURL=preview-mapper.js.map