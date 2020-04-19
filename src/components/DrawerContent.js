import React from 'react';
import {View} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import Strings from '../utils/Strings';

function DrawerContent({navigation}) {
  const items = [
    {
      path: 'About',
      name: 'aboutLink',
    },
    {
      path: 'Settings',
      name: 'settingsLink',
    },
  ];
  return (
    <DrawerContentScrollView>
      <View style={{flex: 1}}>
        <Drawer.Section>
          {items.map((item, idx) => (
            <DrawerItem
              key={idx}
              label={Strings.header[item.name]}
              onPress={() => navigation.navigate(item.path)}
              labelStyle={{fontFamily: 'Vazir-FD-WOL'}}
            />
          ))}
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

export default DrawerContent;
