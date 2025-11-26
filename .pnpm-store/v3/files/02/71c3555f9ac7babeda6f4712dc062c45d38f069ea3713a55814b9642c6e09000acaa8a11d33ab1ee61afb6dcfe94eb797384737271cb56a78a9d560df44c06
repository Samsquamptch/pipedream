export var Parameters;
(function (Parameters) {
    class CustomParameter {
        /**
         * Custom parameter
         * @constructor
         * @param {string} name - Name of the parameter
         * @param {string} value - Value of the parameter
         */
        constructor(name, value) {
            this.name = name;
            this.value = value;
            if (!name) {
                throw Error(`Name of the custom parameter is not specified`);
            }
        }
        getParam() {
            return this.name;
        }
        getParamValue() {
            return this.value;
        }
    }
    Parameters.CustomParameter = CustomParameter;
})(Parameters || (Parameters = {}));
//# sourceMappingURL=parameters.js.map