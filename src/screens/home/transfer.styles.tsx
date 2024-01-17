import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 24px;
  padding-bottom: 0px;
`;

export const CaptionBalance = styled.Text`
  color: #3629b7;
  font-family: poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  margin-left: 12px;
  margin-top: 8px;
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  color: #979797;
  font-family: poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  margin-bottom: 16px;
`;

export const Card = styled.TouchableOpacity`
  width: 120px;
  height: 100px;
  border-radius: 15px;
  padding: 16px;
  color: ${({theme}) => theme.color.white};
  background: ${({isSelected}) => (isSelected ? '#FFAF2A' : '#E0E0E0')};
  margin-right: 16px;
`;

export const TextCard = styled.Text`
  color: #fff;
  font-family: poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  margin-top: 8px;
`;

export const OptionsPayeeWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const TransactionWrapper = styled.View`
  height: 100px;
`;

export const FlatListWrapper = styled.View`
  height: 125px;
  margin-bottom: 23px;
`;

export const OptionsPayeeText = styled.Text`
  color: ${({color}) => color};
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`;

export const CardPayee = styled.TouchableOpacity`
  background: ${({isSelected}) => (isSelected ? '#3629B7' : '#FFFFFF')};
  width: 100px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  shadow-color: #000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.1;
  shadow-radius: 3;
  elevation: 1;
  margin-right: 16px;
`;
export const TextPayee = styled.Text`
  color: ${({isSelected}) => (isSelected ? '#FFFFFF' : '343434')};
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  margin-top: 12px;
`;
export const CircleAdd = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #f2f1f9;
  align-items: center;
  justify-content: center;
`;

export const SavePayeText = styled.Text`
  color: #3629b7;
  font-family: poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

export const ButtonContainer = styled.View`
  margin-top: 26px;
  margin-bottom: 30px;
  width: 100%;
`;

export const WrapperSelect = styled.View`
  margin-bottom: 16px;
`;

export const ContentList = styled.View`
  background-color: white;
  padding: 24px 16px;
  border-radius: 15px;
  shadow-color: #000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.1;
  shadow-radius: 3;
  elevation: 1;
`;
