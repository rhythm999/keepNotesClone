import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./LandingStyle";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function LandingScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require("../../assets/keepIcon.png")}
      />
      <Text style={styles.title}>Google Keep</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("homeScreen")}
      >
        <Text style={styles.buttonText}>Enter the app now!</Text>
        <Entypo
          name="arrow-with-circle-right"
          size={30}
          color="#F9C74F"
          style={{ margin: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default LandingScreen;
