import { View , Text} from 'react-native'
import { CardCreate } from '../../components/CardCreate'
import {FlatList} from 'react-native';
import {
  styles
} from './styles'
    
    
export function Home(){
  return(
    <View 
      style={styles.container}
    >
      <CardCreate/>
      <CardCreate/>
      <CardCreate/>
      <CardCreate/>
      <CardCreate/>
      <CardCreate/>
      <CardCreate/>
    </View>
  )
}