const path = require("path");
const express = require("express");
const app = new express();
const port = 3000;
const data = require("./data.json");

app.use("/static", express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index", { projects: data.projects });
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/project/:id", (req, res) => {
    res.render("project", { project: data.projects[req.params.id] });
});

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}.`);
});
