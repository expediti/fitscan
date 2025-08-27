import React, { createContext, useContext, useState, ReactNode } from 'react';

interface QuizState {
  toolId: string | null;
  answers: Record<string, string>;
  score: number;
  totalQuestions: number;
  currentQuestion: number;
}

interface QuizContextType {
  quizState: QuizState;
  setToolId: (toolId: string) => void;
  setAnswer: (questionId: string, answerId: string) => void;
  setScore: (score: number) => void;
  setTotalQuestions: (total: number) => void;
  setCurrentQuestion: (current: number) => void;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [quizState, setQuizState] = useState<QuizState>({
    toolId: null,
    answers: {},
    score: 0,
    totalQuestions: 0,
    currentQuestion: 0,
  });

  const setToolId = (toolId: string) => {
    setQuizState(prev => ({ ...prev, toolId }));
  };

  const setAnswer = (questionId: string, answerId: string) => {
    setQuizState(prev => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: answerId }
    }));
  };

  const setScore = (score: number) => {
    setQuizState(prev => ({ ...prev, score }));
  };

  const setTotalQuestions = (total: number) => {
    setQuizState(prev => ({ ...prev, totalQuestions: total }));
  };

  const setCurrentQuestion = (current: number) => {
    setQuizState(prev => ({ ...prev, currentQuestion: current }));
  };

  const resetQuiz = () => {
    setQuizState({
      toolId: null,
      answers: {},
      score: 0,
      totalQuestions: 0,
      currentQuestion: 0,
    });
  };

  return (
    <QuizContext.Provider value={{
      quizState,
      setToolId,
      setAnswer,
      setScore,
      setTotalQuestions,
      setCurrentQuestion,
      resetQuiz,
    }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
