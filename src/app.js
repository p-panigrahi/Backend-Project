// Create Express
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    option: process.env.CORS_ORIGEN,
    Credential: true,
  })
);
// Configration  allways Starts With app.use(......)
app.use(express.json({ limit: "16kb" })); // This Json Configration because user send JSON data in body or other formate
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // Url Configration to catch Url data
app.use(express.static("public")); // Statix Configration to Catch file , pdf , png etc...

app.use(cookieParser()) // Cookies Configration 
export { app };
