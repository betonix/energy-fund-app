import React, {useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {
  BalanceText,
  ButtonSendMoney,
  CircleLeftCreditCard,
  CircleRightCreditCard,
  Container,
  ContainerBrand,
  ContentPage,
  CreditCard,
  NameCard,
  NumberCard,
  TextSendMoney,
  TitlePage,
  UserName,
} from './home.styles';
import Icon from '../../components/Icon/Icon';
import styled from 'styled-components/native';
import LineChartGraph from '../../components/line-chart/line-chart';

const BadgeOneCard = styled.View`
  border-radius: 10px;
  background: #ff4267;
  width: 287px;
  height: 175px;
  position: absolute;
  top: 2px;
  z-index: 1;
`;

const BadgeTwoCard = styled.View`
  border-radius: 10px;
  background: #5655b9;
  width: 261px;
  height: 175px;
  position: absolute;
  top: 12px;
`;

const ContainerCard = styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
`;

const WrapperCard = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 150px;
`;

const CaptionMoney = styled.Text`
  color: #343434;
  font-family: poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`;

const CaptionDate = styled.Text`
  color: #979797;
  font-family: poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`;

const ContainerChart = styled.View`
  margin-top: 46px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const BalanceChart = styled.Text`
  color: #3629b7;
  font-family: poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: 8px;
`;

const Currency = styled.Text`
  color: #979797;
  font-family: poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`;

const ContainerExtract = styled.View`
  margin-top: 50px;
`;
const LabelExtract = styled.Text`
  color: #979797;
  font-family: poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`;

const ContainerItemExtract = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const TextExtract = styled.Text`
  color: #343434;
  font-family: poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-right: 'auto';
`;

const ValuExtract = styled.Text`
  color: ${({isPositive}) => (isPositive ? '#1CB999' : '#343434')};

  text-align: right;
  font-family: poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  flex: 1;
`;

const ContainerIcon = styled.View`
  background-color: ${({color}) => color};
  width: 40px;
  height: 40px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

const Wrapper = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #ececec;
  margin-top: 23px;
`;

type ItemExtractType = {
  title: string;
  data: Array<ItemExtractComponent>;
};

type ItemExtractComponent = {
  icon: string;
  value: string;
  color: string;
  text: string;
  iscomming: boolean;
};

const ItemExtract: React.FC<ItemExtractType> = ({title, data}) => {
  return (
    <Wrapper>
      <LabelExtract>{title}</LabelExtract>
      {data.map(item => (
        <ContainerItemExtract>
          <ContainerIcon color={item.color}>
            <Icon name={item.icon} width={15} height={15} />
          </ContainerIcon>
          <TextExtract>{item.text}</TextExtract>
          <ValuExtract isPositive={item.iscomming}>{item.value}</ValuExtract>
        </ContainerItemExtract>
      ))}
    </Wrapper>
  );
};

const Home: React.FC = () => {
  const [balance, setBalance] = useState();

  const dataToday = [
    {
      icon: 'Currency',
      text: 'Income: Salary Oct',
      value: '+$1200',
      color: '#FF4267',
      iscomming: true,
    },
  ];

  const dataPass = [
    {
      icon: 'Water',
      text: 'Water Bill',
      value: '$280',
      color: '#3629B7',
      iscomming: false,
    },
    {
      icon: 'Banana',
      text: 'Groceries',
      value: '$32',
      color: '#29B784',
      iscomming: false,
    },
  ];

  return (
    <ScrollView>
      <Container>
        <TitlePage>Current account</TitlePage>
        <BalanceText>$3469.52</BalanceText>
        <ContentPage>
          <WrapperCard>
            <ContainerCard>
              <BadgeOneCard />
              <BadgeTwoCard />
              <CreditCard>
                <UserName>John Smith</UserName>
                <NameCard>Crowdform Platinium</NameCard>
                <NumberCard>4756 **** **** 9018</NumberCard>
                <ContainerBrand>
                  <Icon name="Visa" width={46} height={15} />
                </ContainerBrand>
                <CircleLeftCreditCard />
                <CircleRightCreditCard />
              </CreditCard>
            </ContainerCard>
          </WrapperCard>
          <ButtonSendMoney>
            <Icon name="Send" width={20} height={20}></Icon>
            <TextSendMoney>Send money</TextSendMoney>
          </ButtonSendMoney>
          <ContainerChart>
            <CaptionMoney>Insights</CaptionMoney>
            <CaptionDate>20 Jan 24</CaptionDate>
          </ContainerChart>
          <BalanceChart>
            {balance} <Currency>USD</Currency>
          </BalanceChart>
          <LineChartGraph onChange={value => setBalance(value)} />
          <ContainerExtract>
            {ItemExtract({
              title: 'Today',
              data: dataToday,
            })}

            {ItemExtract({
              title: 'Yesterday',
              data: dataPass,
            })}
          </ContainerExtract>
        </ContentPage>
      </Container>
    </ScrollView>
  );
};

export default Home;
