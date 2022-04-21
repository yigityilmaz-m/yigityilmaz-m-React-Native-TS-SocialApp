import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Explore from '../../screens/Explore';
import Restaurant from '../../screens/Restaurant';
import Post from '../../screens/Post';

type Props = {};
export type EStackParams = {
  Explore: undefined;
  Post: {Id: string};
};
const ExploreStack = (props: Props) => {
  const RStack = createStackNavigator<EStackParams>();
  return (
    <RStack.Navigator>
      <RStack.Screen
        name="Explore"
        component={Explore}
        options={{
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'white',
        }}></RStack.Screen>
      <RStack.Screen
        name="Post"
        component={Post}
        options={{
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'white',
        }}></RStack.Screen>
      {/* <RStack.Screen name="Restaurant" component={Restaurant} options={{headerStyle: {backgroundColor: 'black'}}}></RStack.Screen> */}
    </RStack.Navigator>
  );
};

export default ExploreStack;
const styles = StyleSheet.create({});
