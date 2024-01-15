import React from 'react';
import {
  Container,
  ContentPage,
  TitleCaption,
  TitleContent,
  TitlePage,
} from './auth.styles';
import {useTranslation} from 'react-i18next';

const Login: React.FC = () => {
  const {t} = useTranslation();
  return (
    <Container>
      <TitlePage>{t('login.title')}</TitlePage>
      <ContentPage>
        <TitleContent>{t('login.titleContent')}</TitleContent>
        <TitleCaption>{t('login.titleCaption')}</TitleCaption>
      </ContentPage>
    </Container>
  );
};

export default Login;
