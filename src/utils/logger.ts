import { createLogger, format, transports } from 'winston';

const { combine, timestamp, label, printf } = format;

const customFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} - [${label}] - ${level}: ${message}`;
});

export const logger = createLogger({
    level: 'debug',
    format: combine(
        label({ label: require.main.filename }),
        timestamp({ format: 'DD-MM-YYYY | HH:mm:ss' }),
        customFormat
    ),
    transports: [new transports.Console()]
});
