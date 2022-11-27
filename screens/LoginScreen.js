import React, { useState, useEffect } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { Button, Input, Image } from '@rneui/themed'; 
import { StatusBar} from 'expo-status-bar';

import { SIGNAL_LOGO_URI } from '../utils/utils'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    let user = false;
    if (user) {
      navigation.replace('Home');
    }
  }, []);

  const login = () => {
    navigation.replace('Home');
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style='light' />
      <Image source={{ uri: SIGNAL_LOGO_URI }} style={styles.signalIcon} />

      <View style={styles.inputContainer}>
        <Input placeholder='Email' autoFocus type='email' value={email} onChangeText={(text) => setEmail(text)} />
        <Input placeholder='Password' autoFocus type='password' secureTextEntry value={password} onChangeText={(text) => setPassword(text)} onSubmitEditing={login} />
      </View>

      <Button 
        onPress={login}
        containerStyle={styles.button} 
        title='Login' 
      /> 
      <Button 
        onPress={() => navigation.navigate('Register')}
        containerStyle={styles.button} 
        type='outline' 
        title='Register' 
      /> 
      <View style={styles.keyboardPadding} />
    </KeyboardAvoidingView>
  )
}

export default LoginScreen;

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
  button: {
    width: 300,
    marginTop: 10
  },
  signalIcon: {
    width: 75, height: 75, marginBottom: 35 
  },
  keyboardPadding: { height: 100 }
})