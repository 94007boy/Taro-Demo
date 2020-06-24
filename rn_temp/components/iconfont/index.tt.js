import Taro from '@tarojs/taro-rn';
import React from 'react';


const IconFont = props => {
  const { name, size, color } = props;

  return <iconfont name={name} size={parseFloat(Taro.pxTransform(size))} color={color} />;
}; /* eslint-disable */

IconFont.defaultProps = {
  size: 18
};

IconFont.config = {
  usingComponents: {
    iconfont: './tt/tt'
  }
};

export default IconFont;