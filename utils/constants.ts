import { Error, Success } from './types';

export const errorMessages = {
    INVALID_PAYLOAD: (): Error => ({
        status: 400,
        error_code: 'INVALID_PAYLOAD',
        message: "Please provide correct payload."
    }),
};

export const successMessages = {
    TRANSACTION_SUCCESSFULL: (details): Success => ({
        statusCode: 200,
        body: JSON.stringify({ details: details }, null, 4),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
    })
};
