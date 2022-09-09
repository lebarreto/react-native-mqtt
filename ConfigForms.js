import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

 
export default function AppForm({ navigation }) {
  const [host, setHost] = useState('');
  const [topic, setTopic] = useState('');
  const [id, setId] = useState('');
  const [port, setPort] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}> 
        <TextInput 
          style={styles.input} 
          placeholder="Host"
          value={host}
          onChangeText={text => setHost(text)}
          clearButtonMode="always" /> 
        <TextInput 
          style={styles.input}  
          placeholder="Port" 
          keyboardType={'numeric'}
          value={port}
          onChangeText={text => setPort(text)}
          clearButtonMode="always" /> 
        <TextInput 
          style={styles.input}  
          placeholder="Topic" 
          value={topic}
          onChangeText={text => setTopic(text)}
          clearButtonMode="always" /> 
        <TextInput 
          style={styles.input}  
          placeholder="ID" 
          value={id}
          onChangeText={text => setId(text)}
          clearButtonMode="always" /> 
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Alerts', {
          host, topic, port, id
        })}> 
          <Text style={styles.buttonText}>Config</Text> 
        </TouchableOpacity> 
      </View>
      <StatusBar style="light" />
    </View>
  );
}
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eaf4f4',
      alignItems: 'center',
    },
    title: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 50,
    },
    inputContainer: {
      flex: 1,
      marginTop: 30,
      width: '90%',
      padding: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      alignItems: 'stretch',
      backgroundColor: '#fff'
    },
    input: {
      marginTop: 10,
      height: 60,
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingHorizontal: 24,
      fontSize: 16,
      alignItems: 'stretch',
    },
    button: {
      marginTop: 10,
      height: 60,
      backgroundColor: '#247BA0',
      borderRadius: 10,
      paddingHorizontal: 24,
      fontSize: 16,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 20,
      shadowOpacity: 20,
      shadowColor: '#247BA0',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    }
  })