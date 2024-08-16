const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let port = 8080;

app.listen(port, () => {
  console.log(`server is listening to port: ${port}`);
});


app.get("/register", (req, res) => {
  let { user, password } = req.query;
  console.log("okay, GET");
  res.send(`Standard GET response, Welcom ${user}`);
});

app.post("/register", (req, res) => {
  let { user, password } = req.body;
  console.log("okay,POST");
  res.send(`Standard POST response, Welcome ${user}`);
});
