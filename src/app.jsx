import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import IndexWeapp from './pages/index'
import store from "./store";
import './app.scss'
// import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
import "taro-ui/dist/style/components/tabs.scss";
import "taro-ui/dist/style/components/load-more.scss";
import "taro-ui/dist/style/components/activity-indicator.scss";
import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/toast.scss";
import "taro-ui/dist/style/components/icon.scss";
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor:'#ffffff',
      navigationBarTextStyle:'black',
      navigationStyle: process.env.TARO_ENV === 'weapp' ?'default':'custom'//隐藏三端的默认标题栏，此时可以自定义标题栏
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <IndexWeapp />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
