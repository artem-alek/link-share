// Require your controllers here
const Linkshare = require('../controllers/Linkshare');

module.exports = (app) => {
  // Add your routes here
    app.post('/users', Linkshare.create())
};
