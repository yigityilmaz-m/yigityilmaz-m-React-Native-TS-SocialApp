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
type Props = {};

const Profile = (props: Props) => {
  return (
    <View>
      <Text style={Gstyles.screenTitle}>Profile</Text>
      <Text>Name: Yigit Yilmaz</Text>
      <TouchableOpacity>
        <Text>Edit Profile</Text>
      </TouchableOpacity>
      <Menu></Menu>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
