import {SvgXml} from 'react-native-svg';
import Illustration from '../../assets/icons/Illustration.svg';
import Eyes from '../../assets/icons/eyes.svg';
import Visa from '../../assets/icons/visa.svg';
import Send from '../../assets/icons/Send.svg';
import Currency from '../../assets/icons/currency.svg';
import Water from '../../assets/icons/water.svg';
import Banana from '../../assets/icons/Banana.svg';

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
    Currency: String(Currency),
    Water: String(Water),
    Banana: String(Banana),
  };

  type IconOption = keyof typeof icons;

  return (
    <SvgXml xml={icons[name as IconOption]} height={height} width={width} />
  );
};

export default Icon;
