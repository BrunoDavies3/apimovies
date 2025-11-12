// app.js
import express from "express";
import mongoose from "./config/db-connection.js"; // importa a conexão pronta
import Movie from "./models/moviesMODELS.js";
import moviesRoutes from "./routes/moviesROUTES.js";
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", moviesRoutes);

const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Servidor rodando em http://localhost:${port}`);
});
