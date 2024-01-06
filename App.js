import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./screens/Landing/LandingScreen";
import HomeScreen from "./screens/Home/HomeScreen";
import AddNote from "./screens/Add/AddNote";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="landingScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="landingScreen" component={LandingScreen} />
        <Stack.Screen name="homeScreen" component={HomeScreen} />
        <Stack.Screen name="addNote" component={AddNote} />
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
