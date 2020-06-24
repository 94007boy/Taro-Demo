import React from 'react';
/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from "./helper";

const IconXiafan = ({ size, color, ...rest }) => {
  return <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path d="M921.6 563.2c-9.6-9.6-25.6-9.6-35.2 0L544 896l0-822.4c0-12.8-9.6-22.4-25.6-22.4s-25.6 9.6-25.6 22.4L492.8 896l-342.4-339.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 22.4 0 32l384 377.6c6.4 6.4 12.8 6.4 19.2 6.4 0 0 0 0 0 0 3.2 0 3.2 0 6.4 0 0 0 0 0 3.2 0 3.2 0 6.4-3.2 9.6-6.4l380.8-371.2C931.2 588.8 931.2 572.8 921.6 563.2z" fill={getIconColor(color, 0, '#333333')} />
    </Svg>;
};

IconXiafan.defaultProps = {
  size: 18
};

export default IconXiafan;