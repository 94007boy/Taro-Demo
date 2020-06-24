import Taro from '@tarojs/taro-rn';
import { observable } from 'mobx';
import '@tarojs/async-await';

const appMod = observable({

  systemInfo: {}

});

appMod.init = function () {
  Taro.getSystemInfo({
    success: res => {
      this.systemInfo = res;
    }
  });
};

export default appMod;