const router = require('koa-router')()

router.get('/error',async (ctx, next)=>{
    await ctx.render('error',{})
})
module.exports = router