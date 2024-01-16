import React, {useState} from 'react';
import {
  Container,
  ContentPage,
  KeyboardView,
  TitleCaption,
  TitleContent,
  TitlePage,
} from './auth.styles';
import {useTranslation} from 'react-i18next';
import Input from '../../components/Input/Input';
import {User} from '../../context/auth-provider/auth-provider';
import Checkbox from '../../components/checkbox/checkbox';
import styled from 'styled-components/native';
import Button from '../../components/button/button';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../navitagion/screens-names';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import {useAuth} from '../../hooks/use-auth/use-auth';

const ContentForm = styled.View`
  padding-top: 32px;
`;
const TermsText = styled.Text`
  font-family: ${({theme}) => theme.font.poppins};
  color: #343434;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  flex-wrap: wrap;
`;

const TermsLink = styled.Text`
  font-family: ${({theme}) => theme.font.poppins};
  font-weight: 600;
  font-style: normal;
  color: ${({theme}) => theme.color.primary};
`;

const ButtonContainer = styled.View`
  margin-top: 80px;
  width: 100%;
`;

const Link = styled.TouchableOpacity`
  margin-top: 32px;
`;

const CreateAccountText = styled.Text`
  font-family: ${({theme}) => theme.font.poppins};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
`;

const CreateAccountLink = styled.Text`
  font-weight: 600;
  color: ${({theme}) => theme.color.primary};
`;

const Register: React.FC = () => {
  const {t} = useTranslation();

  const {loginUser, register} = useAuth();

  const navigation = useNavigation<any>();

  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);

  const TextLink = (
    <TermsText>
      {t('register.termsText')}
      <TermsLink onPress={() => {}}>{t('register.termsLink')}</TermsLink>
    </TermsText>
  );

  return (
    <KeyboardView behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <TitlePage>{t('register.title')}</TitlePage>
          <ContentPage>
            <TitleContent>{t('register.titleContent')}</TitleContent>
            <TitleCaption>{t('register.titleCaption')}</TitleCaption>
            <ContentForm>
              <Input
                label={t('register.firstName')}
                onChangeText={text => setUser({...user, firstName: text})}
                placeholder={t('register.firstName')}
              />

              <Input
                label={t('register.lastName')}
                onChangeText={text => setUser({...user, lastName: text})}
                placeholder={t('register.lastName')}
              />

              <Input
                label={t('register.email')}
                onChangeText={text => setUser({...user, email: text})}
                placeholder={t('register.email')}
              />

              <Input
                label={t('register.password')}
                type="password"
                onChangeText={text => setUser({...user, password: text})}
                placeholder={t('register.passwordPlaceholder')}
              />
              <Checkbox
                isSelected={acceptedTerms}
                onPress={() => setAcceptedTerms(prev => !prev)}
                text={TextLink}
              />

              <ButtonContainer>
                <Button
                  title={t('register.registerButton')}
                  disabled={
                    !user.firstName ||
                    !user.lastName ||
                    !user.email ||
                    !user.password ||
                    !acceptedTerms
                  }
                  onPress={() => register(user)}
                />
              </ButtonContainer>
            </ContentForm>
            <Link onPress={() => navigation.navigate(SCREENS.LOGIN)}>
              <CreateAccountText>
                {t('register.backLogin')}
                <CreateAccountLink>
                  {t('register.backLoginLink')}
                </CreateAccountLink>
              </CreateAccountText>
            </Link>
          </ContentPage>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardView>
  );
};

export default Register;
