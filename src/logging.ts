import winston, { Logger } from 'winston';
import encoding from 'encoding-japanese';

const alignColorsAndTime = winston.format.combine(
    winston.format.colorize({
        all: true
    }),
    winston.format.label({
        label: '[LOGGER]'
    }),
    winston.format.timestamp({
        format: 'YY-MM-DD HH:MM:SS'
    }),
    winston.format.printf(
        info => {
            console.log(encoding.detect(`${info.label}-${info.timestamp}-${info.level}:${info.message}`));
            return `${info.label}-${info.timestamp}-${info.level}:${info.message}`;
        }
    )
);

export const logger: Logger = winston.createLogger({
    level: 'info',
    transports: [
        new ( winston.transports.Console )({
            format: winston.format.combine(winston.format.simple(), winston.format.colorize(), alignColorsAndTime)
        })
    ],
});
