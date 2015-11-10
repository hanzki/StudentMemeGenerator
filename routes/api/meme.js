var db = require('../../models');

module.exports.addMeme = function(req, res) {
    //TODO create meme
    // res.sendStatus(503)

    var top_text = db.meme_texts.build({text:'top'})
    top_text.save().then(function() {
        var bottom_text = db.meme_texts.build({text:'bottom'});
        bottom_text.save().then(function() {
            var images = db.images.build({filename:'test'});
            images.save().then(function() {
                var memes = db.memes.build({
                    image_id:images.id,
                    top_text_id:top_text.id,
                    bottom_text_id:bottom_text.id
                });
                memes.save().then(function() {
                    res.json({memes: memes});
                }).catch(function(err) {
                    res.status(400).send(err);
                });
            }).catch(function(err) {
                res.status(400).send(err);
            });
        }).catch(function(err) {
    		res.status(400).send(err);
    	});
	}).catch(function(err) {
		res.status(400).send(err);
	});



};

module.exports.getAllMemes = function(req, res) {
    db.memes.findAll().then(function(memes) {
        res.json({memes: memes});
    }).catch(function(err) {
        res.status(400).send(err);
    });
};
