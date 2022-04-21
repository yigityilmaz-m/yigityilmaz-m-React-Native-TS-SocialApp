import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Menu from './components/Menu';
import Gstyles from '../GlobalStyles';
import {StackScreenProps} from '@react-navigation/stack';
import {HStackParams} from '../navigation/FeedStack.tsx/HomeStack';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {useIsFocused} from '@react-navigation/native';
import {getUser, setLoading} from '../store/actions/usersActions';
import {ThunkDispatch} from 'redux-thunk';
import {RootState} from '../store';
import {User, UserAction, UserData, UserState} from '../store/types';
import PostCard from './components/PostCard';
import {ScrollView} from 'react-native-gesture-handler';

type Props = StackScreenProps<HStackParams, 'Home'>;

const Home = ({navigation}: Props) => {
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

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <ScrollView>
        {loading ? (
          <Text style={{color: 'white'}}>Loading...</Text>
        ) : (
          data?.results.map((user: User, idx: number) => {
            return <PostCard user={user} idx={idx}></PostCard>;
          })
        )}
       
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
