import React from 'react';
/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from "./helper";

const IconSousuo = ({ size, color, ...rest }) => {
  return <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path d="M966.4 924.8l-230.4-227.2c60.8-67.2 96-156.8 96-256 0-217.6-176-390.4-390.4-390.4-217.6 0-390.4 176-390.4 390.4 0 217.6 176 390.4 390.4 390.4 99.2 0 188.8-35.2 256-96l230.4 227.2c9.6 9.6 28.8 9.6 38.4 0C979.2 950.4 979.2 934.4 966.4 924.8zM102.4 441.6c0-185.6 150.4-339.2 339.2-339.2s339.2 150.4 339.2 339.2c0 89.6-35.2 172.8-92.8 233.6-3.2 0-3.2 3.2-6.4 3.2-3.2 3.2-3.2 3.2-3.2 6.4-60.8 57.6-144 92.8-233.6 92.8C256 780.8 102.4 627.2 102.4 441.6z" fill={getIconColor(color, 0, '#333333')} />
    </Svg>;
};

IconSousuo.defaultProps = {
  size: 18
};

export default IconSousuo;