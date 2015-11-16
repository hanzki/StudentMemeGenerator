module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Meme_text", {
    text            : DataTypes.STRING
  })
};
