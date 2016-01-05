var db = require('../../models');
var AWS = require('aws-sdk');

function apiImage(image) {
    return {
        id: image.id,
        url: 'files/uploads/' + image.filename
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

module.exports.s3test = function(req, res) {
    var s3 = new AWS.S3();

    var params = {Bucket: 'hanzkitest', Key: 'hello', Body: 'Hello, world!'};

    s3.putObject(params, function(err, data) {
        if (err) console.log(err);
        else console.log("Successfully uploaded data to myBucket/myKey");
    });

};
