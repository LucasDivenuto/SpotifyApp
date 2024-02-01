import db from "../database/db.js";
import {  DataTypes } from "sequelize";



const model =  db.define('solicitudesartistas',{
    IPUsuario: {type: DataTypes.NUMBER},
    fechaSolicitud: {type: DataTypes.STRING},
    nombreArtista: {type: DataTypes.STRING},
    
}, {
    timestamps: false // Para que no genere las columnas createdAt, updateAt. La fecha la traigo del front
})

export default model