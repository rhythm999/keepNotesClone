import { StyleSheet } from "react-native";
import LandingScreen from "./screens/Landing/LandingScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home/homeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="homeScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="landingScreen" component={LandingScreen} />
        <Stack.Screen name="homeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
