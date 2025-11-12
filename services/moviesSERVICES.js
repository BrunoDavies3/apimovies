import Movie from "../models/moviesMODELS.js";

class movieService {
  async getAll() {
    try {
      const movies = await Movie.find();
      return movies;
    } catch (error) {
      console.log("Erro ao buscar filmes:", error);
      throw error;
    }
  }

  async Create(title, year, genre, ticket, image) {
    try {
      const newMovie = new Movie({
        title,
        year,
        genre,
        ticket,
        image,
      });
      await newMovie.save();
      console.log(`🎬 Filme '${title}' criado com sucesso!`);
      return newMovie;
    } catch (error) {
      console.log("Erro ao criar filme:", error);
      throw error;
    }
  }

  async Delete(id) {
    try {
      await Movie.findByIdAndDelete(id);
      console.log(`🗑️ Filme ${id} deletado com sucesso!`);
    } catch (error) {
      console.log("Erro ao deletar filme:", error);
      throw error;
    }
  }

  async Update(id, title, year, genre, ticket, image) {
    try {
      const movie = await Movie.findByIdAndUpdate(
        id,
        { title, year, genre, ticket, image },
        { new: true }
      );
      console.log(`✏️ Filme ${id} atualizado com sucesso!`);
      return movie;
    } catch (error) {
      console.log("Erro ao atualizar filme:", error);
      throw error;
    }
  }

  async getOne(id) {
    try {
      const movie = await Movie.findById(id);
      return movie;
    } catch (error) {
      console.log("Erro ao buscar filme:", error);
      throw error;
    }
  }
}

export default new movieService();
