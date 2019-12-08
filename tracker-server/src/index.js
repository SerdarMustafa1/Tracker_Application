require("./models/user");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const requireAuth = require("./middlewares/requireAuth");

require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

// const mongoUri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0-8mmaj.gcp.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongoose");
});

mongoose.connection.on("error", err => {
  console.error("error connecting to mongoose", err);
});

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
