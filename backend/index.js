const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const SignUp = require("./router/auth/signUp");
const mongoose= require("mongoose");
const SignIn = require("./router/auth/signIn");
const cors = require("cors");
const crop = require("./router/user-panel/crop")


mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log("Database Connection Established!");
  })
  .catch((err) => {
    console.log(`Error in connecting Database : ${err}`);
  });
  app.use(cors());
app.use(SignUp);
app.use(SignIn);
app.get("/", (req, res) => {
  res.send("Welcome to farmer Solutions");
});
app.use(crop)
app.listen(PORT, () => {
  console.log(`Server has been started at PORT : ${PORT}`);
});
