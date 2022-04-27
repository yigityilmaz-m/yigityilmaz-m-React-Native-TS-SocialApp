import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React, {Key, useEffect, useRef} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {User, UserData} from '../store/types';
import PostCard from './components/PostCard';
import Feather from 'react-native-vector-icons/Feather';
import {HStackParams} from '../navigation/HomeStack';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  RouteProp,
  useIsFocused,
  useScrollToTop,
} from '@react-navigation/native';
import PostCardSmall from './components/PostCardSmall';

// const isFocused = useIsFocused();
// const scrollRef = useRef<ScrollView>(null);

export interface Props {
  navigation: StackNavigationProp<HStackParams, 'Profile'>;
  route: RouteProp<HStackParams, 'Profile'>;
}

const Profile = ({navigation, route}: Props) => {
  const isFocused = useIsFocused();
  const scrollRef = useRef<FlatList>(null);
  useEffect(() => {
    if (isFocused) {
      scrollRef.current?.scrollToOffset({animated: true, offset: 0});
    }
  }, [isFocused]);

  const data = useSelector<RootState, UserData | null>(
    state => state.user.data,
  );

  useScrollToTop(scrollRef);

  return (
    <View style={{backgroundColor: 'black'}}>
      <View style={styles.header}>
        <Ionicons
          name="chevron-back"
          color="white"
          size={25}
          onPress={() => navigation.pop(1)}></Ionicons>

        <Text style={styles.headerText}>
          {route.params.user.name.first} {route.params.user.name.last}
        </Text>

        <MaterialCommunityIcons
          name="dots-horizontal"
          size={20}
          color="white"></MaterialCommunityIcons>
      </View>

      <FlatList
        data={data?.results}
        columnWrapperStyle={{flex: 1, justifyContent: 'flex-start'}}
        renderItem={({item}) => (
          <PostCardSmall user={item} navigation={navigation} />
        )}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <View style={{margin: 10}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Image
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 40,
                  marginRight: 10,
                }}
                source={{
                  uri: route.params?.user.picture.large,
                }}></Image>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    margin: 5,
                    alignItems: 'center',
                  }}>
                  <Text style={styles.messagesText}>112</Text>
                  <Text style={styles.messagesText}>Posts</Text>
                </View>
                <View style={{margin: 5, alignItems: 'center'}}>
                  <Text style={styles.messagesText}>5,492</Text>
                  <Text style={styles.messagesText}>Followers</Text>
                </View>
                <View style={{margin: 5, alignItems: 'center'}}>
                  <Text style={styles.messagesText}>4,823</Text>
                  <Text style={styles.messagesText}>Following</Text>
                </View>
              </View>
              <View></View>
            </View>
            <Text style={styles.messagesText}>Messages</Text>
          </View>
        }
        ref={scrollRef}
        numColumns={3}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: 'black',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
  },
  messagesText: {
    color: 'white',
    fontSize: 15,
  },
  TextInput: {
    borderRadius: 5,
    backgroundColor: '#353535',
    paddingVertical: 0,
  },
});
