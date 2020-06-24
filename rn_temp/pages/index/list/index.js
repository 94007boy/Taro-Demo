var _dec, _class;

import React from 'react';
import { PureComponent } from "@tarojs/taro-rn";
import { Text, View, ScrollView, Image } from "@tarojs/components-rn";
import indexStyleSheet from "./index_styles";
import { observer, inject } from "@tarojs/mobx-rn";
import Item from "../item/index";
const scrollWarp = {
  position: 'absolute',
  width: '100%'
};
import { getWindowHeight } from "../../../utils/style";
import loadingIcon from "../../../assets/icon-small-loading.gif";
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

let height = 0;

let List = (_dec = inject('indexMod'), _dec(_class = observer(_class = class List extends PureComponent {

  constructor(props) {
    super(props);

    this.onScrollToLower = () => {
      const { indexMod } = this.props;
      const { datas } = this.props;
      if (datas.length && datas[datas.length - 1].data) {
        indexMod.getDatas(datas[datas.length - 1].data.id, true);
      }
    };

    this.onScrollToUpper = () => {};

    const { topDist } = this.props;
    scrollWarp.top = topDist + 'px';
    height = getWindowHeight(false, topDist);
  }

  /**
   * 在已经装载的组件接收到新属性前调用。若你需要更新状态响应属性改变，
   * 你可能需对比 this.props 和 nextProps 并在该方法中使用 this.setState() 处理状态改变。
   * @param nextProps
   */
  componentWillReceiveProps(nextProps) {}

  /**
   * 当接收到新的 props 或 state 时，componentWillUpdate() 在渲染之前立即被调用。
   * 在更新发生之前，使用这个方法可以作为执行准备更新的一个好机会。
   * 这个方法在第一次渲染时不会被调用。注意，这里不能调用 this.setState()
   * @param nextProps
   * @param nextState
   */
  componentWillUpdate(nextProps, nextState) {}

  onTabClick(tab) {}

  render() {
    const { datas } = this.props;
    return <ScrollView style={[_getStyle(scrollWarp), { height }]} data={datas} scrollY onScrollToUpper={this.onScrollToUpper} onScrollToLower={this.onScrollToLower}>
        <View style={_styleSheet["list"]}>
          {datas.map((item, index) => {
          return <Item item={item} index={index} key={index} />;
        })}
          {datas.length > 0 && <View style={_styleSheet["list__btm"]}>
            <Text style={_styleSheet["list__btm-txt"]}>正在加载中</Text>
            <Image mode="widthFix" src={loadingIcon} style={_styleSheet["list__btm-icon"]}></Image>
          </View>}
        </View>
      </ScrollView>;
  }

}) || _class) || _class);
List.defaultProps = {
  datas: []
};
export { List as default };