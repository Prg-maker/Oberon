import {StyleSheet} from 'react-native'
import {getBottomSpace} from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container:{
    height: '100%',
    backgroundColor: '#302B27',

    display: 'flex',
    alignItems: 'center',
    paddingTop: getBottomSpace() + 100
  }
})