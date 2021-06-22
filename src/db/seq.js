const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('weibo_koa2_db', 'root', '19921008', {
    host: 'localhost',
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});
module.exports = sequelize