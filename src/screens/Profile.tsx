import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
} from 'react-native';
import React, {Key} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {StackScreenProps} from '@react-navigation/stack';
import {SwipeStackParams} from '../navigation/SwipeNavigation';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {User, UserData} from '../store/types';
import PostCard from './components/PostCard';
import Feather from 'react-native-vector-icons/Feather';
import {HStackParams} from '../navigation/HomeStack';
import {PStackParams} from '../navigation/ProfileStack';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = StackScreenProps<PStackParams, 'Profile'>;

const Profile = ({}: Props, user: User) => {
  
  const data = useSelector<RootState, UserData | null>(
    state => state.user.data,
  );

  return (
    <View style={{backgroundColor: 'black'}}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Feather name="lock" color="white" size={10}></Feather>

          <Text style={styles.headerText}> UserName</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
          <Feather name="plus-square" size={25} color="white"></Feather>
          <View style={{marginHorizontal: 10}} />
          <Ionicons
            name="ios-reorder-three-outline"
            size={35}
            color="white"
            style={{marginTop: -4}}></Ionicons>
        </View>
      </View>
      {/* <ScrollView style={{margin: 10}}>
        <Image
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            marginRight: 10,
          }}
          source={{
            uri: user.picture.thumbnail,
          }}></Image>
        <Text style={styles.messagesText}>Messages</Text>
        <TextInput
          placeholder="  🔎 Search"
          placeholderTextColor={'grey'}
          style={styles.TextInput}></TextInput>
        {data?.results.map((user: User, index: Key) => {
          return (
            <View key={index}>
              <PostCard user={user} />
            </View>
          );
        })}
      </ScrollView> */}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingLeft: 10,
    backgroundColor: 'black',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: 'white',
    fontWeight: '900',
    fontSize: 20,
  },
  messagesText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 10,
  },
  TextInput: {
    borderRadius: 5,
    backgroundColor: '#353535',
    paddingVertical: 0,
  },
});
