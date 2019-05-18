import axios from 'axios'
const AUTH_TOKEN = localStorage.getItem('token') || ''
const instance = axios.create({
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  timeout: 60000,
  withCredentials: true
})
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN
if (process.env.NODE_ENV === 'development') {
  window.document.cookie =
    'cargoownerToken=cargoownerToken_0D4F86CC135F6359C20E433D08DF9897'
}
instance.defaults.crossDomain = true
instance.interceptors.request.use(
  function(config) {
    if (!config.headers.common.Authorization) {
      console.log('该请求没有token!')
    } else {
      console.log(`该请求携带的TOKEN${config.headers.common.Authorization}`)
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function(response) {
    if (response.status === 401) {
      console.log('401 token/cookie/sessionId 失效！')
      // 跳转登录页
    } else if (response.status === 403) {
      console.log('403 服务器拒绝了请求')
      // 跳转到服务器拒绝请求页
    } else if (response.status === 404) {
      console.log('请求的资源不存在！')
      // 跳转到登录页
    } else if (response.status >= 500) {
      // 跳转到服务器出错页
    }
    return response
  },
  function(error) {
    return Promise.reject(error)
  }
)
export default instance
