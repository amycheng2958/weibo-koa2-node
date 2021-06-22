/**
 * @description 数据格式化
 * @author cyy
 */

// const { DEFAULT_PICTURE } = require('../conf/constant.js')
 
/**
 * 用户默认头像
 * @param {Object} obj 用户头像
 * 
 */

function _formatUserPicture(obj) {
    if(obj.picture == null) {
        obj.picture = 'q'
    }
    return obj
}

/**
 * 格式化用户信息
 * @param {Array|Object}} list 用户列表或单个用户信息
 */
function formatUser(list) {
    if(list == null) {
        return list
    }
    if(list instanceof Array) {
        // 数组用户列表
        return list.map(_formatUserPicture)
    }
    // 单个对象
    return _formatUserPicture(list)
}

module.exports = {
    formatUser
}