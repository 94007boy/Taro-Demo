/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconDashang = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 128c-211.7 0-384 172.3-384 384s172.3 384 384 384 384-172.3 384-384-172.3-384-384-384z m0 717.4c-183.8 0-333.4-149.6-333.4-333.4S328.2 178.6 512 178.6 845.4 328.2 845.4 512 695.8 845.4 512 845.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M661.6 306.7c-9.9-9.9-25.9-9.9-35.8 0L512 420.6 398.2 306.7c-9.9-9.9-25.9-9.9-35.8 0-9.9 9.9-9.9 25.9 0 35.8l87.3 87.3h-69.4c-14 0-25.3 11.3-25.3 25.3s11.3 25.3 25.3 25.3h106.4v68.3H380.3c-14 0-25.3 11.3-25.3 25.3s11.3 25.3 25.3 25.3h106.4v100c0 14 11.3 25.3 25.3 25.3s25.3-11.3 25.3-25.3v-100h106.4c14 0 25.3-11.3 25.3-25.3s-11.3-25.3-25.3-25.3H537.3v-68.3h106.4c14 0 25.3-11.3 25.3-25.3s-11.3-25.3-25.3-25.3h-69.4l87.3-87.3c9.9-9.8 9.9-25.9 0-35.8z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconDashang.defaultProps = {
  size: 18,
};

export default IconDashang;
