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

module.exports = {
    getUserInfo
}