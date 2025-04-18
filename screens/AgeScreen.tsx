  

  import  React from 'react';
  import { View, Text,ImageBackground ,SafeAreaView ,StyleSheet,TouchableOpacity,Image ,Linking} from "react-native";

  import { RootStackParamList } from "../App"; // ✅ Import RootStackParamList

  import { NativeStackScreenProps } from "@react-navigation/native-stack";

   import Qicon from "../assets/images/Qicon.png"

  type Props = NativeStackScreenProps<RootStackParamList, "AgeScreen">; // ✅ Define Props
  
 export default function AgeScreen({ navigation }: Props) {


  const handlePrivacyPress = () => {
    Linking.openURL('https://quizz.land/Home/Privacy');
  };

  const handletermsPress = () => {
    Linking.openURL('https://quizz.land/Home/Terms');
  };

    return (
      <SafeAreaView style={styles.safeArea}>
      <ImageBackground 
        //source={require("../../assets/quiz.jpeg")} // ✅ Use require for local images
        source={require('../assets/images/cloud.jpg')}
       style={styles.background}
      >
        <View style={styles.container}>


          <Text style={styles.enterAgeText}>Enter your age</Text>
          {/* <Text style={styles.enterAgeText}>Welcome to the MindSpark</Text>

          <Text style={styles.enterAgeText}>Welcome to the MindSpark</Text>

          <Text style={styles.enterAgeText}>Welcome to the MindSpark</Text> */}

          <Text style={styles.text}>To set optimal difficulty</Text>
  
        <TouchableOpacity 
              style={styles.button} 
              onPress={() => navigation.navigate("signInScreen")} // ✅ FIXED
              >
              <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
       
        <Text style={styles.PrivacyLink} onPress={handlePrivacyPress}>
          Privacy Policy 
        </Text>
        <Text style={styles.TermsLink} onPress={handletermsPress}>
          Terms and Conditions
        </Text>
       
      </View>
     </ImageBackground>
     </SafeAreaView>
//          <View style={styles.container}>
//       <Text style={styles.red}>just red</Text>
//       <Text style={styles.bigBlue}>just bigBlue</Text>
//       <Text style={[styles.bigBlue, styles.red]}>bigBlue,, then red</Text>
//       <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
// //     </View>
    );
  };

  const styles = StyleSheet.create({
  //   container: {
  //   marginTop: 50,
  // },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  safeArea: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover", // Ensures the image covers the entire screen
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent", // Adds a slight overlay for better text visibility
  },
  centeredTitle: {
    alignItems: "center", // Centers the title horizontally
    marginBottom: 20, // Adds space below the title
  },
  image: {
    width: 150, // adjust size as needed
    height: 150,
    top:150,
    resizeMode: 'contain',
  },
  enterAgeText: {
    fontSize: 36,
    color: "black",
    fontWeight: "bold",
    top:200,
  },
  text: {
    fontSize: 20,
    color: "#34495e",
    fontWeight: "bold",
    textAlign:"center",
    top:220,
    width :320,

  },
  button: {
    backgroundColor: "green",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    top:380,
    width: 300,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  PrivacyLink: {
    fontSize: 18,
    alignSelf: "center",
    textAlign:"center",
    top:510,
    color: 'black',
    textDecorationLine: 'underline',
  },
  TermsLink: {
    fontSize: 18,
    alignSelf: "center",
    textAlign:"center",
    top:530,
    color: 'black',
    textDecorationLine: 'underline',
  },
});