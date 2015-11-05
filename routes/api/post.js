var db = require('../../models');

// This is an example file. It is not needed or used in the student meme generator!


module.exports.addPost = function(req, res) {
	var post = db.posts.build(req.body);
	post.save().then(function() {
		res.json({post: post});
	}).catch(function(err) {
		res.status(400).send(err);
	});
};

module.exports.getAllPosts = function(req, res) {
	db.posts.findAll().then(function(posts) {
		res.json({posts: posts});
	}).catch(function(err) {
		res.status(400).send(err);
	});
};

module.exports.getSinglePost = function(req, res, id) {
	db.posts.findById(id).then(function(post) {
		res.json({post: post});
	}).catch(function(err) {
		res.status(400).send(err);
	});
};

module.exports.updatePost = function(req, res, id) {
	db.posts.findById(id).then(function(post) {
		post.update(req.body).then(function(post) {
			res.json({post: post});
		}).catch(function(err) {
			res.status(400).send(err);
		});
	}).catch(function(err) {
		res.status(400).send(err);
	});
};

module.exports.deletePost = function(req, res, id) {
	db.posts.findById(id).then(function(post) {
		post.destroy().then(function() {
			res.sendStatus(200);
		}).catch(function(err) {
			res.status(400).send(err);
		});
	}).catch(function(err) {
		res.status(400).send(err);
	});
};