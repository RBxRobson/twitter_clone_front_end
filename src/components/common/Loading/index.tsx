import { OrbitProgress, OrbitProgressProps } from 'react-loading-indicators';

import { colors } from '../../../styles/themes/colors';


const Loading = ({ size = 'medium' }: OrbitProgressProps) => {
  return (
    <OrbitProgress
      color={colors.blueShades.b_50} 
      size={size}
    />
  );
};

export default Loading;
