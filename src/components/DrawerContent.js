import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

const icon_color = '#000';

const DrawerContent = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Create Category"
              labelStyle={styles.text}
              onPress={() => {
                props.navigation.navigate('CreateCategory');
              }}
            />
            <DrawerItem
              label="Create Fund"
              labelStyle={styles.text}
              onPress={() => {
                props.navigation.navigate('CreateFund');
              }}
            />
            <DrawerItem
              label="Create Transaction"
              labelStyle={styles.text}
              onPress={() => {
                props.navigation.navigate('CreateTransaction');
              }}
            />
            <DrawerItem
              label="Reports"
              labelStyle={styles.text}
              onPress={() => {
                props.navigation.navigate('Reports');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  drawerSection: {
    marginTop: 15,
    display: 'flex',
  },
  text: {},
});

export default DrawerContent;
