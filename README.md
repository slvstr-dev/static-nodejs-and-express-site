# Static NodeJS and Express site

Sixt project of the Team Treehouse Full Stack JavaScript Techdegree.

## General

An portfolio Express-app that dynamically builds and serves Pug views of my projects.

### Routes, Views & Error Handling

The following routes will render partial content into the `layout.pug`:

-   `/` renders `index.pug`.
-   `/about` renders `about.pug`.
-   `/project/:id` renders `project.pug`.
-   `/noroute` is a undefined route and will render `page-not-found.pug` as a fallback for all undefined routes.
-   `/500` is a route without a view for testing purposes and will render `error.pug` as a fallback for all errors other than undefined routes.

### Dependencies

`Express: ^4.17.1` `Pug: ^3.0.2` `serve-favicon:^2.5.0`

This app making use of [Express](https://www.npmjs.com/package/express) for the backend and [Pug](https://www.npmjs.com/package/pug) to dynamically build the views.

[Serve Favicon](https://www.npmjs.com/package/serve-favicon) is installed to set a favicon and avoid console errors in some browsers that check if one exists.

### DevDependencies

`nodemon: ^2.0.7`

For easier development [nodemon](https://www.npmjs.com/package/nodemon) has been added as a dev dependency. Run `npm start` to start the app while nodemon will restart the script when it detects any changes in the directory.

### Customized Styling

-   Changed all colors to a new flat color palette.
-   Replaced background colors with a subtile gradient.
-   Implemented my favorite font (Nunito).
-   Added a box shadow (incl. hover animation) on all project images.
-   Added a custom logo as favicon.
