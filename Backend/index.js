import express from "express";
import mongoose from "mongoose";
import {PORT,URI} from "./config.js";
import booksRoute from './Routes/booksRoute.js';
import cors from "cors";

const app = express();

//we have to use the middlewares for parshing the data else it willl throw undefined error

app.use(express.json());

//allows all origins 
app.use(cors());
//cross origin resourse sharing
//allows only specific origins

// }));

mongoose.connect(URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
})
  .then(() => console.log('DB connection established'))
  .catch((err) => {
    console.error('Error connecting to DB:', err);
    process.exit(1);
  });
  app.use('/books', booksRoute);

app.listen(PORT,()=>{

console.log(`listening on port ${PORT}`);

});