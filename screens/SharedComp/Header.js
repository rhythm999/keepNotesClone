import { StyleSheet, Text, View } from "react-native";

function Header() {
  return (
    <View style={styles.boxContainer}>
      <Text style={styles.title}>Google Keep</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontStyle: "italic",
    fontSize: 24,
    fontWeight: "600",
    color: "#F9C74F",
  },
  boxContainer: {
    paddingTop: "10%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "yellow",
    backgroundColor: "#ffffff",
  },
});

export default Header;
