var db = require('../../models');

module.exports.addMeme = function(req, res) {
    //TODO create meme
    // res.sendStatus(503)
    db.meme_texts.create({text:req.body.top}).then(function(top_text) {
        db.meme_texts.create({text:req.body.bottom}).then(function(bottom_text) {
            db.images.create({filename:req.body.image}).then(function(images) {
                db.memes.create({image_id:images.id,top_text_id:top_text.id,bottom_text_id:bottom_text.id}).then(function(memes) {
                    memes.setImages(images);
                    memes.setTopText(top_text);
                    memes.setBottomText(bottom_text);
                    res.json({memes: memes});
                }).catch(function(err) {
                    console.log("meme fail");
                    res.status(400).send(err);
                });
            }).catch(function(err) {
                console.log("image fail");
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
