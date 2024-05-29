import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";


function GoalInput(props){
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image 
          source={require('../assets/images/goal.png')} 
          style={styles.image}
        />
        <TextInput 
          placeholder='Your Goal' 
          style={styles.textInput} 
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button 
              title='Submit'
              onPress={addGoalHandler} 
              color='green'
            />
          </View>
          <View styles={styles.button}>
            <Button 
              title='Cancel'
              onPress={props.onCancel} 
              color='darkred'
            />
          </View>    
        </View>
      </View>
    </Modal>  
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'darkblue'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: 16,
    color: '#222',
    borderRadius: 8,
    backgroundColor: 'white'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  }
});

