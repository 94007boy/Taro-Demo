/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconXinxiHuaban1 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M849.5 838.3h-675c-37.2 0-67.5-30.3-67.5-67.5V253.3c0-37.2 30.3-67.5 67.5-67.5h675c37.2 0 67.5 30.3 67.5 67.5v517.5c0 37.2-30.3 67.5-67.5 67.5z m-675-607.5c-12.4 0-22.5 10.1-22.5 22.5v517.5c0 12.4 10.1 22.5 22.5 22.5h675c12.4 0 22.5-10.1 22.5-22.5V253.3c0-12.4-10.1-22.5-22.5-22.5h-675z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M272.2 600.5c-6.5 0-12.9-2.8-17.3-8.1-7.9-9.6-6.6-23.8 3-31.7l119.9-99.3c9.6-7.9 23.8-6.6 31.7 3 7.9 9.6 6.6 23.8-3 31.7l-119.9 99.3c-4.3 3.5-9.3 5.1-14.4 5.1zM751.8 600.5c-5.1 0-10.1-1.7-14.3-5.2L617.6 496c-9.6-7.9-10.9-22.1-3-31.7 7.9-9.5 22.1-10.9 31.7-3l119.9 99.3c9.6 7.9 10.9 22.1 3 31.7-4.5 5.5-10.9 8.2-17.4 8.2z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M512 587.1c-15.3 0-30.6-5.2-43.1-15.5L257.8 396.7c-9.6-7.9-10.9-22.1-3-31.7 7.9-9.5 22.1-10.9 31.7-3l211.1 174.9c8.3 6.9 20.4 6.9 28.7 0L737.4 362c9.6-7.9 23.8-6.6 31.7 3 7.9 9.6 6.6 23.8-3 31.7l-211 174.9a67.706 67.706 0 0 1-43.1 15.5z"
        fill={getIconColor(color, 2, '#27A27D')}
      />
    </svg>
  );
};

IconXinxiHuaban1.defaultProps = {
  size: 18,
};

export default IconXinxiHuaban1;
