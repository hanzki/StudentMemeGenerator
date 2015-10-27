module.exports = function(sequelize, DataTypes) {
  return sequelize.define("images", {
    id              : DataTypes.INTEGER,
    filename        : DataTypes.STRING,
    created_at      : DataTypes.DATE
  })
}
