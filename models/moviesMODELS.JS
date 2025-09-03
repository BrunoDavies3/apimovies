import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: String,
    platform: String,
    genre: String,
    year: Number,
    price: Number
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;