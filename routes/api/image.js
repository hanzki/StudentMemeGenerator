var db = require('../../models');

module.exports.addImage = function(req, res) {
    // TODO image upload
    // TODO check https://github.com/expressjs/multer

    res.sendStatus(503)
};

module.exports.getAllImages = function(req, res) {
    db.images.findAll().then(function(images) {
        res.json({images: images});
    }).catch(function(err) {
        res.status(400).send(err);
    });
};

module.exports.getSingleImage = function(req, res, id) {
    db.images.findById(id).then(function(image) {
        res.json({image: image});
    }).catch(function(err) {
        res.status(400).send(err);
    });
};
