import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function TestModal({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} onPress={navigation.goBack}>
        <Text style={styles.text}>Close modal</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

function TestScreen({ navigation }) {
  function navigateToTestModal() {
    navigation.navigate("TestModal")
  }

  return (
    <View 
      style={{ 
        flex: 1, 
        backgroundColor: "black", 
        justifyContent: "center", 
        alignItems: "center"
      }}
    >
      <TouchableOpacity activeOpacity={0.5} onPress={navigateToTestModal}>
        <Text style={styles.text}>Open navigation modal</Text>
      </TouchableOpacity>
    </View>
  )
}

const Stack = createNativeStackNavigator();
function MainNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TestScreen"
        component={TestScreen}
        options={{ headerShown: false }}
      />

      <Stack.Group
        screenOptions={{
          presentation: "transparentModal",
          animation: "none",
          animationDuration: 0,
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="TestModal"
          component={TestModal}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: '15%',
    backgroundColor: "#2A2E37",
    borderRadius: 30
  },
  text: {
    color: "#FF6347",
    fontSize: 18,
    fontWeight: '600'
  }
});
