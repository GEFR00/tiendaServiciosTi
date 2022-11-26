import { Router } from 'express';
import { conn } from '../db.js'

const ruta = Router();

//Rutas del index

ruta.get('/test', async (req, res) => {
    const [resultado] = await conn.query('SELECT 1 + 1 AS resultado')
    res.json( resultado[0] );
});

export default ruta;
