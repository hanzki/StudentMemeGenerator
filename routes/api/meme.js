var db = require('../../models');

module.exports.addMeme = function(req, res) {
    //TODO create meme
    res.sendStatus(503)
};

module.exports.getAllMemes = function(req, res) {
    db.memes.findAll().then(function(memes) {
        res.json({memes: memes});
    }).catch(function(err) {
        res.status(400).send(err);
    });
};