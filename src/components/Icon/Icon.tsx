import {SvgXml} from 'react-native-svg';
import Illustration from '../../assets/icons/Illustration.svg';

type IconProps = {
  name: string;
  height: number;
  width: number;
};

const Icon = ({name, height, width}: IconProps) => {
  const icons = {
    Illustration: String(Illustration),
  };

  type IconOption = keyof typeof icons;

  return (
    <SvgXml xml={icons[name as IconOption]} height={height} width={width} />
  );
};

export default Icon;
