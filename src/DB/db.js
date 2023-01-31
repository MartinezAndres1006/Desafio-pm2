import mongoose from "mongoose";
mongoose.set('strictQuery', false)
 export const URL ='mongodb+srv://AndresMartinez:andres10062003@e-commerce.ejqa4yi.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(URL, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("🔥 Conectado a la base de datos de mongo");
    }
  });