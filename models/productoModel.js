// importar la conexion a la base de datos
import db from "../database/db.js";
//importamos Sequelize
import { DataTypes } from "sequelize";

const productoModel = db.define('producto',{
    id_producto: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Marca la columna id como clave primaria
        autoIncrement: true, // Si es un campo autoincremental
      },
      nombre_producto: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    descripcion_producto: {type:DataTypes.STRING},
    precio:{type:DataTypes.DOUBLE},
    imagen:{type:DataTypes.STRING},
    id_categoria:{type:DataTypes.SMALLINT},
}, {
    tableName: 'producto', // Especifica el nombre de la tabla en singular
    timestamps: false, 
  });

export default productoModel