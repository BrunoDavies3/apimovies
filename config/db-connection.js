// config/db-connection.js
import mongoose from "mongoose";

const dbUser = "BrunoDavies";
const dbPassword = "Corinthians10";

// ⚠️ Atenção: nunca deixe credenciais reais em código público! (use variáveis de ambiente)
const uri = `mongodb+srv://BrunoDavies:Corinthians10@cluster0.enlxlaz.mongodb.net/api-movies?appName=Cluster0`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("❌ Erro ao conectar com o MongoDB.");
});

connection.once("open", () => {
  console.log("✅ Conectado ao MongoDB com sucesso!");
});

export default mongoose;
