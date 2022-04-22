import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Messages from '../screens/Messages';
import HomeStack from './FeedStack.tsx/HomeStack';
import Camera from '../screens/Camera';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParams} from '../../App';
type Props = StackScreenProps<StackParams>;
const SwipeNavigation = () => {
  const Tab = createMaterialTopTabNavigator();
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <Tab.Navigator initialRouteName="HomeStack" tabBar={() => null}>
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
};

export default SwipeNavigation;

const styles = StyleSheet.create({});
