import { Router } from 'express';
import { getClientes, agregaCliente, actualizaCliente, eliminaCliente } from '../controllers/clientes.controllers.js';
const ruta = Router(); 

// ---   Rutas de clientes   ---

//Ruta que trae todos los clientes
ruta.get('/clientes', getClientes);

//Ruta que agrega clientes en la BD
ruta.post('/clientes', agregaCliente);

//Ruta que actualiza al cliente por id
ruta.put('/clientes/:id', actualizaCliente);

//Ruta que elimina al cliente por id
ruta.delete('/clientes/:id', eliminaCliente);

export default ruta;