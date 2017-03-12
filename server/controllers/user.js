const User = require('../models').Users;
const bcrypt = require("bcryptjs");

module.exports = {
    register (req, res) {
        let salt = bcrypt.genSaltSync(10);
        let hashedPass = bcrypt.hashSync(req.body.password, salt);
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
            salt: salt
        })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error));
    }
};