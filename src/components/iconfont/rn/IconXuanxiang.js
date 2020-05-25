/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconXuanxiang = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 329.142857a73.142857 73.142857 0 1 0-71.314286-73.142857A73.142857 73.142857 0 0 0 512 329.142857z m-73.142857 182.857143a73.142857 73.142857 0 1 0 73.142857-73.142857 73.142857 73.142857 0 0 0-73.142857 73.142857z m73.142857 329.142857a73.142857 73.142857 0 1 0-73.142857-73.142857 73.142857 73.142857 0 0 0 73.142857 73.142857z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconXuanxiang.defaultProps = {
  size: 18,
};

export default IconXuanxiang;
