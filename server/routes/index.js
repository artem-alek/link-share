// Require your controllers here
const UserController = require('../controllers/user');

module.exports = (app) => {
  // Add your routes here
    app.post('/users', UserController.register);
    app.post('/login', UserController.login);
};
