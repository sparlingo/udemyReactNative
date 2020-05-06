import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ImageDetail = () => {
  return <View>
    <Image source={props.imageSource} />
    <Text>{props.title}</Text>
    <Text>Score: {props.score}</Text>
  </View>
  
}

const styles = StyleSheet.create({})

export default ImageDetail