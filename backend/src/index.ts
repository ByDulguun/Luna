import express from "express";
import cors from "cors";
import { connectToDatabase } from "./database/mongoDB";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 5000;

connectToDatabase();

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Сервер ${port} порт дээр ажиллаж байна`);
});
