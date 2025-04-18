  
  import { View, Text,ImageBackground ,SafeAreaView ,StyleSheet,TouchableOpacity } from "react-native";
  import React, { useState, useEffect } from "react";

  import { RootStackParamList } from "../App"; // ✅ Import RootStackParamList

  import { NativeStackScreenProps } from "@react-navigation/native-stack";


  const generateRandomQuestion = (type: 'Addition' | 'Subtraction' | 'Multiplication' | 'Division') => {

    const num1 = Math.floor(Math.random() * 20) + 1; // Random number between 1-20
    const num2 = Math.floor(Math.random() * 20) + 1; // Random number between 1-20
  
    let question = "";
    let answer = 0;
    let options = [];
  
    switch (type) {
      case "Addition":
        question = `${num1} + ${num2} = ?`;
        answer = num1 + num2;
        break;
      case "Subtraction":
        question = `${Math.max(num1, num2)} - ${Math.min(num1, num2)} = ?`;
        answer = Math.max(num1, num2) - Math.min(num1, num2);
        break;
      case "Multiplication":
        question = `${num1} × ${num2} = ?`;
        answer = num1 * num2;
        break;
      case "Division":
        const dividend = num1 * num2; // Ensuring a clean division
        question = `${dividend} ÷ ${num1} = ?`;
        answer = num2;
        break;
      default:
        question = "Invalid Type";
        answer = 0;
    }
  
    options = [answer, answer + 1, answer - 1, answer + 2].sort(() => Math.random() - 0.5);
  
    return { question, options, answer };
  };

  type Props = NativeStackScreenProps<RootStackParamList, "QuizScreen">; // ✅ Define Props
  
 export default function QuizScreen({ route , navigation }: Props) {

    const { type } = route.params; // ✅ Corrected destructuring

    const [quizData, setQuizData] = useState<{ question: string; options: number[]; answer: number; }[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
  
    useEffect(() => {
      // Generate 10 random questions when the screen loads
      const newQuizData = Array.from({ length: 10 }, () => generateRandomQuestion(type));
      setQuizData(newQuizData);
    }, [type]);
  
    const handleAnswer = (selectedOption : any) => {
      if (selectedOption === quizData[currentIndex].answer) {
        setScore(score + 1);
      }
  
      if (currentIndex < quizData.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setQuizFinished(true);
      }
    };

    return (
        <View style={styles.container}>
        {quizFinished ? (
          <View style={styles.resultContainer}>
            <Text style={styles.title}>Quiz Completed!</Text>
            <Text style={styles.subtitle}>Your Score: {score} / {quizData.length}</Text>
  
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
              <Text style={styles.buttonText}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.quizContainer}>
            <Text style={styles.title}>{type} Quiz</Text>
            {quizData.length > 0 && (
              <>
                <Text style={styles.question}>{quizData[currentIndex].question}</Text>
                {quizData[currentIndex].options.map((option, index) => (
                  <TouchableOpacity key={index} style={styles.optionButton} onPress={() => handleAnswer(option)}>
                    <Text style={styles.optionText}>{option}</Text>
                  </TouchableOpacity>
                ))}
                <Text style={styles.progress}>Question {currentIndex + 1} of {quizData.length}</Text>
              </>
            )}
          </View>
        )}
      </View>

    );
  };

 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
    },
    quizContainer: {
      width: "90%",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: 20,
      borderRadius: 10,
      elevation: 5,
    },
    resultContainer: {
      alignItems: "center",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 18,
      color: "#333",
      marginBottom: 20,
    },
    question: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
    },
    optionButton: {
      backgroundColor: "#000000",
      padding: 15,
      marginVertical: 8,
      width: "100%",
      alignItems: "center",
      borderRadius: 10,
    },
    optionText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
    progress: {
      fontSize: 16,
      marginTop: 20,
      color: "#555",
    },
    button: {
      backgroundColor: "#4CAF50",
      padding: 15,
      marginTop: 10,
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