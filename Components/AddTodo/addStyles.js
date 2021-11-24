import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#EDCFA9',
    },
    input: {
      fontSize: 18,
      height: 40,
      margin: 12,
      //borderWidth: 0,
      borderBottomWidth: 3,
      padding: 10,
      marginBottom: 0,
      width: "80%",
      borderColor: 'white',
      color: '#AA4A30',
    },
    addButton: {
      borderWidth: 1,
    borderColor: '#D57149',
      borderRadius: 20,
      width: "20%",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 50,
      marginLeft: "60%",
      paddingVertical: 12,
      backgroundColor: '#D57149',
      
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
   
  });
  export default styles;