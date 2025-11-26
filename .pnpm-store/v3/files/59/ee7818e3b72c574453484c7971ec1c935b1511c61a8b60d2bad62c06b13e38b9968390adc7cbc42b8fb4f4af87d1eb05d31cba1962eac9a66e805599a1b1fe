"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snakeCasePropertyNameResolver = void 0;
const utilities_1 = require("../../utilities");
const snakeCasePropertyNameResolver = (contentType, element) => {
    return utilities_1.textHelper
        .addUnderscoreWhenStarsWithNumber(utilities_1.textHelper.removeZeroWidthCharacters(toSnakeCase(element)))
        .toLowerCase();
};
exports.snakeCasePropertyNameResolver = snakeCasePropertyNameResolver;
function toSnakeCase(str) {
    str = str.replace(utilities_1.textHelper.getPropertyNameRegex(), (_, c) => '_' + (c ? c.toLowerCase() : ''));
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