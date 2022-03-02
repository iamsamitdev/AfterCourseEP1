import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'

const ScreenOrientation = () => {

  const [orientation, setOrientation] = useState("PORTRAIT")

  useEffect(() => {

    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      if(width<height){
        setOrientation("PORTRAIT")
      }else{
        setOrientation("LANDSCAPE")
      }
    })

  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{orientation}</Text>
    </View>
  )
}

export default ScreenOrientation


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