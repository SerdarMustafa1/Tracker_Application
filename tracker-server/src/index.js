const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0-8mmaj.gcp.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(mongoUri, { useNewUrlParser: true, useCreateIndex: true });

mongoose.connection.on("connected", () => {
  console.log("Connected to mongoose");
});

mongoose.connection.on("error", err => {
  console.error("error connecting to mongoose", err);
});

app.get("/", (req, res) => {
  res.send("hi there!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
