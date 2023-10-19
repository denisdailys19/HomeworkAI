import { useIsFocused } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ScannerScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (!isFocused) {
    return null;
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (!hasPermission) {
    return <Text>No access to camera</Text>;
  }
  const onCameraReady = () => {
    console.log('camera ready');
  };

  return (
    <Camera style={styles.camera} onCameraReady={onCameraReady} type={Camera.Constants.Type.back}>
      <View style={styles.buttonContainer}>
        <Text style={styles.text} onPress={console.log("LOL")} > camera </Text>
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
    flexDirection: 'row',
    margin: 20
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    color: 'white'
  }
});

export default ScannerScreen