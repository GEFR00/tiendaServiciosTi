import { conn } from '../db.js'

// ---   GET   ---
//Lista todas los clientes de la BD
export const getClientes = async (req, res) => {

    //Query que lista todos los proveedores
    const [clientes] = await conn.query('SELECT * FROM clientes;');

    //Entrega todos los proveedores en JSON
    res.json( clientes );
}

// ---   POST   ---
//Agrega categoria en la BD
export const agregaCliente = async (req, res) => {
    const { nombre, apellido } = req.body;

    //Query que inserta en la BD
    const [resultado] = await conn.query('INSERT INTO Clientes (nombre, apellido) VALUES (?, ?);', 
    [nombre, apellido]);

    //Si no fue agregado entrega mensaje 404
    if( resultado.affectedRows <= 0) {
        return res.status(404).json({
            mensaje: "No se pudo ingresar el cliente."
        })
    }

    //Si se agregó, entrega los datos agregados en JSON. 
    res.send({
        id: resultado.insertId,
        nombre,
        apellido
    });
}

// ---   PUT   ---
//Actualiza al cliente dado por id en la BD
export const actualizaCliente = async (req, res) => {
    const id_cliente  = req.params.id;
    const { nombre, apellido } = req.body;

    //Query que actualiza al cliente por id
    const [resultado] = await conn.query('UPDATE Clientes SET nombre = ?, apellido = ? WHERE id_cliente = ?;',
    [ nombre, apellido, id_cliente ]);

    //Si no fue agregado entrega mensaje 404
    if(resultado.length <= 0 ) {
        return res.status(404).json({
            mensaje: 'Cliente indicado no existe...'
        })
    }

    //Si se agregó, entrega los datos agregados en JSON. 
    res.send({
        id: id_cliente,
        nombre,
        apellido
    });
}

// ---   DELETE   ---
//Elimina al cliente dado por id
export const eliminaCliente = async (req, res) => {
    const id_cliente = req.params.id;

    //Query que elimina al cliente por id
    const [cliente] = await conn.query('DELETE FROM Clientes WHERE id_cliente = ?', [id_cliente]);

    //Si no fue agregado entrega mensaje 404
    if(cliente.affectedRows <= 0 ) {
        return res.status(404).json({
            mensaje: 'El cliente no existe...'
        })
    }
    console.log(cliente)
    //Si el cliente existe, se elimina y entrega estado de existe sin devolver nada. 
    res.sendStatus(204); 
}