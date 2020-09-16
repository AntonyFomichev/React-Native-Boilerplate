import React from 'react';
import { ScrollView } from 'react-native';
import DrawerContentView from 'components/DrawerContentView';
import { DrawerItemList } from '@react-navigation/drawer';

import styles from './styles';

const CustomDrawerContent = ({ ...props }) => {
  return (
    <DrawerContentView {...props}>
      <ScrollView style={styles.drawerListWrapper}>
        <DrawerItemList {...props} />
      </ScrollView>
    </DrawerContentView>
  );
};

export default CustomDrawerContent;
