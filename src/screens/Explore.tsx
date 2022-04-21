import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Gstyles from '../GlobalStyles';
import Menu from './components/Menu';
import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {EStackParams} from '../navigation/FeedStack.tsx/ExploreStack';
type Props = StackScreenProps<EStackParams, 'Explore'>;

const Explore = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Text style={Gstyles.screenTitle}>Explore</Text>
      <ScrollView></ScrollView>
      <Button
        title="post"
        onPress={() => navigation.navigate('Post', {Id: ''})}></Button>
      <Menu />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
