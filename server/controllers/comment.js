const Comment = require('../models').Comments;

module.exports = {
    createComment(req, res) {
        Comment.create({
            comment: req.body.comment,
            link_id: req.params.linkid,
            users_id: req.user.id
        })
            .then(post => res.status(201).send(post))
            .catch(error => res.status(400).send(error));
    }
};