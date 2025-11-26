"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageMapper = void 0;
class LanguageMapper {
    mapMultipleLanguages(response) {
        return response.languages.map((language) => {
            return this.mapLanguage(language);
        });
    }
    mapLanguage(language) {
        if (!language) {
            throw Error(`Cannot map language`);
        }
        return {
            system: language.system
        };
    }
}
exports.LanguageMapper = LanguageMapper;
//# sourceMappingURL=language.mapper.js.map