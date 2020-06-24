import Taro from '@tarojs/taro-rn';

import '@tarojs/async-await';
import { jsonArr } from "./mock-index";
import { jsonDetail } from "./mock-detail";

//定义const类型方法变量request，否则无法export
const request = async options => {
  options.url = "https://api.apiopen.top" + options.url;
  options.mode = 'cors'; //h5附加参数，允许跨域
  let res;
  try {
    if (true) {
      res = resMock(options);
      console.log(res);
    } else {
      res = await Taro.request(options);
    }
  } catch (e) {}
  if (!res) {
    Taro.hideLoading();
    Taro.showToast({ title: '请求超时，请重试', icon: 'none' });
    return;
  } else if ('' + res.statusCode !== '200') {
    Taro.hideLoading();
    Taro.showToast({ title: '网络故障', icon: 'none' });
    return;
  } else {
    const { code, message, result } = res.data;
    if ('' + code !== '200') {
      Taro.showToast({ title: message, icon: 'none' });
    } else {
      return result;
    }
  }
};

function resMock(options) {
  if (options.url.indexOf('/videoRecommend') > -1) {
    let index = Math.floor(Math.random() * 10 + 1) % 5;
    return {
      statusCode: 200,
      data: jsonArr[index]
    };
  } else {
    return {
      statusCode: 200,
      data: jsonDetail
    };
  }
}

export default request;