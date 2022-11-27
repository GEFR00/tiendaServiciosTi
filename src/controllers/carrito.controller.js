import { conn } from '../db.js'

// ---   GET   ---
//Lista el carrito completo pero solo por id
export const getCarrito = async (req, res) => {
    const [carrito] = await conn.query('SELECT * FROM Carrito;');
    res.json( carrito );
}

//Lista los productos del carrito 
export const getProductosCarrito = async (req, res) => {
    const [carrito] = await conn.query('SELECT nombre, precio FROM Carrito LEFT JOIN Productos ON productos.id_producto = carrito.id_producto;');
    res.json( carrito );
}

//Lista la compra realizada por un vendedor con sus productos 
export const getVendedorYProductos = async (req, res) => {
    const [venta] = await conn.query('SELECT nombre, apellido, id_producto FROM Carrito LEFT JOIN Vendedores ON vendedores.id_vendedor = carrito.id_vendedor;');
    res.json(venta)
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


