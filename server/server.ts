import express from "express";
//import bodyParser from 'body-parser';
//import cookieParser from 'cookie-parser';
//import compression from 'compression';
import cors from "cors";
//import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";
//import router from './router';

const port = 8000;
const app = express();
const options: cors.CorsOptions = {
  credentials: true,
};

app.use(cors(options));
app.use(express.json());

//app.use(compression());
//app.use(cookieParser());
//app.use(bodyParser.json());

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));

const uri =
  "mongodb+srv://maxzhao98:Abbystar1!@nightingale.cbqqsyd.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = Promise;
mongoose.connect(uri);
mongoose.connection.on("connected", () => {
  console.log("Connected to the database!");
});
mongoose.connection.on("error", (error: Error) => console.log(error));
