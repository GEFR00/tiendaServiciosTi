import { Router } from 'express';
import { getVendedores, agregaVendedor, actualizaVendedor, deleteVendedor } from '../controllers/vendedores.controller.js';

const ruta = Router();

// ---   Rutas de vendedores   ---

//Ruta que trae todos los vendedores
ruta.get('/vendedores', getVendedores);

//Ruta que agrega vendedor en la bd
ruta.post('/vendedores', agregaVendedor);

//Ruta que edita al vendedor por id 
ruta.put('/vendedores/:id', actualizaVendedor);

//Ruta que elimina vendedor por id
ruta.delete('/vendedores/:id', deleteVendedor);

export default ruta;
