import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Appbar, IconButton} from 'react-native-paper';
import HomeStack from './HomeStack';
import AddBlogScreen from '../screens/AddBlog';
import AboutScreen from '../screens/About';
import SettingsScreen from '../screens/Settings';

const Stack = createStackNavigator();

const Header = ({scene, previous, navigation}) => {
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header>
      {previous ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} color="#fff" />
      ) : (
        <IconButton
          icon="menu"
          color="#fff"
          onPress={() => navigation.openDrawer()}
        />
      )}
      <Appbar.Content title={previous ? '' : title} />
    </Appbar.Header>
  );
};

function AppStack() {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        header: ({scene, previous, navigation}) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}>
      <Stack.Screen
        name="Home"
        component={HomeStack}
        options={{title: 'بلاگ فارابی'}}
      />
      <Stack.Screen name="AddBlog" component={AddBlogScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default AppStack;
