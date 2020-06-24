import React from 'react';
/* eslint-disable */

import { getIconColor } from "./helper";

const DEFAULT_STYLE = {
  display: 'block'
};

const IconSanjiao2 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path d="M951.1626 819.412438 72.8374 819.412438 511.999488 204.586538Z" fill={getIconColor(color, 0, '#333333')} />
    </svg>;
};

IconSanjiao2.defaultProps = {
  size: 18
};

export default IconSanjiao2;