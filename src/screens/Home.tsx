import {
  RefreshControl,
  StyleSheet,
  Text,
  View,
  Touchable,
  ScrollView,
} from 'react-native';
import React, {Key, useEffect, useRef, useState} from 'react';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import {HStackParams} from '../navigation/HomeStack';
import {useDispatch, useSelector} from 'react-redux';
import {
  CompositeNavigationProp,
  RouteProp,
  useIsFocused,
  useScrollToTop,
} from '@react-navigation/native';
import {getUser, setLoading} from '../store/actions/usersActions';
import {ThunkDispatch} from 'redux-thunk';
import {RootState} from '../store';
import {User, UserAction, UserData} from '../store/types';
import PostCard from './components/PostCard';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Gstyles from '../GlobalStyles';

type Props = {
  navigation: StackNavigationProp<HStackParams, 'Home'>;
  route: RouteProp<HStackParams, 'Home'>;
};

const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Home = ({navigation}: Props) => {
  const [refreshing, setRefreshing] = useState(false);

  const dispatch: ThunkDispatch<RootState, null, UserAction> = useDispatch();
  const isFocused = useIsFocused();

  const data = useSelector<RootState, UserData | null>(
    state => state.user.data,
  );
  const loading = useSelector<RootState, boolean>(state => state.user.loading);

  useEffect(() => {
    dispatch(setLoading());
    if (isFocused == true) {
      dispatch(getUser());
    }
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getUser());
    setRefreshing(false);
  };

  return (
    <ScrollView
      style={Gstyles.container}
      // contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['black']}
        />
      }>
      {data?.results.map((user: User, index: Key) => {
        return (
          <View key={index}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Profile', {user});
                console.log(user.name.first);
              }}>
              <PostCard user={user} />
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
});

export default Home;
