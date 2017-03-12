// Require your controllers here
const middleware = require("../middleware");
const UserController = require('../controllers/user');
const LinkController = require('../controllers/link');

module.exports = (app) => {
  // Add your routes here
    app.post('/users', UserController.register);
    app.post('/login', UserController.login);

    app.post('/createlink', middleware.authenticate, LinkController.createPost);
};
