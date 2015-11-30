var db = require('../../models');

module.exports.addMeme = function(req, res) {
    //TODO create meme
    // res.sendStatus(503)

    
    db.memes.create({toptext:req.body.top,bottomtext:req.body.bottom}).then(function(meme) {

        // the image here should be the id of an already existing/ newly uploaded image,
        // i.e. this image id should already be saved in db
        meme.setImage(req.body.image);

        res.json(apiMeme(meme));

    }).catch(function(err) {
        console.log("meme fail");
        res.status(400).send(err);
    });
        
    

};

module.exports.getAllMemes = function(req, res) {

    
    db.memes.findAll().then(function(memes) {
        res.json(memes.map(apiMeme));
    }).catch(function(err) {
        res.status(400).send(err);
    });
    
};


module.exports.getSingleMeme = function(req, res, id) {

    /* sequelize doc: eager loading */


    // ACHTUNG!!!HUOM!!!
    // model here is db.xx, not just the name of the model

    
	db.memes.findOne({where:{id:id}, include: [{ all: true }] }).then(function(meme) {

        res.json(apiMeme(meme));

	}).catch(function(err) {
		res.json({});
	});
    
};


function apiMeme(meme) {
    return {
        id: meme.id,
        url: "http://bit.ly/1HU34GZ",
        imageId: meme.imageId,
        topText: meme.toptext,
        bottomText: meme.bottomtext

    }
}
