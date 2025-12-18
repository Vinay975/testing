import express from "express";
import add from "./server.js"

const app = express();

app.get("/", (req, res) => {
  res.send("Import is working!");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
  console.log(add(2,3));
});
