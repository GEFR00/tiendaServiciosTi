import express from 'express';
import { conn } from './db.js'
import productosRutas from './routes/productos.routes.js';
import indexRutas from './routes/index.routes.js';
import carritoRutas from './routes/carrito.routes.js';
import proveedoresRutas from './routes/proveedores.routes.js'

const app = express();

app.use( express.json() );

app.use('/api' , productosRutas );
app.use('/api' , productosRutas );
app.use('/api' , carritoRutas );
app.use('/api' , proveedoresRutas );

app.listen( 3000 );
console.log('Escuchando en puerto 3000...');