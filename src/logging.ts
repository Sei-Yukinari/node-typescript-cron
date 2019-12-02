import winston, { Logger } from 'winston';
import encoding from 'encoding-japanese';
import utf8 from 'utf8';

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
            console.log(encoding.detect(utf8.encode(`${info.label}-${info.timestamp}-${info.level}:${info.message}`)));
            return utf8.encode(`${info.label}-${info.timestamp}-${info.level}:${info.message}`);
        }
    )
);

console.dir(process.env)

export const logger: Logger = winston.createLogger({
    level: 'info',
    transports: [
        new ( winston.transports.Console )({
            format: winston.format.combine(winston.format.simple(), winston.format.colorize(), alignColorsAndTime)
        })
    ],
});
