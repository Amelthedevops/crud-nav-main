import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from "react-native";
import styles from "./addStyles";

const AddTodo = (props) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task === "") {
      Alert.alert("Please enter your task!")
    }
    else {
       props.setTodos([...props.todos, task]);
       props.navigation.navigate("View"); 

    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add Todo"
        placeholderTextColor="#AA4A30"
        value={task}
        onChangeText={(text) => setTask(text)}
      ></TextInput>

      <Pressable style={styles.addButton} onPress={() => handleAddTask()}>
        <Text style= {styles.text}>Add</Text>
      </Pressable>
    </View>
  );
};



export default AddTodo;
