// const env = 'DEV';
const env = 'PRD'

/* app version */
const versionDev = '0.0.1';
const versionPrd = '0.0.1';

const dev = {
    BASE_URL: '/frontend-assignment',
    APP_NAME: 'Assignment',
    APP_SHORT_NAME: 'Assignment',
    APP_CODE: 'Assignment',
    APP_VERSION: versionDev,
    ENV: env,
    ENV_DESC: 'สำหรับทดสอบ Development',
    CONSOLE_LOG: true,
    SESSION_EXPIRED_MINUTES: 720, /* minutes */
    API_URL: "http://XX.X.X.XXX/XXX/",
};

const prd = {
    BASE_URL: '/frontend-assignment',
    APP_NAME: 'Assignment',
    APP_SHORT_NAME: 'Assignment',
    APP_CODE: 'Assignment',
    APP_VERSION: versionPrd,
    ENV: env,
    ENV_DESC: "",
    CONSOLE_LOG: false,
    SESSION_EXPIRED_MINUTES: 720, /* minutes */
    API_URL: "http://XX.X.X.XXX/XXX/",
};

let config = {};
if (env === "DEV") config = dev;
if (env === "PRD") config = prd;

export default config;
