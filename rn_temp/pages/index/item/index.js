var _dec, _class;

import Taro from '@tarojs/taro-rn';
import React from 'react';
import { PureComponent } from "@tarojs/taro-rn";
import { View, Text, Image } from "@tarojs/components-rn";
import indexStyleSheet from "./index_styles";
import IconFont from "../../../components/iconfont/index.rn";
import classNames from 'classnames';
import gradienBg from "../../../assets/bg-gradien-gray.png";
import { getWindowWidth } from "../../../utils/style";
let coverHeight = Math.floor(getWindowWidth() * 0.56);
//动态样式RN端不能加px
import { observer, inject } from "@tarojs/mobx-rn";

var _styleSheet = indexStyleSheet;

function _getClassName() {
  var className = [];
  var args = arguments[0];
  var type = Object.prototype.toString.call(args).slice(8, -1).toLowerCase();

  if (type === 'string') {
    args = args.trim();
    args && className.push(args);
  } else if (type === 'array') {
    args.forEach(function (cls) {
      cls = _getClassName(cls).trim();
      cls && className.push(cls);
    });
  } else if (type === 'object') {
    for (var k in args) {
      k = k.trim();

      if (k && args.hasOwnProperty(k) && args[k]) {
        className.push(k);
      }
    }
  }

  return className.join(' ').trim();
}

function _getStyle(classNameExpression) {
  var className = _getClassName(classNameExpression);

  var classNameArr = className.split(/\s+/);
  var style = [];

  if (classNameArr.length === 1) {
    style.push(_styleSheet[classNameArr[0].trim()]);
  } else {
    classNameArr.forEach(function (cls) {
      style.push(_styleSheet[cls.trim()]);
    });
  }

  return style;
}

let Item = (_dec = inject('appMod'), _dec(_class = observer(_class = class Item extends PureComponent {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.onItemClick = e => {
      Taro.navigateTo({ url: '/pages/detail/index' });
    }, _temp;
  }

  onFollowClick(index, active, name, e) {
    //事件对象 e 要放在最后
    e.stopPropagation(); //阻止事件冒泡
    const { indexMod } = this.props;
    indexMod.setFollowState(index, !active);
    Taro.showToast({ title: (active ? '取消关注' : '已关注') + name, icon: 'none' });
  }

  render() {
    const { item, index } = this.props;
    return <View key={index} onClick={this.onItemClick} style={_styleSheet["list__item"]}>
        <View style={[_styleSheet["list__item-top"], { height: coverHeight }]}>
          <Image mode="widthFix" src={item.data.cover.detail} style={_styleSheet["list__item-top-cover"]} />
          <View style={_styleSheet["list__item-top-maskWrap"]}><View style={_styleSheet["list__item-top-mask"]}><View><IconFont name="bofang" color="#fff" size={50}></IconFont></View></View></View>
          <Image src={gradienBg} style={_styleSheet["list__item-top-titleMask"]} />
          <Text style={_styleSheet["list__item-top-title"]}>{item.data.title}</Text>
          <Text style={_styleSheet["list__item-top-read"]}>{item.data.read}万次观看</Text>
          <Text style={_styleSheet["list__item-top-time"]}>{item.data.duration}</Text>
        </View>
        <View style={_styleSheet["list__item-btm"]}>
          <View style={_styleSheet["list__item-btm-avatar"]}><Image src={item.data.author.icon} style={_styleSheet["list__item-btm-avatar-img"]} /></View>
          <View style={_styleSheet["list__item-btm-midWrap"]}>
            <View style={_styleSheet["list__item-btm-usrInfo"]}>
              <Text style={_styleSheet["list__item-btm-usrInfo-name"]}>{item.data.author.name}</Text>
              <Text style={_styleSheet["list__item-btm-usrInfo-dot"]}>·</Text>
              <Text onClick={this.onFollowClick.bind(this, index, item.data.author.follow.followed, item.data.author.name)} style={_getStyle(classNames('list__item-btm-usrInfo-flow', item.data.author.follow.followed && 'list__item-btm-usrInfo-flow--active'))}>{item.data.author.follow.followed ? '已关注' : '关注'}</Text>
            </View>
            <Text style={_styleSheet["list__item-btm-fans"]}>{item.data.fans}粉丝</Text>
          </View>
          <View style={_styleSheet["list__item-btm-flex"]}></View>
          <View style={_styleSheet["list__item-btm-right"]}>
            <IconFont name="pinglun" color="#555" size={50}></IconFont>
            <Text style={_styleSheet["list__item-btm-msg"]}>{item.data.cmtNum}</Text>
            <IconFont name="xuanxiang" color="#555" size={40}></IconFont>
          </View>
        </View>
      </View>;
  }

}) || _class) || _class);
Item.defaultProps = {
  item: {}
};
export { Item as default };