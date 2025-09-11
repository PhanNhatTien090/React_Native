import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Fontisto from '@expo/vector-icons/Fontisto';


const ForgetPassword = () => {
  return (
    <LinearGradient colors={['#C7F4F6', 'white', '#37D6F8']} style={styles.container}>
      
      <View style={styles.iconContainer}>
        <Fontisto name="locked" size={100} color="black" />
      </View>

      <Text style={styles.title}>FORGET{'\n'}PASSWORD</Text>

      <Text style={styles.subtitle}>
        Provide your account's email for which you{'\n'}want to reset your password
      </Text>

      <View style={styles.inputContainer}>
        <Fontisto name="email" size={20} color="black" />
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>NEXT</Text>
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
  iconContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 30,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#eee',
    borderRadius: 5,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft:10,
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

export default ForgetPassword;
