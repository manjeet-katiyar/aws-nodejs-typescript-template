import { HttpError } from './errors';

export const errorHandler = (errorObject) => {
    if (errorObject instanceof HttpError) {
        return {
            statusCode: errorObject.status,
            body: JSON.stringify({
                errorCode: errorObject.errorCode,
                message: errorObject.message
            }, null, 4),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            },
        };
    }
    return {
        statusCode: 500,
        body: JSON.stringify({ message: errorObject.message }, null, 4),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        },
    };
};
