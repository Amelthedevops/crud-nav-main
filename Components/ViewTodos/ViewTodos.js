import React from "react";
import { StyleSheet, Pressable, Text, View, ScrollView, SafeAreaView, Alert} from "react-native";
import styles from "./Styles.js";
import stylesTask from "../Task/TaskStyles";

// Custom Components
import Task from "../Task/Task.js";


const ViewTodos = (props) => {

  const showConfirmDialog = (task) => {
    return Alert.alert(
      "Deleting task",
      "Are you sure you want to delete this?",
      [
        {
        text: 'Yes',
        onPress: () => {
          deleteTask(props.todos.indexOf(task))
        }
      },
    {
      text: "No",
    }]
    )
  }

  const deleteTask = (index) => {
    let newTodo = [...props.todos];
    newTodo.splice(index, 1);
    props.setTodos(newTodo)
   
  };

  return (
    
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: '#EDCFA9',
      }}
    >
      
       
        <Pressable
          style={styles.button}
          onPress={() => props.navigation.navigate("Add")}
        >
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>

       
        {
            props.todos.map((task, index) => {
              return (
                
                <Pressable style={styles.contentView}
                key={index} onPress={() => props.navigation.navigate("Edit", {task: task}) } 
                onLongPress={() => showConfirmDialog(task)}
                  >
                
                <View> 
                  <Task task={task}/> 
                </View>
                 
                  </Pressable>
                 
              )
              
            })
          }

         
          


      </View>
     
  );
};




export default ViewTodos;

