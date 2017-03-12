// Require your controllers here


module.exports = (app) => {
  // Add your routes here
    app.post('/users', UserController.register);
};
