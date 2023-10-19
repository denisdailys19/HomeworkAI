import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Camera, CameraPermissionStatus, useCameraDevice } from 'react-native-vision-camera'

import MainContainer from './src/screens/MainContainer';

const { hasPermission, requestPermission } = useCameraPermission()

export default function App() {
const device = useCameraDevice('back')

if(device == null) return
  return (
    <Camera />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
