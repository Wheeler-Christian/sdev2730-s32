import { SafeAreaView, StyleSheet } from "react-native";
import Map from "./screens/Map";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Map />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
