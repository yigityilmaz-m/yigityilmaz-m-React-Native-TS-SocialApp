import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Gstyles from '../GlobalStyles';

import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {EStackParams} from '../navigation/ExploreStack';
type Props = StackScreenProps<EStackParams, 'Explore'>;

const Explore = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Text style={Gstyles.screenTitle}>Explore</Text>
      <ScrollView></ScrollView>
      <Button
        title="post"
        onPress={() => navigation.navigate('Post', {Id: ''})}></Button>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
