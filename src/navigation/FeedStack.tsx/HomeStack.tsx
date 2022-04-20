import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Restaurant from '../../screens/Restaurant';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';

type Props = {};
export type HStackParams = {
  Home: undefined;
  Profile: {name: string};
};
const HomeStack = (props: Props) => {
  const HStack = createStackNavigator<HStackParams>();

  return (
    <HStack.Navigator>
      <HStack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'white',
        }}></HStack.Screen>
      <HStack.Screen
        name="Profile"
        component={Profile}
        options={{headerStyle: {backgroundColor: 'black'}}}></HStack.Screen>
    </HStack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
