import React from 'react';
/* eslint-disable */

import { getIconColor } from "./helper";

const DEFAULT_STYLE = {
  display: 'block'
};

const IconPinglun = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path d="M379.733333 913.066667h-8.533333c-21.333333-4.266667-38.4-17.066667-46.933333-34.133334l-29.866667-72.533333H226.133333c-76.8 0-140.8-64-140.8-140.8V251.733333C85.333333 170.666667 149.333333 110.933333 226.133333 110.933333h571.733334C874.666667 110.933333 938.666667 170.666667 938.666667 251.733333v413.866667c0 76.8-64 140.8-140.8 140.8h-307.2l-64 85.333333c-8.533333 12.8-25.6 21.333333-46.933334 21.333334zM226.133333 174.933333c-42.666667 0-76.8 34.133333-76.8 76.8v413.866667c0 42.666667 34.133333 76.8 76.8 76.8h110.933334l42.666666 102.4 76.8-102.4h337.066667c42.666667 0 76.8-34.133333 76.8-76.8V251.733333c0-42.666667-34.133333-76.8-76.8-76.8H226.133333z" fill={getIconColor(color, 0, '#333333')} />
      <path d="M285.866667 469.333333m-51.2 0a51.2 51.2 0 1 0 102.4 0 51.2 51.2 0 1 0-102.4 0Z" fill={getIconColor(color, 1, '#333333')} />
      <path d="M512 469.333333m-51.2 0a51.2 51.2 0 1 0 102.4 0 51.2 51.2 0 1 0-102.4 0Z" fill={getIconColor(color, 2, '#333333')} />
      <path d="M738.133333 469.333333m-51.2 0a51.2 51.2 0 1 0 102.4 0 51.2 51.2 0 1 0-102.4 0Z" fill={getIconColor(color, 3, '#333333')} />
    </svg>;
};

IconPinglun.defaultProps = {
  size: 18
};

export default IconPinglun;