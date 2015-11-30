module.exports = function(sequelize, DataTypes) {
  return sequelize.define("meme", {
  	toptext        : DataTypes.STRING,
  	bottomtext     : DataTypes.STRING
    // image_id        : DataTypes.INTEGER,
    // top_text_id     : DataTypes.INTEGER,
    // bottom_text_id  : DataTypes.INTEGER,
  })
};
