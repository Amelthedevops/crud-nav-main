import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import styles from "./TaskStyles";

const Task = (props) => {
  return (
    <View style={styles.todoContent}   >
      <Text>{props.task}</Text>
    </View>
  );
};



//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}>
      
//       <TextInput onPress={() => taskEdit()}>
//       <Text style={styles.text} >Edit Todo</Text>
//       </TextInput>
//     </View>
//   );
// };
export default Task;
