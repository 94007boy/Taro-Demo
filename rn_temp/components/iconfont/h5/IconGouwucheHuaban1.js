import React from 'react';
/* eslint-disable */

import { getIconColor } from "./helper";

const DEFAULT_STYLE = {
  display: 'block'
};

const IconGouwucheHuaban1 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path d="M783.7 787.9H415.3c-33.1 0-62.2-23.5-69.2-55.9l-74-344.6c-0.2-0.9-0.4-1.7-0.6-2.6l-44.1-205.2c-1.6-7.4-8.2-12.8-15.8-12.8h-81.4c-12.4 0-22.5-10.1-22.5-22.5s10.1-22.5 22.5-22.5h81.4c28.7 0 53.8 20.3 59.8 48.3L312 358.8h533.4c21.5 0 41.5 9.6 55 26.3s18.7 38.3 14.2 59.3L852.9 732c-6.9 32.3-36 55.9-69.2 55.9z m-462-384.1l68.4 318.7c2.5 11.8 13.1 20.3 25.2 20.3h368.4c12.1 0 22.7-8.5 25.2-20.3L870.6 435c1.6-7.6-0.2-15.5-5.2-21.6-4.9-6.1-12.2-9.6-20-9.6H321.7z" fill={getIconColor(color, 0, '#333333')} />
      <path d="M482.5 862.9m-39.4 0a39.4 39.4 0 1 0 78.8 0 39.4 39.4 0 1 0-78.8 0Z" fill={getIconColor(color, 1, '#333333')} />
      <path d="M725.6 862.9m-39.4 0a39.4 39.4 0 1 0 78.8 0 39.4 39.4 0 1 0-78.8 0Z" fill={getIconColor(color, 2, '#333333')} />
      <path d="M704.4 526H503.6c-12.4 0-22.5-10.1-22.5-22.5s10.1-22.5 22.5-22.5h200.8c12.4 0 22.5 10.1 22.5 22.5S716.8 526 704.4 526z" fill={getIconColor(color, 3, '#27A27D')} />
      <path d="M704.4 644.6H503.6c-12.4 0-22.5-10.1-22.5-22.5s10.1-22.5 22.5-22.5h200.8c12.4 0 22.5 10.1 22.5 22.5s-10.1 22.5-22.5 22.5z" fill={getIconColor(color, 4, '#27A27D')} />
    </svg>;
};

IconGouwucheHuaban1.defaultProps = {
  size: 18
};

export default IconGouwucheHuaban1;