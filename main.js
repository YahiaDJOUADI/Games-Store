const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/usersRoute");
const productsRoute = require("./routes/productsRoute");

const app = express();

app.use("/public", express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(userRoute);
app.use(productsRoute);

mongoose.connect("mongodb://127.0.0.1:27017/games");

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
