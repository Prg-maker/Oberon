import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';

import {Roboto_400Regular, Roboto_500Medium , Roboto_700Bold , useFonts} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading';

export default function App() {

  const [fontsLoaded] =  useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <View >
      <StatusBar style="light" />

      <Home/>
    </View>
  );
}


