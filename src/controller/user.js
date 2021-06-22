/**
 * @description user controller
 * @author cyy
 */

/**
 * 用户名是否存在
 * @param {string} userName 用户名
 */
const { getUserInfo } = require('../services/user')

const { SuccessModel,ErrorModel } = require('../model/ResModel')
async function isExist(userName) {
    const userInfo = await getUserInfo(userName)
    if(userInfo) {
        return new SuccessModel(userInfo)
    }else{
        return new ErrorModel({
            errno: 10003,
            message: '用户名未存在'
        })
    }
}
module.exports = {
    isExist
}