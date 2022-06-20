import {StyleSheet} from 'react-native'

import THEME from '../../theme'

import {getBottomSpace} from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container:{
    height: '100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: THEME.colors.colorBck,
    paddingTop: getBottomSpace() + 40,
    paddingBottom: getBottomSpace() + 20,

  }
})