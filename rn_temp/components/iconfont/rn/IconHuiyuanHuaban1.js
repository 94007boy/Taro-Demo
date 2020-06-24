import React from 'react';
/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from "./helper";

const IconHuiyuanHuaban1 = ({ size, color, ...rest }) => {
  return <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path d="M512 884.5c-18.3 0-35.3-7.2-48.1-20.2L130.1 524.8c-21.1-21.4-25.4-54.6-10.5-80.7l154.1-270.4c12-21 34.5-34.1 58.6-34.1h359.4c24.2 0 46.7 13.1 58.7 34.1l154 270.3c14.9 26.1 10.6 59.3-10.5 80.7L560.1 864.3c-12.8 13-29.9 20.2-48.1 20.2z m32.1-36h0.2-0.2z m-211.8-664c-8.1 0-15.6 4.4-19.6 11.4l-154 270.4c-5 8.7-3.5 19.8 3.5 26.9L496 832.8c4.3 4.3 10 6.7 16 6.7 6.1 0 11.8-2.4 16-6.7l333.8-339.5c7-7.1 8.5-18.2 3.5-26.9L711.2 195.9c-4-7-11.5-11.4-19.6-11.4H332.3z" fill={getIconColor(color, 0, '#333333')} />
      <Path d="M512 647.5c-5.8 0-11.5-2.2-15.9-6.6L370.8 515.7c-8.8-8.8-8.8-23 0-31.8s23-8.8 31.8 0L512 593.2l109.4-109.4c8.8-8.8 23-8.8 31.8 0s8.8 23 0 31.8L527.9 640.9c-4.4 4.4-10.1 6.6-15.9 6.6z" fill={getIconColor(color, 1, '#27A27D')} />
    </Svg>;
};

IconHuiyuanHuaban1.defaultProps = {
  size: 18
};

export default IconHuiyuanHuaban1;