module.exports = function(sequelize, DataTypes) {
  return sequelize.define("memes", {
    image_id        : DataTypes.INTEGER,
    top_text_id     : DataTypes.INTEGER,
    bottom_text_id  : DataTypes.INTEGER,
    created_at      : DataTypes.DATE
  })
}
