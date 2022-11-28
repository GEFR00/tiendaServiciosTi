import { Router } from 'express';
import { getProductosCarrito, getVendedorYProductos, totalVentaDelVendedor, getDetalleCarrito } from '../controllers/detalleCarrito.controller.js';

const ruta = Router();

//Ruta que trae todos los productos del carrito
ruta.get('/detalle/producto', getProductosCarrito);

//Ruta que trae info del carrito solicitado x id del vendedor
ruta.get('/detalle/info/:id', getDetalleCarrito);

//Ruta que trae a los vendedores y productos del carrito
ruta.get('/detalle/vendedor-producto', getVendedorYProductos);

//Ruta que trae el total de una venta por id
ruta.get('/detalle/total-venta/:id', totalVentaDelVendedor);

export default ruta;