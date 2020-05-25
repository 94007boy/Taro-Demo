/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconBofang = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M482.4832 123.694933l293.76 155.579734c124.945067 66.176 172.586667 221.102933 106.414933 346.048a256 256 0 0 1-96.439466 100.842666l-293.76 172.7872c-121.8688 71.68-278.7712 30.997333-350.4512-90.8672A256 256 0 0 1 106.666667 678.293333V349.9264c0-141.384533 114.615467-256 256-256a256 256 0 0 1 119.816533 29.768533z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconBofang.defaultProps = {
  size: 18,
};

export default IconBofang;
