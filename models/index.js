if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize')
    , sequelize = null;

  sequelize = new Sequelize(process.env.DATABASE_URL || "postgres://localhost:5432/meme_test");

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

    global.db.memes.hasOne(global.db.images)
    global.db.images.belongsTo(global.db.memes,{as:'image'})
    global.db.memes.hasMany(global.db.meme_texts, {foreignKey: 'top_text_id'})
    global.db.memes.hasMany(global.db.meme_texts, {foreignKey: 'bottom_text_id'})
    global.db.meme_texts.belongsTo(global.db.memes)
    */
    global.db.images.hasMany(global.db.memes);
    global.db.memes.belongsTo(global.db.images,{as:"Images"});


}

module.exports = global.db;
