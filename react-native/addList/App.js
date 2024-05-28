import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {
        text: enteredGoalText, 
        id: Math.random().toString()
      }
    ]);
  }

  return (
    <View style={styles.addContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Your Goal' 
          style={styles.textInput} 
          onChangeText={goalInputHandler}
        />
        <Button 
          title='Submit'
          onPress={addGoalHandler} 
        />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList 
          alwaysBounceVertical={false}
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>
                  {itemData.item.text}
                </Text>
              </View> 
            )
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16 
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: 'violet',
  },
  goalText: {
    color: 'white'
  }
});