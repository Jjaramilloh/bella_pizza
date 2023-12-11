//importar el modelo
import productoModel from "../models/productoModel.js"

// Metodos para el CRUD

//Mostrar todos los registros
export const getAllProductos = async (req,res)=>{
    try {
        const producto = await productoModel.findAll()
        res.json(producto)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Mostrar un  registro
export const getProducto = async ( req, res)=>{
    try {
        const producto = await productoModel.findAll({
            where:{id_producto:req.params.id}
        })
        res.json(producto[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

//crear un registro
export const createProducto = async (req,res)=>{
    try {
        await productoModel.create(req.body)
        res.json({
            "message":"!Resgistro Creado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
// actualizar un registro
export const updateProducto = async (req, res)=>{
    try {
        productoModel.update(req.body,{
            where: {id_producto:req.params.id}
        })
        res.json({
            "message":"!Resgistro actualizado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
//Eliminar un registro

export const deleteProducto = async(req,res)=>{
    try {
        await productoModel.destroy({
            where: {id_productoid:req.params.id}
        })
        res.json({
            "message":"!Resgistro Eliminado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}