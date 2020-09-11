import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import styles from "./styles";
import I18n from "../../i18n/config";

function SubCategoryList(props) {
  const [subCategories, setSubCategories] = useState(props.route.params.item);

  let deviceLocale = I18n.currentLocale();

  let subCategoriesAux = subCategories.subcategories
    ? subCategories.subcategories
    : undefined;

  let subCategoryArr = [];

  if (subCategoriesAux) {
    for (var prop in subCategoriesAux) {
      subCategoryArr.push(subCategoriesAux[prop]);
    }
  }

  const handleNavigation = (item) => {
    props.navigation.navigate("Report", {
      item: item,
    });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        height: "50%",
        top: 10,
        bottom: 50,
      }}
    >
      <Text style={styles.title}>
        {
          (deviceLocale =
            ("en-US" && subCategories.name.en) || subCategories.name.es)
        }
      </Text>
      <Text style={styles.subtitle}>{I18n.t("subCategorySubtitle")}</Text>
      {subCategoryArr.length <= 0 && (
        <Text style={styles.notFound}>{I18n.t("notFound")}</Text>
      )}
      <ScrollView>
        {subCategoryArr.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.container}
            onPress={() => handleNavigation(item)}
          >
            <Text style={styles.text}>
              <Image
                style={{ width: 30, height: 30}}
                source={{ uri: item.icon }}
              />
              {(deviceLocale = ("en-US" && item.name.en) || item.name.es)}{" "}
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
      </ScrollView>
    </View>
  );
}

export default SubCategoryList;
