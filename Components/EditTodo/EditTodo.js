import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, Alert } from "react-native";

const EditTodo = (props) => {
 const {task} = props.route.params
 const [taskEdit, onChangeText] = useState(task);
 
//  console.log(task)
 console.log(props.todos)


const handleTaskEdit = (index) => {
  
      const todosCopy = [...props.todos];
      todosCopy[index] = taskEdit;
      props.setTodos(todosCopy)
      props.navigation.navigate("View"); 

   }



  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={styles.inputBox}>
      <TextInput
        style={styles.input}
        placeholder="Add Todo"
        placeholderTextColor="#0067B1"
        value={taskEdit}
        onChangeText={onChangeText}
      ></TextInput>
      <Pressable style={styles.submitButton} onPress={() => handleTaskEdit(props.todos.indexOf(task)) }>
        <Text>Submit</Text>
      </Pressable>
     
      </View>
    </View>
  );

  };
export default EditTodo;

const styles = StyleSheet.create({
  submitButton: {
  },
});

