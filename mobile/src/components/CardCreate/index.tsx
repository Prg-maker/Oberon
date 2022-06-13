import { Plus } from 'phosphor-react-native'
import { View , TouchableOpacity} from 'react-native'
import { styles } from './styles'
    
export function CardCreate(){
  return(
    <View style={styles.container}>

      <TouchableOpacity>
        <Plus size={32}  style={styles.plus} weight="bold" />

      </TouchableOpacity>
    </View>
  )
}