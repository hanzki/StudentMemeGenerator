if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize')
    , sequelize = null;

  sequelize = new Sequelize(process.env.DATABASE_URL || "postgres://username:password@host:port/dbname");

  global.db = {
    Sequelize:  Sequelize,
    sequelize:  sequelize,
    memes:      sequelize.import(__dirname + '/memes'),
    images:     sequelize.import(__dirname + '/images')
  };

  /* Associations */
    //global.db.images.hasMany(global.db.memes);
    global.db.memes.belongsTo(global.db.images);


}

module.exports = global.db;
