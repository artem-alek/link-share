const Link = require('../models').Links;
const bcrypt = require("bcryptjs");
const jwt = require("jwt-simple");
const appSecrets = require("../config/secrets");

module.exports = {
    createPost(req, res) {
        console.log('this is the user:', req.user);
        Links.create({
            title: req.body.title,
            body: req.body.body,
            users_id: user.id
        })
            .then(post => res.status(201).send(post))
            .catch(error => res.status(400).send(error));
    }
}