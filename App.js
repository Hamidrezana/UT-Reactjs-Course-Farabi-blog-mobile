import React from 'react';
import {Provider} from 'react-redux';
import MainApp from './src/components/MainApp';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import store from './src/store/store';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3f51b5',
    accent: '#f1c40f',
    error: '#ff5252',
  },
  fonts: {
    regular: {
      fontFamily: 'Vazir-FD-WOL',
    },
    medium: {
      fontFamily: 'Vazir-Medium-FD-WOL',
    },
    light: {
      fontFamily: 'Vazir-Light-FD-WOL',
    },
    thin: {
      fontFamily: 'Vazir-Thin-FD-WOL',
    },
  },
};
function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <MainApp />
      </PaperProvider>
    </Provider>
  );
}

export default App;
