import {Image, StyleSheet, Text, View, ViewBase} from 'react-native';
import React from 'react';
import {User} from '../../store/types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
type Props = {user: User; idx: number};

const PostCard = ({user, idx}: Props) => {
  return (
    <View style={{flex: 1, margin: 10}} key={idx}>
      <View
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
      <View>
        <View style={{flexDirection: 'row'}}>
          <MaterialCommunityIcons
            name="heart-outline"
            size={20}
            color="white"></MaterialCommunityIcons>
          <Ionicons
            name="chatbubble-outline"
            size={20}
            color="white"
            style={{transform: [{scaleX: -1}]}}></Ionicons>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={20}
            color="white"></MaterialCommunityIcons>
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({});
