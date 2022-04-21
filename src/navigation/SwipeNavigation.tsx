import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Messages from '../screens/Messages';
import HomeStack from './FeedStack.tsx/HomeStack';
import Camera from '../screens/Camera';

const SwipeNavigation = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator initialRouteName="HomeStack" tabBar={() => null}>
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Messages" component={Messages} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};

export default SwipeNavigation;

const styles = StyleSheet.create({});
