import { StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//   container: {
//     padding: 30,
//     marginTop: 3,
//     borderBottomColor: "#000000",
//     borderBottomWidth: 1.5,
//     backgroundColor: "#F6F2FF",
//     alignItems: "center",
//   },
//   text: {
//     color: "#000000",
//   },
//   subtitle: {
//     color: "#000000",
//     paddingLeft: 15,
//     paddingTop: 10,
//     fontSize:16
//   },
//   title: {
//     paddingLeft: 15,
//     paddingTop: 25,
//     color: "#000000",
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   buttonStyle: {
//     position: "absolute",
//     bottom: 0,
//   },
//   bottom: {
//     flex: 1,
//     justifyContent: "flex-end",
//     marginBottom: 36,
//   },
//   backButton: {
//     width: "45%",
//     borderColor: "#CB2038",
//     borderWidth: 1,
//     height: 60,
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 15,
//     position: "absolute", //Here is the trick
//     bottom: 15, //Here is the trick
//     left: 10,
//   },
//   nextButton: {
//     width: "45%",
//     borderColor: "#CB2038",
//     borderWidth: 1,
//     height: 60,
//     backgroundColor: "#CB2038",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 15,
//     position: "absolute", //Here is the trick
//     bottom: 15, //Here is the trick
//     right: 10,
//   },
//   textAreaContainer: {
//     borderColor: "#000000",
//     borderWidth: 1,
//     borderRadius:15,
//     left: 10,
//     right:10,
//     top:50,
//     width:"95%"
//   },
//   textArea: {
//     height: 150,
//     left:10,
//     top:-50,
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textareaContainer: {
    height: 320,
    width: "95%",
    padding: 5,
    backgroundColor: "#F6F2FF",
    borderWidth: 2,
    marginLeft: 10,
    top: 60,
    borderRadius: 15,
  },
  textarea: {
    textAlignVertical: "top",
    height: 310,
    fontSize: 14,
    color: "#333",
  },
  text: {
    color: "#000000",
    fontSize: 18,
    paddingLeft: 15,
  },
  subtitle: {
    color: "#000000",
    paddingLeft: 15,
    paddingTop: 5,
    fontSize: 24,
  },
  title: {
    paddingLeft: 15,
    paddingTop: 25,
    color: "#000000",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default styles;
