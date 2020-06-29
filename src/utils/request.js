import qs from 'qs';
import Taro from '@tarojs/taro'
import { md5 } from './md5.js'
import '@tarojs/async-await'
import { jsonArr } from '@utils/mock-index'
import { jsonDetail } from '@utils/mock-detail'
import Utils from '@utils/index'

//定义const类型方法变量request，否则无法export
const request = async (options) => {
  options.url = HOST + options.url
  options.mode = 'cors'//h5附加参数，允许跨域
  let res
  try {
    if(mock){
      res = await resMock(options)
      console.log(res)
    }else {
      res = await Taro.request(options)
    }
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

async function resMock(options){
  if(options.url.indexOf('/videoRecommend') > -1){
    let index = Math.floor(Math.random()*10+1)%5//随机返回十条数据
    await Utils.timeout(1000)//模拟网络延迟
    return {
      statusCode:200,
      data:jsonArr[index]
    }
  }else {
    return {
      statusCode:200,
      data:jsonDetail
    }
  }

}

export default request;
