import React from 'react';
/* eslint-disable */

import { getIconColor } from "./helper";

const DEFAULT_STYLE = {
  display: 'block'
};

const IconWodeyouhuiquan = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path d="M876.8 166.4l-726.4 0c-57.6 0-102.4 44.8-102.4 102.4l0 118.4 0 0 0 48c0 0 22.4 0 25.6 0 25.6 0 51.2 22.4 51.2 54.4 0 28.8-22.4 54.4-51.2 54.4-6.4 0-25.6 0-25.6 0l0 44.8 0 0 0 6.4 0 118.4c0 57.6 44.8 102.4 102.4 102.4l726.4 0c57.6 0 102.4-44.8 102.4-102.4l0-118.4 0-6.4 0-44.8c0 0-19.2 0-22.4 0-25.6 0-51.2-22.4-51.2-54.4 0-28.8 22.4-54.4 51.2-54.4 6.4 0 25.6 0 22.4 0L979.2 384l0-3.2 0-115.2C976 211.2 931.2 166.4 876.8 166.4zM851.2 486.4c0 48 32 86.4 73.6 99.2l0 121.6c0 28.8-22.4 51.2-51.2 51.2l-726.4 0c-28.8 0-51.2-22.4-51.2-51.2l0-118.4 0 0c51.2-6.4 76.8-54.4 76.8-102.4 0-48-32-92.8-76.8-102.4l0-115.2c0-28.8 22.4-51.2 51.2-51.2l726.4 0c28.8 0 51.2 22.4 51.2 51.2l0 118.4C883.2 396.8 851.2 438.4 851.2 486.4z" fill={getIconColor(color, 0, '#333333')} />
      <path d="M614.4 489.6c12.8 0 25.6-12.8 25.6-25.6 0-12.8-12.8-25.6-25.6-25.6l-67.2 0 57.6-57.6c9.6-9.6 9.6-25.6 0-35.2-9.6-9.6-25.6-9.6-35.2 0l-57.6 57.6-57.6-57.6c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l57.6 57.6-64 0c-12.8 0-25.6 12.8-25.6 25.6 0 12.8 12.8 25.6 25.6 25.6l80 0 0 51.2-80 0c-12.8 0-25.6 12.8-25.6 25.6 0 12.8 12.8 25.6 25.6 25.6l80 0 0 51.2c0 12.8 12.8 25.6 25.6 25.6 12.8 0 25.6-12.8 25.6-25.6l0-51.2 76.8 0c12.8 0 25.6-12.8 25.6-25.6 0-12.8-12.8-25.6-25.6-25.6l-76.8 0 0-51.2L614.4 489.6z" fill={getIconColor(color, 1, '#333333')} />
    </svg>;
};

IconWodeyouhuiquan.defaultProps = {
  size: 18
};

export default IconWodeyouhuiquan;