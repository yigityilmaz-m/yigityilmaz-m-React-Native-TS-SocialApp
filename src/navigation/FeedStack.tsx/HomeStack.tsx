import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Restaurant from '../../screens/Restaurant';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import ProfileStack from './ProfileStack';
import Camera from '../../screens/Camera';

type Props = {};
export type HStackParams = {
  Home: undefined;
  ProfileStack: {name: string};
};
const HomeStack = (props: Props) => {
  const HStack = createStackNavigator<HStackParams>();

  return (
    <HStack.Navigator initialRouteName="Home">
      <HStack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'white',
        }}></HStack.Screen>
      <HStack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerStyle: {backgroundColor: 'black'}}}></HStack.Screen>
    </HStack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
