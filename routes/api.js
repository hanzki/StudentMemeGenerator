var express = require('express');
var router = express.Router();

var posts = require('./api/post');
var images = require('./api/image');
var memes = require('./api/meme');

var multer = require('multer');
var upload = multer({storage: multer.diskStorage({
	destination: './uploads',
	filename: function (req, file, cb) {
		cb(null, file.originalname)
	}
})});

/* Posts routes */
router.route('/posts')
	.post(function(req,res) { posts.addPost(req,res) })
	.get(function(req,res) { posts.getAllPosts(req,res) });

/* Single post routes */
router.route('/posts/:post_id')
	.get(function(req, res) { posts.getSinglePost(req, res, req.params.post_id) })
	.put(function(req, res) { posts.updatePost(req, res, req.params.post_id) })
	.delete(function(req, res) { posts.deletePost(req, res, req.params.post_id) });

/* Images routes */
router.route('/images')
		.post( upload.single('memeImage'), function(req,res) { images.addImage(req,res) })
		.get(function(req,res) { images.getAllImages(req,res) });

/* Single image routes */
router.route('/images/:image_id')
	.get(function(req, res) { images.getSingleImage(req, res, req.params.image_id) })

/* Memes routes */
router.route('/memes')
		.post(function(req,res) { memes.addMeme(req,res) })
		.get(function(req,res) { memes.getAllMemes(req,res) });


/* Single memes routes */
router.route('/memes/:meme_id')
	.get(function(req, res) { memes.getSingleMeme(req, res, req.params.meme_id) })
	.put(function(req, res) { memes.updateMeme(req, res, req.params.meme_id) })
	.delete(function(req, res) { memes.deleteMeme(req, res, req.params.meme_id) });

module.exports = router;
