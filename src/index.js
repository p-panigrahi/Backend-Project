import connectDB from "./db/index_DB.js";
import dotenv from "dotenv";
dotenv.config({ path: "./env" });
connectDB();

// import express from "express";

// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`);
//     console.log("DB IS CONNECTED ");
//     app.on("error", (err) => {
//       console.log("Error ", err);
//       throw err;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`You Sercer is Running on Port Number ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("ERROR IN DB Connection ", error);
//     throw error;
//   }
// })();
