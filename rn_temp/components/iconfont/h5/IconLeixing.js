import React from 'react';
/* eslint-disable */

import { getIconColor } from "./helper";

const DEFAULT_STYLE = {
  display: 'block'
};

const IconLeixing = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path d="M540.4 917.2c-16.9 0-32.9-6.6-44.8-18.6L125.3 528.4c-13.8-13.8-20.6-33.6-18.1-53l35.9-277.5c3.7-28.6 26.2-51.1 54.8-54.8l277.5-35.9c19.4-2.4 39.2 4.3 53 18.1l370.3 370.3c24.7 24.7 24.7 65 0 89.7L585.3 898.7c-12 11.9-27.9 18.5-44.9 18.5z m-56.8-765.5c-0.8 0-1.5 0-2.3 0.1l-277.5 35.9c-8.3 1.1-14.8 7.6-15.9 15.9L152 481.1c-0.7 5.7 1.2 11.3 5.2 15.4l370.3 370.3c7 7 19.1 7 26 0l313.4-313.4c7.2-7.2 7.2-18.9 0-26L496.6 157.1c-3.4-3.4-8.2-5.4-13-5.4z m399.2 417.6h0.2-0.2z" fill={getIconColor(color, 0, '#333333')} />
      <path d="M363.7 460c-24.7 0-49.4-9.4-68.1-28.2-18.2-18.2-28.2-42.4-28.2-68.2 0-25.7 10-50 28.2-68.1 37.6-37.6 98.7-37.6 136.3 0 37.6 37.6 37.6 98.7 0 136.3-18.8 18.8-43.5 28.2-68.2 28.2z m0-147.7c-13.2 0-26.3 5-36.3 15-9.7 9.7-15.1 22.6-15.1 36.3s5.3 26.6 15.1 36.3c20 20 52.6 20 72.7 0 20-20 20-52.6 0-72.7-10.1-9.9-23.2-14.9-36.4-14.9z" fill={getIconColor(color, 1, '#27A27D')} />
    </svg>;
};

IconLeixing.defaultProps = {
  size: 18
};

export default IconLeixing;