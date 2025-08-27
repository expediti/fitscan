export interface Option {
  id: string;
  text: string;
  value: number;
  description?: string;
}

export interface Question {
  id: string;
  question: string;
  options: Option[];
}

export interface HealthTool {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Advanced";
  estimatedTime: string;
  icon: string;
  questions: Question[];
  results: {
    low: { title: string; description: string; recommendations: string };
    medium: { title: string; description: string; recommendations: string };
    high: { title: string; description: string; recommendations: string };
  };
}

export const healthTools: HealthTool[] = [
  {
    id: "anxiety-checker",
    title: "Anxiety Assessment",
    description: "Evaluate anxiety symptoms and get personalized insights",
    category: "Mental Health",
    difficulty: "Easy",
    estimatedTime: "3-5 minutes",
    icon: "brain",
    questions: [
      {
        id: "q1",
        question: "Over the past two weeks, how often have you felt nervous, anxious, or on edge?",
        options: [
          { id: "q1a", text: "Not at all", value: 0 },
          { id: "q1b", text: "Several days", value: 1 },
          { id: "q1c", text: "More than half the days", value: 2 },
          { id: "q1d", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "q2", 
        question: "How often have you been unable to stop or control worrying?",
        options: [
          { id: "q2a", text: "Not at all", value: 0 },
          { id: "q2b", text: "Several days", value: 1 },
          { id: "q2c", text: "More than half the days", value: 2 },
          { id: "q2d", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "q3",
        question: "Have you experienced excessive worry about different problems?",
        options: [
          { id: "q3a", text: "Not at all", value: 0 },
          { id: "q3b", text: "Several days", value: 1 },
          { id: "q3c", text: "More than half the days", value: 2 },
          { id: "q3d", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "q4",
        question: "How often do you have trouble relaxing?",
        options: [
          { id: "q4a", text: "Not at all", value: 0 },
          { id: "q4b", text: "Several days", value: 1 },
          { id: "q4c", text: "More than half the days", value: 2 },
          { id: "q4d", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "q5",
        question: "Have you been feeling restless or having difficulty sitting still?",
        options: [
          { id: "q5a", text: "Not at all", value: 0 },
          { id: "q5b", text: "Several days", value: 1 },
          { id: "q5c", text: "More than half the days", value: 2 },
          { id: "q5d", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "q6",
        question: "How often do you get easily annoyed or irritable?",
        options: [
          { id: "q6a", text: "Not at all", value: 0 },
          { id: "q6b", text: "Several days", value: 1 },
          { id: "q6c", text: "More than half the days", value: 2 },
          { id: "q6d", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "q7",
        question: "Have you experienced fear that something awful might happen?",
        options: [
          { id: "q7a", text: "Not at all", value: 0 },
          { id: "q7b", text: "Several days", value: 1 },
          { id: "q7c", text: "More than half the days", value: 2 },
          { id: "q7d", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "q8",
        question: "Do you experience physical symptoms like rapid heartbeat when anxious?",
        options: [
          { id: "q8a", text: "Never", value: 0 },
          { id: "q8b", text: "Sometimes", value: 1 },
          { id: "q8c", text: "Often", value: 2 },
          { id: "q8d", text: "Always", value: 3 }
        ]
      }
    ],
    results: {
      low: {
        title: "Low Anxiety Levels",
        description: "Your responses suggest minimal anxiety symptoms.",
        recommendations: "Continue maintaining your current healthy coping strategies."
      },
      medium: {
        title: "Moderate Anxiety Levels", 
        description: "Your responses indicate moderate anxiety symptoms.",
        recommendations: "Consider implementing stress reduction techniques and consulting a healthcare professional."
      },
      high: {
        title: "High Anxiety Levels",
        description: "Your responses suggest significant anxiety symptoms.",
        recommendations: "It's strongly recommended to consult with a mental health professional."
      }
    }
  },
  {
    id: "asthma-checker",
    title: "Asthma Checker",
    description: "Assess breathing difficulties and asthma symptoms",
    category: "Respiratory",
    difficulty: "Medium",
    estimatedTime: "4-6 minutes",
    icon: "wind",
    questions: [
      {
        id: "q1",
        question: "How often do you experience wheezing or whistling sounds when breathing?",
        options: [
          { id: "q1a", text: "Never", value: 0 },
          { id: "q1b", text: "Rarely", value: 1 },
          { id: "q1c", text: "Sometimes", value: 2 },
          { id: "q1d", text: "Frequently", value: 3 }
        ]
      },
      {
        id: "q2",
        question: "Do you experience shortness of breath during normal activities?",
        options: [
          { id: "q2a", text: "Never", value: 0 },
          { id: "q2b", text: "Only during intense exercise", value: 1 },
          { id: "q2c", text: "During moderate activity", value: 2 },
          { id: "q2d", text: "Even during light activity", value: 3 }
        ]
      },
      // Add more questions following the same pattern...
    ],
    results: {
      low: {
        title: "Low Asthma Risk",
        description: "Your symptoms suggest a low likelihood of asthma.",
        recommendations: "Maintain good respiratory health through regular exercise."
      },
      medium: {
        title: "Possible Asthma Symptoms",
        description: "Your symptoms suggest possible asthma that warrants evaluation.",
        recommendations: "Schedule an appointment with your healthcare provider."
      },
      high: {
        title: "High Asthma Risk", 
        description: "Your symptoms strongly suggest asthma or serious respiratory condition.",
        recommendations: "Seek prompt medical evaluation from a healthcare provider."
      }
    }
  }
  // Add more tools following this pattern
];

export const getToolById = (id: string): HealthTool | undefined => {
  return healthTools.find(tool => tool.id === id);
};
