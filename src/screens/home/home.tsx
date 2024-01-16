import React from 'react';
import {Text} from 'react-native';
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

const Home: React.FC = () => {
  return (
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
      </ContentPage>
    </Container>
  );
};

export default Home;
