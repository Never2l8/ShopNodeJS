"use strict";

module.exports = function (sequelize, DataTypes) {


    // User.associate = function(models) {
    //     User.hasMany(models.Task);
    // }


    return sequelize.define("user", {
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });
};