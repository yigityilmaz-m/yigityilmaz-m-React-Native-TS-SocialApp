import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import Home from '../screens/Home';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {SwipeStackParams} from './SwipeNavigation';
import ProfileStack from './ProfileStack';
type Props = StackScreenProps<SwipeStackParams, 'HomeStack'>;
export type HStackParams = {
  Home: undefined;
  ProfileStack: {name: string};
};
const HomeStack = ({navigation}: Props) => {
  const HStack = createStackNavigator<HStackParams>();

  return (
    <HStack.Navigator initialRouteName="Home">
      <HStack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'white',
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                width: 100,
                justifyContent: 'space-evenly',
              }}>
              <Feather name="plus-square" size={25} color="white"></Feather>
              <MaterialCommunityIcons
                name="heart-outline"
                size={25}
                color="white"></MaterialCommunityIcons>
              <Ionicons
                name="chatbubble-outline"
                size={25}
                color="white"
                onPress={() => {
                  navigation.navigate('Messages');
                }}></Ionicons>
            </View>
          ),
        }}></HStack.Screen>
      <HStack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerStyle: {backgroundColor: 'black'}}}></HStack.Screen>
    </HStack.Navigator>
  );
};

export default HomeStack;
