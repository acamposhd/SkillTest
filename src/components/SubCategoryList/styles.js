import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 35,
    marginTop: 3,
    position:"relative",
    borderBottomColor: "#000000",
    borderBottomWidth: 1.5,
    backgroundColor: "#F6F2FF",
    textAlign:"left"
  },
  text: {
    color: "#000000",
    fontWeight:"bold",
    fontSize:18,


  },
  subtitle: {
    color: "#000000",
    paddingLeft: 15,
    paddingTop: 10,
    fontSize:18,
    fontWeight:"bold"
  },
  title: {
    paddingLeft: 15,
    paddingTop: 25,
    color: "#000000",
    fontSize: 30,
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
  notFound: {
    fontSize:50,
    textAlign:"center",
    fontWeight:"bold",
    color:"#000000",
    marginTop:100
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
    position: 'absolute',
    bottom: 15, 
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
    position: 'absolute', 
    bottom: 15,
    right:10
  },
});

export default styles;
