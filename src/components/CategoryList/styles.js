import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 3,
    borderBottomColor: "#000000",
    borderBottomWidth: 1.5,
    backgroundColor: "#F6F2FF",
    alignItems: "center",
  },
  text: {
    color: "#000000",
  },
  subtitle: {
    color: "#000000",
    paddingLeft: 15,
    paddingTop: 10,
  },
  title: {
    paddingLeft: 15,
    paddingTop: 25,
    color: "#000000",
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonStyle: {
    position: 'absolute',
    bottom:0
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
  backButton: {
    width: "45%",
    borderColor:"#CB2038",
    borderWidth:1,
    height: 60,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:15,
    position: 'absolute', //Here is the trick
    bottom: 15, //Here is the trick
    left:10
    
  },
  nextButton: {
    width: "45%",
    borderColor:"#CB2038",
    borderWidth:1,
    height: 60,
    backgroundColor: "#CB2038",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:15,
    position: 'absolute', //Here is the trick
    bottom: 15, //Here is the trick
    right:10
  },
});

export default styles;
