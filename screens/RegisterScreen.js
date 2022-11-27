import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, Input, Image, Text } from '@rneui/themed'; 

const RegisterScreen = ({ navigation }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Login'
    })
  }, [navigation]);

  const register = () => { 
    navigation.navigate('Login') 
  };

  return(
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style='light' />

      <Text h3 style={styles.h3}>
        Create a Signal Account
      </Text>

      <View style={styles.inputContainer}>
        <Input placeholder='Full Name' autoFocus type='text' value={name} onChangeText={(text) => setName(text)} />
        <Input placeholder='Email' type='email' value={email} onChangeText={(text) => setEmail(text)} />
        <Input placeholder='Password' type='password' secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
        <Input placeholder='Profile Picture URL (optional)' type='text' value={imageUrl} onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
        <Button 
          onPress={register}
          title='Register'
          raised
        />
      </View>

      <View style={styles.keyboardPadding} />
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white'
  },
  inputContainer: {
    width: 300
  },
  signalIcon: {
    width: 75, height: 75, marginBottom: 35 
  },
  keyboardPadding: { height: 100 },
  h3: { marginBottom: 50 }
})