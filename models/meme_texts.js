module.exports = function(sequelize, DataTypes) {
  return sequelize.define("meme_texts", {
    id              : DataTypes.INTEGER,
    text            : DataTypes.STRING,
    created_at      : DataTypes.DATE
  })
}
