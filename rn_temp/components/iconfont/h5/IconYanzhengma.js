import React from 'react';
/* eslint-disable */

import { getIconColor } from "./helper";

const DEFAULT_STYLE = {
  display: 'block'
};

const IconYanzhengma = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path d="M477.8 627.3c-5.8 0-11.5-2.2-15.9-6.6L344.8 503.6c-8.8-8.8-8.8-23 0-31.8s23-8.8 31.8 0L477.8 573l169.7-169.6c8.8-8.8 23-8.8 31.8 0s8.8 23 0 31.8L493.7 620.7a22.5 22.5 0 0 1-15.9 6.6z" fill={getIconColor(color, 0, '#27A27D')} />
      <path d="M513.3 915.1c-1.2 0-2.4-0.1-3.6-0.3l-7.9-1.3C300.7 867.7 161.3 697 161.3 498V240.5c0-12.4 10.1-22.5 22.5-22.5h31.5c92.2-3.6 184.8-36 266.7-93.6l17.5-11.7c7.6-5.1 17.4-5.1 25 0l17.1 11.4c84.9 58.8 175.4 90.3 269.3 93.9h29.3c12.4 0 22.5 10.1 22.5 22.5V498c0 198.8-138.9 369.5-337.8 415.2l-7.3 1.4c-1.4 0.4-2.8 0.5-4.3 0.5zM206.3 263v235c0 177.8 125.1 330.5 304.2 371.4l2.4 0.4 2.7-0.5C693.2 828.4 817.7 675.7 817.7 498V263H810c-103.5-4-202.1-38.2-293.8-101.7l-4.3-2.8-4.6 3.1C418.8 223.8 317.9 259 216.2 263h-9.9z" fill={getIconColor(color, 1, '#333333')} />
    </svg>;
};

IconYanzhengma.defaultProps = {
  size: 18
};

export default IconYanzhengma;