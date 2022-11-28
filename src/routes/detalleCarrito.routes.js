import { Router } from 'express';
import { getProductosCarrito, getVendedorYProductos, totalVentaDelVendedor } from '../controllers/detalleCarrito.controller.js';

const ruta = Router();

//Ruta que trae todos los productos del carrito
ruta.get('/carrito/productos', getProductosCarrito);

//Ruta que trae a los vendedores y productos del carrito
ruta.get('/carrito/vendedor-producto', getVendedorYProductos);

//Ruta que trae el total de una venta por id
ruta.get('/carrito/total-venta/:id', totalVentaDelVendedor);

export default ruta;