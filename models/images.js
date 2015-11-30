module.exports = function(sequelize, DataTypes) {
  return sequelize.define("image", {
    filename        : DataTypes.STRING
  })
};
