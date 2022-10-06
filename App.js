import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { HEADER_COLOR } from "./src/utils/constants";
import AppStack from "./src/stack/app-stack";

export default function App() {
  return (
    <>
      <AppStack />
      <ExpoStatusBar style="light" backgroundColor={HEADER_COLOR} />
    </>
  );
}

const styles = StyleSheet.create({});
