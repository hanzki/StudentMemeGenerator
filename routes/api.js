var express = require('express');
var router = express.Router();

var images = require('./api/image');
var memes = require('./api/meme');

var multer = require('multer');
var upload = multer({storage: multer.diskStorage({
	destination: './files/uploads',
	filename: function (req, file, cb) {
		cb(null, file.originalname)
	}
})});


/* Images routes */
router.route('/images')
		.post( upload.single('memeImage'), function(req,res) { images.addImage(req,res) })
		.get(function(req,res) { images.getAllImages(req,res) });

/* Single image routes */
router.route('/images/:image_id')
	.get(function(req, res) { images.getSingleImage(req, res, req.params.image_id) });

/* Memes routes */
router.route('/memes')
		.post(function(req,res) { memes.addMeme(req,res) })
		.get(function(req,res) { memes.getAllMemes(req,res) });

/* Memes created today */
router.route('/memes/today')
		.get(function(req,res) { memes.getToday(req,res) });

/* Memes created this week */
router.route('/memes/week')
		.get(function(req,res) { memes.getWeek(req,res) });

/* Memes created this month */
router.route('/memes/month')
		.get(function(req,res) { memes.getMonth(req,res) });

/* Single memes routes */
router.route('/memes/:meme_id')
	.get(function(req, res) { memes.getSingleMeme(req, res, req.params.meme_id) })
	.put(function(req, res) { memes.updateMeme(req, res, req.params.meme_id) })
	.delete(function(req, res) { memes.deleteMeme(req, res, req.params.meme_id) });

router.route('/s3test').get(function(req,res) { images.s3test(req,res) });

module.exports = router;
