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
    id: "covid-checker",
    title: "COVID-19 Symptom Checker",
    description: "Comprehensive assessment of symptoms that might indicate COVID-19 infection or variants",
    category: "Infectious Disease",
    difficulty: "Easy",
    estimatedTime: "5-7 min",
    icon: "🦠",
    questions: [
      {
        id: "fever",
        text: "Do you have a fever (temperature above 100.4°F/38°C)?",
        options: [
          { id: "opt1", text: "No fever", value: 0 },
          { id: "opt2", text: "Low-grade fever (100.4-101°F)", value: 1 },
          { id: "opt3", text: "Moderate fever (101-103°F)", value: 2 },
          { id: "opt4", text: "High fever (above 103°F)", value: 3 }
        ]
      },
      {
        id: "cough",
        text: "Do you have a persistent dry cough?",
        options: [
          { id: "opt1", text: "No cough", value: 0 },
          { id: "opt2", text: "Mild occasional cough", value: 1 },
          { id: "opt3", text: "Persistent dry cough", value: 2 },
          { id: "opt4", text: "Severe persistent cough", value: 3 }
        ]
      },
      {
        id: "taste_smell",
        text: "Have you lost your sense of taste or smell?",
        options: [
          { id: "opt1", text: "Normal taste and smell", value: 0 },
          { id: "opt2", text: "Slight reduction", value: 1 },
          { id: "opt3", text: "Significant loss", value: 2 },
          { id: "opt4", text: "Complete loss", value: 3 }
        ]
      },
      {
        id: "fatigue",
        text: "Do you have unusual fatigue or exhaustion?",
        options: [
          { id: "opt1", text: "Normal energy", value: 0 },
          { id: "opt2", text: "Mild fatigue", value: 1 },
          { id: "opt3", text: "Moderate fatigue", value: 2 },
          { id: "opt4", text: "Severe exhaustion", value: 3 }
        ]
      },
      {
        id: "breathing",
        text: "Do you have shortness of breath or difficulty breathing?",
        options: [
          { id: "opt1", text: "No breathing issues", value: 0 },
          { id: "opt2", text: "Mild shortness of breath with activity", value: 1 },
          { id: "opt3", text: "Breathing difficulty with normal activity", value: 2 },
          { id: "opt4", text: "Severe breathing problems at rest", value: 3 }
        ]
      },
      {
        id: "sore_throat",
        text: "Do you have a sore throat?",
        options: [
          { id: "opt1", text: "No sore throat", value: 0 },
          { id: "opt2", text: "Mild throat irritation", value: 1 },
          { id: "opt3", text: "Moderate sore throat", value: 2 },
          { id: "opt4", text: "Severe sore throat", value: 3 }
        ]
      },
      {
        id: "body_aches",
        text: "Do you have body aches or muscle pain?",
        options: [
          { id: "opt1", text: "No body aches", value: 0 },
          { id: "opt2", text: "Mild muscle aches", value: 1 },
          { id: "opt3", text: "Moderate body aches", value: 2 },
          { id: "opt4", text: "Severe muscle pain", value: 3 }
        ]
      },
      {
        id: "headache",
        text: "Do you have headaches?",
        options: [
          { id: "opt1", text: "No headaches", value: 0 },
          { id: "opt2", text: "Mild headache", value: 1 },
          { id: "opt3", text: "Moderate headache", value: 2 },
          { id: "opt4", text: "Severe persistent headache", value: 3 }
        ]
      }
    ]
  },
  {
    id: "diabetes-checker",
    title: "Diabetes Risk Assessment",
    description: "Comprehensive evaluation of your risk factors for developing diabetes",
    category: "Metabolic Health",
    difficulty: "Easy",
    estimatedTime: "6-8 min",
    icon: "🩺",
    questions: [
      {
        id: "age_weight",
        text: "What is your age and weight status?",
        options: [
          { id: "opt1", text: "Under 40, normal weight", value: 0 },
          { id: "opt2", text: "40-60, slightly overweight", value: 1 },
          { id: "opt3", text: "Over 45, overweight", value: 2 },
          { id: "opt4", text: "Over 45, obese", value: 3 }
        ]
      },
      {
        id: "family_history",
        text: "Do you have family history of diabetes?",
        options: [
          { id: "opt1", text: "No family history", value: 0 },
          { id: "opt2", text: "Distant relatives", value: 1 },
          { id: "opt3", text: "Parents or siblings", value: 2 },
          { id: "opt4", text: "Multiple close relatives", value: 3 }
        ]
      },
      {
        id: "thirst_urination",
        text: "Have you experienced increased thirst and frequent urination?",
        options: [
          { id: "opt1", text: "Never", value: 0 },
          { id: "opt2", text: "Occasionally", value: 1 },
          { id: "opt3", text: "Frequently", value: 2 },
          { id: "opt4", text: "Very frequently", value: 3 }
        ]
      },
      {
        id: "fatigue_hunger",
        text: "Do you experience unusual fatigue or increased hunger?",
        options: [
          { id: "opt1", text: "Normal energy and appetite", value: 0 },
          { id: "opt2", text: "Slightly tired or hungry", value: 1 },
          { id: "opt3", text: "Often tired and hungry", value: 2 },
          { id: "opt4", text: "Constantly exhausted and hungry", value: 3 }
        ]
      },
      {
        id: "vision_healing",
        text: "Have you noticed blurred vision or slow wound healing?",
        options: [
          { id: "opt1", text: "No vision or healing issues", value: 0 },
          { id: "opt2", text: "Occasional blurry vision", value: 1 },
          { id: "opt3", text: "Regular vision problems or slow healing", value: 2 },
          { id: "opt4", text: "Frequent vision issues and very slow healing", value: 3 }
        ]
      },
      {
        id: "blood_pressure",
        text: "What is your blood pressure status?",
        options: [
          { id: "opt1", text: "Normal (less than 120/80)", value: 0 },
          { id: "opt2", text: "Elevated (120-129/less than 80)", value: 1 },
          { id: "opt3", text: "High Stage 1 (130-139/80-89)", value: 2 },
          { id: "opt4", text: "High Stage 2 (140/90 or higher)", value: 3 }
        ]
      },
      {
        id: "exercise_diet",
        text: "How would you describe your lifestyle?",
        options: [
          { id: "opt1", text: "Regular exercise, healthy diet", value: 0 },
          { id: "opt2", text: "Some exercise, mostly healthy eating", value: 1 },
          { id: "opt3", text: "Little exercise, mixed diet", value: 2 },
          { id: "opt4", text: "Sedentary, poor diet", value: 3 }
        ]
      },
      {
        id: "skin_infections",
        text: "Do you have frequent infections or skin problems?",
        options: [
          { id: "opt1", text: "Rarely get sick", value: 0 },
          { id: "opt2", text: "Occasional infections", value: 1 },
          { id: "opt3", text: "Frequent minor infections", value: 2 },
          { id: "opt4", text: "Constant infections or skin issues", value: 3 }
        ]
      }
    ]
  },
  {
    id: "depression-checker",
    title: "Depression Assessment",
    description: "Comprehensive evaluation of depressive symptoms and their impact on daily functioning",
    category: "Mental Health",
    difficulty: "Easy",
    estimatedTime: "7-9 min",
    icon: "😔",
    questions: [
      {
        id: "depressed_mood",
        text: "Over the last 2 weeks, how often have you felt down, depressed, or hopeless?",
        options: [
          { id: "opt1", text: "Not at all", value: 0 },
          { id: "opt2", text: "Several days", value: 1 },
          { id: "opt3", text: "More than half the days", value: 2 },
          { id: "opt4", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "loss_interest",
        text: "How often have you had little interest or pleasure in doing things?",
        options: [
          { id: "opt1", text: "Not at all", value: 0 },
          { id: "opt2", text: "Several days", value: 1 },
          { id: "opt3", text: "More than half the days", value: 2 },
          { id: "opt4", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "sleep_changes",
        text: "How has your sleep been affected?",
        options: [
          { id: "opt1", text: "Normal sleep patterns", value: 0 },
          { id: "opt2", text: "Slight changes in sleep", value: 1 },
          { id: "opt3", text: "Significant sleep problems", value: 2 },
          { id: "opt4", text: "Severe sleep disturbances", value: 3 }
        ]
      },
      {
        id: "energy_fatigue",
        text: "How often do you feel tired or have little energy?",
        options: [
          { id: "opt1", text: "Not at all", value: 0 },
          { id: "opt2", text: "Several days", value: 1 },
          { id: "opt3", text: "More than half the days", value: 2 },
          { id: "opt4", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "appetite_weight",
        text: "Have you experienced changes in appetite or weight?",
        options: [
          { id: "opt1", text: "No changes", value: 0 },
          { id: "opt2", text: "Slight changes in appetite", value: 1 },
          { id: "opt3", text: "Significant appetite/weight changes", value: 2 },
          { id: "opt4", text: "Severe appetite changes affecting health", value: 3 }
        ]
      },
      {
        id: "self_worth",
        text: "How often do you feel bad about yourself or like a failure?",
        options: [
          { id: "opt1", text: "Not at all", value: 0 },
          { id: "opt2", text: "Several days", value: 1 },
          { id: "opt3", text: "More than half the days", value: 2 },
          { id: "opt4", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "concentration",
        text: "How often do you have trouble concentrating?",
        options: [
          { id: "opt1", text: "Not at all", value: 0 },
          { id: "opt2", text: "Several days", value: 1 },
          { id: "opt3", text: "More than half the days", value: 2 },
          { id: "opt4", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "movement_changes",
        text: "Do you move or speak more slowly, or feel restless?",
        options: [
          { id: "opt1", text: "No changes", value: 0 },
          { id: "opt2", text: "Slight changes others notice", value: 1 },
          { id: "opt3", text: "Noticeable changes in movement/speech", value: 2 },
          { id: "opt4", text: "Significant agitation or slowness", value: 3 }
        ]
      }
    ]
  },
  {
    id: "heart-disease-checker",
    title: "Heart Disease Risk Assessment",
    description: "Comprehensive evaluation of your cardiovascular health and risk factors",
    category: "Heart Health",
    difficulty: "Medium",
    estimatedTime: "8-10 min",
    icon: "❤️",
    questions: [
      {
        id: "chest_pain",
        text: "Do you experience chest pain or discomfort?",
        options: [
          { id: "opt1", text: "Never", value: 0 },
          { id: "opt2", text: "Rarely, only during intense exercise", value: 1 },
          { id: "opt3", text: "Sometimes during moderate activity", value: 2 },
          { id: "opt4", text: "Frequently, even at rest", value: 3 }
        ]
      },
      {
        id: "shortness_breath",
        text: "Do you experience shortness of breath?",
        options: [
          { id: "opt1", text: "No breathing problems", value: 0 },
          { id: "opt2", text: "Only during intense exercise", value: 1 },
          { id: "opt3", text: "During normal activities", value: 2 },
          { id: "opt4", text: "At rest or lying down", value: 3 }
        ]
      },
      {
        id: "fatigue_dizziness",
        text: "Do you experience unusual fatigue or dizziness?",
        options: [
          { id: "opt1", text: "Normal energy, no dizziness", value: 0 },
          { id: "opt2", text: "Occasionally tired", value: 1 },
          { id: "opt3", text: "Frequently tired with normal activities", value: 2 },
          { id: "opt4", text: "Extreme fatigue with minimal exertion", value: 3 }
        ]
      },
      {
        id: "swelling",
        text: "Do you have swelling in legs, ankles, or feet?",
        options: [
          { id: "opt1", text: "No swelling", value: 0 },
          { id: "opt2", text: "Occasional mild swelling", value: 1 },
          { id: "opt3", text: "Regular swelling, especially evenings", value: 2 },
          { id: "opt4", text: "Constant swelling", value: 3 }
        ]
      },
      {
        id: "blood_pressure",
        text: "What is your typical blood pressure?",
        options: [
          { id: "opt1", text: "Normal (less than 120/80)", value: 0 },
          { id: "opt2", text: "Elevated (120-129/less than 80)", value: 1 },
          { id: "opt3", text: "Stage 1 High (130-139/80-89)", value: 2 },
          { id: "opt4", text: "Stage 2 High (140/90 or higher)", value: 3 }
        ]
      },
      {
        id: "cholesterol",
        text: "What are your cholesterol levels?",
        options: [
          { id: "opt1", text: "Normal (Total <200, LDL <100)", value: 0 },
          { id: "opt2", text: "Borderline high (Total 200-239)", value: 1 },
          { id: "opt3", text: "High (Total 240+, LDL 130-159)", value: 2 },
          { id: "opt4", text: "Very high (LDL 160+) or unknown", value: 3 }
        ]
      },
      {
        id: "family_history",
        text: "Do you have family history of heart disease?",
        options: [
          { id: "opt1", text: "No family history", value: 0 },
          { id: "opt2", text: "Heart disease in relatives over 65", value: 1 },
          { id: "opt3", text: "Heart disease in close relatives under 65", value: 2 },
          { id: "opt4", text: "Multiple family members with early heart disease", value: 3 }
        ]
      },
      {
        id: "lifestyle_factors",
        text: "Do you smoke or have diabetes?",
        options: [
          { id: "opt1", text: "Never smoked, no diabetes", value: 0 },
          { id: "opt2", text: "Former smoker or pre-diabetes", value: 1 },
          { id: "opt3", text: "Current light smoker or well-controlled diabetes", value: 2 },
          { id: "opt4", text: "Heavy smoker or poorly controlled diabetes", value: 3 }
        ]
      }
    ]
  },
  {
    id: "ibs-checker",
    title: "IBS Symptom Assessment",
    description: "Comprehensive evaluation of digestive symptoms that might indicate Irritable Bowel Syndrome",
    category: "Digestive",
    difficulty: "Easy",
    estimatedTime: "7-9 min",
    icon: "🍽️",
    questions: [
      {
        id: "abdominal_pain",
        text: "How often do you experience abdominal pain or cramping?",
        options: [
          { id: "opt1", text: "Never", value: 0 },
          { id: "opt2", text: "Occasionally", value: 1 },
          { id: "opt3", text: "Frequently (weekly)", value: 2 },
          { id: "opt4", text: "Daily or almost daily", value: 3 }
        ]
      },
      {
        id: "bowel_changes",
        text: "Have you noticed changes in bowel movement patterns?",
        options: [
          { id: "opt1", text: "Normal, consistent patterns", value: 0 },
          { id: "opt2", text: "Occasional changes", value: 1 },
          { id: "opt3", text: "Frequent alternating diarrhea/constipation", value: 2 },
          { id: "opt4", text: "Severe, unpredictable changes", value: 3 }
        ]
      },
      {
        id: "bloating_gas",
        text: "Do you experience bloating or excessive gas?",
        options: [
          { id: "opt1", text: "Rarely", value: 0 },
          { id: "opt2", text: "Sometimes after meals", value: 1 },
          { id: "opt3", text: "Frequently throughout day", value: 2 },
          { id: "opt4", text: "Almost constantly", value: 3 }
        ]
      },
      {
        id: "food_triggers",
        text: "Do certain foods trigger your symptoms?",
        options: [
          { id: "opt1", text: "No food triggers identified", value: 0 },
          { id: "opt2", text: "One or two foods cause mild symptoms", value: 1 },
          { id: "opt3", text: "Multiple foods cause symptoms", value: 2 },
          { id: "opt4", text: "Many foods cause severe symptoms", value: 3 }
        ]
      },
      {
        id: "urgency",
        text: "Do you experience sudden urgency for bowel movements?",
        options: [
          { id: "opt1", text: "Never", value: 0 },
          { id: "opt2", text: "Occasionally", value: 1 },
          { id: "opt3", text: "Frequently", value: 2 },
          { id: "opt4", text: "Almost always, very urgent", value: 3 }
        ]
      },
      {
        id: "stress_relation",
        text: "Do symptoms worsen with stress?",
        options: [
          { id: "opt1", text: "No stress relationship", value: 0 },
          { id: "opt2", text: "Slight worsening with major stress", value: 1 },
          { id: "opt3", text: "Clear worsening with stress", value: 2 },
          { id: "opt4", text: "Severe stress-related flares", value: 3 }
        ]
      },
      {
        id: "mucus_incomplete",
        text: "Do you notice mucus in stool or feel incomplete evacuation?",
        options: [
          { id: "opt1", text: "Never", value: 0 },
          { id: "opt2", text: "Rarely", value: 1 },
          { id: "opt3", text: "Sometimes", value: 2 },
          { id: "opt4", text: "Frequently", value: 3 }
        ]
      },
      {
        id: "duration",
        text: "How long have you experienced these symptoms?",
        options: [
          { id: "opt1", text: "Less than 3 months", value: 0 },
          { id: "opt2", text: "3-6 months", value: 1 },
          { id: "opt3", text: "6 months to 2 years", value: 2 },
          { id: "opt4", text: "More than 2 years", value: 3 }
        ]
      }
    ]
  },
  {
    id: "food-poisoning-checker",
    title: "Food Poisoning Assessment",
    description: "Comprehensive evaluation of symptoms that might indicate food poisoning or foodborne illness",
    category: "Digestive",
    difficulty: "Easy",
    estimatedTime: "6-8 min",
    icon: "🤢",
    questions: [
      {
        id: "nausea_vomiting",
        text: "Are you experiencing nausea or vomiting?",
        options: [
          { id: "opt1", text: "No nausea or vomiting", value: 0 },
          { id: "opt2", text: "Mild nausea without vomiting", value: 1 },
          { id: "opt3", text: "Moderate nausea with some vomiting", value: 2 },
          { id: "opt4", text: "Severe nausea with frequent vomiting", value: 3 }
        ]
      },
      {
        id: "diarrhea",
        text: "Do you have diarrhea?",
        options: [
          { id: "opt1", text: "Normal bowel movements", value: 0 },
          { id: "opt2", text: "Loose stools", value: 1 },
          { id: "opt3", text: "Frequent watery diarrhea", value: 2 },
          { id: "opt4", text: "Severe, bloody, or mucus-filled diarrhea", value: 3 }
        ]
      },
      {
        id: "stomach_pain",
        text: "How severe is your stomach pain or cramping?",
        options: [
          { id: "opt1", text: "No pain", value: 0 },
          { id: "opt2", text: "Mild discomfort", value: 1 },
          { id: "opt3", text: "Moderate cramping pain", value: 2 },
          { id: "opt4", text: "Severe, debilitating abdominal pain", value: 3 }
        ]
      },
      {
        id: "fever_chills",
        text: "Do you have fever or chills?",
        options: [
          { id: "opt1", text: "No fever or chills", value: 0 },
          { id: "opt2", text: "Mild fever or occasional chills", value: 1 },
          { id: "opt3", text: "Moderate fever with chills", value: 2 },
          { id: "opt4", text: "High fever with severe chills", value: 3 }
        ]
      },
      {
        id: "timing_food",
        text: "When did symptoms start after eating?",
        options: [
          { id: "opt1", text: "No recent suspicious meals", value: 0 },
          { id: "opt2", text: "More than 3 days ago", value: 1 },
          { id: "opt3", text: "1-3 days ago", value: 2 },
          { id: "opt4", text: "Within 24 hours of eating", value: 3 }
        ]
      },
      {
        id: "others_affected",
        text: "Are others who ate the same food also sick?",
        options: [
          { id: "opt1", text: "No one else is sick", value: 0 },
          { id: "opt2", text: "Not sure or ate alone", value: 1 },
          { id: "opt3", text: "One other person is sick", value: 2 },
          { id: "opt4", text: "Multiple people who ate same food are sick", value: 3 }
        ]
      },
      {
        id: "dehydration",
        text: "Do you have signs of dehydration?",
        options: [
          { id: "opt1", text: "No dehydration signs", value: 0 },
          { id: "opt2", text: "Mild signs (slightly dry mouth)", value: 1 },
          { id: "opt3", text: "Moderate dehydration signs", value: 2 },
          { id: "opt4", text: "Severe dehydration (dizziness, very dark urine)", value: 3 }
        ]
      },
      {
        id: "risky_food",
        text: "Have you eaten potentially risky foods recently?",
        options: [
          { id: "opt1", text: "No suspicious foods", value: 0 },
          { id: "opt2", text: "Ate at new restaurant or buffet", value: 1 },
          { id: "opt3", text: "Ate undercooked meat, eggs, or dairy", value: 2 },
          { id: "opt4", text: "Ate clearly spoiled/contaminated food", value: 3 }
        ]
      }
    ]
  },
  {
    id: "gastroenteritis-checker",
    title: "Gastroenteritis Assessment",
    description: "Comprehensive evaluation of stomach flu or gastroenteritis symptoms",
    category: "Digestive",
    difficulty: "Easy",
    estimatedTime: "6-8 min",
    icon: "🤮",
    questions: [
      {
        id: "symptom_onset",
        text: "How quickly did your symptoms start?",
        options: [
          { id: "opt1", text: "Gradual onset over several days", value: 0 },
          { id: "opt2", text: "Moderate onset over 1-2 days", value: 1 },
          { id: "opt3", text: "Rapid onset within hours", value: 2 },
          { id: "opt4", text: "Very sudden onset within minutes to hours", value: 3 }
        ]
      },
      {
        id: "vomiting_frequency",
        text: "How often are you vomiting?",
        options: [
          { id: "opt1", text: "Not vomiting", value: 0 },
          { id: "opt2", text: "Vomited once or twice", value: 1 },
          { id: "opt3", text: "Vomiting several times a day", value: 2 },
          { id: "opt4", text: "Vomiting almost constantly", value: 3 }
        ]
      },
      {
        id: "diarrhea_severity",
        text: "How severe is your diarrhea?",
        options: [
          { id: "opt1", text: "No diarrhea", value: 0 },
          { id: "opt2", text: "Loose stools 2-3 times", value: 1 },
          { id: "opt3", text: "Watery diarrhea 4-6 times daily", value: 2 },
          { id: "opt4", text: "Severe watery diarrhea more than 6 times daily", value: 3 }
        ]
      },
      {
        id: "dehydration_signs",
        text: "Do you have signs of dehydration?",
        options: [
          { id: "opt1", text: "No dehydration signs", value: 0 },
          { id: "opt2", text: "Mild signs (dry mouth, thirst)", value: 1 },
          { id: "opt3", text: "Moderate dehydration (dizziness, dark urine)", value: 2 },
          { id: "opt4", text: "Severe dehydration (weakness, very dark urine)", value: 3 }
        ]
      },
      {
        id: "fever_presence",
        text: "Do you have a fever?",
        options: [
          { id: "opt1", text: "No fever", value: 0 },
          { id: "opt2", text: "Low-grade fever (under 101°F)", value: 1 },
          { id: "opt3", text: "Moderate fever (101-102°F)", value: 2 },
          { id: "opt4", text: "High fever (over 102°F)", value: 3 }
        ]
      },
      {
        id: "fluid_retention",
        text: "Are you able to keep fluids down?",
        options: [
          { id: "opt1", text: "Keeping all fluids down", value: 0 },
          { id: "opt2", text: "Keeping most fluids down", value: 1 },
          { id: "opt3", text: "Difficulty keeping fluids down", value: 2 },
          { id: "opt4", text: "Cannot keep any fluids down", value: 3 }
        ]
      },
      {
        id: "cramping",
        text: "How severe is your abdominal cramping?",
        options: [
          { id: "opt1", text: "No cramping", value: 0 },
          { id: "opt2", text: "Mild cramping", value: 1 },
          { id: "opt3", text: "Moderate cramping", value: 2 },
          { id: "opt4", text: "Severe, constant cramping", value: 3 }
        ]
      },
      {
        id: "exposure",
        text: "Have you been around others with similar illness?",
        options: [
          { id: "opt1", text: "No known exposure", value: 0 },
          { id: "opt2", text: "Possible exposure in public places", value: 1 },
          { id: "opt3", text: "Close contact with sick family/friends", value: 2 },
          { id: "opt4", text: "Multiple people in household are sick", value: 3 }
        ]
      }
    ]
  },
  {
    id: "uti-checker",
    title: "UTI Symptom Checker",
    description: "Comprehensive assessment of symptoms that might indicate a urinary tract infection",
    category: "General Health",
    difficulty: "Easy",
    estimatedTime: "6-8 min",
    icon: "🚿",
    questions: [
      {
        id: "urination_pain",
        text: "Do you experience pain or burning during urination?",
        options: [
          { id: "opt1", text: "No pain during urination", value: 0 },
          { id: "opt2", text: "Mild discomfort", value: 1 },
          { id: "opt3", text: "Moderate burning sensation", value: 2 },
          { id: "opt4", text: "Severe pain during urination", value: 3 }
        ]
      },
      {
        id: "frequency_urgency",
        text: "How often do you need to urinate and do you feel urgency?",
        options: [
          { id: "opt1", text: "Normal frequency, no urgency", value: 0 },
          { id: "opt2", text: "Slightly more often with occasional urgency", value: 1 },
          { id: "opt3", text: "Much more frequently with frequent urgency", value: 2 },
          { id: "opt4", text: "Constantly feeling need to urinate with severe urgency", value: 3 }
        ]
      },
      {
        id: "urine_appearance",
        text: "How does your urine look and smell?",
        options: [
          { id: "opt1", text: "Normal, clear to pale yellow", value: 0 },
          { id: "opt2", text: "Slightly cloudy or stronger smell", value: 1 },
          { id: "opt3", text: "Cloudy with strong odor", value: 2 },
          { id: "opt4", text: "Cloudy with blood or very strong/foul odor", value: 3 }
        ]
      },
      {
        id: "pelvic_back_pain",
        text: "Do you have pelvic, lower back, or side pain?",
        options: [
          { id: "opt1", text: "No pain", value: 0 },
          { id: "opt2", text: "Mild discomfort", value: 1 },
          { id: "opt3", text: "Moderate pain", value: 2 },
          { id: "opt4", text: "Severe pain or kidney area pain", value: 3 }
        ]
      },
      {
        id: "fever_systemic",
        text: "Do you have fever, chills, or feel generally unwell?",
        options: [
          { id: "opt1", text: "Feel fine, no fever", value: 0 },
          { id: "opt2", text: "Feeling slightly unwell", value: 1 },
          { id: "opt3", text: "Low-grade fever or mild chills", value: 2 },
          { id: "opt4", text: "High fever with chills and feeling very sick", value: 3 }
        ]
      },
      {
        id: "incomplete_emptying",
        text: "Do you feel like your bladder doesn't empty completely?",
        options: [
          { id: "opt1", text: "Bladder feels completely empty", value: 0 },
          { id: "opt2", text: "Occasionally feels incomplete", value: 1 },
          { id: "opt3", text: "Frequently feels incomplete", value: 2 },
          { id: "opt4", text: "Always feels like bladder isn't empty", value: 3 }
        ]
      },
      {
        id: "risk_factors",
        text: "Do you have risk factors for UTI?",
        options: [
          { id: "opt1", text: "No known risk factors", value: 0 },
          { id: "opt2", text: "Recent sexual activity", value: 1 },
          { id: "opt3", text: "History of UTIs or urinary problems", value: 2 },
          { id: "opt4", text: "Diabetes, pregnancy, or immune system problems", value: 3 }
        ]
      },
      {
        id: "symptom_duration",
        text: "How long have you had these symptoms?",
        options: [
          { id: "opt1", text: "Just started (less than 24 hours)", value: 1 },
          { id: "opt2", text: "1-3 days", value: 2 },
          { id: "opt3", text: "3-7 days", value: 3 },
          { id: "opt4", text: "More than a week", value: 3 }
        ]
      }
    ]
  },
  {
    id: "dizziness-checker",
    title: "Dizziness Assessment",
    description: "Comprehensive evaluation of dizziness symptoms and potential underlying causes",
    category: "Neurological",
    difficulty: "Easy",
    estimatedTime: "6-8 min",
    icon: "💫",
    questions: [
      {
        id: "dizziness_type",
        text: "What type of dizziness do you experience?",
        options: [
          { id: "opt1", text: "No dizziness", value: 0 },
          { id: "opt2", text: "Lightheadedness or feeling faint", value: 1 },
          { id: "opt3", text: "Spinning sensation (vertigo)", value: 2 },
          { id: "opt4", text: "Severe spinning with nausea and vomiting", value: 3 }
        ]
      },
      {
        id: "triggers",
        text: "What situations trigger your dizziness?",
        options: [
          { id: "opt1", text: "No specific triggers", value: 0 },
          { id: "opt2", text: "Standing up quickly", value: 1 },
          { id: "opt3", text: "Head movements or position changes", value: 2 },
          { id: "opt4", text: "Multiple triggers or occurs constantly", value: 3 }
        ]
      },
      {
        id: "balance_walking",
        text: "Do you have trouble with balance or walking?",
        options: [
          { id: "opt1", text: "Normal balance", value: 0 },
          { id: "opt2", text: "Slight unsteadiness occasionally", value: 1 },
          { id: "opt3", text: "Noticeable balance problems, need support", value: 2 },
          { id: "opt4", text: "Severe balance issues, risk of falling", value: 3 }
        ]
      },
      {
        id: "hearing_tinnitus",
        text: "Do you have hearing changes or ringing in ears?",
        options: [
          { id: "opt1", text: "No hearing changes", value: 0 },
          { id: "opt2", text: "Slight ringing in ears", value: 1 },
          { id: "opt3", text: "Hearing loss or significant ringing", value: 2 },
          { id: "opt4", text: "Severe hearing changes with dizziness", value: 3 }
        ]
      },
      {
        id: "nausea_symptoms",
        text: "Do you experience nausea or vomiting with dizziness?",
        options: [
          { id: "opt1", text: "No nausea", value: 0 },
          { id: "opt2", text: "Mild nausea", value: 1 },
          { id: "opt3", text: "Moderate nausea", value: 2 },
          { id: "opt4", text: "Severe nausea with vomiting", value: 3 }
        ]
      },
      {
        id: "duration_frequency",
        text: "How long do episodes last and how often?",
        options: [
          { id: "opt1", text: "No episodes", value: 0 },
          { id: "opt2", text: "Brief episodes (seconds to minutes), rarely", value: 1 },
          { id: "opt3", text: "Episodes lasting minutes to hours, weekly", value: 2 },
          { id: "opt4", text: "Long episodes (hours to days) or constant", value: 3 }
        ]
      },
      {
        id: "medications",
        text: "Are you taking medications that might cause dizziness?",
        options: [
          { id: "opt1", text: "No medications", value: 0 },
          { id: "opt2", text: "Taking medications, unclear if related", value: 1 },
          { id: "opt3", text: "Taking blood pressure or heart medications", value: 2 },
          { id: "opt4", text: "Recently started new medications", value: 3 }
        ]
      },
      {
        id: "associated_symptoms",
        text: "Do you have other symptoms with dizziness?",
        options: [
          { id: "opt1", text: "No other symptoms", value: 0 },
          { id: "opt2", text: "Mild headache", value: 1 },
          { id: "opt3", text: "Headache, neck pain, or vision changes", value: 2 },
          { id: "opt4", text: "Multiple symptoms: headache, vision changes, weakness", value: 3 }
        ]
      }
    ]
  },
  {
    id: "anemia-checker",
    title: "Anemia Symptom Checker",
    description: "Comprehensive assessment of symptoms that might indicate anemia and different types of anemia",
    category: "General Health",
    difficulty: "Easy",
    estimatedTime: "5-7 min",
    icon: "🩸",
    questions: [
      {
        id: "fatigue_weakness",
        text: "How often do you feel unusually tired or weak?",
        options: [
          { id: "opt1", text: "Never", value: 0 },
          { id: "opt2", text: "Occasionally", value: 1 },
          { id: "opt3", text: "Frequently", value: 2 },
          { id: "opt4", text: "Almost constantly", value: 3 }
        ]
      },
      {
        id: "pale_skin",
        text: "Have you noticed pale skin, nail beds, or inner eyelids?",
        options: [
          { id: "opt1", text: "No, normal color", value: 0 },
          { id: "opt2", text: "Slightly pale", value: 1 },
          { id: "opt3", text: "Noticeably pale", value: 2 },
          { id: "opt4", text: "Very pale or yellowish", value: 3 }
        ]
      },
      {
        id: "shortness_breath",
        text: "Do you experience shortness of breath during normal activities?",
        options: [
          { id: "opt1", text: "Never", value: 0 },
          { id: "opt2", text: "Only during intense exercise", value: 1 },
          { id: "opt3", text: "During moderate activity", value: 2 },
          { id: "opt4", text: "Even at rest", value: 3 }
        ]
      },
      {
        id: "heart_rate",
        text: "Have you noticed your heart beating faster than usual?",
        options: [
          { id: "opt1", text: "No changes", value: 0 },
          { id: "opt2", text: "Occasionally faster", value: 1 },
          { id: "opt3", text: "Frequently rapid", value: 2 },
          { id: "opt4", text: "Constantly rapid or irregular", value: 3 }
        ]
      },
      {
        id: "cold_hands_feet",
        text: "Do you frequently have cold hands and feet?",
        options: [
          { id: "opt1", text: "Normal temperature", value: 0 },
          { id: "opt2", text: "Occasionally cold", value: 1 },
          { id: "opt3", text: "Frequently cold", value: 2 },
          { id: "opt4", text: "Always cold, even in warm weather", value: 3 }
        ]
      },
      {
        id: "headaches_concentration",
        text: "Do you have frequent headaches or difficulty concentrating?",
        options: [
          { id: "opt1", text: "No headaches or concentration problems", value: 0 },
          { id: "opt2", text: "Occasional headaches or slight difficulty", value: 1 },
          { id: "opt3", text: "Frequent headaches or concentration problems", value: 2 },
          { id: "opt4", text: "Daily headaches or severe difficulty focusing", value: 3 }
        ]
      },
      {
        id: "strange_cravings",
        text: "Do you have unusual cravings for ice, starch, or non-food items?",
        options: [
          { id: "opt1", text: "No unusual cravings", value: 0 },
          { id: "opt2", text: "Occasional cravings for ice", value: 1 },
          { id: "opt3", text: "Frequent cravings for ice or starch", value: 2 },
          { id: "opt4", text: "Strong cravings for non-food items", value: 3 }
        ]
      },
      {
        id: "menstrual_changes",
        text: "If applicable, have you noticed changes in your menstrual cycle?",
        options: [
          { id: "opt1", text: "Not applicable or no changes", value: 0 },
          { id: "opt2", text: "Slightly heavier or longer periods", value: 1 },
          { id: "opt3", text: "Significantly heavier periods", value: 2 },
          { id: "opt4", text: "Very heavy or irregular periods", value: 3 }
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
];

export const getToolById = (id: string): HealthTool | undefined => {
  return healthTools.find(tool => tool.id === id);
};
