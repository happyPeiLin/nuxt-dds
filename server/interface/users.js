import Router from 'koa-router';
import User from '../dbs/models/users'

let router = new Router({
  prefix: '/users'
})








router.post('/addUser', async function (ctx) {
  const user = new User({
    name: ctx.request.body.name,
    age: ctx.request.body.age,
    time: ctx.request.body.time,
    type: ctx.request.body.type,
  })
  let code
  try {
    await user.save()
    code = 0
  } catch (e) {
    code = -1
  }
  ctx.body = {
    code: code
  }
})


router.post('/getUser', async function(ctx) {
  const results = await User.find({type: ctx.request.body.type})
  ctx.body = {
    code: 0,
    results
  }
})





export default router
