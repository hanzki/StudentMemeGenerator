var Sequalize = require('sequelize')
var db = require('../db');

var Post = db.define('post', {
	name: Sequalize.STRING,
	date: Sequalize.DATE,
	creator: Sequalize.STRING,
	content: Sequalize.STRING
});

db.sync();

module.exports = Post;