/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconLingcunwei = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M931.2 467.2c-12.8 0-22.4 9.6-22.4 22.4l0 329.6c0 22.4-19.2 41.6-41.6 41.6l-732.8 0c-22.4 0-41.6-19.2-41.6-41.6l0-563.2c0-22.4 19.2-41.6 41.6-41.6l294.4 0c12.8 0 22.4-9.6 22.4-22.4 0-12.8-9.6-22.4-22.4-22.4l-294.4 0c-48 0-89.6 38.4-89.6 89.6l0 563.2c0 48 38.4 89.6 89.6 89.6l732.8 0c48 0 89.6-38.4 89.6-89.6l0-329.6C956.8 480 947.2 467.2 931.2 467.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M969.6 265.6l-96-108.8c-9.6-9.6-22.4-9.6-35.2-3.2-9.6 9.6-9.6 22.4-3.2 35.2l48 57.6c-67.2 0-147.2 16-224 51.2-134.4 64-227.2 185.6-259.2 371.2-3.2 12.8 6.4 25.6 19.2 28.8 12.8 3.2 25.6-6.4 28.8-19.2 28.8-169.6 112-278.4 230.4-336 44.8-22.4 96-35.2 147.2-41.6 25.6-3.2 51.2-6.4 73.6-3.2l-83.2 73.6c-9.6 9.6-9.6 22.4-3.2 35.2 9.6 9.6 22.4 9.6 35.2 3.2l115.2-99.2C979.2 291.2 979.2 275.2 969.6 265.6z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconLingcunwei.defaultProps = {
  size: 18,
};

export default IconLingcunwei;
