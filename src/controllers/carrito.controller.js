import { conn } from '../db.js'

// ---   GET   ---
//Lista el carrito completo pero solo por id
export const getCarrito = async (req, res) => {
    const [carrito] = await conn.query('SELECT * FROM Carrito;');
    res.json( carrito );
}

// ---   DELETE   ---
//Elimina producto del carrito
export const deleteItemCarrito = async (req, res) => {
    const id_carrito = req.params.id;
    const [item] = await conn.query('DELETE FROM Carrito WHERE id_carrito = ?', [id_carrito]);

    if( item.affectedRows <= 0 ) {
        return res.status(404).json({
            message: "El id del carrito no es válido. "
        })
    }

    console.log(item);
    res.sendStatus(204);
}


