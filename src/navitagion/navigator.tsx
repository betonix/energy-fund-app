import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from './screens-names';
import Login from '../screens/auth/login';
import Register from '../screens/auth/register';
import Home from '../screens/home/home';
import Transfer from '../screens/home/transfer';
import {useAuth} from '../hooks/use-auth/use-auth';
import theme from '../styles/theme';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import Icon from '../components/Icon/Icon';

const Stack = createNativeStackNavigator();

const HeaderTransfer = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: white;
  padding-top: ${Platform.OS == 'ios' ? '60px' : 20};
  align-items: center;
  width: 100%;
  padding-left: 24px;
  padding-bottom: 16px;
`;

const HeaderTransferTitle = styled.Text`
  color: #343434;
  font-family: poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  margin-left: 16px;
`;

const BackButton = styled.TouchableOpacity``;

const NavHeader = () => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <HeaderTransfer>
        <Icon name="Arrow" width={20} height={20}></Icon>
        <HeaderTransferTitle>Send Money</HeaderTransferTitle>
      </HeaderTransfer>
    </TouchableOpacity>
  );
};

const Navigator: React.FC = () => {
  const {isLoggedIn} = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: theme.color.white},
        }}>
        <>
          {isLoggedIn ? (
            <>
              <Stack.Screen name={SCREENS.HOME} component={Home} />
              <Stack.Screen
                name={SCREENS.TRANSFER}
                component={Transfer}
                options={{header: NavHeader, headerShown: true}}
              />
            </>
          ) : (
            <>
              <Stack.Screen name={SCREENS.LOGIN} component={Login} />
              <Stack.Screen name={SCREENS.REGISTER} component={Register} />
            </>
          )}
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
