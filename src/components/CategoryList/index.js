import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import I18n from "../../i18n/config";

const CategoryList = (props) => {
  const [categories, setCategories] = useState(props.data.categories);

  let categoryAux = [];
  let deviceLocale = I18n.currentLocale();

  for (var prop in categories) {
    categoryAux.push(categories[prop]);
  }

  categoryAux.sort(function (a, b) {
    return a.order > b.order;
  });

  const handleNavigation = (item) => {
    props.navigation.navigate("Details", {
      item: item,
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "flex-start" }}>
      <Text style={styles.title}>{I18n.t("category")}</Text>
      <Text style={styles.subtitle}>{I18n.t("categorySubtitle")}</Text>
      {categoryAux.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.container}
          onPress={() => handleNavigation(item)}
        >
          <Text style={styles.text}>
            <Image
              style={{ width: 35, height: 40 }}
              source={{ uri: item.icon }}
            />
            {(deviceLocale = ("en-US" && item.name.en) || item.name.es)}
            <Image
              style={{
                resizeMode: "contain",
                height: 30,
                width: 30,
              }}
              source={require("../../assets/r_arrow.webp")}
            />{" "}
          </Text>
        </TouchableOpacity>
      ))}
      <View
        style={{
          flex: 2,
          justifyContent: "center",
        }}
      >
        <TouchableOpacity style={styles.backButton}>
          <Text style={{ color: "#CB2038", fontSize: 16 }}>
            {I18n.t("btnBack")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={{ color: "#FFFFFF", fontSize: 16 }}>
            {I18n.t("btnNext")}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoryList;
