import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from 'components/SideMenu';

import screens from './screens';

const Drawer = createDrawerNavigator();

const AppNavigator = () => (
  <Drawer.Navigator
    initialRouteName="DummyScreen"
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen
      name={screens.dummy.key}
      component={screens.dummy.component}
    />
  </Drawer.Navigator>
);

export default AppNavigator;
