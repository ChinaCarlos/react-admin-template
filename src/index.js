import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'

import store from './store/'
import './assets/styles/normal.less'
import App from './App'
import * as serviceWorker from './serviceWorker'

moment.locale('zh-cn')
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <LocaleProvider locale={zh_CN}>
        <App />
      </LocaleProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
