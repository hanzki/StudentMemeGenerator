module.exports = function(sequelize, DataTypes) {
  return sequelize.define("meme_texts", {
    text            : DataTypes.STRING,
    created_at      : DataTypes.DATE
  })
}
