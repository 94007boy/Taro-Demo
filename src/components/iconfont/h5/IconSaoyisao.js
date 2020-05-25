/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconSaoyisao = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M864 48l-697.6 0c-48 0-83.2 41.6-83.2 89.6l0 208c0 12.8 9.6 25.6 22.4 25.6s22.4-9.6 22.4-25.6l0-208c0-22.4 16-41.6 38.4-41.6l697.6 0c22.4 0 38.4 19.2 38.4 41.6l0 208c0 12.8 9.6 25.6 22.4 25.6s22.4-9.6 22.4-25.6l0-208C947.2 89.6 908.8 48 864 48z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M924.8 681.6c-12.8 0-22.4 9.6-22.4 25.6l0 179.2c0 22.4-16 41.6-38.4 41.6l-697.6 0c-22.4 0-38.4-19.2-38.4-41.6L128 704c0-12.8-9.6-25.6-22.4-25.6s-22.4 9.6-22.4 25.6l0 179.2c0 51.2 38.4 89.6 83.2 89.6l697.6 0c48 0 83.2-41.6 83.2-89.6L947.2 704C947.2 691.2 937.6 681.6 924.8 681.6z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M921.6 544c12.8 0 22.4-9.6 22.4-22.4 0-12.8-9.6-22.4-22.4-22.4l-819.2 0c-12.8 0-22.4 9.6-22.4 22.4 0 12.8 9.6 22.4 22.4 22.4L921.6 544z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </svg>
  );
};

IconSaoyisao.defaultProps = {
  size: 18,
};

export default IconSaoyisao;
