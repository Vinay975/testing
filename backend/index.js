import express from "express";
import mongoose from "mongoose";
import  router from './routes/dataroute.js';
import cros from 'cors'


const app = express();

app.use(express.json());
app.use(cros())



app.get("/", (req, res) => {
  res.send("Import is working!");
});

app.use('/api/user',router)

mongoose.connect("mongodb://127.0.0.1:27017/redPractice")
  .then(() => {
    console.log("MongoDB Connected Successfully");

    app.listen(3000, () => {
      console.log("Server running on http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
