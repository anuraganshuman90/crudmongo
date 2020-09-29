const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const app = express();
const cors = require("cors");
const { DB_CONNECT } = require("./key");

//middleware
app.use(cors());
app.use(express.json());

//import routes
const postroute = require("./router/posts");
app.use("/", postroute);

//connection
mongoose.connect(
  DB_CONNECT,
  { useNewUrlParser: true },

  () => {
    console.log("db connected");
  }
);

//middlewares

//listening to server
app.listen(3000, () => console.log("server running"));
