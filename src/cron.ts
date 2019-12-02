import { CronJob } from 'cron';
import { config } from './config';
import { logger } from './logging';

const cron = new CronJob(config.cronJobExpression, () => {
    logger.info('infofofo１１１');
});

export { cron };
