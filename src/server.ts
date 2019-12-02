import { logger } from './logging';
import { cron } from './cron';

cron.start();
logger.info('cron start');
