import React from 'react'

import {View , Image, Text} from 'react-native'
import {
  styles
} from './styles'
    
    
export function Card(){

  return(
    <View style={styles.container}>

      <View style={styles.content}>
        <Image style={styles.image} source={{uri: "https://github.com/Prg-maker.png"}}/>
      </View>

      <Text style={styles.userName}>Daniel</Text>
    </View>
  )
}