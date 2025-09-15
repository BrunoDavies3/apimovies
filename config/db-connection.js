import mongoose from "mongoose";

const dbUser = "BrunoDavies";

const dbPassword = "Corinthians10";
const connect = () => {

mongoose.connect(
    
    `mongodb+srv://cluster0.enlxlaz.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority&appName=api-movies `
);

const connection = mongoose.connection;
connection.on("error", () => {

console.log("Erro ao conectar com o mongoDB.");
});
connection.on("open", () => {

console.log("Conectado ao mongoDB com sucesso!");

});
 };
connect();
export default mongoose;