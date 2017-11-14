"use strict";

module.exports = function (sequelize, DataTypes) {

    let category = sequelize.define("category", {
        image: DataTypes.STRING,
        name: DataTypes.STRING
    });

    category.associate = function () {
        category.hasOne(category, {as: 'parent'});
    };

    return category;
};

