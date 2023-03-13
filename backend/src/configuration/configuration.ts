import { config } from 'dotenv'; config();

export default {
    database: {
        host: process.env.DB_URL || 'mongodb://localhost:27017',
        name: process.env.DB_NAME || 'MaisonDatty',
        user: process.env.DB_USER || 'admin',
        password: process.env.DB_PASSWORD || 'admin',
    },
}