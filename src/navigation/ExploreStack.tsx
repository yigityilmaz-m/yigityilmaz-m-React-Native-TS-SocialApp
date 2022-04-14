import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Restaurant from '../screens/Restaurant';
import Explore from '../screens/Explore';
type Props = {};
export type EStackParams = {
  Explore: undefined;
  Restaurant: {name: string};
};
const ExploreStack = (props: Props) => {
  const EStack = createStackNavigator<EStackParams>();

  return (
    <EStack.Navigator>
      <EStack.Screen name="Explore" component={Explore}></EStack.Screen>
      <EStack.Screen name="Restaurant" component={Restaurant}></EStack.Screen>
    </EStack.Navigator>
  );
};

export default ExploreStack;

const styles = StyleSheet.create({});
