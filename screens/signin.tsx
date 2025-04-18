  
  import { RootStackParamList } from "../App"; // ✅ Import RootStackParamList

  import React, { useState, useEffect } from "react";

//   import { useStatusBar } from "../hooks/useStatusBar";
  import { NativeStackScreenProps } from "@react-navigation/native-stack";


  type Props = NativeStackScreenProps<RootStackParamList, "signInScreen">; // ✅ Define Props
  
 export default function signInScreen({ navigation }: Props) {
    const [userName, setuserName] = useState("");

    const navigatetoHome= () =>{
        navigation.navigate("Mainscreen")
    };
    
    return (
        <SafeAreaView style={styles.safeArea}>
        <ImageBackground 
            //source={require("../../assets/quiz.jpeg")} // ✅ Use require for local images
            source={{ uri: "https://i.pinimg.com/550x/6a/aa/ab/6aaaab354709ef2fa16fbd72299c8f55.jpg" }}
            style={styles.background}
           >
            <View style={styles.container}>
                <Text style={styles.titleText}>User SignIn</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="UserName"
                        placeholderTextColor="#888"
                        keyboardType="default"  // Ensures the normal keyboard is used
                        value={userName}
                        onChangeText={setuserName}
                    />
                <TouchableOpacity style={styles.button} onPress={() => navigatetoHome()} >
                    <Text style={styles.buttonText}>Lets start</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
        </SafeAreaView>

    );
  };

  import { View, Text,ImageBackground ,TextInput,SafeAreaView ,StyleSheet,TouchableOpacity } from "react-native";

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    background: {
      flex: 1,
      resizeMode: "cover", // Ensures the image covers the entire screen
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)", // Adds a slight overlay for better text visibility
    },
    centeredTitle: {
      alignItems: "center", // Centers the title horizontally
      marginBottom: 20, // Adds space below the title
    },
    titleText: {
      fontSize: 24,
      color: "white",
      fontWeight: "bold",
    },
    text: {
      fontSize: 24,
      color: "#34495e",
      fontWeight: "bold",
      top:10,
    },
    button: {
      backgroundColor: "tomato",
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      top:50,
      width: 250,
      alignItems: "center",
    },
    buttonText: {
      fontSize: 18,
      color: "white",
      fontWeight: "bold",
    },
    input: {
      width: "80%",
      height: 50,
      top:20,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 15,
      backgroundColor: "#fff",
      color: 'blue',
      fontSize: 20,
  },
  });