import React from 'react';

import Navigator from './src/navitagion/navigator';
import AuthProvider from './src/context/auth-provider/auth-provider';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Navigator />
    </AuthProvider>
  );
};

export default App;
