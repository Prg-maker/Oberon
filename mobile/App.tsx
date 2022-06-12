import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Home } from './src/screens/Home';

export default function App() {
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

