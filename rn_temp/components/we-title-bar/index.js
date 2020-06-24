import Taro from '@tarojs/taro-rn';
import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text } from "@tarojs/components-rn";
import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
let WeTitleBar = class WeTitleBar extends Component {

  constructor() {
    super();
  }

  render() {
    const info = Taro.getSystemInfoSync();
    const { statusBarHeight } = info;
    const height = statusBarHeight * 2 + 'px';
    console.log(info);
    return <View style={[_styleSheet["titleBar"], { height }]}>
        <View style={[_styleSheet["titleBar__status"], { height: statusBarHeight + 'px' }]}></View>
        <View style={_styleSheet["titleBar__wrap"]}>
          <Text style={_styleSheet["titleBar__wrap-title"]}>小程序</Text>
        </View>
      </View>;
  }
};


export default WeTitleBar;