import { conn } from '../db.js'

// ---   GET   ---
//Lista los productos del carrito 
export const getProductosCarrito = async (req, res) => {
    const [carrito] = await conn.query('SELECT nombre, precio FROM Carrito LEFT JOIN Productos ON productos.id_producto = carrito.id_producto;');
    res.json( carrito );
}

//Lista la compra realizada por un vendedor con sus productos sin id 
export const getVendedorYProductos = async (req, res) => {
    const [venta] = await conn.query('SELECT nombre, apellido, id_producto FROM Carrito LEFT JOIN Vendedores ON vendedores.id_vendedor = carrito.id_vendedor;');
    res.json(venta)
}