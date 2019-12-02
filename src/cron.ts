import { CronJob } from 'cron';
import { config } from './config';
import { logger } from './logging';

const workerJob = new CronJob({
    cronTime: '*/10 * * * * *', //毎10秒実行
    onTick: function() {
        logger.info('infofofo１１１');
    },
    start: true, //newした後即時実行するかどうか
    timeZone: 'Asia/Tokyo'
});

export { workerJob };
