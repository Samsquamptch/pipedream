"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.languageMapper = exports.LanguageMapper = void 0;
const models_1 = require("../models");
const responses_1 = require("../responses");
const base_mapper_1 = require("./base-mapper");
class LanguageMapper extends base_mapper_1.BaseMapper {
    mapViewLanguageResponse(response) {
        const language = this.mapLanguage(response.data);
        return new responses_1.LanguageResponses.ViewLanguageResponse(super.mapResponseDebug(response), response.data, language);
    }
    mapModifyLanguageResponse(response) {
        const language = this.mapLanguage(response.data);
        return new responses_1.LanguageResponses.ModifyLanguageResponse(super.mapResponseDebug(response), response.data, language);
    }
    mapAddLanguageResponse(response) {
        const language = this.mapLanguage(response.data);
        return new responses_1.LanguageResponses.AddLanguageResponse(super.mapResponseDebug(response), response.data, language);
    }
    mapListLanguagesResponse(response) {
        const languages = response.data.languages.map(m => this.mapLanguage(m));
        return new responses_1.LanguageResponses.ListLanguagesResponse(super.mapResponseDebug(response), response.data, {
            items: languages,
            pagination: super.mapPagination(response.data.pagination)
        });
    }
    mapLanguage(rawModel) {
        return new models_1.LanguageModels.LanguageModel({
            codename: rawModel.codename,
            externalId: rawModel.external_id,
            id: rawModel.id,
            isActive: rawModel.is_active,
            isDefault: rawModel.is_default,
            name: rawModel.name,
            fallbackLanguage: rawModel.fallback_language
                ? new models_1.LanguageModels.FallbackLanguageModel({
                    id: rawModel.fallback_language.id
                })
                : undefined,
            _raw: rawModel
        });
    }
}
exports.LanguageMapper = LanguageMapper;
exports.languageMapper = new LanguageMapper();
//# sourceMappingURL=language-mapper.js.map