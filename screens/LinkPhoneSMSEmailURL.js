import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Communications from 'react-native-communications'

const LinkPhoneSMSEmailURL = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Make Phone Call, Send SMS or EmailUsing React Native Communication</Text>

        {/* เรียกเปิดแอพโทรศัพท์ เพื่อโทรออก */}
        <TouchableOpacity style={styles.buttonStyle} 
        onPress={
          () => Communications.phonecall('0123456789', true)
        }>
          <Text style={styles.buttonTextStyle}>Make Phone Call</Text>
        </TouchableOpacity>

        {/* เรียกเปิดแอพเพื่อส่งอีเมล์ */}
        <TouchableOpacity style={styles.buttonStyle} 
        onPress={
          () => 
          Communications.email(
            [
              'samit@gmail.com',
              'hello@itgenius.com'
            ],
            null,
            null,
            'Demo Subject',
            'Demo Content for the mail',
          )
        }>
          <Text style={styles.buttonTextStyle}>Send an Email</Text>
        </TouchableOpacity>

        {/* เรียกเปิดแอพเพื่อส่ง SMS */}
        <TouchableOpacity style={styles.buttonStyle}
        onPress={
          () => 
          Communications.text(
              '0123456789',
              'Follow https://itgenius.co.th'
          )
        }>
          <Text style={styles.buttonTextStyle}>Send a Text Message</Text>
        </TouchableOpacity>

        {/* เรียกเปิดแอพเพื่อลิงก์ไปยังหน้าเว็บไซต์ */}
        <TouchableOpacity style={styles.buttonStyle}
        onPress={
          () => Communications.web('https://itgenius.co.th')
        }>
          <Text style={styles.buttonTextStyle}>Open My Website</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default LinkPhoneSMSEmailURL

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#3f51b5",
    padding: 20,
    justifyContent: "center",
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    color:'white'
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: 'green',
  },
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
  },
})