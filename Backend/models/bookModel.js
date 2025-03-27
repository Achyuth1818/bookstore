import mongoose from "mongoose";


const bookSchema = mongoose.Schema(
  {
    title : {
     type :String,
    required : true,
  },
  author :{
  type : String,
  required : true,
  },
  publishYear : {
    type : Number,
    required : true,
  },
},
{
  timestamps: true,
}

);

export const Book = mongoose.model("Cat",bookSchema);



//npm run dev
//tell about all the node dependencies 
//come to models 
//mongosh
//show dbs
//use bookstoreDB
// show collections
//db.cats.find()

//hoppscocth 
//http://localhost:5555/books/67111cc98ae1e10ef130dd27
