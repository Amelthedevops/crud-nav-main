import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  contentView: {
    width: "100%",

  },
  button: {
    marginLeft: "70%",
    marginTop: 10,
    marginBottom: 15,
    height: 30,
    width: 80,
    backgroundColor: "#D57149",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonsContainer: {
   
    flexDirection: 'row',
    marginTop: 20,
  
  },
  icon: {
    marginLeft: 190,
    paddingTop: 5,
  },
  addIcon: {
    borderWidth: 2,
    borderColor: '#D57149',
    borderRadius: 20,
    padding: 5,
    
  },
});

export default styles;
