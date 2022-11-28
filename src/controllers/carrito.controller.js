import { conn } from '../db.js'

// ---   GET   ---
//Lista el carrito completo pero solo por id
export const getCarrito = async (req, res) => {
    const [carrito] = await conn.query('SELECT * FROM Carrito;');
    res.json( carrito );
}

// ---   POST   ---
//Agrega vendedor y producto en la BD
export const agregaEnElCarrito = async (req, res) => {
    const { id_vendedor, id_producto } = req.body;

    //Query que inserta en la BD
    const [resultado] = await conn.query('INSERT INTO CARRITO (id_vendedor, id_producto) VALUES (?, ?);', 
    [id_vendedor, id_producto]);

    //Si no fue agregado entrega mensaje 404
    if( resultado.affectedRows <= 0) {
        return res.status(404).json({
            mensaje: "No se pudo ingresar al carrito."
        })
    }

    //Si se agregó, entrega los datos agregados en JSON. 
    res.send({
        id: resultado.insertId,
        id_vendedor,
        id_producto
    });
}

// ---   DELETE   ---
//Elimina el carrito
export const deleteItemCarrito = async (req, res) => {
    const id_carrito = req.params.id;

    //Query que elimina la categoria por id
    const [item] = await conn.query('DELETE FROM Carrito WHERE id_carrito = ?', [id_carrito]);

    //Si no fue agregado entrega mensaje 404
    if( item.affectedRows <= 0 ) {
        return res.status(404).json({
            message: "El id del carrito no es válido. "
        })
    }
    
    //Si el carrito existe, se elimina y entrega estado de existe sin devolver nada. 
    console.log(item);
    res.sendStatus(204);
}


