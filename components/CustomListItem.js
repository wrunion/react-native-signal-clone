import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from '@rneui/themed'

const { Content, Title, Subtitle } = ListItem;


const CustomListItem = ({ chatId, chatName, enterChat }) => {
  return (
    <ListItem>
      <Avatar rounded 
        source={{ 
          uri: 'https://cdn-icons-png.flaticon.com/512/3237/3237472.png'
        }}
      />

      <Content>
        <Title style={styles.title}>
          YouTube Chat
        </Title>
        <Subtitle numberOfLines={1} elipsisMode='tail' style={styles.subtitle}> 
          This is a test subtitle This is a test subtitle This is a test subtitle
        </Subtitle>
      </Content>
    </ListItem>
  )
}

export default CustomListItem

const styles = StyleSheet.create({
  title: { fontWeight: '600', fontSize: '18' },
  subtitle: { color: 'dimgrey' }
})

// more free icons here: https://www.flaticon.com/free-icons/profile