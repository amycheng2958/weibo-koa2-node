/**
 * @description 数据建模user
 * @author cyy
 */

const { Sequelize,DataTypes } = require('sequelize');
const sequelize = require('../seq')    
const { STRING, DECIMAL } = require('../types')

const User = sequelize.define('user',{
    userName:{
        type: STRING,
        allowNull:false,
        unique:true,
        comment: '用户名唯一'
    },
    password:{
        type: STRING,
        allowNull:false,
    },
    nickname:{
        type: STRING,
        allowNull:false,
    },
    genders:{
        type: DECIMAL,
        allowNull:false,
        defaultValue:3,
        comment: '性别（1男，2女，3保密）'
    },
    city:{
        type: STRING,
    }
})

module.exports = User