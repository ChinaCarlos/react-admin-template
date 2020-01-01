## 基于 React(SPA) + AntdDesign 的一个后台管理系统模板

### 1.项目简介

> 1.该项目集成了`React`,`Redux`,`React-Router-Dom`,`React-Redux`,`Redux-Thunk`,`Antd-Design`,`Prettier`,`Style-Components`,`Axios`等技术。

> 2.效果如下图所示：

> ![项目效果截图](https://github.com/maliaoMJ/react-admin-template/blob/master/demos/11.png)

### 2.项目运行

1. 首先克隆本项目到本地

```shell
  git clone https://github.com/maliaoMJ/react-admin-template.git
```

2.  进入该项目目录下，安装依赖

```shell
  yarn or npm install
```

3. 运行本项目

```shell
  yarn start or npm start
```

4.  打包本项目

```shell
  yarn run build or npm run build
```

### 3.支持功能

##### 1.`Antd-Design` 主题自定义

在项目目录下`theme.js`文件中写入自定义主题的颜色变量(Less 变量)

```javascript
module.exports = {
  '@primary-color': '#415ff3'
  // '@layout-header-background': '#fff'
}
// 本人比较喜欢的紫色
```

##### 2.代码格式化 `prettier`

在项目目录下`.prettierrc.js`文件中写入自定义的代码风格检查

```javascript
module.exports = {
  semi: false,
  singleQuote: true,
  bracketSpacing: true
  // More Config ...
}
```

检查代码是否符合风格

```shell
  yarn run check-lint
```

或者执行命令格式化代码

```shell
   yarn run lint
```

##### 3.代码 `git` 提交检查

在每次的代码提交中，在`git`提交前会触发代码风格检查，会自动按照配置的`prettier`风格格式化代码，如果格式化失败，会阻止提交代码
如果需要自定配置其他项，请在`package.json`文件中修改:

```json
  "lint-staged": {
 "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
   "prettier --config './.prettierrc.js' --write 'src/**/*.js'",
   "git add"
 ]
}
```

##### 4.代码打包分析

在每次个构建打包当中，我们可以根据分析打包后各个模块的所占的比列，进行代码性能优化。（这里用的是一个轻量级的分析工具，官方推荐的,也可以自己配置用其他工具`webpack-bundle-analyzer、webpack-chart、webpack-analyse`）

```shell
 yarn run analyze
```

然后打开 ``查看打包模块分析，如下图所示：
![项目效果截图](https://github.com/maliaoMJ/react-admin-template/blob/master/demos/22.png)

##### 5.开发联调环境中 API Proxy 代理

在我们开发中涉及前后端联调,如果跨域需要代理后端的接口，供前端调用
在`src/setupProxy.js`文件中添加`api`代理配置

```javascript
const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://some-example/' }))
  // More Proxy Config...
}
```

### 4.打包部署

- 普通部署
  执行命令`yarn run build` 构建，如果用`history`路由模式，注意`nginx`的配置，以防止`404`出现
- Docker 部署
  参考目录下`deploy.sh`和`Dockerfile`文件
- 起一个 node 页面服务
  确保安装`pm2`(`yarn add global pm2`),然后执行：

  ```
   sh build.sh
  ```

  参考目录下： `start.js`

  ```javascript
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
  ```

### 5.未完待续

```shell
echo '我知道你会来，所以我会等。'
```
