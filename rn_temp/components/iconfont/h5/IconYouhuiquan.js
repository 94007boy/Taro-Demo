import React from 'react';
/* eslint-disable */

import { getIconColor } from "./helper";

const DEFAULT_STYLE = {
  display: 'block'
};

const IconYouhuiquan = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path d="M1024 270.476H921.009c0 34.241-27.758 62-62 62-34.241 0-62-27.759-62-62H0V771h797.009c0-34.242 27.759-62 62-62 34.242 0 62 27.758 62 62H1024V270.476zM389.158 500.942v32.369h-70.793v21.088h70.793v30.923h-70.793v67.903h-43.926v-67.903h-69.347v-30.923h69.347v-21.088h-69.347v-32.369h51.912l-72.237-112.69h50.374l61.985 103.308 61.984-103.308h48.824l-70.792 112.69h52.016zM668.834 712.06h-33.501V610.99h33.501v101.07z m0-149.524h-33.501V461.465h33.501v101.071z m0-149.523h-33.501V311.941h33.501v101.072z" fill={getIconColor(color, 0, '#333333')} />
    </svg>;
};

IconYouhuiquan.defaultProps = {
  size: 18
};

export default IconYouhuiquan;