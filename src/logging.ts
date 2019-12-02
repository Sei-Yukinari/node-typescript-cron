import winston, { Logger } from 'winston';

const alignFormat = winston.format.combine(
    winston.format.label({
        label: '[LOGGER]'
    }),
    winston.format.timestamp({
        format: 'YY-MM-DD HH:MM:SS'
    }),
    winston.format.printf(
        info => {
            return `${info.label}:${info.timestamp}:${info.level}:${info.message}`;
        })
);

export const logger: Logger = winston.createLogger({
    level: 'info',
    transports: [
        new ( winston.transports.Console )({
            format: winston.format.combine(alignFormat)
        })
    ],
});
