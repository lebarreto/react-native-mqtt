import React, { useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Alert, TouchableOpacity } from 'react-native';
// import init from 'react_native_mqtt';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Paho from "paho-mqtt"
import mqtt from 'mqtt';

// init({
//   size: 10000,
//   storageBackend: AsyncStorage,
//   defaultExpires: 1000 * 3600 * 24,
//   enableCache: true,
//   sync: {},
// });

const host = 'mqtt://broker.emqx.io:1883/testMqtt'

const options = {
  keepalive: 60,
  clientId: 'mqttx_336091ca',
  protocolId: 'MQTT',
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  will: {
    topic: 'WillMsg',
    payload: 'Connection Closed abnormally..!',
    qos: 0,
    retain: false
  },
}
export default function Alerts({ route }) {
  // const { host, port, topic, id } = route.params;
  const [subscribedTopic, setSubscribedTopic] = useState('')
  const [status, setStatus] = useState('')
  // client = new Paho.MQTT.Client(host, Number(port), `/${topic}`);
  // const client = new Paho.MQTT.Client('mqtt://broker.emqx.io', 1883, 'mqttx_336091ca',);

  // client.connect({ 
  //   onSuccess: (e) => {console.log('sucessoooo', e)},
  //   useSSL: false ,
  //   userName: '',
  //   password: '',
  //   onFailure: (e) => {console.log("here is the error" , e); }

  // });
  const subscribe = () => {
    // setSubscribedTopic(topic);
    // client.subscribe(topic, { qos: 0 });
  }

  const publish = () =>{ 
    // var message = new Paho.MQTT.Message(id + ':' + topic);
    // message.destinationName = topic;
    // client.send(message);
    console.log('subscribed and published');

  }

  const unsubscribe = () =>{
    // client.unsubscribe(subscribedTopic);
    // setSubscribedTopic('')
    console.log('unsubscribed');
  }

  const onStart = () => { 
    publish();
  }

  const onStop = () => { 
    unsubscribe();
  }

  const onConnect = () => { 
    console.log('onConnect');
    setStatus('connected');
    // client.subscribe('mqttProject');
  }

  const onFailure = (err) => { 
    console.log('Connect failed!');
    console.log(err);
    setStatus('failed');
  }

  const connect = () => { 
    setStatus('isFetching');
    const client = mqtt.connect(host, options)
    client.on('error', (err) => {
      console.log('Connection error: ', err)
      client.end()
    })
    
    client.on('reconnect', () => {
      console.log('Reconnecting...')
    })
    // client.connect({
    //   onSuccess: onConnect,
    //   useSSL: false,
    //   timeout: 3,
    //   onFailure: onFailure
    // });    
    
  }

  useEffect(() => {
    connect()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View>
       <TouchableOpacity style={styles.highButton} onPress={() => Alert.alert('A High Severity Alert is sending...')}>
        <Text style={styles.appButtonText}>High Severity</Text>
       </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.mediumButton} onPress={() => Alert.alert('A Medium Severity Alert is sending...')}>
          <Text style={styles.appButtonText}>Medium Severity</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.lowButton} onPress={() => Alert.alert('A Low Severity Alert is sending...')}>
          <Text style={styles.appButtonText}>Low Severity</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.fixToText}>
          <TouchableOpacity style={styles.startButton} onPress={() => onStart()}>
            <Text style={styles.appButtonText}>Start</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.stopButton} onPress={() => onStop()}>
            <Text style={styles.appButtonText}>Stop</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    backgroundColor: '#eaf4f4',
  },
  highButton: {
    elevation: 8,
    backgroundColor: "#FF1654",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  mediumButton: {
    elevation: 8,
    backgroundColor: "#ffb703",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 12,
    marginBottom: 20,
    marginTop: 20,
  },
  lowButton: {
    elevation: 8,
    backgroundColor: "#70C1B3",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  startButton: {
    backgroundColor: "#247BA0",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 12,
    marginTop: 60,
    width: 150,
    marginRight: 5,
  },
  stopButton: {
    backgroundColor: "#FF1654",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 12,
    marginTop: 60,
    width: 150,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

 


