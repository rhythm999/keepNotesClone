import { View, Text } from "react-native";
import Header from "../SharedComp/Header";
import styles from "./HomeStyle";
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

export default HomeScreen;
