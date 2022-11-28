import express from 'express';
import { conn } from './db.js'
import productosRutas from './routes/productos.routes.js';
import indexRutas from './routes/index.routes.js';
import carritoRutas from './routes/carrito.routes.js';
import proveedoresRutas from './routes/proveedores.routes.js';
import categoriasRutas from './routes/categorias.routes.js';
import vendedoresRutas from './routes/vendedores.routes.js'
import detalleCarrito from './routes/detalleCarrito.routes.js';

const app = express();

app.use( express.json() );

app.use('/api' , productosRutas );
app.use('/api' , productosRutas );
app.use('/api' , carritoRutas );
app.use('/api' , detalleCarrito );
app.use('/api' , proveedoresRutas );
app.use('/api' , proveedoresRutas );
app.use('/api' , categoriasRutas );
app.use('/api' , vendedoresRutas );

app.listen( 3000 );
console.log('Escuchando en puerto 3000...');