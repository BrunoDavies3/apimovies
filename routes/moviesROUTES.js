import express from 'express';
const moviesRoutes = express.Router();
import movieController from "../controllers/moviesCONTROLLER.js";


moviesRoutes.get("/movies", movieController.getAllMovies)
moviesRoutes.post("/movies", movieController.createMovie)
moviesRoutes.delete("/movies/:id", movieController.deleteMovie)
moviesRoutes.put("/movies/:id", movieController.updateMovie)



export default moviesRoutes;
