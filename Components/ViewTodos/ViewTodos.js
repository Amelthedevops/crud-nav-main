import React from "react";
import { StyleSheet, Pressable, Text, View, ScrollView } from "react-native";
import styles from "./Styles.js";
import stylesTask from "../Task/TaskStyles";

// Custom Components
import Task from "../Task/Task.js";


const ViewTodos = (props) => {

  const deleteTask = (index) => {
    let newTodo = [...props.todos];
    console.log(newTodo)
    newTodo.splice(index, 1);
    props.setTodos(newTodo)
    console.log(newTodo) 
    // return newTodo
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
                onLongPress={() => deleteTask(props.todos.indexOf(task))} >
                
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

