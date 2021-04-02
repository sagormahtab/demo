const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hey there");
});

app.listen(3200, () => {
  console.log("Server is running at port 3200");
});
