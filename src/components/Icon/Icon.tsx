import {SvgXml} from 'react-native-svg';
import Illustration from '../../assets/icons/Illustration.svg';
import Eyes from '../../assets/icons/eyes.svg';
import Visa from '../../assets/icons/visa.svg';
import Send from '../../assets/icons/Send.svg';
import Currency from '../../assets/icons/currency.svg';
import Water from '../../assets/icons/water.svg';
import Banana from '../../assets/icons/Banana.svg';
import Arrow from '../../assets/icons/arrow.svg';
import ArrowDown from '../../assets/icons/arrow-down.svg';
import Credit from '../../assets/icons/credit.svg';
import Person from '../../assets/icons/person.svg';
import Bank from '../../assets/icons/bank.svg';
import Add from '../../assets/icons/add.svg';
import ArrowRight from '../../assets/icons/arrow-right.svg';

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
    Arrow: String(Arrow),
    ArrowDown: String(ArrowDown),
    Credit: String(Credit),
    Person: String(Person),
    Bank: String(Bank),
    Add: String(Add),
    ArrowRight: String(ArrowRight),
  };

  type IconOption = keyof typeof icons;

  return (
    <SvgXml xml={icons[name as IconOption]} height={height} width={width} />
  );
};

export default Icon;
