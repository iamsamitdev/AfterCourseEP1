import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'

const ScreenWidthHeight = () => {

  const size = useWindowDimensions()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Width: {size.width.toFixed(2)}</Text>
      <Text style={styles.text}>Height: {size.height.toFixed(2)}</Text>
    </View>
  )
}

export default ScreenWidthHeight

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#3f51b5",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#fff',
    marginBottom: 20
  }

})