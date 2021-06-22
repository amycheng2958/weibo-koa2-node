/**
 * @description 数据建模blog
 * @author cyy
 */

const { Sequelize,DataTypes } = require('sequelize');
const sequelize = require('../seq')    
const { STRING, INTEGER,TEXT } = require('../types')

const Blog = sequelize.define('blog', {
    userId: {
       type: INTEGER,
       allowNull: false,
       comment: '用户id'
    },
    content: {
        type: TEXT,
        allowNull: false,
        comment: '微博内容'
    },
    image: {
        type: STRING,
        comment: '图片地址'
    }
})
module.exports = Blog