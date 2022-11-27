import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from '@rneui/themed'

const { Content, Title, Subtitle } = ListItem;

const CustomListItem = ({ id, title, subtitle, avatarURI }) => {
  return (
    <ListItem key={id}>
      <Avatar rounded 
        source={{ uri: avatarURI ? avatarURI : 'https://cdn-icons-png.flaticon.com/512/3237/3237472.png' }}
      />

      <Content>
        <Title style={styles.title}>
          {title}
        </Title>
        <Subtitle numberOfLines={1} elipsisMode='tail' style={styles.subtitle}> 
          {subtitle}
        </Subtitle>
      </Content>
    </ListItem>
  )
}

export default CustomListItem

const styles = StyleSheet.create({
  title: { fontWeight: '600', fontSize: '18' },
  subtitle: { color: 'dimgrey' }
});