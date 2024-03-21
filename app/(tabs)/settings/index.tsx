import { ScrollView, StyleSheet, Text, TouchableOpacity, View, ViewBase } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { useAuth } from '@clerk/clerk-expo';
import { defaultStyles } from '@/constants/Styles';
import { FlatList } from 'react-native-gesture-handler';
import BoxedIcon from '@/components/BoxedIcon';
import { Ionicons } from '@expo/vector-icons';

const settings = () => {
  const devices = [
    {
      name: 'Broadcact Lists',
      icon: 'megaphone',
      backgroundColor: Colors.green,
    },
    {
      name: 'Starred Messages',
      icon: 'star',
      backgroundColor: Colors.yellow,
    },
    {
      name: 'Linked Devices',
      icon: 'laptop-outline',
      backgroundColor: Colors.green,
    },
  ];

  const items = [
    {
      name: 'Account',
      icon: 'key',
      backgroundColor: Colors.primary,
    },
    {
      name: 'Privacy',
      icon: 'lock-closed',
      backgroudColor: Colors.red,
    },
    {
      name: 'Chats',
      icon: 'logo-whatsapp',
      backgroundColor: Colors.green,
    },
    {
      name: 'Notifications',
      icon: 'notifications',
      bacgroundColor: Colors.red,
    },
    {
      name: 'Storage and Data',
      icon: 'repeat',
      backgroundColor: Colors.green,
    }
  ];

  const support = [
    {
      name: 'Help',
      icon: 'information',
      backgroundColor: Colors.primary,
    },
    {
      name: 'Tell a friend',
      icon: 'heart',
      backgroundColor: Colors.red,
    },
  ];

  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background}}>
      <ScrollView
      contentInsetAdjustmentBehavior='automatic'
      >
        <View style={defaultStyles.block}>
          <FlatList 
          data={devices} 
          scrollEnabled={false}
          ItemSeparatorComponent={() => <View style={defaultStyles.separator}/>}
          renderItem={({ item }) => (
            <View style={defaultStyles.item}>
              <BoxedIcon name={item.icon} backgroundColor={item.backgroundColor}/>
              <Text style={{ fontSize: 18, flex: 1 }}>{item.name}</Text>
              <Ionicons name='chevron-forward' size={20} color={Colors.gray}/>
            </View>
          )} 
          />
        </View>
        <View style={defaultStyles.block}>
          <FlatList 
          data={items} 
          scrollEnabled={false}
          ItemSeparatorComponent={() => <View style={defaultStyles.separator}/>}
          renderItem={({ item }) => (
            <View style={defaultStyles.item}>
              <BoxedIcon name={item.icon} backgroundColor={item.backgroundColor}/>
              <Text style={{ fontSize: 18, flex: 1 }}>{item.name}</Text>
              <Ionicons name='chevron-forward' size={20} color={Colors.gray}/>
            </View>
          )} 
          />
        </View>
        <View style={defaultStyles.block}>
          <FlatList 
          data={support} 
          scrollEnabled={false}
          ItemSeparatorComponent={() => <View style={defaultStyles.separator}/>}
          renderItem={({ item }) => (
            <View style={defaultStyles.item}>
              <BoxedIcon name={item.icon} backgroundColor={item.backgroundColor}/>
              <Text style={{ fontSize: 18, flex: 1 }}>{item.name}</Text>
              <Ionicons name='chevron-forward' size={20} color={Colors.gray}/>
            </View>
          )} 
          />
        </View>

        <TouchableOpacity onPress={() => signOut()}>
            <Text
            style={{
              color: Colors.primary,
              fontSize: 18,
              textAlign: 'center',
              paddingVertical: 14,
            }}
            >Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default settings

const styles = StyleSheet.create({})