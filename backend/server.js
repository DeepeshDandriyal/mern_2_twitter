import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongodb.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

//middlewares

//to parse req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//routes
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  connectMongoDB();
});
