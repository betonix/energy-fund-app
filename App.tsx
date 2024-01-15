import React from 'react';
import Navigator from './src/navitagion/navigator';
import AuthProvider from './src/context/auth-provider/auth-provider';

import {ThemeProvider} from 'styled-components/native';
import theme from './src/styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Navigator />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
