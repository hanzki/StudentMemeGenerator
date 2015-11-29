var db = require('../../models');
var caption = require('caption');

module.exports.addMeme = function(req, res) {

    db.memes.create({
        toptext:req.body.topText,
        bottomtext:req.body.bottomText
    }).then(function(meme) {
        // the image here should be the id of an already existing/ newly uploaded image,
        // i.e. this image id should already be saved in db
        meme.setImage(req.body.imageId);

        createMemeImage(meme, req.body.topText, req.body.bottomText,
            function(filename){
                meme.filename = filename;
                meme.save();
                res.json(apiMeme(meme));
            }
        );
    }).catch(function(err) {
        console.error("meme fail", err);
        res.status(400).send(err);
    });
};

module.exports.getAllMemes = function(req, res) {
    
    db.memes.findAll().then(function(memes) {
        res.json(memes.map(apiMeme));
    }).catch(function(err) {
        console.error("sql error", err);
        res.status(400).send(err);
    });
};


module.exports.getSingleMeme = function(req, res, id) {
    
	db.memes.findById(id).then(function(meme) {
        res.json(apiMeme(meme));
	}).catch(function(err) {
        console.error("sql error", err);
        res.status(400).send(err);
	});
    
};

function apiMeme(meme) {
    return {
        id: meme.id,
        url: meme.filename,
        imageId: meme.imageId,
        topText: meme.toptext,
        bottomText: meme.bottomtext

    }
}

function createMemeImage(meme, tt, bt, cb) {

    meme.getImage().then(
        function(image) {
            var options = {
                caption: tt.toUpperCase(),
                bottomCaption: bt.toUpperCase(),
                outputFile: "files/memes/" + meme.id + "." + image.filename.split('.').pop()
            };

            caption.path('files/uploads/' + image.filename,
                options,
                function(err, image) {
                    if(!err) {
                        console.log("created meme image", image);
                        cb(image);
                    } else {
                        console.error("meme image creation error", err);
                        cb(err);
                    }
                }
            );
        },
        function(err) {
            console.error(err);
            cb(err);
        }
    );
}
