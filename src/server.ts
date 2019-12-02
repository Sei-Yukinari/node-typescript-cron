import { logger } from './logging';
import { workerJob } from './cron';

workerJob.start();
logger.info('cron start');
