import { conn } from '../db.js'

// ---   GET   ---
//Lista todos los proveedores existentes en la BD
export const getProveedores = async (req, res) => {

    //Query que lista todos los proveedores
    const [proveedores] = await conn.query('SELECT * FROM Proveedores');

    //Entrega todos los proveedores en JSON
    res.json( proveedores );
}

//Entrega info del proveedor solicitado x id
export const getInfoProveedor = async (req, res) => {
    const id_proveedor = req.params.id;

    //Query que lista info del proveedor
    const [proveedor] = await conn.query('SELECT * FROM Proveedores WHERE id_proveedor = ?;',
    [id_proveedor]);

    //Si proveedor es null entrega mensaje 404
    if(proveedor.length <= 0 ) {
        return res.status(404).json({
            mensaje: 'El producto no existe...'
        })
    }

    //Entrega al proveedor en JSON
    res.json( proveedor );
}

// ---   POST   ---
//Agrega proveedor en la BD
export const agregaProveedor = async (req, res) => {
    const { nombre, direccion, telefono } = req.body;

    //Query que inserta en la BD
    const [proveedor] = await conn.query('INSERT INTO Proveedores (nombre, direccion, telefono) VALUES (?, ?, ?);', 
    [nombre, direccion, telefono]);

    //Si no fue agregado entrega mensaje 404
    if( proveedor.affectedRows <= 0) {
        return res.status(404).json({
            mensaje: "No se pudo ingresar el proveedor."
        })
    }
    
    //Si se agregó, entrega los datos agregados en JSON. 
    res.send({
        id: proveedor.insertId,
        nombre,
        direccion,
        telefono
    });
}

// ---   PUT   ---
//Actualiza el proveedor dado por id en la BD
export const actualizaProveedor = async (req, res) => {
    const id = req.params.id;
    const { nombre, direccion, telefono } = req.body;

    //Query que actualiza el proveedor por id
    const [resultado] = await conn.query('UPDATE proveedores SET nombre = ?, direccion = ?, telefono = ? WHERE id_proveedor = ?', 
    [ nombre, direccion, telefono, id ]);

    //Si no fue agregado entrega mensaje 404
    if(resultado.length <= 0 ) {
        return res.status(404).json({
            mensaje: 'Proveedor indicado no existe...'
        })
    }

    //Si se agregó, entrega los datos agregados en JSON. 
    res.send({
        id: id,
        nombre,
        direccion,
        telefono
    });
}

// ---   DELETE   ---
//Elimina el proveedor dado por id
export const deleteProveedor = async (req, res) => {
    const id_proveedor = req.params.id;

    //Query que elimina el proveedor por id
    const [proveedor] = await conn.query('DELETE FROM Proveedores WHERE id_proveedor = ?', [id_proveedor]);

    //Si no fue agregado entrega mensaje 404
    if(proveedor.affectedRows <= 0 ) {
        return res.status(404).json({
            mensaje: 'El proveedor no existe...'
        })
    }

    //Si el proveedor existe, se elimina y entrega estado de existe sin devolver nada. 
    res.sendStatus(204); 
}