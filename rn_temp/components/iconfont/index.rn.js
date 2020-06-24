import Taro from '@tarojs/taro-rn';
import React from 'react';

import Icon from "./rn/index"; /* eslint-disable */

const IconFont = props => {
  const { name, size, color } = props;

  return <Icon name={name} size={parseFloat(Taro.pxTransform(size))} color={color} />;
};

IconFont.defaultProps = {
  size: 18
};

export default IconFont;