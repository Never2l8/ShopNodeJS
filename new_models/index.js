"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
let dbConfig = require('../models/dbConfig');
const sequelize = new Sequelize(dbConfig.connectionString);

const db = {};

fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function (file) {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });
db.category.hasOne(db.item);
db.item.belongsTo(db.category);
db.size.hasOne(db.item);
db.item.belongsTo(db.size);
Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
    db[modelName].sync();
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;