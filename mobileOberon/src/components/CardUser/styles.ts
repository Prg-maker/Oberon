import {StyleSheet} from 'react-native'
import THEME from '../../theme'

export const styles = StyleSheet.create({
  container:{
    height:224,
    width: 201,
    backgroundColor: THEME.colors.colorCard,
    borderRadius: 10,
    alignItems:'center',
    paddingTop: 20,
    marginVertical: 10 ,
  },

  content: {
  
  },

  image: {
    width: 50,
    height:50,
    borderRadius: 25,
    marginBottom: 40
  },

  userName:{
    fontFamily: THEME.fonts.bold,
    fontSize: 16,
    color: THEME.colors.colorPrimaryText
  }
})