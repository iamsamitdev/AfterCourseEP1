import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNetInfo } from '@react-native-community/netinfo'

const InternetConnnectionStatus = () => {

  const netInfo = useNetInfo()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Connection Staus</Text>
      <Text 
        style={{
          marginBottom: 20,
          width:50,
          height:50,
          backgroundColor: netInfo.isConnected ? 'green':'red'
        }}
      />
      <Text style={styles.textSmall}> {netInfo.isConnected ? 'Connected':'No Internet Connection' }</Text>
    </View>
  )
}

export default InternetConnnectionStatus


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
  },
  textSmall: {
    fontSize: 20,
    color: '#fff'
  }

})