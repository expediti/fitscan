export interface Option {
  id: string;
  text: string;
  value: number;
  description?: string;
}

export interface Question {
  id: string;
  text: string;
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
}

export const categories = [
  "All",
  "Heart Health", 
  "Mental Health",
  "Metabolic Health",
  "Respiratory",
  "Digestive",
  "General Health",
  "Women's Health",
  "Neurological",
  "Infectious Disease"
];

export const healthTools: HealthTool[] = [
  {
    id: "anxiety-checker",
    title: "Anxiety Assessment",
    description: "Comprehensive evaluation of anxiety symptoms and their impact on daily life",
    category: "Mental Health",
    difficulty: "Easy",
    estimatedTime: "6-8 min",
    icon: "🧠",
    questions: [
      {
        id: "worry_frequency",
        text: "How often do you feel nervous, anxious, or on edge?",
        options: [
          { id: "opt1", text: "Not at all", value: 0 },
          { id: "opt2", text: "Several days", value: 1 },
          { id: "opt3", text: "More than half the days", value: 2 },
          { id: "opt4", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "worry_control",
        text: "How often do you have trouble stopping or controlling worrying?",
        options: [
          { id: "opt1", text: "Not at all", value: 0 },
          { id: "opt2", text: "Several days", value: 1 },
          { id: "opt3", text: "More than half the days", value: 2 },
          { id: "opt4", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "restlessness",
        text: "How often do you feel restless, so that it's hard to sit still?",
        options: [
          { id: "opt1", text: "Not at all", value: 0 },
          { id: "opt2", text: "Several days", value: 1 },
          { id: "opt3", text: "More than half the days", value: 2 },
          { id: "opt4", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "physical_symptoms",
        text: "Do you experience physical symptoms like rapid heartbeat, sweating, or trembling?",
        options: [
          { id: "opt1", text: "Never", value: 0 },
          { id: "opt2", text: "Occasionally", value: 1 },
          { id: "opt3", text: "Frequently", value: 2 },
          { id: "opt4", text: "Almost constantly", value: 3 }
        ]
      },
      {
        id: "sleep_problems",
        text: "How often do anxiety or worry affect your sleep?",
        options: [
          { id: "opt1", text: "Sleep normally", value: 0 },
          { id: "opt2", text: "Occasional sleep problems", value: 1 },
          { id: "opt3", text: "Frequent difficulty falling or staying asleep", value: 2 },
          { id: "opt4", text: "Severe sleep disruption almost nightly", value: 3 }
        ]
      },
      {
        id: "concentration",
        text: "How often do you have trouble concentrating due to anxiety?",
        options: [
          { id: "opt1", text: "No concentration problems", value: 0 },
          { id: "opt2", text: "Occasional difficulty", value: 1 },
          { id: "opt3", text: "Frequent concentration problems", value: 2 },
          { id: "opt4", text: "Severe difficulty focusing on tasks", value: 3 }
        ]
      },
      {
        id: "avoidance",
        text: "Do you avoid certain situations or places due to anxiety?",
        options: [
          { id: "opt1", text: "No avoidance", value: 0 },
          { id: "opt2", text: "Avoid one or two specific situations", value: 1 },
          { id: "opt3", text: "Avoid multiple situations regularly", value: 2 },
          { id: "opt4", text: "Severely limited by avoidance behaviors", value: 3 }
        ]
      },
      {
        id: "panic_attacks",
        text: "Do you experience panic attacks (sudden intense fear with physical symptoms)?",
        options: [
          { id: "opt1", text: "Never", value: 0 },
          { id: "opt2", text: "Rarely (once or twice)", value: 1 },
          { id: "opt3", text: "Occasionally (monthly)", value: 2 },
          { id: "opt4", text: "Frequently (weekly or more)", value: 3 }
        ]
      }
    ]
  },
  {
    id: "asthma-checker",
    title: "Asthma Symptom Checker", 
    description: "Comprehensive assessment of respiratory symptoms that might indicate asthma or breathing difficulties",
    category: "Respiratory",
    difficulty: "Easy",
    estimatedTime: "6-8 min",
    icon: "🫁",
    questions: [
      {
        id: "wheezing",
        text: "Do you experience wheezing or whistling sounds when breathing?",
        options: [
          { id: "opt1", text: "Never", value: 0 },
          { id: "opt2", text: "Occasionally", value: 1 },
          { id: "opt3", text: "Frequently", value: 2 },
          { id: "opt4", text: "Daily or with most activities", value: 3 }
        ]
      },
      {
        id: "persistent_cough",
        text: "How often do you have a persistent cough, especially at night?",
        options: [
          { id: "opt1", text: "Never", value: 0 },
          { id: "opt2", text: "Occasionally", value: 1 },
          { id: "opt3", text: "Several times a week", value: 2 },
          { id: "opt4", text: "Daily or nightly", value: 3 }
        ]
      },
      {
        id: "shortness_breath",
        text: "Do you experience shortness of breath during activities?",
        options: [
          { id: "opt1", text: "Never", value: 0 },
          { id: "opt2", text: "Only during intense exercise", value: 1 },
          { id: "opt3", text: "During moderate activities", value: 2 },
          { id: "opt4", text: "During light activities or at rest", value: 3 }
        ]
      },
      {
        id: "chest_tightness",
        text: "Do you feel chest tightness or pressure?",
        options: [
          { id: "opt1", text: "Never", value: 0 },
          { id: "opt2", text: "Occasionally", value: 1 },
          { id: "opt3", text: "Frequently", value: 2 },
          { id: "opt4", text: "Daily or constant", value: 3 }
        ]
      },
      {
        id: "triggers",
        text: "Do certain triggers (allergens, exercise, cold air) worsen your breathing?",
        options: [
          { id: "opt1", text: "No triggers identified", value: 0 },
          { id: "opt2", text: "Mild reaction to some triggers", value: 1 },
          { id: "opt3", text: "Moderate reaction to multiple triggers", value: 2 },
          { id: "opt4", text: "Severe reaction to many triggers", value: 3 }
        ]
      },
      {
        id: "exercise_limitation",
        text: "How does breathing affect your ability to exercise?",
        options: [
          { id: "opt1", text: "No limitations", value: 0 },
          { id: "opt2", text: "Slight limitation with intense exercise", value: 1 },
          { id: "opt3", text: "Moderate limitation with normal exercise", value: 2 },
          { id: "opt4", text: "Severe limitation, avoid exercise", value: 3 }
        ]
      },
      {
        id: "rescue_inhaler",
        text: "If you use a rescue inhaler, how often do you need it?",
        options: [
          { id: "opt1", text: "Don't use or never need it", value: 0 },
          { id: "opt2", text: "Less than twice a week", value: 1 },
          { id: "opt3", text: "2-4 times per week", value: 2 },
          { id: "opt4", text: "Daily or multiple times daily", value: 3 }
        ]
      },
      {
        id: "sleep_disruption",
        text: "How often do breathing problems wake you at night?",
        options: [
          { id: "opt1", text: "Never", value: 0 },
          { id: "opt2", text: "Occasionally (once a month)", value: 1 },
          { id: "opt3", text: "Frequently (weekly)", value: 2 },
          { id: "opt4", text: "Almost nightly", value: 3 }
        ]
      }
    ]
  }
  // Add more tools following this pattern...
];

export const getToolById = (id: string): HealthTool | undefined => {
  return healthTools.find(tool => tool.id === id);
};
