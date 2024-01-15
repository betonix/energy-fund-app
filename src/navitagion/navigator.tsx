import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from './screens-names';
import Login from '../screens/login';
import Register from '../screens/register';
import Home from '../screens/home';
import Transfer from '../screens/transfer';
import {useAuth} from '../hooks/use-auth/use-auth';

const Stack = createNativeStackNavigator();

const Navigator: React.FC = () => {
  const {isLoggedIn} = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <>
          {isLoggedIn ? (
            <>
              <Stack.Screen name={SCREENS.HOME} component={Home} />
              <Stack.Screen name={SCREENS.TRANSFER} component={Transfer} />
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