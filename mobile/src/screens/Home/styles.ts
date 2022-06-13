import {StyleSheet} from 'react-native'
import {getBottomSpace} from 'react-native-iphone-x-helper'
import {theme} from '../../theme'
export const styles = StyleSheet.create({
  container:{
    height: '100%',
    backgroundColor: theme.colors.background,

    display: 'flex',
    alignItems: 'center',
    paddingTop: getBottomSpace() + 100,
  }
})