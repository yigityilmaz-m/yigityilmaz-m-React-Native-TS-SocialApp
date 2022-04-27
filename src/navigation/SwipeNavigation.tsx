// import {StyleSheet, Text, View} from 'react-native';
// import React, {useLayoutEffect} from 'react';

// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import Messages from '../screens/Messages';

// import Camera from '../screens/Camera';
// import {useNavigation, useRoute} from '@react-navigation/native';
// import {StackScreenProps} from '@react-navigation/stack';
// import {StackParams} from '../App';
// import HomeStack from './HomeStack';

// export type SwipeStackParams = {
//   Camera: any;
//   HomeStack: any;
//   Messages: any;
// };

// type Props = StackScreenProps<StackParams, 'SwipeNavigation'>;
// const SwipeNavigation = ({}:Props) => {
//   const Tab = createMaterialTopTabNavigator();
//   const navigation = useNavigation();
//   const route = useRoute();
  
//   // useLayoutEffect(() => {
//   //   const routeName = getFocusedRouteNameFromRoute(route);
//   //   if (routeName !== 'HomeStack') {
//   //     navigation.setOptions({is: false});
//   //   } else {
//   //     navigation.setOptions({tabBarStyle: {display: 'flex'}});
//   //   }
//   // }, [navigation, route]);

//   return (
//     <Tab.Navigator initialRouteName="HomeStack" tabBar={() => null}>
//       <Tab.Screen name="Camera" component={Camera} />
//       <Tab.Screen name="HomeStack" component={HomeStack} />
//       <Tab.Screen name="Messages" component={Messages} />
//       {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
//     </Tab.Navigator>
//   );
// };

// export default SwipeNavigation;

// const styles = StyleSheet.create({});
