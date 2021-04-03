const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hey there");
});

const port = process.env.port || 3200;
app.listen(port, () => {
  console.log(`Server is running at port ${3200}`);
});
