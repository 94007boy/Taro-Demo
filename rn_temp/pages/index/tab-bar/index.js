import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text } from "@tarojs/components-rn";
import classNames from 'classnames';
import indexStyleSheet from "./index_styles";

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

let TabBar = class TabBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentId: '127398'
    };
  }

  onTabClick(tab) {
    console.log('onTabClick >>>');
    this.setState({ currentId: tab.id });
    this.props.onTabClick(tab);
  }

  render() {
    const { tabs } = this.props;
    const { currentId } = this.state;
    return <View style={_styleSheet["tabBar"]}>
        {tabs.map(tab => {
        const active = tab.id === currentId;
        return <View key={tab.id} onClick={this.onTabClick.bind(this, tab)} style={_getStyle(classNames('tabBar__item', active && 'tabBar__item--active'))}>
              <Text style={_getStyle(classNames('tabBar__item-name', active && 'tabBar__item-name--active'))}>{tab.name}</Text>
            </View>;
      })}
      </View>;
  }

};
TabBar.defaultProps = {
  tabs: []
};


export default TabBar;