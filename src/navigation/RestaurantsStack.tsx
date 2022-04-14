import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Restaurants from '../screens/Restaurants';
import Restaurant from '../screens/Restaurant';

type Props = {};
export type RStackParams = {
  Restaurants: undefined;
  Restaurant: {name: string};
};
const RestaurantsStack = (props: Props) => {
  const RStack = createStackNavigator<RStackParams>();
  return (
    <RStack.Navigator>
      <RStack.Screen name="Restaurants" component={Restaurants}></RStack.Screen>
      <RStack.Screen name="Restaurant" component={Restaurant}></RStack.Screen>
    </RStack.Navigator>
  );
};

export default RestaurantsStack;
const styles = StyleSheet.create({});