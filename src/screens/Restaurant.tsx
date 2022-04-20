import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {EStackParams} from '../navigation/FeedStack.tsx/ExploreStack';

type Props = StackScreenProps<EStackParams, 'Restaurant'>;

const Restaurant = ({route}: Props) => {
  return (
    <View>
      <Text>{route.params.name}</Text>
    </View>
  );
};

export default Restaurant;

const styles = StyleSheet.create({});
