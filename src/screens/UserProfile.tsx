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

const UserProfile = ({navigation, route}: Props) => {
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
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Feather name="lock" color="white" size={10}></Feather>

          <Text style={styles.headerText}>{route.params?.user.name.first}</Text>
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

      <FlatList
        data={data?.results}
        columnWrapperStyle={{flex: 1, justifyContent: 'flex-start'}}
        renderItem={({item}) => (
          <PostCardSmall user={item} navigation={navigation} />
        )}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <View>
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
            <Text style={styles.messagesText}>Messages</Text>
            <TextInput
              placeholder="  🔎 Search"
              placeholderTextColor={'grey'}
              style={styles.TextInput}></TextInput>
          </View>
        }
        ref={scrollRef}
        numColumns={3}
      />
    </View>
  );
};

export default UserProfile;

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
