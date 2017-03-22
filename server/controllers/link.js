const Link = require('../models').Links;

module.exports = {
    createPost(req, res) {
        console.log('this is the user:', req.user);
        Link.create({
            title: req.body.title,
            body: req.body.body,
            users_id: req.user.id
        })
            .then(post => res.status(201).send(post))
            .catch(error => res.status(400).send(error));
    },

    getLinks(req, res) {
      Link.findAll()
      .then(post => res.status(201).send(post))
      .catch(error => res.status(400).send(error));
    }
}
