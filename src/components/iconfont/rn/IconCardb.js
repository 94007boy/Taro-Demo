/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconCardb = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M827.389622 192.340633 192.189695 192.340633c-71.761394 0-130.145106 55.656601-130.145106 124.065643l0 65.462944 895.488091 0 0-65.462944C957.533704 247.997234 899.151016 192.340633 827.389622 192.340633zM62.04459 770.34286c0 68.411089 58.382689 124.066667 130.145106 124.066667l635.199926 0c71.761394 0 130.144082-55.656601 130.144082-124.066667L957.533704 508.759189 62.04459 508.759189 62.04459 770.34286zM602.391195 703.187367l186.241728 0c18.650779 0 33.769105 15.118326 33.769105 33.769105s-15.118326 33.769105-33.769105 33.769105l-186.241728 0c-18.650779 0-33.769105-15.118326-33.769105-33.769105S583.740416 703.187367 602.391195 703.187367z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCardb.defaultProps = {
  size: 18,
};

export default IconCardb;