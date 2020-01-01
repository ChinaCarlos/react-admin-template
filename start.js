// 此文件为启动一个Nodejs 静态服务做端口代理
const path = require('path')
const express = require('express')
const fs = require('fs')
const app = express()
app.use(express.static(path.join(__dirname, './build')))
app.use(function(req, res) {
  fs.readFile(
    path.join(__dirname, './build/index.html'),
    'utf-8',
    (err, content) => {
      if (err) {
        console.log('We Cannot open "buind/index.html" file.')
      }
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      })
      res.end(content)
    }
  )
})
app.listen('8080', function() {
  console.log('web启动服务器完成')
})
