var Sequelize = require('sequelize');
var db = require('../../db');
var Post = require('../../models/post');

module.exports.addPost = function(req, res) {
	console.log(req.body);
	var post = Post.build(req.body);
	post.save().then(function() {
		res.json({post: post});
	}).catch(function(err) {
		res.status(400).send(err);
	});
};

module.exports.getAllPosts = function(req, res) {
	Post.findAll().then(function(posts) {
		res.json({posts: posts});
	}).catch(function(err) {
		res.status(400).send(err);
	});
};

module.exports.getSinglePost = function(req, res, id) {
	Post.findById(id).then(function(post) {
		res.json({post: post});
	}).catch(function(err) {
		res.status(400).send(err);
	});
};

module.exports.updatePost = function(req, res, id) {
	Post.findById(id).then(function(post) {
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
	Post.findById(id).then(function(post) {
		post.destroy().then(function() {
			res.sendStatus(200);
		}).catch(function(err) {
			res.status(400).send(err);
		});
	}).catch(function(err) {
		res.status(400).send(err);
	});
};