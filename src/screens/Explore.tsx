import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Gstyles from '../GlobalStyles';
import Menu from './components/Menu';
import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {EStackParams} from '../navigation/FeedStack.tsx/ExploreStack';
type Props = StackScreenProps<EStackParams, 'Explore'>;

const Explore = ({navigation}: Props) => {
  return (
    <View>
      <Text style={Gstyles.screenTitle}>Explore</Text>
      <ScrollView></ScrollView>
      <Menu />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
