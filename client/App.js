import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/screens/auth/Login";
import Register from "./src/screens/auth/Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "./src/context/authContext";
import Home from "./src/screens/Home";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <AuthContext>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </AuthContext>
    </NavigationContainer>
  );
}
