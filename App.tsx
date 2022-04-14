/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import Profile from './src/screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RestaurantsStack from './src/navigation/RestaurantsStack';
import ExploreStack from './src/navigation/ExploreStack';

export type StackParams = {
  ExploreStack: any;
  RestaurantsStack: any;
  Profile: any;
};

const Stack = createBottomTabNavigator<StackParams>();
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.dark : Colors.light,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RestaurantsStack">
        <Stack.Screen
          name="ExploreStack"
          component={ExploreStack}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="RestaurantsStack"
          component={RestaurantsStack}
          options={{headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
