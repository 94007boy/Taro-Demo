import React from 'react';
/* eslint-disable */

import { getIconColor } from "./helper";

const DEFAULT_STYLE = {
  display: 'block'
};

const IconXuanxiang = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path d="M512 329.142857a73.142857 73.142857 0 1 0-71.314286-73.142857A73.142857 73.142857 0 0 0 512 329.142857z m-73.142857 182.857143a73.142857 73.142857 0 1 0 73.142857-73.142857 73.142857 73.142857 0 0 0-73.142857 73.142857z m73.142857 329.142857a73.142857 73.142857 0 1 0-73.142857-73.142857 73.142857 73.142857 0 0 0 73.142857 73.142857z" fill={getIconColor(color, 0, '#333333')} />
    </svg>;
};

IconXuanxiang.defaultProps = {
  size: 18
};

export default IconXuanxiang;