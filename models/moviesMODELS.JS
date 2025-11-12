import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: String, 
    year: Number, 
    genre: String, 
    ticket: Number,
    image: String
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;