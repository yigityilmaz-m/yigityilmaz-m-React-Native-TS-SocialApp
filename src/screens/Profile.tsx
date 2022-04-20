import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Gstyles from '../GlobalStyles';
import Menu from './components/Menu';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParams} from '../../src/navigation/Navigation';

type Props = StackScreenProps<StackParams, 'Profile'>;

const Profile = ({navigation, route}: Props) => {
  return (
    <View>
      <Text style={Gstyles.screenTitle}>Profile</Text>
      <Text>Name: {route.params?.name}</Text>
      <TouchableOpacity>
        <Text>Edit Profile</Text>
      </TouchableOpacity>
      <Menu></Menu>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
