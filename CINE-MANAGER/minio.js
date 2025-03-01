import { Client } from 'minio';
import dotenv from 'dotenv';

dotenv.config();

const minio = new Client({
    endPoint: '0.0.0.0',
    port: 9000,
    useSSL: false,
    accessKey: process.env.MINIO_ACCESS_KEY,
    secretKey: process.env.MINIO_SECRET_KEY,
})

export default minio;