import { conn } from '../db.js'

// ---   GET   ---
//Lista todas las categorias de la BD
export const getCategorias = async (req, res) => {

    //Query que lista todos los proveedores
    const [categorias] = await conn.query('SELECT * FROM categorias;');

    //Entrega todos los proveedores en JSON
    res.json( categorias );
}

// ---   POST   ---
//Agrega categoria en la BD
export const agregaCategoria = async (req, res) => {
    const { categoria } = req.body;

    //Query que inserta en la BD
    const [resultado] = await conn.query('INSERT INTO Categorias (categoria) VALUES (?);', 
    [categoria]);

    //Si no fue agregado entrega mensaje 404
    if( resultado.affectedRows <= 0) {
        return res.status(404).json({
            mensaje: "No se pudo ingresar el proveedor."
        })
    }

    //Si se agregó, entrega los datos agregados en JSON. 
    res.send({
        id: resultado.insertId,
        categoria
    });
}

// ---   PUT   ---
//Actualiza la categoria dado por id en la BD
export const actualizaCategoria = async (req, res) => {
    const id_categoria  = req.params.id;
    const { categoria } = req.body;

    //Query que actualiza la categoria por id
    const [resultado] = await conn.query('UPDATE Categorias SET categoria = ? WHERE id_categoria = ?',
    [ categoria, id_categoria ]);

    //Si no fue agregado entrega mensaje 404
    if(resultado.length <= 0 ) {
        return res.status(404).json({
            mensaje: 'Categoria indicada no existe...'
        })
    }

    //Si se agregó, entrega los datos agregados en JSON. 
    res.send({
        id: id_categoria,
        categoria
    });
}

// ---   DELETE   ---
//Elimina la categoría dada por id
export const deleteCategoria = async (req, res) => {
    const id_categoria = req.params.id;

    //Query que elimina la categoria por id
    const [categoria] = await conn.query('DELETE FROM Categorias WHERE id_categoria = ?', [id_categoria]);

    //Si no fue agregado entrega mensaje 404
    if(categoria.affectedRows <= 0 ) {
        return res.status(404).json({
            mensaje: 'La categoria no existe...'
        })
    }
    console.log(categoria)
    //Si la categoria existe, se elimina y entrega estado de existe sin devolver nada. 
    res.sendStatus(204); 
}