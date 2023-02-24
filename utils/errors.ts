export class HttpError extends Error {
    type: string;
    status: any;
    errorCode: any;
    constructor(error) {
        super(error.message);
        this.type = "httpError";
        this.status = error.status;
        this.errorCode = error.error_code
    }
};