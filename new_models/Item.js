"use strict";
const models = require('../new_models');

module.exports = function (sequelize, DataTypes) {


    // Item.associate = function(models) {
    //     User.hasMany(models.Task);
    // }


    return sequelize.define("item", {
        item_brand: DataTypes.STRING,
        item_title: DataTypes.STRING,
        item_image: DataTypes.STRING,
        brief: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.DECIMAL(8, 2),
        item_color: DataTypes.STRING,
        vendor_code: DataTypes.STRING,
    });
};