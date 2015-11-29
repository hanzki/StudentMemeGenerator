var db = require('../../models');

module.exports.addMeme = function(req, res) {
    //TODO create meme
    // res.sendStatus(503)

    //dummy data
    res.json({
        "id":id,
        "url":"http://bit.ly/1HU34GZ",
        "imageId":"1",
        "topText": "the problem with some people...",
        "bottomText": "is that they exist"
    });

    /*
    db.meme_texts.create({text:req.body.top}).then(function(top_text) {
        db.meme_texts.create({text:req.body.bottom}).then(function(bottom_text) {
                db.memes.create().then(function(meme) {

                    // the image here should be the id of an already existing/ newly uploaded image,
                    // i.e. this image id should already be saved in db
                    meme.setImage(req.body.image);
                    meme.setTopText(top_text);
                    meme.setBottomText(bottom_text);
                    res.json({meme: meme});
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
    */

};

module.exports.getAllMemes = function(req, res) {

    //dummy data
    var memes = [];
    for(var i = 0; i < 10; i++) {
        var meme = {
            "id":i+1,
            "url":"http://bit.ly/1HU34GZ",
            "imageId":"1",
            "topText": "the problem with some people...",
            "bottomText": "is that they exist"
        };
        memes.push(meme);
    }

    res.json(memes);

    /*
    db.memes.findAll().then(function(memes) {
        res.json({memes: memes});
    }).catch(function(err) {
        res.status(400).send(err);
    });
    */
};


module.exports.getSingleMeme = function(req, res, id) {

    /* sequelize doc: eager loading */

    // dummy data
    res.json({
        "id":id,
        "url":"http://bit.ly/1HU34GZ",
        "imageId":"1",
        "topText": "the problem with some people...",
        "bottomText": "is that they exist"
    });

    // ACHTUNG!!!HUOM!!!
    // model here is db.xx, not just the name of the model

    /*
	db.memes.findOne({where:{id:id}, include: [{ all: true }] }).then(function(meme) {

        res.json({meme: meme});

	}).catch(function(err) {
		res.json({});
	});
    */
};
