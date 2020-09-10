import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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