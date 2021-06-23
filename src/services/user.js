/**
 * @description user service 
 * @author cyy
 */

const { User } = require('../db/model/index')
const { formatUser } = require('./_format')
/**
 * 获取用户信息
 * @param {string} userName 用户名
 * @param {string} password 密码
 */

async function getUserInfo (userName, password) {
    const whereOpt = { 
        userName
    }
    if(password){
        Object.assign(whereOpt,{password})
    }
    const res = await User.findOne({
        attribute: ['id','nickName','userName','picture','city'],
        where: whereOpt
    })
    if(res === null){
        return res
    }   
    const formatRes = formatUser(res.dataValues)
    return formatRes
}

/**
 * 创建用户
 * @param {string} userName 
 * @param {string} password 
 * @param {number} gender 
 * @param {string} nickName 
 */
async function createUser({userName, password,gender=3,nickName}) {
    const res = await User.create({
        userName, 
        password, 
        gender, 
        nickName: nickName ? nickName : userName
    })
    return res.dataValues
}
module.exports = {
    getUserInfo,
    createUser
}