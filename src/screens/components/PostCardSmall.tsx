import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {User} from '../../store/types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {StackNavigationProp} from '@react-navigation/stack';
import {HStackParams} from '../../navigation/HomeStack';

type Props = {
  user: User;
  navigation: StackNavigationProp<HStackParams, 'Profile' | 'Post'>;
};

const PostCardSmall = ({user, navigation}: Props) => {
  return (
    <View
      style={{
        flex: 1 / 3,
        aspectRatio: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity onPress={() => navigation.push('Post', {user})}>
        <View style={{flex: 1, aspectRatio: 1}}>
          <Image
            style={{
              aspectRatio: 1,
              margin: 0.5,
            }}
            source={{
              uri: user.picture.large,
            }}></Image>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PostCardSmall;

const styles = StyleSheet.create({});

{
  /* <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 5,
            padding: 5,
          }}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
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
            <Text style={{color: 'white'}}>
              {user.name.first} {user.name.last}
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={20}
              color="white"></MaterialCommunityIcons>
          </View>
        </View>

        <View style={{flex: 1}}>
          <Image
            style={{
              width: '100%',
              aspectRatio: 1,
              marginVertical: 5,
            }}
            source={{
              uri: user.picture.large,
            }}></Image>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons
              name="heart-outline"
              size={25}
              color="white"
              style={{marginHorizontal: 5}}></MaterialCommunityIcons>

            <Ionicons
              name="chatbubble-outline"
              size={24}
              color="white"
              style={{
                transform: [{scaleX: -1}],
                marginHorizontal: 5,
              }}></Ionicons>
            <Feather
              name="send"
              size={23}
              color="white"
              style={{marginHorizontal: 5}}></Feather>
          </View>
          <View>
            <Feather
              name="bookmark"
              size={25}
              color="white"
              style={{marginHorizontal: 5}}></Feather>
          </View>
        </View> */
}
