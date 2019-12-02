import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export interface IConfig {
    debugLogging: boolean;
    databaseUrl: string;
    cronJobExpression: string;
}

const isDevMode = process.env.NODE_ENV == 'development';

const config: IConfig = {
    debugLogging: isDevMode,
    databaseUrl: process.env.DATABASE_URL || 'mysql://user:pass@localhost:3306/dbname',
    cronJobExpression: '*/10 * * * * *'
};

export { config };
