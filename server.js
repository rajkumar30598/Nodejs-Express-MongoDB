const express = require("express");
const app = express();
const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/sampleDB";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("NodeJs app working Fine...");
});

const usersRouter = require("./routes/user");
app.use("/user", usersRouter);

app.listen(3000, () => console.log("Server Started"));

