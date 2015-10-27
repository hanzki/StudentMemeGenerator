module.exports = function(sequelize, DataTypes) {
  return sequelize.define("images", {
    filename        : DataTypes.STRING,
    created_at      : DataTypes.DATE
  })
}
