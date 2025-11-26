export class LanguageMapper {
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
//# sourceMappingURL=language.mapper.js.map