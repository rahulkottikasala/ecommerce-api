const express = require("express");
const app = express();
const mongoose = require("mongoose");

//mongodb
mongoose
  .connect(
    "mongodb+srv://admin:Finercapt0@cluster0.3htmx.mongodb.net/shop?retryWrites=true&w=majority"
  )
  .then(() => console.log("DBConnection Successfull!"))
  .catch((err) => {
    console.log(err);
  });


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`);
});
