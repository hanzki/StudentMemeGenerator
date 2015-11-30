module.exports = function(sequelize, DataTypes) {
  return sequelize.define("meme", {
  	toptext        : DataTypes.STRING,
  	bottomtext     : DataTypes.STRING,
    filename       : DataTypes.STRING
  })
};
