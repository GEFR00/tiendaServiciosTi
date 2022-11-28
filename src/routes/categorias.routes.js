import { Router } from 'express';
import { getCategorias, agregaCategoria, actualizaCategoria, deleteCategoria, getInfoCategoria } from '../controllers/categorias.controller.js';
 
const ruta = Router();

// ---   Rutas de categorias   ---

//Ruta que trae todas las categorias
ruta.get('/categorias', getCategorias);

//Ruta que trae info de la categoria x id
ruta.get('/categorias/:id', getInfoCategoria);

//Ruta que agrega categoria en la bd
ruta.post('/categorias', agregaCategoria);

//Ruta que edita a los proveedores por id 
ruta.put('/categorias/:id', actualizaCategoria);

//Ruta que elimina categoria por id
ruta.delete('/categorias/:id', deleteCategoria);


export default ruta;
