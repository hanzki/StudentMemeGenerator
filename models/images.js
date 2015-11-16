module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Image", {
    filename        : DataTypes.STRING
  })
};
