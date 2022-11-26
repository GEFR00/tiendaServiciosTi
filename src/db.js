import {createPool} from 'mysql2/promise';

const pass = 'Jugarplay2'

export const conn = createPool({
    host: 'localhost',
    user: 'root',
    password: pass,
    port: 3306,
    database: 'tiendaserviciosti2022'
});

