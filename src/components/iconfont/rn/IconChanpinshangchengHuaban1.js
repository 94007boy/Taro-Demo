/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconChanpinshangchengHuaban1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M776.2 894.5H247.8c-30.9 0-60.8-12.9-82-35.5-21.2-22.5-32.2-53.2-30.3-84l33.8-540c3.7-59.2 53-105.5 112.3-105.5h460.9c59.3 0 108.6 46.3 112.3 105.5l33.8 540c1.9 30.9-9.1 61.5-30.3 84-21.3 22.6-51.2 35.5-82.1 35.5z m-494.7-720c-35.6 0-65.1 27.8-67.4 63.3l-33.8 540c-1.2 18.8 5.3 36.7 18.2 50.4 12.9 13.7 30.4 21.3 49.2 21.3h528.4c18.8 0 36.3-7.6 49.2-21.3 12.9-13.7 19.3-31.6 18.2-50.4l-33.8-540c-2.2-35.5-31.8-63.3-67.4-63.3H281.5z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 504.7c-114.4 0-207.5-93.1-207.5-207.5 0-12.4 10.1-22.5 22.5-22.5s22.5 10.1 22.5 22.5c0 89.6 72.9 162.5 162.5 162.5s162.5-72.9 162.5-162.5c0-12.4 10.1-22.5 22.5-22.5s22.5 10.1 22.5 22.5c0 114.5-93.1 207.5-207.5 207.5z"
        fill={getIconColor(color, 1, '#27A27D')}
      />
    </Svg>
  );
};

IconChanpinshangchengHuaban1.defaultProps = {
  size: 18,
};

export default IconChanpinshangchengHuaban1;
