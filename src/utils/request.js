import qs from 'qs';
import Taro from '@tarojs/taro'
import { md5 } from './md5.js'
import '@tarojs/async-await'

//定义const类型方法变量request，否则无法export
const request = async (options) => {
  options.url = HOST + options.url
  options.mode = 'cors'//h5附加参数，允许跨域
  let res
  try {
    res = await Taro.request(options)
  }catch (e) {

  }
  if(!res){
    Taro.hideLoading()
    Taro.showToast({title: '请求超时，请重试' ,icon:'none'});
    return
  }else if ('' + res.statusCode !== '200') {
    Taro.hideLoading()
    Taro.showToast({title: '网络故障' ,icon:'none'});
    return
  }else {
    const {code,message,result} = res.data;
    if('' + code !== '200'){
      Taro.showToast({title: message ,icon:'none'});
    }else {
      return result
    }
  }
}

export default request;
