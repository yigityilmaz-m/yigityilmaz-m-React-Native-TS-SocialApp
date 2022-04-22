import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';

type Props = {};

const Camera = (props: Props) => {
  const [{cameraRef}, {takePicture}] = useCamera();
  return (
    <View style={{flex: 1}}>
      
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.preview}>
        <Button title="Photo" onPress={() => {}}></Button>
      </RNCamera>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
