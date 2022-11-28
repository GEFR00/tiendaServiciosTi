import { conn } from '../db.js'

//Si se realiza una venta disminuye el stock del id_producto entregado
export const disminuyeStock = async (req, res) => {

    const id_producto = req.params.id;

    const [resultado] = await conn.query('SELECT SUM(id_producto) FROM Carrito WHERE id_producto = ?;',
    [id_producto]);

    
    const cantidad = resultado[0].cantidad;

    if(cantidad > 0) {
        const [cantidadUpdate] = await conn.query('UPDATE Inventario SET cantidad = cantidad - ? WHERE id_producto = ?;',
        [cantidad, id_producto]);

        res.json( cantidadUpdate );
    }
    
}

//Si se realiza una venta aumenta la cantidad de ventas realizadas por vendedor segun su id.
export const aumentaVentasDelVendedor = async (req, res) => {
    const id_vendedor = req.params.id;

    const [resultado] = await conn.query('SELECT SUM(id_vendedor) FROM Carrito WHERE id_vendedor = ?;',
    [id_vendedor]);

    
    const cantidad = resultado[0].cantidad;
    console.log(cantidad);

    if(cantidad > 0) {

        const [cantidadUpdate] = await conn.query('UPDATE Ventas SET cantidadVentas = cantidadVentas + ? WHERE id_vendedor = ?;',
        [cantidad, id_vendedor]);

        res.json( cantidadUpdate );
    }
}