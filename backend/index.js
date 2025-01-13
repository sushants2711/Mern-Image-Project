import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDb } from "./config/db.js";
import authrouter from "./routers/auth.route.js";

// dotenv configuration 
dotenv.config();

// app initialize
const app = express();

// connection between frontend and backend 
app.use(cors());

// port initialize
const PORT = process.env.PORT || 5000;

// database calling for connection 
connectDb()

// cloudinary connected


// json data parse 
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

// cookies calling for authorization
app.use(cookieParser())

// api end points 
app.use("/api/auth", authrouter)

// server started 
app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
})