const User = require("../models").Users;
const jwt = require("jwt-simple");
const appSecrets = require("../config/secrets");

module.exports = {
    authenticate (req, res, next) {
        let token = req.headers['access-token'] || req.query.access_token;
        //console.log('Your token:', token);

        if (!token) {
            res.status(401).send({
                message: "Must be authenticated to use this route."
            });
        }

        try {
            //console.log('from inside first try');
            let decoded = jwt.decode(token, appSecrets.SecretCode);
            // console.log('decoded:', decoded);
            // console.log('decoded id:', decoded.id);
            let userId = decoded.id;

            User.findById(userId).then(user => {
                if (!user) {
                    res.status(401).send({ message: "Error during authentication." });
                    }
                req.user = user;
                next();
            });
        }
        catch (e) {
            res.status(401).send({ message: "Invalid token." });
        }
    }
};