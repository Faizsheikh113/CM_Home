import { useState, useEffect } from "react";

export interface QuizOfTheDay {
  id: number;
  title: string;
  lastDate: string;
  questionCount: number;
  duration: number; // in seconds
  thumbnail: string;
}

export function useQuizOfTheDay() {
  const [quiz, setQuiz] = useState<QuizOfTheDay | null>(null);

  useEffect(() => {
    // Mock data for the daily quiz
    const dailyQuiz: QuizOfTheDay = {
      id: 1,
      title: "Quiz on War Heroes of India",
      lastDate: "06/07/2026",
      questionCount: 20,
      duration: 300, // 300 seconds = 5 minutes
      thumbnail: "https://via.placeholder.com/300x150", // Replace with actual thumbnail URL
    };

    setQuiz(dailyQuiz);
  }, []);

  return quiz;
}


