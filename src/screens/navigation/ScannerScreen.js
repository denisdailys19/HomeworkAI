import { useIsFocused } from '@react-navigation/native';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import { usePermissions, saveToLibraryAsync } from 'expo-media-library'
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ScannerScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [permissionRequest, requestPermission] = usePermissions();
  const [type, setType] = useState(CameraType.front);
  const [flash, setFlash] = useState(FlashMode.off);
  const [image, setImage] = useState(null);
  const cameraRef = useRef(null);

  const onPress = () => {
    setType(type === CameraType.back ? CameraType.front : CameraType.back);
  }
  const flashButton = () => {
    setFlash(flash === FlashMode.off ? FlashMode.on : FlashMode.off)
  }

  const takePhoto = async () => {
    try{
      const data = await cameraRef.current.takePictureAsync();
      setImage(data.uri);
      saveToLibraryAsync(data.uri);
    } catch(e) {
      console.log(e);
    }
  }

  const savePhoto = async () => {

  }

  return (
    <Camera style={styles.camera} type={type} ref={cameraRef} flashMode={flash}>
      <View style={styles.buttonContainer}>
        <Ionicons name={ flash === FlashMode.off ? 'flash-off' : 'flash' } style={styles.buttonContents} onPress={flashButton} />
        <MaterialCommunityIcons name={'camera-flip-outline'} style={styles.buttonContents} onPress={onPress} />
      </View>
      <View style={styles.bottomContainer}>
        <Entypo name={'circle'} style={styles.buttonContainerBottom} onPress={takePhoto} />
      </View>
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  camera: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    margin: 10,
    alignSelf: 'flex-end'
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection:'row',
    alignItems:'center'
  },
  buttonContents: {
    color: 'white',
    flex: -1,
    fontSize: 35,
    position: 'relative',
    top: 10,
    height: 40
  },
  buttonContainerBottom: {
    flex: 0.5,
    fontSize: 70,
    position: 'absolute',
    left: '42.5%',
    top: '75%',
    color: 'white'
  }
});

export default ScannerScreen