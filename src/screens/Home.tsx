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
  }, [isFocused]);

  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        data?.results.map((user: User, idx: number) => {
          return (
            <View key={idx}>
              <Text>
                {user.name.first} {user.name.last} {user.gender}
              </Text>
            </View>
          );
        })
      )}
      <Menu />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
