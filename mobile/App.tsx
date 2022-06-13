import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Home } from './src/screens/Home';


import AppLoading from 'expo-app-loading';
import { useFonts, Inter_600SemiBold , Inter_500Medium , Inter_400Regular} from '@expo-google-fonts/inter';
export default function App() {


  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  return (
    <View
      style={{
        flex: 1,
      }}
    >
     <StatusBar 
        style="light"
        backgroundColor='transparent'
        translucent
      />
      <Home/>
    </View>
  );
}

