import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

console.log(StatusBar.currentHeight);
export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchbar}>
          <Text>search</Text>
        </View>
        <View style={styles.listbox}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: StatusBar.currentHeight,
  },
  searchbar: {
    // flex: 0.1,
    backgroundColor: "green",
    padding: 16,
  },
  listbox: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
});
