import React from 'react';
/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from "./helper";

const IconXiaoxizhongxin = ({ size, color, ...rest }) => {
  return <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path d="M585.6 905.6 585.6 905.6c25.6-32 38.4-44.8 41.6-44.8 208-38.4 345.6-198.4 345.6-396.8 3.2-227.2-204.8-406.4-460.8-406.4s-464 179.2-464 406.4c0 198.4 140.8 358.4 345.6 396.8 3.2 0 16 12.8 41.6 44.8l0 0c32 41.6 51.2 64 73.6 64S550.4 947.2 585.6 905.6M620.8 803.2c-19.2 3.2-32 19.2-67.2 64l0 0c-22.4 25.6-41.6 44.8-41.6 44.8l-9.6-9.6c-6.4-6.4-16-19.2-25.6-32-38.4-48-51.2-64-70.4-67.2-185.6-32-307.2-172.8-307.2-345.6 0-192 185.6-352 416-352s416 160 416 352C928 633.6 806.4 771.2 620.8 803.2z" fill={getIconColor(color, 0, '#333333')} />
      <Path d="M281.6 470.4a1.4 1.5 0 1 0 89.6 0 1.4 1.5 0 1 0-89.6 0Z" fill={getIconColor(color, 1, '#333333')} />
      <Path d="M467.2 470.4a1.4 1.5 0 1 0 89.6 0 1.4 1.5 0 1 0-89.6 0Z" fill={getIconColor(color, 2, '#333333')} />
      <Path d="M652.8 470.4a1.4 1.5 0 1 0 89.6 0 1.4 1.5 0 1 0-89.6 0Z" fill={getIconColor(color, 3, '#333333')} />
    </Svg>;
};

IconXiaoxizhongxin.defaultProps = {
  size: 18
};

export default IconXiaoxizhongxin;