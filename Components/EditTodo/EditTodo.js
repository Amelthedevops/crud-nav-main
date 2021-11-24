import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, Alert } from "react-native";
import styles from "./editStyles"

const EditTodo = (props) => {
 const {task} = props.route.params
 const [taskEdit, onChangeText] = useState(task);
 
//  console.log(task)
 console.log(props.todos)


const handleTaskEdit = (index) => {
  if(taskEdit === ""){
    Alert.alert("Please enter your todo!")
  } else{
    const todosCopy = [...props.todos];
      todosCopy[index] = taskEdit;
      props.setTodos(todosCopy)
      props.navigation.navigate("View"); 
  }
   }

   
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#EDCFA9'}}>
      <View style={styles.inputBox}>
      <TextInput
        style={styles.input}
        placeholder="Edit Todo"
        placeholderTextColor="#AA4A30"
        multiline={true}
        value={taskEdit}
        onChangeText={onChangeText}
      ></TextInput>
      </View>
      <Pressable style={styles.submitButton} onPress={() => handleTaskEdit(props.todos.indexOf(task)) }>
        <Text style={styles.submit}>Submit</Text>
      </Pressable>
     
    </View>
  );

  };
export default EditTodo;


