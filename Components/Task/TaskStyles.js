import { StyleSheet } from "react-native";

const stylesTask = StyleSheet.create({
  todoContent: {
    // width: "90%",
    height: 100,
    // padding: ,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: 'white',
    shadowOffset: { width: -10, height: 11 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
    borderRadius: 5,
  },
  text: {
    color: "#AA4A30",
    fontSize: 18,
    textAlign: "center",
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    flexWrap: 'wrap',
  },
});

export default stylesTask;
