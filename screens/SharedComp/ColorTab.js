import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function ColorSet({ setSelectedColor, selectedColor }) {
  let [collectionOfColors, setCollectionOfColors] = useState([
    "red",
    "green",
    "blue",
    "orange",
  ]);
  return (
    <View style={styles.mainContainer}>
      {collectionOfColors.map((e) => {
        return (
          <TouchableOpacity
            style={
              selectedColor.toLowerCase() === e
                ? styles.selectedColorBox
                : styles.colorBox
            }
            key={e}
            onPress={() => {
              if (selectedColor == e) {
                setSelectedColor("");
              } else {
                setSelectedColor(e);
              }
            }}
          >
            <FontAwesome name="circle" color={e} margin={1} />
            <Text styles={styles.colorText}>{e.toUpperCase()}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
  },
  colorBox: {
    flexDirection: "row",
    borderWidth: 0.5,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#FAF5EF",
    borderRadius: 10,
    padding: 0,
  },
  selectedColorBox: {
    flexDirection: "row",
    borderWidth: 3,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 0,
    borderColor: "black",
  },
  colorText: {
    fontSize: 10,
    fontStyle: "italic",
  },
});

export default ColorSet;
