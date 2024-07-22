// Note - That is the Profesonal Way to Connect Data Base 
// Note - When You are Connect to The Data Base then You can Use Some Point Like 
        . Always Wapp inside Try and Catch 
        . And Use Async and Await fn 

import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_Name}`
    );
    console.log(
      `\n MongoDB Connected !! DB HOST : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("ERROE in DB Connection So Check index_DB Code ", error);
    process.exit(1);
  }
};
export default connectDB;
