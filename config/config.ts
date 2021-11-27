import dotenv from 'dotenv';

dotenv.config();

const MONGO_OPTIONS = {
    useNewUrlParser: true, 
     useUnifiedTopology: true 
};

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'deep16hardy';
const MONGO_PASSWORD = process.env.MONGO_USERNAME || 'apple1811';
const MONGO_HOST = process.env.MONGO_URL || `cluster0.sjdzl.mongodb.net/ecommerce?retryWrites=true&w=majority`;

const MONGO = {
    host: MONGO_HOST,
    password: MONGO_PASSWORD,
    username: MONGO_USERNAME,
    options: MONGO_OPTIONS,
    url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`
 
};

const SERVER_HOSTNAME = process.env.HOST || 'localhost';
const SERVER_PORT = process.env.PORT || 8080;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    mongo: MONGO,
    server: SERVER
};

export default config;
