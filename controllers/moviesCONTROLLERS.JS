import moviesService from "../services/moviesSERVICES.js";

import { ObjectId } from "mongodb";


const getAllMovies = async (req, res) => {

  try {

    const movies = await moviesService.getAll();

    res.status(200).json({ movies: movies }); 

  } catch (error) {

    console.log(error);

    res.status(500).json({ error: "Erro interno do servidor" });

  }

};

const createMovie = async (req, res) => {

  try {

    const { title, year, genre, ticket,image } = req.body;

    await moviesService.Create(title, year, genre, ticket,image);

    res.sendStatus(201);
  } catch (error) {

    console.log(error);

    res.status(500).json({ error: "Erro interno do servidor" });

  }

};
 
const deleteMovie = async (req, res) => {

  try {

    if (ObjectId.isValid(req.params.id)) {

      const id = req.params.id;

      await moviesService.Delete(id);

      res.sendStatus(204); 

    } else {

      
      res.status(400).json({ error: "A ID enviada é inválida" }); 

    }

  } catch (error) {

    res.status(500).json({ error: "Erro interno do servidor." });

  }
 

};

 
const updateMovie = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const { title, year, genre, ticket, image } = req.body;

      const movie = await moviesService.Update(id, title, year, genre, ticket, image);
      res.status(200).json({ movie });
    } else {
      res.status(400).json({ error: "A ID enviada é inválida" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

 
 
export default { getAllMovies, createMovie, deleteMovie, updateMovie };

 