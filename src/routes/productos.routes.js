import { Router } from 'express';
import { getProductos, getProducto, deleteProducto, agregaProducto, actualizaProducto } from '../controllers/productos.controller.js';

const ruta = Router();

// ---   Rutas de productos   ---

//Ruta que trae todos los productos
ruta.get('/productos', getProductos);

//Ruta que trae un producto por id
ruta.get('/productos/:id', getProducto);

//Ruta que agrega producto
ruta.post('/productos', agregaProducto);

//Ruta que edita los productos por id 
ruta.put('/productos/:id', actualizaProducto);

//Ruta que elimina un producto
ruta.delete('/productos/:id', deleteProducto);





// ruta.get('/productos', (req, res) => res.send('Obteniendo datos de productos...'));


export default ruta;