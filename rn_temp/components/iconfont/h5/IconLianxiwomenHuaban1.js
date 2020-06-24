import React from 'react';
/* eslint-disable */

import { getIconColor } from "./helper";

const DEFAULT_STYLE = {
  display: 'block'
};

const IconLianxiwomenHuaban1 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path d="M364.5 488.8m-33.8 0a33.8 33.8 0 1 0 67.6 0 33.8 33.8 0 1 0-67.6 0Z" fill={getIconColor(color, 0, '#27A27D')} />
      <path d="M512 488.8m-33.8 0a33.8 33.8 0 1 0 67.6 0 33.8 33.8 0 1 0-67.6 0Z" fill={getIconColor(color, 1, '#27A27D')} />
      <path d="M659.5 488.8m-33.8 0a33.8 33.8 0 1 0 67.6 0 33.8 33.8 0 1 0-67.6 0Z" fill={getIconColor(color, 2, '#27A27D')} />
      <path d="M897.8 488.8C897.8 276.1 724.7 103 512 103S126.2 276.1 126.2 488.8c0 83.4 26.2 162.7 75.7 229.5 7.4 10 21.5 12.1 31.5 4.7s12.1-21.5 4.7-31.5c-43.7-59-66.8-129.1-66.8-202.7C171.2 300.9 324.1 148 512 148s340.8 152.9 340.8 340.8c0 182-143.5 330.7-323.2 339.9-9.9-25-34.2-42.7-62.6-42.7-37.2 0-67.5 30.3-67.5 67.5S429.8 921 467 921c30.2 0 55.5-20 64.1-47.4 203.8-10 366.7-178.5 366.7-384.8zM467 876c-12.4 0-22.5-10.1-22.5-22.5S454.6 831 467 831s22.5 10.1 22.5 22.5S479.4 876 467 876z" fill={getIconColor(color, 3, '#333333')} />
    </svg>;
};

IconLianxiwomenHuaban1.defaultProps = {
  size: 18
};

export default IconLianxiwomenHuaban1;