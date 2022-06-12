import { View , Text} from 'react-native'
import { CardCreate } from '../../components/CardCreate'
import {
  styles
} from './styles'
    
    
export function Home(){
  return(
    <View style={styles.container}>
      <CardCreate/>
    </View>
  )
}