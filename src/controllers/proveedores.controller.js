import { conn } from '../db.js'

// ---   GET   ---
//Lista todos los proveedores existentes en la BD
export const getProveedores = async (req, res) => {

    const [proveedores] = await conn.query('SELECT * FROM Proveedores');
    res.json( proveedores );
}

// ---   POST   ---
//Agrega proveedor en la BD
export const agregaProveedor = async (req, res) => {
    const { nombre, direccion, telefono } = req.body;

    const [proveedor] = await conn.query('INSERT INTO Proveedores (nombre, direccion, telefono) VALUES (?, ?, ?);', 
    [nombre, direccion, telefono]);

    if( proveedor.affectedRows <= 0) {
        return res.status(404).json({
            mensaje: "No se pudo ingresar el proveedor."
        })
    }
    
    res.send({
        id: proveedor.insertId,
        nombre,
        direccion,
        telefono
    });
}

export const actualizaProveedor = async (req, res) => {
    const { id_proveedor } = req.params.id;
    const { nombre, direccion, telefono } = req.body;

    const [resultado] = await conn.query('UPDATE proveedores SET nombre = ?, direccion = ?, telefono = ? WHERE id_proveedor = ?', 
    [ nombre, direccion, telefono, id_proveedor ]);

    console.log( resultado );
    res.json('Recibido...')
}

// ---   DELETE   ---
export const deleteProveedor = async (req, res) => {
    const id_proveedor = req.params.id;
    const [proveedor] = await conn.query('DELETE FROM Proveedores WHERE id_proveedor = ?', [id_proveedor]);

    if(proveedor.length <= 0 ) {
        return res.status(404).json({
            mensaje: 'El proveedor no existe...'
        })
    }

    //Si el proveedor existe, se elimina y entrega estado de existe sin devolver nada. 
    res.sendStatus(204); 
}