  
  import { RootStackParamList } from "../App"; // ✅ Import RootStackParamList


  import { NativeStackScreenProps } from "@react-navigation/native-stack";
  import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
  // import Icon from "react-native-vector-icons"; // Import Icon
  
  const Tab = createBottomTabNavigator();
  
  import HomeTab from "./HomeTab";
import SearchTab from "./SearchTab";
import UserDetailsTab from "./UserDetailsTab";


  type Props = NativeStackScreenProps<RootStackParamList, "Mainscreen">; // ✅ Define Props
  
 export default function Mainscreen({ navigation }: Props) {


    return (
        <Tab.Navigator
        screenOptions={({  }) => ({
          headerShown: false,
         //  tabBarIcon: ({ color, size }) => {
         //    let iconName;
         //    if (route.name === "HomeTab") {
         //     iconName = "home";
         //   }
         //   else if (route.name === "SearchTab") {
         //      iconName = "search";
         //   } else if (route.name === "UserDetailsTab") {
         //      iconName = "person";
         //   }
         //   return <Icon name={iconName} size={size} color={color} />;
         //  },
          tabBarShowLabel: true, // Hide tab labels
          // tabBarActiveTintColor: "tomato",
          // tabBarInactiveTintColor: "gray",
          // tabBarStyle: { backgroundColor: "white" },
        })}
      >

        <Tab.Screen name="HomeTab" component={HomeTab} />
        <Tab.Screen name="SearchTab" component={SearchTab} />
        <Tab.Screen name="UserDetailsTab" component={UserDetailsTab} />

      </Tab.Navigator>

    );
  };

  import  React from 'react';
  import { View, Text,ImageBackground ,SafeAreaView ,StyleSheet,TouchableOpacity } from "react-native";

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
});