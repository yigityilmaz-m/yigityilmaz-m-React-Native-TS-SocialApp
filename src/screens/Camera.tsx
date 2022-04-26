
import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';
type Props = {};

const Camera = (props: Props) => {
  const [{cameraRef}, {takePicture}] = useCamera();

  const captureHandle = async () => {
    try {
      const data = await takePicture();
      const oldPath = data.uri;
      const filePath = RNFS.PicturesDirectoryPath + '/MyTest.jpg';
      RNFS.moveFile(oldPath, filePath)
        .then(() => {
          console.log('item moved to ' + filePath);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{flex: 1}}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.preview}>
        <Button title="Photo" onPress={() => captureHandle()}></Button>
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
