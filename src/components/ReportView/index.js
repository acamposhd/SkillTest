import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import ControlButtons from "../ControlButtons/index";
import Textarea from "react-native-textarea";
import I18n from "../../i18n/config";

const ReportView = (props) => {
  const [data, setData] = useState(props.route.params.item);
  const [state, setState] = useState({ text: "" });
  let deviceLocale = I18n.currentLocale();

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>{I18n.t("reportPrice")}</Text>
      <Text style={styles.subtitle}>
        {(deviceLocale = ("en-US" && data.name.en) || data.name.es)}
      </Text>
      <Text style={styles.text}>{I18n.t("reportSubtitle")}</Text>

      <View style={styles.textAreaContainer}>
        <Textarea
          containerStyle={styles.textareaContainer}
          style={styles.textarea}
          //onChangeText={this.onChange} //queda pendiente
          defaultValue={state.text}
          maxLength={200}
          placeholder={I18n.t("reportPlaceHolder")}
          placeholderTextColor={"#c7c7c7"}
          underlineColorAndroid={"transparent"}
        />

        {/* <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder={I18n.t("reportPlaceHolder")}
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
        /> */}
      </View>

      <ControlButtons props={props} nextPage={"Map"} flex={2} />
    </View>
  );
};

export default ReportView;
