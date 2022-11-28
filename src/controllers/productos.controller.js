import { conn } from '../db.js'

// ---   GET   ---
//Lista todos los productos de la BD
export const getProductos = async (req, res) => {

    //Query que lista todos los productos
    const [productos] = await conn.query('SELECT * FROM productos;');

    //Entrega todos los productos en JSON
    res.json( productos );
}

//Muestra el producto solicitado
export const getProducto = async (req, res) => {
    // res.send('obteniendo empleado...')
    const id_producto = req.params.id;
    const [producto] = await conn.query('SELECT * FROM productos WHERE id_producto = ?', [ id_producto ]);

    //Si producto es null entrega mensaje 404
    if(producto.length <= 0 ) {
        return res.status(404).json({
            mensaje: 'El producto no existe...'
        })
    }

    //Si el producto existe en BD lo entrega. 
    res.json( producto );

}

// ---   POST   ---   
//Agrega productos en la BD
export const agregaProducto = async (req, res) => {
    const { nombre, precio, proveedor, categoria } = req.body;

    //Query que inserta en la BD
    const [producto] = await conn.query('INSERT INTO productos (nombre, precio, id_proveedor, id_categoria) VALUES (?, ?, ?, ?);',
    [ nombre, precio, proveedor, categoria ]);
    
    //Si no fue agregado entrega mensaje 404
    if( producto.affectedRows <= 0) {
        return res.status(404).json({
            mensaje: "No se pudo ingresar el producto."
        })
    }

    //Si se agregó, entrega los datos agregados en JSON. 
    res.send({
        id: producto.insertId,
        nombre,
        precio,
        proveedor,
        categoria
    });
}

// ---   PUT   ---
//Actualiza el producto dado por id en la BD
export const actualizaProducto = async (req, res) => {
    const id_producto  = req.params.id;
    const { nombre, precio, proveedor, categoria } = req.body;

    //Query que actualiza el producto por id
    const [resultado] = await conn.query('UPDATE Productos SET nombre = ?, precio = ?, id_proveedor = ?, id_categoria = ?  WHERE id_producto = ?',
    [ nombre, precio, proveedor, categoria, id_producto ]);

    //Si no fue agregado entrega mensaje 404
    if(resultado.length <= 0 ) {
        return res.status(404).json({
            mensaje: 'Categoria indicada no existe...'
        })
    }

    //Si se agregó, entrega los datos agregados en JSON. 
    res.send({
        id: id_producto,
        nombre,
        precio,
        proveedor, 
        categoria
    });
}

// ---   DELETE   ---
//Elimina un producto de la BD
export const deleteProducto = async (req, res) => {
    const id_producto = req.params.id;
    const [resultado] = await conn.query('DELETE FROM productos WHERE id_producto = ?;', [id_producto]);
    
    //Si producto no existe entrega mensaje
    if( resultado.affectedRows <= 0) {
        return res.status(404).json({
            mensaje: 'El producto no existe...'
        })
    }

    //Si el producto existe, se elimina y entrega estado de existe sin devolver nada. 
    res.sendStatus(204); 
}

