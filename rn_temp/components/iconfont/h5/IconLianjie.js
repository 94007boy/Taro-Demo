import React from 'react';
/* eslint-disable */

import { getIconColor } from "./helper";

const DEFAULT_STYLE = {
  display: 'block'
};

const IconLianjie = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path d="M588.8 473.6l-9.6-6.4c-9.6-9.6-25.6-6.4-32 3.2-9.6 9.6-6.4 25.6 3.2 32l9.6 6.4c19.2 16 19.2 41.6 3.2 64l-12.8 16c-9.6 9.6-6.4 25.6 3.2 32 9.6 9.6 25.6 6.4 32-3.2l12.8-16C630.4 563.2 627.2 505.6 588.8 473.6z" fill={getIconColor(color, 0, '#333333')} />
      <path d="M448 720l-140.8 176c-16 19.2-44.8 22.4-60.8 9.6l-137.6-112c-19.2-16-19.2-41.6-3.2-64l265.6-326.4c16-19.2 44.8-22.4 60.8-9.6l12.8 9.6c9.6 9.6 25.6 6.4 32-3.2 9.6-9.6 6.4-25.6-3.2-32l-12.8-9.6c-38.4-32-96-22.4-128 16l-265.6 326.4c-32 38.4-28.8 96 9.6 128l137.6 112c38.4 32 96 22.4 128-16l140.8-176c9.6-9.6 6.4-25.6-3.2-32C470.4 707.2 457.6 710.4 448 720z" fill={getIconColor(color, 1, '#333333')} />
      <path d="M944 275.2l-128-105.6c-41.6-32-99.2-25.6-131.2 12.8l-262.4 326.4c-32 41.6-25.6 99.2 12.8 131.2l128 105.6c41.6 32 99.2 25.6 131.2-12.8l262.4-326.4C992 364.8 985.6 307.2 944 275.2zM921.6 377.6l-262.4 326.4c-16 19.2-44.8 22.4-67.2 6.4l-128-105.6c-19.2-16-22.4-44.8-6.4-67.2l262.4-326.4c16-19.2 44.8-22.4 67.2-6.4l128 105.6C934.4 326.4 937.6 355.2 921.6 377.6z" fill={getIconColor(color, 2, '#333333')} />
    </svg>;
};

IconLianjie.defaultProps = {
  size: 18
};

export default IconLianjie;