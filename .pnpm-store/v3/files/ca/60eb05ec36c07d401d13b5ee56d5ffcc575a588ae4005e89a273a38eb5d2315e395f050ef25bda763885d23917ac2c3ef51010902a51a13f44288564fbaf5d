export var BaseResponses;
(function (BaseResponses) {
    class ContentManagementListAllResponse {
        constructor(obj) {
            this.responses = obj.responses;
            this.data = {
                items: obj.items
            };
        }
    }
    BaseResponses.ContentManagementListAllResponse = ContentManagementListAllResponse;
    class BaseContentManagementListResponse {
        constructor(debug, rawData, data) {
            this.debug = debug;
            this.rawData = rawData;
            this.data = data;
        }
    }
    BaseResponses.BaseContentManagementListResponse = BaseContentManagementListResponse;
    class BaseContentManagementResponse {
        constructor(debug, rawData, data) {
            this.debug = debug;
            this.rawData = rawData;
            this.data = data;
        }
    }
    BaseResponses.BaseContentManagementResponse = BaseContentManagementResponse;
    class EmptyContentManagementResponse extends BaseResponses.BaseContentManagementResponse {
        constructor(debug, rawData, data) {
            super(debug, rawData, data);
        }
    }
    BaseResponses.EmptyContentManagementResponse = EmptyContentManagementResponse;
})(BaseResponses || (BaseResponses = {}));
//# sourceMappingURL=base-responses.js.map