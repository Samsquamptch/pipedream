export class EnumHelper {
    getAllValues(T) {
        const allEnumValues = Object.keys(T).map((key) => T[key]);
        return allEnumValues;
    }
    getEnumFromValue(T, value) {
        try {
            if (!value) {
                return undefined;
            }
            // we can map back from index number directly
            if (this.isNumeric(value)) {
                return T[value];
            }
            // for strings, we need to compare each value separately
            const allEnumValues = this.getAllValues(T);
            const result = allEnumValues.find((m) => m.toLowerCase() === value.toString().toLowerCase());
            if (!result) {
                return undefined;
            }
            return result;
        }
        catch (err) {
            return undefined;
        }
    }
    isNumeric(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }
}
export const enumHelper = new EnumHelper();
//# sourceMappingURL=enum.helper.js.map