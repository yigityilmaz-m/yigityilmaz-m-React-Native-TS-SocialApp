import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../../screens/Profile';
import Post from '../../screens/Post';

type Props = {};
export type PStackParams = {
  Profile: undefined;
  Post: {name: string};
};
const ProfileStack = (props: Props) => {
  const HStack = createStackNavigator<PStackParams>();

  return (
    <HStack.Navigator>
      <HStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'white',
        }}
      />
      <HStack.Screen
        name="Post"
        component={Post}
        options={{headerStyle: {backgroundColor: 'black'}}}
      />
    </HStack.Navigator>
  );
};

export default ProfileStack;

const styles = StyleSheet.create({});
