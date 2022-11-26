import { Router } from 'express';
import { getProveedores, deleteProveedor, agregaProveedor, actualizaProveedor } from '../controllers/proveedores.controller.js';

const ruta = Router();

// ---   Rutas de proveedores   ---

//Ruta que trae todos los proveedores
ruta.get('/proveedores', getProveedores);

//Ruta que agrega proveedor en la bd
ruta.post('/proveedores', agregaProveedor);

//Ruta que edita a los proveedores por id 
ruta.put('/proveedores/:id', actualizaProveedor);


//Ruta que elimina proveedor por id
ruta.delete('/proveedores/:id', deleteProveedor);



export default ruta;
