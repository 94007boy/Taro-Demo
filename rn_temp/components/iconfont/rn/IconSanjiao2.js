import React from 'react';
/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from "./helper";

const IconSanjiao2 = ({ size, color, ...rest }) => {
  return <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path d="M951.1626 819.412438 72.8374 819.412438 511.999488 204.586538Z" fill={getIconColor(color, 0, '#333333')} />
    </Svg>;
};

IconSanjiao2.defaultProps = {
  size: 18
};

export default IconSanjiao2;