/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconYijianfankui = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M873.6 275.2c-16 0-25.6 12.8-25.6 25.6l0 550.4c0 28.8-22.4 51.2-51.2 51.2l-643.2 0c-28.8 0-51.2-22.4-51.2-51.2l0-646.4c0-28.8 22.4-51.2 51.2-51.2l521.6 0c16 0 25.6-12.8 25.6-25.6 0-12.8-12.8-25.6-25.6-25.6l-521.6 0c-57.6 0-105.6 48-105.6 102.4l0 646.4c0 57.6 48 102.4 105.6 102.4l643.2 0c57.6 0 105.6-44.8 105.6-102.4l0-550.4C899.2 284.8 889.6 275.2 873.6 275.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M483.2 361.6l-278.4 0c-16 0-25.6 12.8-25.6 25.6 0 12.8 12.8 25.6 25.6 25.6l278.4 0c16 0 25.6-12.8 25.6-25.6C508.8 371.2 496 361.6 483.2 361.6z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M179.2 566.4c0 12.8 12.8 25.6 25.6 25.6l460.8 0c16 0 25.6-12.8 25.6-25.6 0-12.8-12.8-25.6-25.6-25.6l-460.8 0C192 540.8 179.2 553.6 179.2 566.4z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M969.6 57.6c-9.6-9.6-25.6-9.6-38.4 0l-326.4 323.2c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 38.4 0l326.4-323.2C979.2 83.2 979.2 67.2 969.6 57.6z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </Svg>
  );
};

IconYijianfankui.defaultProps = {
  size: 18,
};

export default IconYijianfankui;
