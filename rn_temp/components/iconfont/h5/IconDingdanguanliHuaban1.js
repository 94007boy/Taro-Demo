import React from 'react';
/* eslint-disable */

import { getIconColor } from "./helper";

const DEFAULT_STYLE = {
  display: 'block'
};

const IconDingdanguanliHuaban1 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path d="M582.6 917H253.3c-37.2 0-67.5-30.3-67.5-67.5v-675c0-37.2 30.3-67.5 67.5-67.5h517.5c37.2 0 67.5 30.3 67.5 67.5v486.8c0 141-114.7 255.7-255.7 255.7zM253.3 152c-12.4 0-22.5 10.1-22.5 22.5v675c0 12.4 10.1 22.5 22.5 22.5h329.3c116.2 0 210.7-94.5 210.7-210.7V174.5c0-12.4-10.1-22.5-22.5-22.5H253.3z" fill={getIconColor(color, 0, '#333333')} />
      <path d="M676.6 356.8H347.4c-12.4 0-22.5-10.1-22.5-22.5s10.1-22.5 22.5-22.5h329.1c12.4 0 22.5 10.1 22.5 22.5s-10 22.5-22.4 22.5zM512 491.8H347.4c-12.4 0-22.5-10.1-22.5-22.5s10.1-22.5 22.5-22.5H512c12.4 0 22.5 10.1 22.5 22.5s-10.1 22.5-22.5 22.5z" fill={getIconColor(color, 1, '#27A27D')} />
    </svg>;
};

IconDingdanguanliHuaban1.defaultProps = {
  size: 18
};

export default IconDingdanguanliHuaban1;