import React from 'react'

import {Text, View, ScrollView} from 'react-native'
import { Card } from '../../components/CardUser'

import {
  styles
} from './styles'
    
    
export function Home(){
  return(
    <View style={styles.container}>

      <ScrollView>

        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

      </ScrollView>
      
    </View>
  )
}