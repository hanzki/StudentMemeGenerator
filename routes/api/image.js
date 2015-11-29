var db = require('../../models');

function apiImage(image) {
    return {
        id: image.id,
        url: 'uploads/' + image.filename
    }
}

module.exports.addImage = function(req, res) {
    console.log(req.file);

    db.images.create({filename: req.file.originalname})
        .then(function (image){
            res.json(apiImage(image));
        }).catch(function(err) {
            console.log("image save fail");
            res.status(400).send(err);
        });
};

module.exports.getAllImages = function(req, res) {
    db.images.findAll().then(function(images) {
        res.json(images.map(apiImage));
    }).catch(function(err) {
        res.status(400).send(err);
    });
};

module.exports.getSingleImage = function(req, res, id) {
    db.images.findById(id).then(function(image) {
        res.json(apiImage(image));
    }).catch(function(err) {
        res.status(400).send(err);
    });
};
