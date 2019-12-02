import { CronJob } from 'cron';
import { logger } from './logging';

const workerJob = new CronJob({
    cronTime: '*/10 * * * * *',
    onTick: function() {
        logger.info('infofofo１１１');
    },
    start: true,
    timeZone: 'Asia/Tokyo'
});

export { workerJob };
