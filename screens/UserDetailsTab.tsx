  
  import { RootStackParamList } from "../App"; // ✅ Import RootStackParamList


  import { NativeStackScreenProps } from "@react-navigation/native-stack";
  import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
  // import Icon from "react-native-vector-icons"; // Import Icon
  
  
  import { NavigationProp } from '@react-navigation/native';

type HomeTabProps = {
  navigation: NavigationProp<any>; // You can replace `any` with a specific type for better type safety
};
  

    export default function UserDetailsTab({ navigation }: HomeTabProps) {

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Select a Quiz</Text>
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate("QuizScreen", { type: 'Addition' })}>
          <Text style={styles.buttonText}>Addition</Text>
        </TouchableOpacity>
  
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate("QuizScreen", { type: 'Subtraction' })}>
          <Text style={styles.buttonText}>Subtraction</Text>
        </TouchableOpacity>
  
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate("QuizScreen", { type: 'Multiplication' })}>
          <Text style={styles.buttonText}>Multiplication</Text>
        </TouchableOpacity>
  
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate("QuizScreen", { type: 'Division' })}>
          <Text style={styles.buttonText}>Division</Text>
        </TouchableOpacity>
  
      </View>

    );
  };

  import  React from 'react';
  import { View, Text,ImageBackground ,SafeAreaView ,StyleSheet,TouchableOpacity } from "react-native";

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    button: {
      backgroundColor: "#6200ee",
      padding: 15,
      marginVertical: 10,
      width: "80%",
      alignItems: "center",
      borderRadius: 10,
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
  });
  