import express from "express";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
  res.send("Import is working!");
});

mongoose.connect("mongodb://localhost:27017/")
.then(()=> {
  console.log("Connect Succesful");
})
.catch((err) => {
  console.log("Error"+err)
})

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
  console.log(add(2,3));
});
