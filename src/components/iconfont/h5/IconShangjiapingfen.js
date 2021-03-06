/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconShangjiapingfen = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512.3 877.3c-18.8 0-36.6-7.4-50.1-20.9l-291-294.2C117.7 507.7 92.9 433 103 357.3c10.2-75.5 53.9-140.9 119.9-179.5 34.9-20.4 73.6-30.8 115.3-30.8 63.5 0 126.4 25.8 173.6 71.1 80.4-77.1 198-93.7 288.9-40.3 66.5 38.6 110.2 104 119.9 179.6 11.1 75.3-13.4 150-67.3 204.3L562.5 856.3c-13.6 13.5-31.4 21-50.2 21zM338.2 192c-33.5 0-64.6 8.3-92.5 24.6-54 31.6-89.7 85-98.1 146.6-8.2 61.9 12 122.9 55.6 167.3l290.9 294.1c9.9 10 26.3 10 36.4-0.1L821.3 530c43.8-44.2 63.7-104.9 54.7-166.5-7.9-61.9-43.6-115.3-98-146.8-75.2-44.2-173.5-28.6-239.2 37.9L528 265.9c-8.5 8.9-24 8.9-32.5 0l-11.1-11.6c-39.1-39.5-92.5-62.3-146.2-62.3z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M214.6 409.3c-12.4 0-22.5-10.1-22.5-22.5 0-81.4 66.2-147.6 147.6-147.6 12.4 0 22.5 10.1 22.5 22.5s-10.1 22.5-22.5 22.5c-56.6 0-102.6 46-102.6 102.6 0 12.5-10.1 22.5-22.5 22.5z"
        fill={getIconColor(color, 1, '#27A27D')}
      />
    </svg>
  );
};

IconShangjiapingfen.defaultProps = {
  size: 18,
};

export default IconShangjiapingfen;
