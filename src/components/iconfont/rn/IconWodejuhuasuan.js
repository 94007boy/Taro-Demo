/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconWodejuhuasuan = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M620.8 486.4c54.4-38.4 92.8-102.4 92.8-172.8 0-118.4-96-211.2-211.2-211.2-115.2 0-211.2 96-211.2 211.2 0 73.6 38.4 140.8 96 176-204.8 48-355.2 214.4-339.2 406.4 0 0 0-3.2 0 0l0 0c0 0 0 9.6 3.2 12.8 3.2 6.4 12.8 12.8 19.2 12.8l880 0c9.6 0 19.2-9.6 22.4-22.4l0 0 0 0c0-6.4 0 0 0 0C992 697.6 832 528 620.8 486.4zM336 310.4c0-89.6 73.6-163.2 163.2-163.2 89.6 0 163.2 73.6 163.2 163.2s-73.6 163.2-163.2 163.2C409.6 473.6 336 400 336 310.4zM96 870.4c-9.6-192 179.2-348.8 412.8-348.8l3.2 0c233.6 0 422.4 153.6 416 348.8L96 870.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconWodejuhuasuan.defaultProps = {
  size: 18,
};

export default IconWodejuhuasuan;
