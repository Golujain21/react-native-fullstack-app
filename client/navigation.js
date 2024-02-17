import { View, Text } from "react-native";
import React from "react";
import { AuthProvider } from "./src/context/authContext";
import ScreenMenu from "./src/components/Menus/ScreenMenu";

const RootNavigation = () => {
  return (
    <AuthProvider>
      <ScreenMenu />
    </AuthProvider>
  );
};

export default RootNavigation;
