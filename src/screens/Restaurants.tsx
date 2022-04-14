import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RestaurantCard from './components/RestaurantCard';
import Gstyles from '../GlobalStyles';
import Menu from './components/Menu';
import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {RStackParams} from '../navigation/RestaurantsStack';
type Props = StackScreenProps<RStackParams, 'Restaurants'>;

const Restaurants = ({navigation}: Props) => {
  return (
    <View>
      <Text style={Gstyles.screenTitle}>Restaurants</Text>
      <ScrollView>
        <ScrollView>
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
        </ScrollView>
      </ScrollView>
      <Menu />
    </View>
  );
};

export default Restaurants;

const styles = StyleSheet.create({});
