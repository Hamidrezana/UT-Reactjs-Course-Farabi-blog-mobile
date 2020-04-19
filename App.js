import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {I18nManager, StatusBar} from 'react-native';
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
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);
function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <StatusBar backgroundColor="#3f51b5" barStyle="light-content" />
        <NavigationContainer>
          <MainApp />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;
