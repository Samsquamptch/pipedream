import { RedshiftDataServiceException as __BaseException } from "./RedshiftDataServiceException";
export class ActiveSessionsExceededException extends __BaseException {
    name = "ActiveSessionsExceededException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ActiveSessionsExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ActiveSessionsExceededException.prototype);
        this.Message = opts.Message;
    }
}
export class ActiveStatementsExceededException extends __BaseException {
    name = "ActiveStatementsExceededException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ActiveStatementsExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ActiveStatementsExceededException.prototype);
        this.Message = opts.Message;
    }
}
export class BatchExecuteStatementException extends __BaseException {
    name = "BatchExecuteStatementException";
    $fault = "server";
    Message;
    StatementId;
    constructor(opts) {
        super({
            name: "BatchExecuteStatementException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, BatchExecuteStatementException.prototype);
        this.Message = opts.Message;
        this.StatementId = opts.StatementId;
    }
}
export const ResultFormatString = {
    CSV: "CSV",
    JSON: "JSON",
};
export class InternalServerException extends __BaseException {
    name = "InternalServerException";
    $fault = "server";
    Message;
    constructor(opts) {
        super({
            name: "InternalServerException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, InternalServerException.prototype);
        this.Message = opts.Message;
    }
}
export class ValidationException extends __BaseException {
    name = "ValidationException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ValidationException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ValidationException.prototype);
        this.Message = opts.Message;
    }
}
export class DatabaseConnectionException extends __BaseException {
    name = "DatabaseConnectionException";
    $fault = "server";
    Message;
    constructor(opts) {
        super({
            name: "DatabaseConnectionException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, DatabaseConnectionException.prototype);
        this.Message = opts.Message;
    }
}
export class ResourceNotFoundException extends __BaseException {
    name = "ResourceNotFoundException";
    $fault = "client";
    Message;
    ResourceId;
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
        this.Message = opts.Message;
        this.ResourceId = opts.ResourceId;
    }
}
export const StatusString = {
    ABORTED: "ABORTED",
    ALL: "ALL",
    FAILED: "FAILED",
    FINISHED: "FINISHED",
    PICKED: "PICKED",
    STARTED: "STARTED",
    SUBMITTED: "SUBMITTED",
};
export const StatementStatusString = {
    ABORTED: "ABORTED",
    FAILED: "FAILED",
    FINISHED: "FINISHED",
    PICKED: "PICKED",
    STARTED: "STARTED",
    SUBMITTED: "SUBMITTED",
};
export class QueryTimeoutException extends __BaseException {
    name = "QueryTimeoutException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "QueryTimeoutException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, QueryTimeoutException.prototype);
        this.Message = opts.Message;
    }
}
export class ExecuteStatementException extends __BaseException {
    name = "ExecuteStatementException";
    $fault = "server";
    Message;
    StatementId;
    constructor(opts) {
        super({
            name: "ExecuteStatementException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, ExecuteStatementException.prototype);
        this.Message = opts.Message;
        this.StatementId = opts.StatementId;
    }
}
export var Field;
(function (Field) {
    Field.visit = (value, visitor) => {
        if (value.isNull !== undefined)
            return visitor.isNull(value.isNull);
        if (value.booleanValue !== undefined)
            return visitor.booleanValue(value.booleanValue);
        if (value.longValue !== undefined)
            return visitor.longValue(value.longValue);
        if (value.doubleValue !== undefined)
            return visitor.doubleValue(value.doubleValue);
        if (value.stringValue !== undefined)
            return visitor.stringValue(value.stringValue);
        if (value.blobValue !== undefined)
            return visitor.blobValue(value.blobValue);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(Field || (Field = {}));
export var QueryRecords;
(function (QueryRecords) {
    QueryRecords.visit = (value, visitor) => {
        if (value.CSVRecords !== undefined)
            return visitor.CSVRecords(value.CSVRecords);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(QueryRecords || (QueryRecords = {}));
