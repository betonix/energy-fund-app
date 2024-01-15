import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.color.primary};
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 50px;
`;

export const TitlePage = styled.Text`
  font-family: ${({theme}) => theme.font.poppins};
  color: ${({theme}) => theme.color.white};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
`;

export const ContentPage = styled.View`
  background-color: ${({theme}) => theme.color.white};
  border-radius: 30px 30px 0px 0px;
  width: 100%;
  margin-top: 32px;
  padding: 24px;
`;

export const TitleContent = styled.Text`
  font-family: ${({theme}) => theme.font.poppins};
  color: ${({theme}) => theme.color.primary};
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  text-align: left;
`;

export const TitleCaption = styled.Text`
  font-family: ${({theme}) => theme.font.poppins};
  color: ${({theme}) => theme.color.neutral};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
`;
