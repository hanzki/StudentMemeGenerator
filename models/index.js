if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize')
    , sequelize = null;

  sequelize = new Sequelize(process.env.DATABASE_URL || "postgres://username:password@host:port/dbname");

  global.db = {
    Sequelize:  Sequelize,
    sequelize:  sequelize,
    memes:      sequelize.import(__dirname + '/memes'),
    images:     sequelize.import(__dirname + '/images'),
    meme_texts: sequelize.import(__dirname + '/meme_texts'),
    posts:      sequelize.import(__dirname + '/post')
  };

  /*
    Associations can be defined here. E.g. like this:
    global.db.memes.hasMany(global.db.images)
    global.db.memes.hasMany(global.db.meme_texts)
    global.db.images.belongsTo(global.db.memes)
    global.db.meme_texts.belongsTo(global.db.memes)
  */

}

module.exports = global.db;
