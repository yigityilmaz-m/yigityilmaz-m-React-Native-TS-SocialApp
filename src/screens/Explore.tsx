import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Menu from './components/Menu';
import RestaurantCard from './components/RestaurantCard';
import Gstyles from '../GlobalStyles';
import {StackScreenProps} from '@react-navigation/stack';
import {EStackParams} from '../navigation/ExploreStack';

type Props = StackScreenProps<EStackParams, 'Explore'>;

const Explore = ({navigation}: Props) => {
  return (
    <View>
      <Text style={Gstyles.screenTitle}>Restaurans Near You</Text>
      <RestaurantCard
        name="Sushi restaurant"
        onPress={name => {
          navigation.navigate('Restaurant', {name});
        }}
      />
      <RestaurantCard
        name="Burger restaurant"
        onPress={name => {
          navigation.navigate('Restaurant', {name});
        }}
      />
      <RestaurantCard
        name="Fine dining restaurant"
        onPress={name => {
          navigation.navigate('Restaurant', {name});
        }}
      />

      <Text style={Gstyles.screenTitle}>Most Popular Ones</Text>
      <RestaurantCard
        name="Burger restaurant"
        onPress={name => {
          navigation.navigate('Restaurant', {name});
        }}
      />
      <RestaurantCard
        name="Fine dining restaurant"
        onPress={name => {
          navigation.navigate('Restaurant', {name});
        }}
      />
      <Menu />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
