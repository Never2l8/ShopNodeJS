"use strict";

module.exports = function (sequelize, DataTypes) {

    let category = sequelize.define("category", {
        name: DataTypes.STRING
    });

    category.associate = function() {
        category.hasOne(category, {as: 'Parent'});
    };
    
    return category;
};

