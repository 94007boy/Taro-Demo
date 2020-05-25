/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconFenxiangHuaban1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M808.1 873H215.8c-35.7 0-64.8-29.1-64.8-64.8V215.8c0-35.7 29.1-64.8 64.8-64.8H512c12.4 0 22.5 10.1 22.5 22.5S524.4 196 512 196H215.8c-10.9 0-19.8 8.9-19.8 19.8v592.3c0 10.9 8.9 19.8 19.8 19.8h592.3c10.9 0 19.8-8.9 19.8-19.8V512c0-12.4 10.1-22.5 22.5-22.5S873 499.6 873 512v296.1c0 35.8-29.1 64.9-64.9 64.9z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M858.7 210.2l-145.2-57.6c-11.6-4.6-24.6 1.1-29.2 12.6-4.6 11.5 1.1 24.6 12.6 29.2l86.2 34.2c-78.9 23-235.7 90.1-292.6 269-3.8 11.8 2.8 24.5 14.6 28.3 2.3 0.7 4.6 1.1 6.8 1.1 9.5 0 18.4-6.1 21.4-15.7 54.1-170.1 216.3-227.5 278.3-243.5l-39.8 100.3c-4.6 11.5 1.1 24.6 12.6 29.2 2.7 1.1 5.5 1.6 8.3 1.6 9 0 17.4-5.4 20.9-14.2l57.6-145.2c4.8-11.6-0.9-24.7-12.5-29.3z"
        fill={getIconColor(color, 1, '#27A27D')}
      />
    </Svg>
  );
};

IconFenxiangHuaban1.defaultProps = {
  size: 18,
};

export default IconFenxiangHuaban1;
