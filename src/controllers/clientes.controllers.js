import { conn } from '../db.js'

// ---   GET   ---
//Lista todas los clientes de la BD
export const getClientes = async (req, res) => {

    //Query que lista todos los proveedores
    const [categorias] = await conn.query('SELECT * FROM categorias;');

    //Entrega todos los proveedores en JSON
    res.json( categorias );
}