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
if (process.env.NODE_ENV === "production")
  app.use(express.static(path.join(__dirname, "client/build")));

// ------ Routes ------

app.get("/api/hello", (req, res) => {
  res.send("Hello from server !");
});

if (process.env.NODE_ENV === "production")
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build", "index.html"), (err) => {
      if (err) res.status(500).send(err);
    });
  });

// ------ Listen ------

app.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});
