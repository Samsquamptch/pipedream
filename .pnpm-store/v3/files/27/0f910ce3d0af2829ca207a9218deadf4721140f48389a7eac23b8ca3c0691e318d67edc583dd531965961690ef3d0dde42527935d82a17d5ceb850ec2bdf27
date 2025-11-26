"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.previewMapper = exports.PreviewMapper = void 0;
const models_1 = require("../models");
const base_mapper_1 = require("./base-mapper");
const preview_responses_1 = require("../responses/preview/preview-responses");
class PreviewMapper extends base_mapper_1.BaseMapper {
    mapPreviewConfigurationResponse(response) {
        return new preview_responses_1.PreviewResponses.PreviewConfigurationResponse(super.mapResponseDebug(response), response.data, this.mapPreviewConfiguration(response.data));
    }
    mapModifyConfigurationResponse(response) {
        return new preview_responses_1.PreviewResponses.ModifyConfigurationResponse(super.mapResponseDebug(response), response.data, this.mapPreviewConfiguration(response.data));
    }
    mapPreviewConfiguration(rawItem) {
        return new models_1.PreviewModels.PreviewConfiguration({
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
exports.PreviewMapper = PreviewMapper;
exports.previewMapper = new PreviewMapper();
//# sourceMappingURL=preview-mapper.js.map