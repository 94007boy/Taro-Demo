import Taro from '@tarojs/taro-rn';
import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text } from "@tarojs/components-rn";
import IconFont from "../iconfont/index.rn";

import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
let SearchBar = class SearchBar extends Component {

  constructor(props) {
    super(props);
  }

  onSearchClick() {
    Taro.showToast({ title: '点击了搜索', icon: 'none' });
  }

  onBtnClick() {
    Taro.showToast({ title: '点击了发布', icon: 'none' });
  }

  render() {
    return <View style={_styleSheet["searchBar"]}>
        <View onClick={this.onSearchClick.bind(this)} style={_styleSheet["searchBar__leftWrap"]}>
          <IconFont name="sousuo" color="#E1251B" size={40} />
          <Text numberOfLines={1} style={_styleSheet["searchBar__leftWrap-hint"]}>台积电回应拒接新单 | 美国拒绝世界卫生组织提案</Text>
        </View>
        <View onClick={this.onBtnClick.bind(this)} style={_styleSheet["searchBar__rightWrap"]}>
          <IconFont name="zhaoxiangji" color="#333333" size={45} />
          <Text style={_styleSheet["searchBar__rightWrap-btn"]}>发布</Text>
        </View>
      </View>;
  }

};


export default SearchBar;