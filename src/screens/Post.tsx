import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {HStackParams} from '../navigation/HomeStack';
import {RouteProp} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';

export interface Props {
  navigation: StackNavigationProp<HStackParams, 'Post'>;
  route: RouteProp<HStackParams, 'Post'>;
}

const Post = ({navigation, route}: Props) => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.push('Profile', {user: route.params.user});
        }}>
        <View
          style={{
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
                uri: route.params?.user.picture.thumbnail,
              }}></Image>
            <Text style={{color: 'white'}}>
              {route.params.user.name.first} {route.params.user.name.last}
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={20}
              color="white"></MaterialCommunityIcons>
          </View>
        </View>
      </TouchableOpacity>
      <View>
        <Image
          style={{
            width: '100%',
            aspectRatio: 1,
            marginVertical: 5,
          }}
          source={{
            uri: route.params.user.picture.large,
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
            style={{transform: [{scaleX: -1}], marginHorizontal: 5}}></Ionicons>
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
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
