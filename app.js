import mongoose from './config/db-connection.js'
import express from "express";
import mongoose from "mongoose";
const app = express();

import Movie from "./models/moviesMODELS.js";

import moviesRoutes from "./routes/moviesROUTES.js";


app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/', moviesRoutes);


mongoose.connect("mongodb://127.0.0.1:27017/api-movies");



const port = 4000;
app.listen(port,(error) =>{
    if(error){
        console.log(error);
    }
    console.log(`https://localhost:${port}`);
});