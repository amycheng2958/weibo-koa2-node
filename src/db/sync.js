const sequelize = require('./seq')
require('./model/index')

sequelize.authenticate().then(()=>{
    console.log('auth ok');
}).catch(()=>{
    console.log('auth err')
})
sequelize.sync({force: true}).then(()=>{
    console.log('sync ok')
    process.exit()
})