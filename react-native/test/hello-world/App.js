import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button, TextInput } from 'react-native';

export const Box = (props) => (
  <View style={{ width: 100, height: 100, backgroundColor: props.color }} />
);

export default function App() {
  const [pressedCount, setPressedCount] = useState(0);
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <Text style={{padding:10}}>Core components are ready-to-use components available from React Native, which include View, Text, Image, Button, TextInput, and ScrollView.</Text>
      <StatusBar style="auto" />
      <Text style={{padding:10}}>Count (You can press only 3 times): {pressedCount}</Text>
      <Button
        title='Press me'
        onPress={() => setPressedCount(pressedCount + 1)}
        disabled={pressedCount >= 3}
      />
      <Text style={{ marginVertical: 16 }}>
        {name ? `Hi ${name}!` : 'What is your name?'}
      </Text>
      <TextInput
        style={{ padding: 8, backgroundColor: '#cccccc' }}
        onChangeText={text => setName(text)}
      />
      <Box color="green" />
      <View  style={[ styles.container, { flexDirection: 'row'} ]}>
        <ScrollView horizontal>
          <View style={{flex: 3, backgroundColor: 'red', width: 300, height: 100 }}>
            <Text>Flex 3</Text>
          </View>
          <View style={{flex: 2, backgroundColor: 'darkorange', width: 300, height: 100 }}>
            <Text>Flex 2</Text>
          </View>
          <View style={{flex: 1, backgroundColor: 'green', width: 300, height: 100 }}>
            <Text>Flex 1</Text>
          </View>
        </ScrollView>  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
