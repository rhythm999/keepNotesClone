import { Text, View } from "react-native";

function Header() {
  return (
    <View>
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
});

export default Header;
