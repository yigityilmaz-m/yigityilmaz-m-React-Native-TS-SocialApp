import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Gstyles from '../../GlobalStyles';

interface Props {
  name: string;
  onPress: (name: string) => void;
}

const RestaurantCard: React.FC<Props> = ({name, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(name);
      }}>
      <View style={Gstyles.container}>
        <Text style={Gstyles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default RestaurantCard;
