import { Router } from 'express';
import { getProductosCarrito, getVendedorYProductos } from '../controllers/detalleCarrito.controller.js';

const ruta = Router();

//Ruta que trae todos los productos del carrito
ruta.get('/carrito', getProductosCarrito);

//Ruta que trae a los vendedores y productos del carrito
ruta.get('/carrito/vendedor-producto', getVendedorYProductos);

export default ruta;