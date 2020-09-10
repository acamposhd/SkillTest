import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import I18n from "../../i18n/config";
const ControlButtons = (props) => {
  console.log(props.props);
  return (
    <View
      style={{
        flex: props.flex,
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => props.props.navigation.goBack()}
      >
        <Text style={{ color: "#CB2038", fontSize: 16 }}>
          {I18n.t("btnBack")}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => props.nextPage &&
          props.props.navigation.navigate(props.nextPage, {
            item: "",
          })
        }
      >
        <Text style={{ color: "#FFFFFF", fontSize: 16 }}>
          {I18n.t("btnNext")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default ControlButtons;
