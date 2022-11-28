import { Router } from 'express';
import { getCarrito, deleteItemCarrito, agregaEnElCarrito, getInfoCarrito } from '../controllers/carrito.controller.js';

const ruta = Router();

// ---   Rutas de carrito   ---

//Ruta que trae al carrito
ruta.get('/carrito', getCarrito);

//Ruta que trae info del carrito x id
ruta.get('/carrito/:id', getInfoCarrito);

//Ruta que agrega en el carrito
ruta.post('/carrito', agregaEnElCarrito);

//Ruta que elimina producto del carrito por id
ruta.delete('/carrito/:id', deleteItemCarrito);



export default ruta;
