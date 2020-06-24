import React from 'react';
/* eslint-disable */

import { getIconColor } from "./helper";

const DEFAULT_STYLE = {
  display: 'block'
};

const IconShuaxin = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path d="M960 630.4c-12.8-3.2-25.6 3.2-32 12.8-76.8 204.8-320 307.2-544 227.2-224-80-342.4-307.2-265.6-512 76.8-204.8 320-307.2 544-227.2 92.8 32 172.8 92.8 224 172.8l-92.8 0c-12.8 0-25.6 9.6-25.6 22.4 0 12.8 9.6 22.4 25.6 22.4l153.6 0c12.8 0 25.6-9.6 25.6-22.4l0-140.8c0-12.8-9.6-22.4-25.6-22.4-12.8 0-25.6 9.6-25.6 22.4l0 89.6c-57.6-86.4-140.8-150.4-246.4-188.8-249.6-86.4-518.4 28.8-608 256-86.4 230.4 44.8 486.4 294.4 572.8 249.6 86.4 518.4-28.8 608-256C979.2 649.6 972.8 636.8 960 630.4z" fill={getIconColor(color, 0, '#333333')} />
    </svg>;
};

IconShuaxin.defaultProps = {
  size: 18
};

export default IconShuaxin;