import {SvgXml} from 'react-native-svg';
import Illustration from '../../assets/icons/Illustration.svg';
import Eyes from '../../assets/icons/eyes.svg';
import Visa from '../../assets/icons/visa.svg';
import Send from '../../assets/icons/Send.svg';

type IconProps = {
  name: string;
  height: number;
  width: number;
};

const Icon = ({name, height, width}: IconProps) => {
  const icons = {
    Illustration: String(Illustration),
    Eyes: String(Eyes),
    Visa: String(Visa),
    Send: String(Send),
  };

  type IconOption = keyof typeof icons;

  return (
    <SvgXml xml={icons[name as IconOption]} height={height} width={width} />
  );
};

export default Icon;
