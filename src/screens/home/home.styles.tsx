import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.color.primary};
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 50px;
`;

export const TitlePage = styled.Text`
  color: ${({theme}) => theme.color.white};
  font-family: ${({theme}) => theme.font.poppins};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
`;

export const BalanceText = styled.Text`
  color: ${({theme}) => theme.color.white};
  font-family: ${({theme}) => theme.font.poppins};
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  margin-top: 8px;
  padding-bottom: 60px;
`;

export const ContentPage = styled.View`
  background-color: ${({theme}) => theme.color.white};
  border-radius: 30px 30px 0px 0px;
  width: 100%;
  margin-top: 32px;
  padding: 24px;
  position: relative;
`;

export const CreditCard = styled.View`
  width: 100%;
  height: 166px;
  background-color: #1573ff;
  border-radius: 16px;
  z-index: 1;
  overflow: hidden;
  padding: 24px 16px;
`;

export const CircleLeftCreditCard = styled.View`
  width: 350px;
  height: 350px;
  border-radius: 175px;
  background-color: #1e1671;
  left: -130px;
  top: -60px;
  z-index: 0;
  position: absolute;
`;

export const CircleRightCreditCard = styled.View`
  width: 190px;
  height: 190px;
  border-radius: 95px;
  background-color: #4eb4ff;
  right: -80px;
  top: -80px;
  z-index: 0;
  position: absolute;
`;

export const UserName = styled.Text`
  color: ${({theme}) => theme.color.white};
  font-family: ${({theme}) => theme.font.poppins};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  z-index: 1;
`;

export const NameCard = styled.Text`
  color: ${({theme}) => theme.color.white};
  font-family: ${({theme}) => theme.font.poppins};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  z-index: 1;
  margin-top: 31px;
`;

export const NumberCard = styled.Text`
  color: ${({theme}) => theme.color.white};
  font-family: ${({theme}) => theme.font.poppins};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  z-index: 1;
  margin-top: 13px;
`;

export const ContainerBrand = styled.View`
  position: absolute;
  right: 26;
  z-index: 1;
  bottom: 26;
`;

export const ButtonSendMoney = styled.TouchableOpacity`
  background: #e5e2ff;
  border-radius: 8px;
  padding: 15px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: row;
`;

export const TextSendMoney = styled.Text`
  color: #343434;
  font-family: ${({theme}) => theme.font.poppins};
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`;
