import { conn } from '../db.js'

// ---   GET   ---
//Lista el carrito completo pero solo por id
export const getCarrito = async (req, res) => {

    //Query que lista todos del carrito
    const [carrito] = await conn.query('SELECT * FROM Carrito;');

    //Entrega todos del carrito en JSON
    res.json( carrito );
}

//Lista el producto y precio del carro por id
export const getProdYPrecioCarrito = async (req, res) => {
    const id_carrito = req.params.id;

    //Query que lista producto y nombre del carrito por id
    const [carrito] = await conn.query('SELECT nombre, precio FROM Carrito LEFT JOIN Productos ON productos.id_producto = carrito.id_producto WHERE id_carrito = ?',
    [id_carrito]);

    //Si carrito es null entrega mensaje 404
    if(carrito.length <= 0 ) {
        return res.status(404).json({
            mensaje: 'El carrito no existe...'
        })
    }

    //Entrega producto y nombre del carrito en JSON
    res.json( carrito );
}

//Lista info del carrito solicitado x id
export const getInfoCarrito = async (req, res) => {
    const id_carrito = req.params.id;

    //Query que lista info del carrito
    const [carrito] = await conn.query('SELECT * FROM Carrito WHERE id_carrito = ?;',
    [id_carrito]);

    //Si carrito es null entrega mensaje 404
    if(carrito.length <= 0 ) {
        return res.status(404).json({
            mensaje: 'El producto no existe...'
        })
    }

    //Entrega al carrito en JSON
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


