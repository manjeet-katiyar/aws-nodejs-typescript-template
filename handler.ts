
import { successMessages } from './utils/constants';
import { errorHandler } from './utils/errorHandlers';
import { logger } from './utils/logger';

export const handle = async (event, _context) => {
    const eventBody = JSON.parse(event.body);
    try {
        logger.debug('Transaction is successfull:', eventBody);
        return successMessages.TRANSACTION_SUCCESSFULL(eventBody);
    }
    catch (error) {
        logger.error(error.message);
        return errorHandler(error);
    }
}

