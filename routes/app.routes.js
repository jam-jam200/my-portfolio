const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("Home.ejs", {
    title: "Home",
  });
});

router.get("/about", (req, res, next) => {
  res.render("About.ejs", {
    title: "About",
  });
});

router.get("/portfolio", (req, res, next) => {
  res.render("Portfolio.ejs", {
    title: "Portfolio",
  });
});

router.get("/services", (req, res, next) => {
  res.render("Services.ejs", {
    title: "My Services",
  });
});

router.post("/message", (req, res, next) => {
  console.log(req.body);
  res.send(req.body);
});

module.exports = router;
