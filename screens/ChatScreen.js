import React, { useLayoutEffect, useState, useEffect } from 'react'
import { 
  StyleSheet, Text, TextInput, 
  SafeAreaView, Platform, Keyboard, 
  KeyboardAvoidingView, View, ScrollView, 
  TouchableOpacity, TouchableWithoutFeedback
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import { sendMessage, sendMessageDev, PRIMARY_BLUE, BACKGROUND_GREY, getTimestamp } from '../utils/utils'

const ChatScreen = ({ navigation }) => {

  const [input, setInput] = useState('');
  const [timestamp, setTimestamp] = useState(() => getTimestamp());
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async () => {
    Keyboard.dismiss();

    if (!input) {
      alert('Please add text to the text box.');
      return;
    }
    setMessages((messages) => [...messages, { content: input, isSender: false, timestamp }]);

    const response = sendMessageDev();
    // const response = await sendMessage(input);
    setMessages((messages) => [...messages, { content: response, isSender: true, timestamp }]);

    setInput('');
  }

  useEffect(() => {
    let timestamp = getTimestamp();
    setTimestamp(timestamp);
  }, [messages]);

  useEffect(() => {
    setMessages([{ content: 'Hello! How are you?', isSender: true, id: 1, timestamp }]);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Chat',
      headerBackTitleVisible: true,
      headerTitleAlign: 'left',
    })
  }, [navigation])
  
  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar style='light' />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <ScrollView>
          {messages?.map((message, index) => (
            message.isSender ? 
              <View style={styles.sender} key={index}>
                <Text style={styles.senderText}>{message.content}</Text>
                <Text style={styles.senderTimestamp}>{message.timestamp}</Text>
              </View>
              :
              <View style={styles.receiver} key={index}>
                <Text style={styles.receiverText}>{message.content}</Text>
                <Text style={styles.receiverTimestamp}>{message.timestamp}</Text>
              </View>
          ))}
          </ScrollView>  
          <View style={styles.footer}>
            <TextInput 
              value={input}
              onChangeText={(text) => setInput(text)}
              placeholder='Signal Message'
              style={styles.textInput}
              autoFocus
              onSubmitEditing={handleSendMessage}
            />
            <TouchableOpacity onPress={handleSendMessage} activeOpacity={0.5}>
              <Ionicons name='send' size={24} color={PRIMARY_BLUE} />
            </TouchableOpacity>
          </View>
        </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ChatScreen;

const styles = StyleSheet.create({
  parent: { flex: 1, backgroundColor: 'white' },
  container: { flex: 1 },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 15
  },
  textInput: {
    bottom: 0,
    height: 40,
    flex: 1, 
    marginRight: 15,
    backgroundColor: BACKGROUND_GREY,
    padding: 10,
    color: 'grey', 
    borderRadius: 30
  },
  sender: {
    padding: 15, 
    backgroundColor: PRIMARY_BLUE,
    alignSelf: 'flex-start',
    borderRadius: 20, 
    margin: 15,
    maxWidth: '80%',
    position: 'relative'
  },
  receiver: {
    padding: 15, 
    backgroundColor: BACKGROUND_GREY,
    alignSelf: 'flex-end',
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    maxWidth: '80%',
    position: 'relative'
  },
  receiverTimestamp: {
    alignSelf: 'flex-end',
    fontSize: '12px',
    color: 'grey'
  },
  senderTimestamp: {
    alignSelf: 'flex-start',
    fontSize: '12px',
    color: 'white'
  },
  senderText: {
    color: 'white'
  },
  receiverText: {}
});