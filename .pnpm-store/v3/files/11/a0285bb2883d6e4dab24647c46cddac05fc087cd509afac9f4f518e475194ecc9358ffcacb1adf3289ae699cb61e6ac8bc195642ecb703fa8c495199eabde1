export var SharedModels;
(function (SharedModels) {
    class Pagination {
        constructor(continuationToken, nextPage) {
            this.continuationToken = continuationToken;
            this.nextPage = nextPage;
        }
    }
    SharedModels.Pagination = Pagination;
    class ValidationError {
        constructor(data) {
            Object.assign(this, data);
        }
    }
    SharedModels.ValidationError = ValidationError;
    class ContentManagementBaseKontentError {
        constructor(data) {
            this.validationErrors = data.validationErrors;
            this.message = data.message;
            this.requestId = data.requestId;
            this.errorCode = data.errorCode;
            this.originalError = data.originalError;
        }
    }
    SharedModels.ContentManagementBaseKontentError = ContentManagementBaseKontentError;
    class ReferenceObject {
        constructor(data) {
            Object.assign(this, data);
        }
    }
    SharedModels.ReferenceObject = ReferenceObject;
})(SharedModels || (SharedModels = {}));
//# sourceMappingURL=shared-models.js.map