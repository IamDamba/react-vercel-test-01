// ------ Dependences ------

require("dotenv").config();

const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;

// ------ Middlewares ------

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "vercel/output")));

// ------ Routes ------

app.get("/api/hello", (req, res) => {
  res.send("Hello from server !");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/vercel/output", "index.html"), (err) => {
    if (err) res.status(400).send(err);
  });
});

// ------ Listen ------

app.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});
