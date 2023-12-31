import React from 'react'
import ReactDOM from 'react-dom/client'
import {ConfigProvider} from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import 'virtual:uno.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <div>hello world</div>
    </ConfigProvider>
  </React.StrictMode>
)
