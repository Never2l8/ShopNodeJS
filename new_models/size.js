"use strict";

module.exports = function (sequelize, DataTypes) {


    // Item.associate = function(models) {
    //     User.hasMany(models.Task);
    // }


    return sequelize.define("size", {
        name: DataTypes.STRING
    });
};
