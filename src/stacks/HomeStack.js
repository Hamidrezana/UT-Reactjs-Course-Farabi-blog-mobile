import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UserBlogsScreen from '../screens/UserBlogs';
import HomeScreen from '../screens/Home';
import Strings from '../utils/Strings';

const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let icon;
          if (route.name === 'UserBlogs') {
            icon = 'account-box';
          } else if (route.name === 'Home') {
            icon = 'home';
          }
          return <Icon name={icon} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#3f51b5',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontFamily: 'Vazir-FD-WOL',
        },
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{title: Strings.title.home}}
      />
      <Tab.Screen
        name="UserBlogs"
        component={UserBlogsScreen}
        options={{title: Strings.title.userBlogs}}
      />
    </Tab.Navigator>
  );
}

export default HomeStack;
