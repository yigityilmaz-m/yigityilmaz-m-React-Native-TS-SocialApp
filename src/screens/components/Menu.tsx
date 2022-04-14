import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Gstyles from '../../GlobalStyles';
import {useNavigation} from '@react-navigation/native';
import {StackParams} from '../../../App';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {};

const Menu: React.FC<Props> = () => {
  const navigation = useNavigation<StackNavigationProp<StackParams>>();
  return (
    <View>
      <Text style={Gstyles.screenTitle}>Navigation</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ExploreStack');
        }}>
        <Text style={Gstyles.text}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('RestaurantsStack');
        }}>
        <Text style={Gstyles.text}>Restaurants</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Text style={Gstyles.text}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({});
