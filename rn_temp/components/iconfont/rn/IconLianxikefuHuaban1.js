import React from 'react';
/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from "./helper";

const IconLianxikefuHuaban1 = ({ size, color, ...rest }) => {
  return <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path d="M415.4 838H117.6c-12.4 0-22.5-10.1-22.5-22.5V709.2c0-12.4 10.1-22.5 22.5-22.5s22.5 10.1 22.5 22.5V793h275.3c12.4 0 22.5 10.1 22.5 22.5S427.8 838 415.4 838z" fill={getIconColor(color, 0, '#27A27D')} />
      <Path d="M475.3 896.1c-45.5 0-82.5-37-82.5-82.5s37-82.5 82.5-82.5 82.5 37 82.5 82.5-37 82.5-82.5 82.5z m0-120c-20.7 0-37.5 16.8-37.5 37.5s16.8 37.5 37.5 37.5 37.5-16.8 37.5-37.5-16.8-37.5-37.5-37.5z" fill={getIconColor(color, 1, '#27A27D')} />
      <Path d="M836.4 498.9c-12.4 0-22.5-10.1-22.5-22.5 0-167.3-136.1-303.5-303.5-303.5S206.9 309 206.9 476.4c0 12.4-10.1 22.5-22.5 22.5s-22.5-10.1-22.5-22.5c0-192.2 156.3-348.5 348.5-348.5s348.5 156.3 348.5 348.5c0 12.4-10.1 22.5-22.5 22.5z" fill={getIconColor(color, 2, '#333333')} />
      <Path d="M257.6 731.7h-140c-12.4 0-22.5-10.1-22.5-22.5V480.1c0-12.4 10.1-22.5 22.5-22.5h140c12.4 0 22.5 10.1 22.5 22.5v229.1c0 12.5-10.1 22.5-22.5 22.5z m-117.5-45h95V502.6h-95v184.1zM906.4 731.7h-140c-12.4 0-22.5-10.1-22.5-22.5V480.1c0-12.4 10.1-22.5 22.5-22.5h140c12.4 0 22.5 10.1 22.5 22.5v229.1c0 12.5-10.1 22.5-22.5 22.5z m-117.5-45h95V502.6h-95v184.1z" fill={getIconColor(color, 3, '#333333')} />
    </Svg>;
};

IconLianxikefuHuaban1.defaultProps = {
  size: 18
};

export default IconLianxikefuHuaban1;