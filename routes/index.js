const express = require("express");
const router = express.Router();
const data = require("../data.json");

router.get("/", (req, res) => {
    res.render("index", { projects: data.projects });
});

router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/project/:id", (req, res, next) => {
    const project = data.projects[req.params.id];

    if (!project) {
        return next();
    }

    res.render("project", { project });
});

// Point intentionally to error view for testing purposes
router.get("/500", (req, res) => {
    res.render("500");
});

module.exports = router;
