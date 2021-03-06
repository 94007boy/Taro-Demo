/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconShouhuodizhiHuaban1 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M909.4 877.5L833.7 558c-2.4-10.2-11.5-17.3-21.9-17.3h-86.1c-12.4 0-22.5 10.1-22.5 22.5s10.1 22.5 22.5 22.5H794l65 274.4H165l65-274.4h68.3c12.4 0 22.5-10.1 22.5-22.5s-10.1-22.5-22.5-22.5h-86.1c-10.4 0-19.5 7.2-21.9 17.3l-75.7 319.4c-1.6 6.7 0 13.8 4.3 19.1 4.3 5.4 10.8 8.5 17.6 8.5h750.9c6.9 0 13.4-3.1 17.6-8.5 4.4-5.3 5.9-12.3 4.4-19z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M512 782.1c7.1 0 13.8-3.4 18.1-9.1C538.9 761 748 478.8 748 354.8c0-130.1-105.9-236-236-236s-236 105.9-236 236C276 478.7 485 761 493.9 773c4.3 5.7 11 9.1 18.1 9.1z m0-618.3c105.3 0 191 85.7 191 191 0 82.3-124.6 273.6-191 366.5-66.4-92.9-191-284.2-191-366.5 0-105.3 85.7-191 191-191z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M612.1 352.1c0-55.2-44.9-100.2-100.1-100.2s-100.1 44.9-100.1 100.2S456.8 452.2 512 452.2s100.1-44.9 100.1-100.1z m-155.2 0c0-30.4 24.7-55.2 55.1-55.2s55.1 24.7 55.1 55.2c0 30.4-24.7 55.1-55.1 55.1s-55.1-24.7-55.1-55.1z"
        fill={getIconColor(color, 2, '#27A27D')}
      />
    </svg>
  );
};

IconShouhuodizhiHuaban1.defaultProps = {
  size: 18,
};

export default IconShouhuodizhiHuaban1;
