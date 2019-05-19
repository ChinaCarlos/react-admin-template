// 此文件为启动一个Nodejs 静态服务做端口代理
const path = require('path')
const express = require('express')
const fs = require('fs')
const app = express()
app.use(express.static(path.join(__dirname, 'dist')))
app.use(function(req, res) {
  fs.readFile(
    path.join(__dirname, 'build/index.html'),
    'utf-8',
    (err, content) => {
      if (err) {
        console.log('We Cannot open "bind/index.html" file.')
      }
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      })
      res.end(content)
    }
  )
})
app.listen('6666', function() {
  console.log('启动服务器完成')
})
