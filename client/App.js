import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./navigation";
export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
      {/* <AuthProvider>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Home"
            component={Home}
            // options={{ headerShown: false }}/
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
      </AuthProvider> */}
    </NavigationContainer>
  );
}
