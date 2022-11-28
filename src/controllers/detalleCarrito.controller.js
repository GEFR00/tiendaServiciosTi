import { conn } from '../db.js'

// ---   GET   ---
//Lista los productos del carrito 
export const getProductosCarrito = async (req, res) => {
    const [carrito] = await conn.query('SELECT nombre, precio FROM Carrito LEFT JOIN Productos ON productos.id_producto = carrito.id_producto;');
    res.json( carrito );
}

//Lista info del carrito x id del vendedor
export const getDetalleCarrito = async (req, res) => {
    const id_vendedor = req.params.id;

    //Query que lista info del vendedor
    const [carrito] = await conn.query('SELECT * FROM Carrito LEFT JOIN Productos ON productos.id_producto = carrito.id_producto WHERE id_vendedor = ?; ',
    [id_vendedor]);

    //Si carrito es null entrega mensaje 404
    if(carrito.length <= 0 ) {
        return res.status(404).json({
            mensaje: 'El carrit no existe...'
        })
    }

    //Entrega al carrito en JSON
    res.json( carrito );
}

//Lista la compra realizada por un vendedor con sus productos sin id 
export const getVendedorYProductos = async (req, res) => {
    const [venta] = await conn.query('SELECT nombre, apellido, id_producto FROM Carrito LEFT JOIN Vendedores ON vendedores.id_vendedor = carrito.id_vendedor;');
    res.json(venta)
}

//Entrega el total de la venta del vendedor dado x id
export const totalVentaDelVendedor = async (req, res) => {
    const id_vendedor = req.params.id; 
    
    const [precio] = await conn.query('SELECT SUM(precio) FROM CARRITO LEFT JOIN Productos ON productos.id_producto = carrito.id_producto WHERE id_vendedor = ?',
    [id_vendedor]);
    
    res.send(
        precio
    )
}