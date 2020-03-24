const express = require('express')
const app = express()
// const cors = require('cors')
// app.use(cors())
const port = 3000
// 第一种方式返回数据 需要JSON序列化 否则浏览器发过去浏览器不认识特殊标记
const data = JSON.stringify({ name: 'zs' })

app.get('/api/getUserInfo', (req, res) => {
  // 第一种方式: jsonp方式解决跨域
  // res.send('callback(' + data + ')')
  // 第二种方式: cors
  // res.send({ name: '李白白', age: 30, gender: '男' })
  // 第三种方式: 前端采用http代理转发
  res.send({ name: '李白白', age: 30, gender: '男' })
})

app.listen(port, () => console.log('serve running localhost:' + port))
