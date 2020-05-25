/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconMimaHuaban1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M814.6 405.5H359.9V305.1c0-83.8 68.2-152.1 152.1-152.1s152.1 68.2 152.1 152.1v30.7c0 12.4 10.1 22.5 22.5 22.5s22.5-10.1 22.5-22.5v-30.7C709.1 196.4 620.7 108 512 108s-197.1 88.4-197.1 197.1v100.3H209.4c-12.4 0-22.5 10.1-22.5 22.5v465.5c0 12.4 10.1 22.5 22.5 22.5h605.1c12.4 0 22.5-10.1 22.5-22.5V428c0.1-12.5-10-22.5-22.4-22.5z m-22.5 465.4H231.9V450.5H792v420.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 741.4c12.4 0 22.5-10.1 22.5-22.5V602.5c0-12.4-10.1-22.5-22.5-22.5s-22.5 10.1-22.5 22.5v116.4c0 12.4 10.1 22.5 22.5 22.5z"
        fill={getIconColor(color, 1, '#27A27D')}
      />
    </Svg>
  );
};

IconMimaHuaban1.defaultProps = {
  size: 18,
};

export default IconMimaHuaban1;
