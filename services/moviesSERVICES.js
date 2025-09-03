import Movie from "../models/moviesMODELS.js"



class movieService{
    async getAll() {
        try {
            const movies = await Movie.find()
            return movies
        }catch (error){
            console.log(error);
        }ç
    }

    async Create(title, year, genre, ticket) {
        try {
            const newMovie = new Movie({
                title, year, genre, ticket
            });
            await newMovie.save()
        } catch(error){
            console.log(error);
        }

    }
    
    async Delete(id){
        try {
            await Movie.findByIdAndDelete(id);
            console.log(`Filme: ${id} foi deletado`)
        }catch{error}{
            console.log(error);
        }
    }
    async Update(title, year, genre, ticket){
        try{
            const movie = await Movie.findByIdAndUpdate(id,{
               title, year, genre, ticket
            },
            
        )
            console.log(`Filme: ${id} alterando com sucesso`)
            return movie;
        }catch{error}{
            console.log(error)
        }
    }

    async getOne(id){
        try{
            const movie = await Movie.findOne({_id:id})
            return movie;
        }catch(error){
            console.log(error)
        }
    }

}

export default new movieService();
