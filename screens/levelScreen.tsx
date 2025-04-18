import { View, Text, FlatList, Animated, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');
const LEVELS = Array.from({ length: 50 }, (_, i) => i + 1); // Levels 1 to 50


import { RootStackParamList } from "../App"; // ✅ Import RootStackParamList

  import React, { useState, useEffect ,useRef } from "react";
  import { NativeStackScreenProps } from "@react-navigation/native-stack";


  type Props = NativeStackScreenProps<RootStackParamList, "levelScreen">; // ✅ Define Props
  
  
 export default function levelScreen({ navigation }: Props) {

  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      {/* Background Image with Animated Parallax Effect */}
      <Animated.Image
        source={{ uri: 'https://your-image-url.com/background.jpg' }} // Replace with your background
        style={[
          styles.background,
          {
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, height * 2],
                  outputRange: [0, -height * 0.3], // Moves background up as you scroll
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}
      />

      {/* Level List */}
      <Animated.FlatList
        data={LEVELS}
        keyExtractor={(item) => item.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 40 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item, index }) => {
          const scale = scrollY.interpolate({
            inputRange: [
              (index - 1) * 100,
              index * 100,
              (index + 1) * 100,
            ],
            outputRange: [0.8, 1, 0.8], // Levels scale up when centered
            extrapolate: 'clamp',
          });

          return (
            <Animated.View style={[styles.levelContainer, { transform: [{ scale }] }]}>
              <TouchableOpacity style={styles.levelButton}>
                <Text style={styles.levelText}>{item}</Text>
              </TouchableOpacity>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#232526' },
  background: {
    position: 'absolute',
    width,
    height: height * 2, // Larger background for scrolling effect
    resizeMode: 'cover',
    opacity: 0.7,
  },
  levelContainer: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  levelButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  levelText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});

