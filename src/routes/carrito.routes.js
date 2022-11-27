import { Router } from 'express';
import { getProductosCarrito, deleteItemCarrito, getVendedorYProductos } from '../controllers/carrito.controller.js';

const ruta = Router();

// ---   Rutas de carrito   ---

//Ruta que trae todos los productos del carrito
ruta.get('/carrito', getProductosCarrito);

//Ruta que trae a los vendedores y productos del carrito
ruta.get('/carrito/vendedor-producto', getVendedorYProductos);

//Ruta que elimina producto del carrito por id
ruta.delete('/carrito/:id', deleteItemCarrito);



export default ruta;
