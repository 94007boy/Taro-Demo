import React from 'react';
/* eslint-disable */

import { getIconColor } from "./helper";

const DEFAULT_STYLE = {
  display: 'block'
};

const IconShoujiHuaban1 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path d="M786.5 101h-549c-24.8 0-45 20.2-45 45v732c0 24.8 20.2 45 45 45h549c24.8 0 45-20.2 45-45V146c0-24.8-20.2-45-45-45z m0 45v507.7h-549V146h549z m-549 732V698.7h549V878h-549z" fill={getIconColor(color, 0, '#333333')} />
      <path d="M560.3 765.9h-96.7c-12.4 0-22.5 10.1-22.5 22.5s10.1 22.5 22.5 22.5h96.7c12.4 0 22.5-10.1 22.5-22.5s-10-22.5-22.5-22.5z" fill={getIconColor(color, 1, '#27A27D')} />
    </svg>;
};

IconShoujiHuaban1.defaultProps = {
  size: 18
};

export default IconShoujiHuaban1;