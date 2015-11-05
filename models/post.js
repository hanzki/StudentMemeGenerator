module.exports = function(sequelize, DataTypes) {
    return sequelize.define('post', {
        name    : DataTypes.STRING,
        date    : DataTypes.DATE,
        creator : DataTypes.STRING,
        content : DataTypes.STRING
    });
};
