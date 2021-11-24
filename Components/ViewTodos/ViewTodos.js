import React from "react";
import { StyleSheet, Pressable, Text, View, ScrollView, SafeAreaView, Alert} from "react-native";
import styles from "./Styles.js";
import stylesTask from "../Task/TaskStyles";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

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

  const deleteAllItem = (todos) => {
    let clearPage = [...props.todos];
    clearPage.splice(props.todos);
    props.setTodos(clearPage)
  };

  const showConfirmDialogAll = (todos) => {
    return Alert.alert(
      "Deleting All",
      "Are you sure you want to delete All?",
      [
        {
        text: 'Yes',
        onPress: () => {
          deleteAllItem(todos)
        }
      },
    {
      text: "No",
    }]
    )
  }

  return (
    
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: '#EDCFA9',
      }}
    >
      
      <View style={styles.buttonsContainer}>

      <Pressable
          style={styles.addIcon}
          onPress={() => props.navigation.navigate("Add")}
        >
          <Ionicons name="add" size={30} color="#D57149" />
        </Pressable>

        <Pressable
      style={styles.icon}
          onPress={() => showConfirmDialogAll(props.todos) }
        >
          <MaterialCommunityIcons name="delete" size={35} color="#D57149"  />
        </Pressable>

      </View>
       
        
       
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

