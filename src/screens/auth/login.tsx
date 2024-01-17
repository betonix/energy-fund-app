import React, {useState} from 'react';
import {
  Container,
  ContentPage,
  ContenteForm,
  KeyboardView,
  TitleCaption,
  TitleContent,
  TitlePage,
} from './auth.styles';

import {useTranslation} from 'react-i18next';
import Icon from '../../components/Icon/Icon';
import Input from '../../components/Input/Input';
import Button from '../../components/button/button';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../navitagion/screens-names';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import {useAuth} from '../../hooks/use-auth/use-auth';

const ContainerLogo = styled.View`
  margin-bottom: 40px;
`;

const CreateAccountText = styled.Text`
  font-family: ${({theme}) => theme.font.poppins};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;

const CreateAccountLink = styled.Text`
  font-weight: 600;
  color: ${({theme}) => theme.color.primary};
`;

const Link = styled.TouchableOpacity`
  margin-top: 32px;
`;

const ButtonContainer = styled.View`
  margin-top: 80px;
  width: 100%;
`;

const Login: React.FC = () => {
  const {t} = useTranslation();
  const {loginUser} = useAuth();
  const navigation = useNavigation<any>();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const doLogin = async () => {
    const result = await loginUser(emailValue, passwordValue);
    if (result.error) {
      alert(result.error);
    }
  };

  return (
    <KeyboardView behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <TitlePage>{t('login.title')}</TitlePage>
          <ContentPage>
            <TitleContent>{t('login.titleContent')}</TitleContent>
            <TitleCaption>{t('login.titleCaption')}</TitleCaption>
            <ContenteForm>
              <ContainerLogo>
                <Icon name="Illustration" width={150} height={150}></Icon>
              </ContainerLogo>

              <Input
                label={t('login.email')}
                onChangeText={text => setEmailValue(text)}
                placeholder={t('login.email')}
              />

              <Input
                label={t('login.password')}
                type="password"
                capitonPassword={t('login.forgot')}
                onChangeText={text => setPasswordValue(text)}
                placeholder={t('login.password')}
              />

              <ButtonContainer>
                <Button
                  title={t('login.loginButton')}
                  disabled={!emailValue || !passwordValue}
                  onPress={() => doLogin()}
                />
              </ButtonContainer>

              <Link onPress={() => navigation.navigate(SCREENS.REGISTER)}>
                <CreateAccountText>
                  {t('login.createAccount')}
                  <CreateAccountLink>
                    {t('login.createAccountLink')}
                  </CreateAccountLink>
                </CreateAccountText>
              </Link>
            </ContenteForm>
          </ContentPage>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardView>
  );
};

export default Login;
