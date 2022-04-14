import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import { RStackParams } from '../navigation/RestaurantsStack';


type Props = StackScreenProps<RStackParams, "Restaurant">;

const Restaurant = ({route}: Props) => {
  return (
    <View>
      <Text>{route.params.name}</Text>
    </View>
  );
};

export default Restaurant;

const styles = StyleSheet.create({});
