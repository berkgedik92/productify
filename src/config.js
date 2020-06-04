import {DEMO_CONFIG} from './configurations/demo_config';
import {PROD_CONFIG} from './configurations/prod_config';

// ENV -> CONFIG
const CONFIG_MAP = {
    "development": DEMO_CONFIG,
    "test": DEMO_CONFIG,
    "production": PROD_CONFIG
}

/*
    In case of execution by...
        "npm start",    the variable below is always equal to 'development'
        "npm test"      the variable below is always equal to 'test'
        "npm build",    the variable below is always equal to 'production'
 */
const node_env = process.env.NODE_ENV;
console.log("NODE_ENV = " + node_env);

const CONFIG = CONFIG_MAP[node_env];
export default CONFIG;
