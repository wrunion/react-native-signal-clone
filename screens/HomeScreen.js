import React, { useLayoutEffect } from 'react';
import { View, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Avatar } from '@rneui/themed'; 
import CustomListItem from '../components/CustomListItem';

import { DEFAULT_USER_ICON_URI } from '../utils/utils';
import { CHAT_LOGS } from '../utils/chatLogs'

const HomeScreen = ({ navigation }) => {

  const logoutUser = () => {
    navigation.replace('Login');
  }

  const enterChat = (id, chatName) => {
    navigation.navigate('Chat')
  }

  useLayoutEffect(() => {
    navigation.setOptions({ 
      title: 'Contacts', 
      headerStyle: { backgroundColor: 'white' },
      headerTitleStyle: { color: 'black' },
      headerTintColor: 'black',
      headerLeft: () => (
        <View>
          <TouchableOpacity activeOpacity={0.5} onPress={logoutUser}>
            <Avatar source={{ uri: DEFAULT_USER_ICON_URI }} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View>
          <TouchableOpacity activeOpacity={0.5}>
            <SimpleLineIcons name='pencil' size={24} color='black' onPress={enterChat} />
          </TouchableOpacity>
        </View>
      )
    })
  }, [navigation]);

  console.log(CHAT_LOGS)

  return (
    <SafeAreaView>
      <ScrollView>
        {CHAT_LOGS.map(chat => {
          const { id, title, subtitle, avatarURI } = chat;
          return <CustomListItem key={id} id={id} title={title} subtitle={subtitle} avatarURI={avatarURI} />
        })}
      </ScrollView>
    </SafeAreaView>
  )
};

// id, title, subtitle, avatarURI


export default HomeScreen;