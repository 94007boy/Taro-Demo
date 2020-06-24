import React from 'react';
/* eslint-disable */

import { getIconColor } from "./helper";

const DEFAULT_STYLE = {
  display: 'block'
};

const IconWodedingdan = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path d="M883.2 60.8l-89.6 0c-12.8 0-25.6 9.6-25.6 25.6s9.6 25.6 25.6 25.6l89.6 0c25.6 0 48 22.4 48 48l0 713.6c0 25.6-22.4 48-48 48l-736 0c-25.6 0-48-22.4-48-48l0-713.6c0-25.6 22.4-48 48-48l99.2 0c12.8 0 25.6-9.6 25.6-25.6s-9.6-25.6-25.6-25.6l-99.2 0c-54.4 0-96 41.6-96 96l0 713.6c0 54.4 41.6 96 96 96l736 0c54.4 0 96-41.6 96-96l0-713.6C979.2 102.4 934.4 60.8 883.2 60.8z" fill={getIconColor(color, 0, '#333333')} />
      <path d="M393.6 108.8l240 0c12.8 0 25.6-9.6 25.6-25.6s-9.6-25.6-25.6-25.6l-240 0c-12.8 0-25.6 9.6-25.6 25.6S380.8 108.8 393.6 108.8z" fill={getIconColor(color, 1, '#333333')} />
      <path d="M294.4 345.6l464 0c12.8 0 25.6-9.6 25.6-25.6s-9.6-25.6-25.6-25.6l-464 0c-12.8 0-25.6 9.6-25.6 25.6S278.4 345.6 294.4 345.6z" fill={getIconColor(color, 2, '#333333')} />
      <path d="M294.4 540.8l464 0c12.8 0 25.6-9.6 25.6-25.6s-9.6-25.6-25.6-25.6l-464 0c-12.8 0-25.6 9.6-25.6 25.6S278.4 540.8 294.4 540.8z" fill={getIconColor(color, 3, '#333333')} />
      <path d="M294.4 736l464 0c12.8 0 25.6-9.6 25.6-25.6s-9.6-25.6-25.6-25.6l-464 0c-12.8 0-25.6 9.6-25.6 25.6S278.4 736 294.4 736z" fill={getIconColor(color, 4, '#333333')} />
    </svg>;
};

IconWodedingdan.defaultProps = {
  size: 18
};

export default IconWodedingdan;