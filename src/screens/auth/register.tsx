import React from 'react';
import {
  Container,
  ContentPage,
  TitleCaption,
  TitleContent,
  TitlePage,
} from './auth.styles';
import {useTranslation} from 'react-i18next';

const Register: React.FC = () => {
  const {t} = useTranslation();
  return (
    <Container>
      <TitlePage>{t('register.title')}</TitlePage>
      <ContentPage>
        <TitleContent>{t('register.titleContent')}</TitleContent>
        <TitleCaption>{t('register.titleCaption')}</TitleCaption>
      </ContentPage>
    </Container>
  );
};

export default Register;
