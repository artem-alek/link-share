const User = require('../models').Users;
const bcrypt = require("bcryptjs");
const jwt = require("jwt-simple");
const appSecrets = require("../config/secrets");

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
    },

    login (req, res) {
        User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(user => {
                if (!user) {
                    return res.status(401).send({message: "No such email or wrong password."});
                }
                // console.log(appSecrets, 'this is our secret');
                // console.log(user.salt);
                let input = bcrypt.hashSync(req.body.password, user.salt);
                //console.log(`hashed input: ${input}, stored password: ${user.password}`);
                if (input === user.password) {
                    //console.log('hello from line 35');
                    let token = jwt.encode({id: user.id, name: user.name}, appSecrets.SecretCode);
                    //console.log(token, 'my token');
                    //console.log('appsecrets',appSecrets.jwtSecret);
                    let json = {
                        user: user,
                        token: token
                    };
                    return res.status(200).send(json);
                } else {
                    return res.status(401).send({message: "No such email or wrong password."});
                }
            })
            .catch(error => res.status(400).send(error));
    }
};