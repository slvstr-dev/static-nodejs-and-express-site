const express = require("express");
const app = new express();
const path = require("path");
const favicon = require("serve-favicon");
const routes = require("./routes/index");
const port = 3000;

// Set view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Set favicon directory
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// Set static assets directory
app.use("/static", express.static(path.join(__dirname, "public")));

// Route requests
app.use("/", routes);

// Handle page not found errors
app.use((req, res) => {
    const err = new Error();
    err.status = 404;
    err.message = "Seems like this page doesn't exist (anymore)...";

    console.log(err);
    res.status(404);
    res.render("page-not-found", {
        status: err.status,
        message: err.message,
    });
});

// Handle remaining errors
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500);
    res.render("error", {
        status: err.status || 500,
        message:
            "Something went wrong on our side. Please let us know or try again later!",
    });
});

// Run server
app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}.`);
});
