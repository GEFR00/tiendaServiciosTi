import { conn } from '../db.js'

// ---   GET   ---
//Lista todos los vendedores de la BD
export const getVendedores = async (req, res) => {

    //Query que lista todos los vendedores
    const [vendedores] = await conn.query('SELECT * FROM Vendedores;');

    //Entrega todos los vendedores en JSON
    res.json( vendedores );
}

//Lista info del vendedor solicitado x id
export const getInfoVendedor = async (req, res) => {
    const id_vendedor = req.params.id;

    //Query que lista info del vendedor
    const [vendedor] = await conn.query('SELECT * FROM Vendedores WHERE id_vendedor = ?;',
    [id_vendedor]);

    //Si vendedor es null entrega mensaje 404
    if(vendedor.length <= 0 ) {
        return res.status(404).json({
            mensaje: 'El producto no existe...'
        })
    }

    //Entrega al vendedor en JSON
    res.json( vendedor );
}

// ---   POST   ---
//Agrega vendedor en la BD
export const agregaVendedor = async (req, res) => {
    const { nombre, apellido, comunaLocal } = req.body;

    //Query que inserta en la BD
    const [resultado] = await conn.query('INSERT INTO Vendedores (nombre, apellido, comuna_local) VALUES (?, ?, ?);', 
    [nombre, apellido, comunaLocal]);

    //Si no fue agregado entrega mensaje 404
    if( resultado.affectedRows <= 0) {
        return res.status(404).json({
            mensaje: "No se pudo ingresar el vendedor."
        })
    }

    //Si se agregó, entrega los datos agregados en JSON. 
    res.send({
        id: resultado.insertId,
        nombre, 
        apellido,
        comunaLocal
    });
}

// ---   PUT   ---
//Actualiza al vendedor dado por id en la BD
export const actualizaVendedor = async (req, res) => {
    const id_vendedor  = req.params.id;
    const { nombre, apellido, comunaLocal } = req.body;

    //Query que actualiza el vendedor por id
    const [resultado] = await conn.query('UPDATE Vendedores SET nombre = ?, apellido = ?, comuna_local = ? WHERE id_vendedor = ?',
    [ nombre, apellido, comunaLocal, id_vendedor ]);

    //Si no fue agregado entrega mensaje 404
    if(resultado.length <= 0 ) {
        return res.status(404).json({
            mensaje: 'Vendedor indicado no existe...'
        })
    }

    //Si se agregó, entrega los datos agregados en JSON. 
    res.send({
        id: id_vendedor,
        nombre,
        apellido,
        comunaLocal
    });
}

// ---   DELETE   ---
//Elimina al vendedor dado por id
export const deleteVendedor = async (req, res) => {
    const id_vendedor = req.params.id;

    //Query que elimina al vendedor por id
    const [vendedor] = await conn.query('DELETE FROM Vendedores WHERE id_vendedor = ?', [id_vendedor]);

    //Si no fue agregado entrega mensaje 404
    if(vendedor.affectedRows <= 0 ) {
        return res.status(404).json({
            mensaje: 'El vendedor no existe...'
        })
    }
    console.log(vendedor)
    //Si el vendedor existe, se elimina y entrega estado de existe sin devolver nada. 
    res.sendStatus(204); 
}