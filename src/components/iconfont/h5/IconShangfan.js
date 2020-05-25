/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconShangfan = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M873.6 419.2l-355.2-361.6c-9.6-9.6-22.4-9.6-32 0l-355.2 368c-9.6 9.6-9.6 22.4 0 32 9.6 9.6 22.4 9.6 32 0l316.8-329.6 0 828.8c0 12.8 9.6 22.4 22.4 22.4s22.4-9.6 22.4-22.4l0-822.4 310.4 316.8c9.6 9.6 22.4 9.6 32 0C883.2 441.6 883.2 425.6 873.6 419.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconShangfan.defaultProps = {
  size: 18,
};

export default IconShangfan;
