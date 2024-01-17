import React from 'react';
import Navigator from './src/navitagion/navigator';
import AuthProvider from './src/context/auth-provider/auth-provider';

import {ThemeProvider} from 'styled-components/native';
import theme from './src/styles/theme';

import './src/context/i18n';
import AccountProvider from './src/context/account/account-provider';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <AccountProvider>
          <Navigator />
        </AccountProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
