// Require your controllers here
const middleware = require("../middleware");
const UserController = require('../controllers/user');
const LinkController = require('../controllers/link');
const CommentController = require('../controllers/comment');

module.exports = (app) => {
  // Add your routes here
    app.post('/users', UserController.register);
    app.post('/login', UserController.login);
    app.get('/users', UserController.getUsers);

    app.post('/createlink', middleware.authenticate, LinkController.createPost);

    app.post('/comment/:linkid', middleware.authenticate, CommentController.createComment)
};
