/**
 * @description user controller
 * @author cyy
 */


const { getUserInfo,createUser } = require('../services/user')

const { SuccessModel,ErrorModel } = require('../model/ResModel')
const { 
    registerUserNameExistInfo,
    registerUserNameNotExistInfo
} = require('../model/ErrorModel')
/**
 * 用户名是否存在
 * @param {string} userName 
 * 
 */
async function isExist(userName) {
    const userInfo = await getUserInfo(userName)
    if(userInfo) {
        return new SuccessModel(userInfo)
    }else{
        return new ErrorModel(registerUserNameNotExistInfo)
    }
}
/**
 * 注册
 * @param {string} userName
 * @param {string} parpasswordam
 * @param {number} gender  1男，2女，3保密
 */
async function register ({userName, password,gender}){
    const userInfo = await getUserInfo(userName)
    if(userInfo) {
        // 用户名已存在
        return new ErrorModel(registerUserNameExistInfo)
    }
    try {
        await createUser({
            userName, 
            password,
            gender
        })
        return new SuccessModel()
    } catch (error) {
        console.error(error.message,error.stack)
        return new ErrorModel(registerFailInfo)
    }
}
module.exports = {
    isExist,
    register
}