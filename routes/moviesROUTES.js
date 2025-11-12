import express from 'express';
const moviesRoutes = express.Router();
import moviesCONTROLLERS from '../controllers/moviesCONTROLLERS.js';


moviesRoutes.get("/movies", moviesCONTROLLERS.getAllMovies)
moviesRoutes.post("/movies", moviesCONTROLLERS.createMovie)
moviesRoutes.delete("/movies/:id", moviesCONTROLLERS.deleteMovie)
moviesRoutes.put("/movies/:id", moviesCONTROLLERS.updateMovie)



export default moviesRoutes;
