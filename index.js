const express = require("express");
const cors = require("cors");
const path = require("path");
const homeRoute = require("./routes/app.routes");

const app = express();

const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", homeRoute);

app.use("/", express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
