import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../navitagion/screens-names';

const Login: React.FC = () => {
  const navigator = useNavigation<any>();
  return (
    <>
      <Text>Login screen</Text>
      <TouchableOpacity onPress={() => navigator.navigate(SCREENS.HOME)}>
        <Text>Go Home</Text>
      </TouchableOpacity>
    </>
  );
};

export default Login;
