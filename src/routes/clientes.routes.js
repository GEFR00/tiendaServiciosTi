import { Router } from 'express';
import { getClientes } from '../controllers/clientes.controllers.js';
const ruta = Router(); 

// ---   Rutas de clientes   ---

//Ruta que trae todos los clientes
ruta.get('/clientes', getClientes);

export default ruta;