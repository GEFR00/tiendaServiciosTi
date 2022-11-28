import { Router } from 'express';
import { aumentaVentasDelVendedor,disminuyeStock } from '../controllers/ventas.controller.js';

const ruta = Router();

//Ruta que recibe id producto para descontar stock cuando se ingresa al carrito
ruta.put('ventas/productos/:id', disminuyeStock)

//Ruta que recibe id vendedor para aumentar su cantidad de ventas mediante el carrito
ruta.put('/ventas/:id', aumentaVentasDelVendedor);

export default ruta;
