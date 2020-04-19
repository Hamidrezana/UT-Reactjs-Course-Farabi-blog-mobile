import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../components/DrawerContent';
import AppStack from './AppStack';

const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="App" component={AppStack} />
    </Drawer.Navigator>
  );
}

export default DrawerStack;
