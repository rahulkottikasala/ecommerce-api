const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config({path: "./vars/.env"});
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");



//mongodb
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection Successfull!")) 
  .catch((err) => {
    console.log(err);
  });
  
app.use(express.json());

//Router
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server is running, port:${PORT}`);
});
