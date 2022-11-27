import { Router } from 'express';
import { getCarrito, deleteItemCarrito } from '../controllers/carrito.controller.js';

const ruta = Router();

// ---   Rutas de carrito   ---

//Ruta que trae al carrito
ruta.get('/carrito', getCarrito);


//Ruta que elimina producto del carrito por id
ruta.delete('/carrito/:id', deleteItemCarrito);



export default ruta;
