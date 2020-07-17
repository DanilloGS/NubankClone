import Constants from 'expo-constants';
import { IP_ADDRESS } from 'react-native-dotenv';

const devUrl = `http://${IP_ADDRESS}:3000/`;

const ENV = {
    dev: {
        apiUrl: devUrl,
    },
};

function getEnvVars(env = '') {
    if (env === null || env === undefined || env === '') return ENV.dev;
    if (env.indexOf('dev') !== -1) return ENV.dev;
    if (env.indexOf('prod') !== -1) return ENV.prod;
    if (env.indexOf('staging') !== -1) return ENV.staging;
}

export default getEnvVars(Constants.manifest.releaseChannel);
