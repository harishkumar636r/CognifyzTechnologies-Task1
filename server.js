const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
  res.render("index", { theme: "light" });
});

app.post("/submit", (req, res) => {
  const { username, email, age } = req.body;
  res.render("result", { username, email, age });
});

// Start server
app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
