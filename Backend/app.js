import express from "express";
import cors from 'cors';
import db from "./database/db.js";
import appRoutes from './routes/routes.js';


const app = express();
app.use(cors());
app.use(express.json());
app.use('/app', appRoutes);


try {
    await db.authenticate();
    console.log('Conexion a DB exitosa');
} catch (error) {
    console.log(`Error de conexion: ${error}`);
}
  

app.listen(8000,() =>{
    console.log("Corriendo en puerto: http://localhost:8000/")
})
