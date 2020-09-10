import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";
import ControlButtons from "../ControlButtons/index";
import I18n from "../../i18n/config";

const ReportView = (props) => {
  const [data, setData] = useState(props.route.params.item);
  const [state, setState] = useState({ text: "" });

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>{data.name.es}</Text>
      <Text style={styles.subtitle}>
      {I18n.t("reportSubtitle")}
      </Text>

      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder={I18n.t("reportPlaceHolder")}
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
        />
      </View>

      <ControlButtons props={props} nextPage={"Map"} flex={2}/>
      {/* <View
        style={{
          flex: 2,
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => props.navigation.goBack()}
        >
          <Text style={{ color: "#CB2038", fontSize: 16 }}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() =>
            props.navigation.navigate("Map", {
              item: "k",
            })
          }
        >
          <Text style={{ color: "#FFFFFF", fontSize: 16 }}>Next</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default ReportView;
