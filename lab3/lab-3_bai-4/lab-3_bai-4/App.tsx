import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const VerificationScreen = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (text, index) => {
    if (text.length > 1) text = text.charAt(text.length - 1); // chỉ lấy 1 ký tự
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  return (
    <LinearGradient colors={['#37D6F8', 'white', '#37D6F8']} style={styles.container}>
      
      <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#000', marginBottom: 50, marginTop:0 }}>CODE</Text>
      <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 30 }}>VERIFICATION</Text>
      <Text style={{ fontSize: 14, textAlign: 'center', marginBottom: 30 }}>
        Enter onetime password sent on{'\n'}
        <Text style={{ fontWeight: 'bold' }}>+849092605798</Text>
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpBox}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>VERIFY CODE</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    justifyContent:"center"
  },
  otpBox: {
    borderWidth: 1,
    borderColor: '#000',
    width: 40,
    height: 40,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    margin:0,
    padding: 0
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
});

export default VerificationScreen;
