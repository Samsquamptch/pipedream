import { textHelper } from '../../utilities';
export const snakeCasePropertyNameResolver = (contentType, element) => {
    return textHelper
        .addUnderscoreWhenStarsWithNumber(textHelper.removeZeroWidthCharacters(toSnakeCase(element)))
        .toLowerCase();
};
function toSnakeCase(str) {
    str = str.replace(textHelper.getPropertyNameRegex(), (_, c) => '_' + (c ? c.toLowerCase() : ''));
    return removeEndUnderscore(removeStartUnderscore(str));
}
function removeStartUnderscore(str) {
    if (!str.startsWith('_')) {
        return str;
    }
    return str.substring(1);
}
function removeEndUnderscore(str) {
    if (!str.endsWith('_')) {
        return str;
    }
    return str.slice(0, -1);
}
//# sourceMappingURL=snake-case-property-name-resolver.class.js.map