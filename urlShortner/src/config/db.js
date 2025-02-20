import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const shard1 = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST_1,
    databse: process.env.DB_NAME_1,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT_1,
});

const shard2 = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST_2,
    database: process.env.DB_NAME_2,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT_2,
});

// doing consistent sharding
const getShard = (shortUrl) => {
    return shortUrl.chaCodeAt(0) % 2 === 0 ? shard1 : shard2;
}

module.exports = {getShard};