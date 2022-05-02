const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

//mongodb
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.get('/api/test', (req, res) => {
    console.log("test is successfull"); 
    res.send(200);
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server is running, port:${PORT}`);
});
