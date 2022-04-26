import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {Key} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {StackScreenProps} from '@react-navigation/stack';
import {SwipeStackParams} from '../navigation/SwipeNavigation';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {User, UserData} from '../store/types';
import PostCard from './components/PostCard';

type Props = StackScreenProps<SwipeStackParams, 'Messages'>;

const Messages = ({navigation}: Props) => {
  
  const data = useSelector<RootState, UserData | null>(
    state => state.user.data,
  );

  return (
    <View style={{backgroundColor: 'black'}}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <Ionicons
            name="chevron-back"
            color="white"
            size={30}
            onPress={() => navigation.navigate('HomeStack')}></Ionicons>
          <View>
            <Text style={styles.headerText}>UserName</Text>
            <Text style={{color: 'lightgrey', marginTop: -5, fontSize: 12}}>
              Set a status
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
          <MaterialCommunityIcons
            name="video-plus-outline"
            color="white"
            size={30}></MaterialCommunityIcons>
          <View style={{marginHorizontal: 10}} />
          <Entypo name="new-message" size={20} color="white"></Entypo>
        </View>
      </View>
      <ScrollView style={{margin: 10}}>
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
      </ScrollView>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
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
