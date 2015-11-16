var db = require('../../models');

module.exports.addMeme = function(req, res) {
    //TODO create meme
    // res.sendStatus(503)
    db.meme_texts.create({text:req.body.top}).then(function(top_text) {
        db.meme_texts.create({text:req.body.bottom}).then(function(bottom_text) {
                db.memes.create().then(function(memes) {

                    // the image here should be the id of an already existing/ newly uploaded image,
                    // i.e. this image id should already be saved in db
                    memes.setImages(req.body.image);
                    memes.setTopText(top_text);
                    memes.setBottomText(bottom_text);
                    res.json({memes: memes});
                }).catch(function(err) {
                    console.log("meme fail");
                    res.status(400).send(err);
                });
        }).catch(function(err) {
            console.log("bottom text fail");
            res.status(400).send(err);
        });
    }).catch(function(err) {
        console.log("top text fail");
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


module.exports.getSingleMeme = function(req, res, id) {

    /* sequelize doc: eager loading */

    // ACHTUNG!!!HUOM!!!
    // model here is db.xx, not just the name of the model

	db.memes.findOne({where:{id:id}, include: [{ all: true }] }).then(function(meme) {

        res.json({meme: meme});

	}).catch(function(err) {
		res.json({});
	});
};
