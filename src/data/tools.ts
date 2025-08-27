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

export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export interface Option {
  text: string;
  score: number;
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
    id: "diabetes-checker",
    title: "Diabetes Risk Assessment",
    description: "Comprehensive evaluation of your risk factors for developing diabetes based on lifestyle, symptoms, and family history",
    category: "Metabolic Health",
    difficulty: "Easy",
    estimatedTime: "6-8 min",
    icon: "🩺",
    questions: [
      {
        id: "age",
        text: "What is your age group?",
        options: [
          { text: "Under 30", score: 0 },
          { text: "30-44", score: 1 },
          { text: "45-64", score: 2 },
          { text: "65 and above", score: 3 }
        ]
      },
      {
        id: "weight",
        text: "How would you describe your weight status?",
        options: [
          { text: "Normal weight (BMI 18.5-24.9)", score: 0 },
          { text: "Slightly overweight (BMI 25-29.9)", score: 1 },
          { text: "Obese (BMI 30-34.9)", score: 2 },
          { text: "Severely obese (BMI 35+)", score: 3 }
        ]
      },
      {
        id: "family_history",
        text: "Do you have a family history of diabetes?",
        options: [
          { text: "No family history", score: 0 },
          { text: "Distant relatives with diabetes", score: 1 },
          { text: "Parents or siblings with Type 2 diabetes", score: 2 },
          { text: "Multiple close relatives with diabetes", score: 3 }
        ]
      },
      {
        id: "thirst_urination",
        text: "Have you experienced increased thirst and frequent urination?",
        options: [
          { text: "Never", score: 0 },
          { text: "Occasionally", score: 1 },
          { text: "Frequently", score: 2 },
          { text: "Very frequently and bothersome", score: 3 }
        ]
      },
      {
        id: "exercise",
        text: "How often do you exercise or engage in physical activity?",
        options: [
          { text: "Daily moderate to vigorous exercise", score: 0 },
          { text: "3-4 times a week", score: 1 },
          { text: "1-2 times a week", score: 2 },
          { text: "Rarely or never exercise", score: 3 }
        ]
      },
      {
        id: "diet",
        text: "How would you describe your typical diet?",
        options: [
          { text: "Healthy, balanced with lots of vegetables and whole grains", score: 0 },
          { text: "Mostly healthy with occasional treats", score: 1 },
          { text: "Mixed diet with regular processed foods", score: 2 },
          { text: "High in sugar, processed foods, and fast food", score: 3 }
        ]
      },
      {
        id: "fatigue",
        text: "Do you experience unusual fatigue or tiredness?",
        options: [
          { text: "Normal energy levels", score: 0 },
          { text: "Occasionally tired", score: 1 },
          { text: "Frequently tired despite adequate sleep", score: 2 },
          { text: "Constantly exhausted", score: 3 }
        ]
      },
      {
        id: "vision_changes",
        text: "Have you noticed any changes in your vision?",
        options: [
          { text: "No vision changes", score: 0 },
          { text: "Occasional blurry vision", score: 1 },
          { text: "Frequent blurry vision", score: 2 },
          { text: "Significant vision problems", score: 3 }
        ]
      },
      {
        id: "wounds_healing",
        text: "How do cuts and wounds heal on your body?",
        options: [
          { text: "Heal normally and quickly", score: 0 },
          { text: "Heal slightly slower than usual", score: 1 },
          { text: "Take longer to heal than expected", score: 2 },
          { text: "Very slow healing or frequent infections", score: 3 }
        ]
      },
      {
        id: "blood_pressure",
        text: "What is your typical blood pressure reading?",
        options: [
          { text: "Normal (less than 120/80)", score: 0 },
          { text: "Elevated (120-129/less than 80)", score: 1 },
          { text: "Stage 1 High (130-139/80-89)", score: 2 },
          { text: "Stage 2 High (140/90 or higher)", score: 3 }
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
        id: "fatigue",
        text: "How often do you feel unusually tired or weak?",
        options: [
          { text: "Never", score: 0 },
          { text: "Occasionally", score: 1 },
          { text: "Frequently", score: 2 },
          { text: "Almost constantly", score: 3 }
        ]
      },
      {
        id: "skin_color",
        text: "Have you noticed pale skin, nail beds, or inner eyelids?",
        options: [
          { text: "No, normal color", score: 0 },
          { text: "Slightly pale", score: 1 },
          { text: "Noticeably pale", score: 2 },
          { text: "Very pale or yellowish", score: 3 }
        ]
      },
      {
        id: "breathing",
        text: "Do you experience shortness of breath during normal activities?",
        options: [
          { text: "Never", score: 0 },
          { text: "Only during intense exercise", score: 0 },
          { text: "During moderate activity", score: 2 },
          { text: "Even at rest", score: 3 }
        ]
      },
      {
        id: "heart_rate",
        text: "Have you noticed your heart beating faster than usual?",
        options: [
          { text: "No changes", score: 0 },
          { text: "Occasionally faster", score: 1 },
          { text: "Frequently rapid", score: 2 },
          { text: "Constantly rapid or irregular", score: 3 }
        ]
      },
      {
        id: "cold_hands_feet",
        text: "Do you frequently have cold hands and feet?",
        options: [
          { text: "Normal temperature", score: 0 },
          { text: "Occasionally cold", score: 1 },
          { text: "Frequently cold", score: 2 },
          { text: "Always cold, even in warm weather", score: 3 }
        ]
      },
      {
        id: "headaches",
        text: "How often do you experience headaches?",
        options: [
          { text: "Rarely or never", score: 0 },
          { text: "Occasionally", score: 1 },
          { text: "Frequently", score: 2 },
          { text: "Daily or almost daily", score: 3 }
        ]
      },
      {
        id: "concentration",
        text: "Do you have difficulty concentrating or thinking clearly?",
        options: [
          { text: "No concentration problems", score: 0 },
          { text: "Occasional difficulty", score: 1 },
          { text: "Frequent concentration problems", score: 2 },
          { text: "Severe difficulty focusing", score: 3 }
        ]
      },
      {
        id: "cravings",
        text: "Do you have unusual cravings for ice, starch, or non-food items?",
        options: [
          { text: "No unusual cravings", score: 0 },
          { text: "Occasional cravings for ice", score: 1 },
          { text: "Frequent cravings for ice or starch", score: 2 },
          { text: "Strong cravings for non-food items", score: 3 }
        ]
      },
      {
        id: "menstrual_changes",
        text: "If applicable, have you noticed changes in your menstrual cycle?",
        options: [
          { text: "Not applicable or no changes", score: 0 },
          { text: "Slightly heavier or longer periods", score: 1 },
          { text: "Significantly heavier periods", score: 2 },
          { text: "Very heavy or irregular periods", score: 3 }
        ]
      }
    ]
  },
  {
    id: "pcos-checker",
    title: "PCOS Symptom Assessment",
    description: "Comprehensive evaluation of symptoms that might indicate Polycystic Ovary Syndrome (PCOS)",
    category: "Women's Health",
    difficulty: "Medium",
    estimatedTime: "7-9 min",
    icon: "🌸",
    questions: [
      {
        id: "menstrual_cycle",
        text: "How would you describe your menstrual cycles?",
        options: [
          { text: "Regular (every 21-35 days)", score: 0 },
          { text: "Slightly irregular (35-45 days)", score: 1 },
          { text: "Very irregular (more than 45 days apart)", score: 2 },
          { text: "Absent for 3+ months", score: 3 }
        ]
      },
      {
        id: "weight_gain",
        text: "Have you experienced unexplained weight gain or difficulty losing weight?",
        options: [
          { text: "No weight issues", score: 0 },
          { text: "Slight weight gain (5-10 lbs)", score: 1 },
          { text: "Significant weight gain (10-20 lbs)", score: 2 },
          { text: "Major weight gain (20+ lbs) with extreme difficulty losing", score: 3 }
        ]
      },
      {
        id: "hair_growth",
        text: "Do you have excessive hair growth on face, chest, back, or other areas?",
        options: [
          { text: "No unusual hair growth", score: 0 },
          { text: "Slight increase in facial hair", score: 1 },
          { text: "Noticeable excess hair on face and body", score: 2 },
          { text: "Significant male-pattern hair growth", score: 3 }
        ]
      },
      {
        id: "acne",
        text: "Do you experience persistent acne or skin problems?",
        options: [
          { text: "No skin problems", score: 0 },
          { text: "Occasional acne", score: 1 },
          { text: "Frequent acne outbreaks", score: 2 },
          { text: "Severe, persistent acne especially on face, chest, back", score: 3 }
        ]
      },
      {
        id: "hair_loss",
        text: "Have you noticed thinning hair or male-pattern baldness?",
        options: [
          { text: "No hair loss", score: 0 },
          { text: "Slight hair thinning", score: 1 },
          { text: "Noticeable hair loss", score: 2 },
          { text: "Significant balding pattern", score: 3 }
        ]
      },
      {
        id: "mood_changes",
        text: "Do you experience mood swings, depression, or anxiety?",
        options: [
          { text: "Stable mood", score: 0 },
          { text: "Occasional mood changes", score: 1 },
          { text: "Frequent mood swings or mild depression", score: 2 },
          { text: "Severe mood swings, depression, or anxiety", score: 3 }
        ]
      },
      {
        id: "insulin_resistance",
        text: "Do you have signs of insulin resistance (dark skin patches, sugar cravings)?",
        options: [
          { text: "No signs", score: 0 },
          { text: "Occasional sugar cravings", score: 1 },
          { text: "Dark skin patches or frequent cravings", score: 2 },
          { text: "Both dark patches and severe sugar cravings", score: 3 }
        ]
      },
      {
        id: "fertility_issues",
        text: "Have you experienced difficulty getting pregnant?",
        options: [
          { text: "Not trying or no issues", score: 0 },
          { text: "Trying for 6-12 months", score: 1 },
          { text: "Trying for 1-2 years", score: 2 },
          { text: "Trying for over 2 years or diagnosed infertility", score: 3 }
        ]
      },
      {
        id: "family_history",
        text: "Do you have family history of PCOS, diabetes, or metabolic disorders?",
        options: [
          { text: "No family history", score: 0 },
          { text: "Distant relatives with diabetes", score: 1 },
          { text: "Close relatives with PCOS or diabetes", score: 2 },
          { text: "Multiple family members with metabolic disorders", score: 3 }
        ]
      }
    ]
  },
  {
    id: "heart-disease-checker",
    title: "Heart Disease Risk Assessment",
    description: "Comprehensive evaluation of your cardiovascular health and risk factors for heart disease",
    category: "Heart Health",
    difficulty: "Medium",
    estimatedTime: "8-10 min",
    icon: "❤️",
    questions: [
      {
        id: "chest_pain",
        text: "Do you experience chest pain or discomfort?",
        options: [
          { text: "Never", score: 0 },
          { text: "Rarely, only during very intense exercise", score: 1 },
          { text: "Sometimes during moderate activity", score: 2 },
          { text: "Frequently, even at rest or light activity", score: 3 }
        ]
      },
      {
        id: "blood_pressure",
        text: "What is your typical blood pressure reading?",
        options: [
          { text: "Normal (less than 120/80)", score: 0 },
          { text: "Elevated (120-129/less than 80)", score: 1 },
          { text: "Stage 1 High (130-139/80-89)", score: 2 },
          { text: "Stage 2 High (140/90 or higher)", score: 3 }
        ]
      },
      {
        id: "cholesterol",
        text: "What are your cholesterol levels?",
        options: [
          { text: "Normal levels (Total <200, LDL <100)", score: 0 },
          { text: "Borderline high (Total 200-239, LDL 100-129)", score: 1 },
          { text: "High (Total 240+, LDL 130-159)", score: 2 },
          { text: "Very high (LDL 160+) or don't know", score: 3 }
        ]
      },
      {
        id: "smoking",
        text: "Do you smoke or have you smoked in the past?",
        options: [
          { text: "Never smoked", score: 0 },
          { text: "Former smoker (quit over 5 years ago)", score: 1 },
          { text: "Former smoker (quit within 5 years)", score: 2 },
          { text: "Current smoker", score: 3 }
        ]
      },
      {
        id: "exercise_tolerance",
        text: "How is your exercise tolerance?",
        options: [
          { text: "Can exercise vigorously without problems", score: 0 },
          { text: "Slight decrease in exercise capacity", score: 1 },
          { text: "Moderate limitation during exercise", score: 2 },
          { text: "Severe limitation or can't exercise", score: 3 }
        ]
      },
      {
        id: "family_history",
        text: "Do you have family history of heart disease?",
        options: [
          { text: "No family history", score: 0 },
          { text: "Heart disease in relatives over 65", score: 1 },
          { text: "Heart disease in close relatives under 65", score: 2 },
          { text: "Multiple family members with early heart disease", score: 3 }
        ]
      },
      {
        id: "diabetes",
        text: "Do you have diabetes or pre-diabetes?",
        options: [
          { text: "No diabetes, normal blood sugar", score: 0 },
          { text: "Pre-diabetes or borderline blood sugar", score: 1 },
          { text: "Type 2 diabetes, well controlled", score: 2 },
          { text: "Type 1 diabetes or poorly controlled diabetes", score: 3 }
        ]
      },
      {
        id: "shortness_breath",
        text: "Do you experience shortness of breath?",
        options: [
          { text: "No breathing problems", score: 0 },
          { text: "Shortness of breath only during intense exercise", score: 1 },
          { text: "Shortness of breath during normal activities", score: 2 },
          { text: "Shortness of breath at rest or lying down", score: 3 }
        ]
      },
      {
        id: "fatigue",
        text: "Do you experience unusual fatigue?",
        options: [
          { text: "Normal energy levels", score: 0 },
          { text: "Occasionally tired", score: 1 },
          { text: "Frequently tired with normal activities", score: 2 },
          { text: "Extreme fatigue with minimal exertion", score: 3 }
        ]
      },
      {
        id: "swelling",
        text: "Do you have swelling in your legs, ankles, or feet?",
        options: [
          { text: "No swelling", score: 0 },
          { text: "Occasional mild swelling", score: 1 },
          { text: "Regular swelling, especially in evenings", score: 2 },
          { text: "Constant swelling in legs and feet", score: 3 }
        ]
      }
    ]
  },
  {
    id: "heart-attack-checker",
    title: "Heart Attack Risk Checker",
    description: "Comprehensive assessment of symptoms and risk factors that might indicate heart attack risk or emergency",
    category: "Heart Health",
    difficulty: "Advanced",
    estimatedTime: "6-8 min",
    icon: "💔",
    questions: [
      {
        id: "chest_pressure",
        text: "Do you feel pressure, tightness, or crushing pain in your chest?",
        options: [
          { text: "No chest discomfort", score: 0 },
          { text: "Mild discomfort occasionally", score: 1 },
          { text: "Moderate pressure or squeezing sensation", score: 2 },
          { text: "Severe crushing pain or pressure", score: 3 }
        ]
      },
      {
        id: "pain_radiation",
        text: "Do you have pain radiating to your arm, neck, jaw, or back?",
        options: [
          { text: "No radiating pain", score: 0 },
          { text: "Mild discomfort in one area", score: 1 },
          { text: "Moderate pain in multiple areas", score: 2 },
          { text: "Severe pain radiating to multiple areas", score: 3 }
        ]
      },
      {
        id: "breathing_difficulty",
        text: "Are you experiencing shortness of breath?",
        options: [
          { text: "Normal breathing", score: 0 },
          { text: "Slightly winded", score: 1 },
          { text: "Significant difficulty breathing", score: 2 },
          { text: "Severe breathing problems or gasping", score: 3 }
        ]
      },
      {
        id: "nausea_sweating",
        text: "Do you have nausea, lightheadedness, or cold sweats?",
        options: [
          { text: "No additional symptoms", score: 0 },
          { text: "One mild symptom", score: 1 },
          { text: "Multiple symptoms present", score: 2 },
          { text: "Severe nausea, sweating, and dizziness", score: 3 }
        ]
      },
      {
        id: "pain_duration",
        text: "How long have you been experiencing these symptoms?",
        options: [
          { text: "No current symptoms", score: 0 },
          { text: "Brief episodes (less than 5 minutes)", score: 1 },
          { text: "Moderate duration (5-20 minutes)", score: 2 },
          { text: "Prolonged (over 20 minutes) or getting worse", score: 3 }
        ]
      },
      {
        id: "activity_trigger",
        text: "What triggers your symptoms?",
        options: [
          { text: "No symptoms", score: 0 },
          { text: "Only with intense physical activity", score: 1 },
          { text: "With mild activity or stress", score: 2 },
          { text: "At rest or with minimal activity", score: 3 }
        ]
      },
      {
        id: "previous_heart_problems",
        text: "Do you have a history of heart problems?",
        options: [
          { text: "No heart problems", score: 0 },
          { text: "High blood pressure or high cholesterol", score: 1 },
          { text: "Previous heart attack or heart disease", score: 2 },
          { text: "Recent heart problems or procedures", score: 3 }
        ]
      },
      {
        id: "medication_response",
        text: "If you take heart medication (like nitroglycerin), how do symptoms respond?",
        options: [
          { text: "Don't take heart medication", score: 0 },
          { text: "Symptoms improve with medication", score: 1 },
          { text: "Partial improvement with medication", score: 2 },
          { text: "No improvement with medication", score: 3 }
        ]
      }
    ]
  },
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
          { text: "Not at all", score: 0 },
          { text: "Several days", score: 1 },
          { text: "More than half the days", score: 2 },
          { text: "Nearly every day", score: 3 }
        ]
      },
      {
        id: "worry_control",
        text: "How often do you have trouble stopping or controlling worrying?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Several days", score: 1 },
          { text: "More than half the days", score: 2 },
          { text: "Nearly every day", score: 3 }
        ]
      },
      {
        id: "restlessness",
        text: "How often do you feel restless, so that it's hard to sit still?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Several days", score: 1 },
          { text: "More than half the days", score: 2 },
          { text: "Nearly every day", score: 3 }
        ]
      },
      {
        id: "physical_symptoms",
        text: "Do you experience physical symptoms like rapid heartbeat, sweating, or trembling?",
        options: [
          { text: "Never", score: 0 },
          { text: "Occasionally", score: 1 },
          { text: "Frequently", score: 2 },
          { text: "Almost constantly", score: 3 }
        ]
      },
      {
        id: "sleep_problems",
        text: "How often do anxiety or worry affect your sleep?",
        options: [
          { text: "Sleep normally", score: 0 },
          { text: "Occasional sleep problems", score: 1 },
          { text: "Frequent difficulty falling or staying asleep", score: 2 },
          { text: "Severe sleep disruption almost nightly", score: 3 }
        ]
      },
      {
        id: "concentration",
        text: "How often do you have trouble concentrating due to anxiety?",
        options: [
          { text: "No concentration problems", score: 0 },
          { text: "Occasional difficulty", score: 1 },
          { text: "Frequent concentration problems", score: 2 },
          { text: "Severe difficulty focusing on tasks", score: 3 }
        ]
      },
      {
        id: "avoidance",
        text: "Do you avoid certain situations or places due to anxiety?",
        options: [
          { text: "No avoidance", score: 0 },
          { text: "Avoid one or two specific situations", score: 1 },
          { text: "Avoid multiple situations regularly", score: 2 },
          { text: "Severely limited by avoidance behaviors", score: 3 }
        ]
      },
      {
        id: "panic_attacks",
        text: "Do you experience panic attacks (sudden intense fear with physical symptoms)?",
        options: [
          { text: "Never", score: 0 },
          { text: "Rarely (once or twice)", score: 1 },
          { text: "Occasionally (monthly)", score: 2 },
          { text: "Frequently (weekly or more)", score: 3 }
        ]
      },
      {
        id: "daily_functioning",
        text: "How much does anxiety interfere with your daily activities?",
        options: [
          { text: "No interference", score: 0 },
          { text: "Slight interference", score: 1 },
          { text: "Moderate interference with work/relationships", score: 2 },
          { text: "Severe interference, major life impairment", score: 3 }
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
          { text: "Not at all", score: 0 },
          { text: "Several days", score: 1 },
          { text: "More than half the days", score: 2 },
          { text: "Nearly every day", score: 3 }
        ]
      },
      {
        id: "loss_interest",
        text: "How often have you had little interest or pleasure in doing things?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Several days", score: 1 },
          { text: "More than half the days", score: 2 },
          { text: "Nearly every day", score: 3 }
        ]
      },
      {
        id: "sleep_changes",
        text: "How has your sleep been affected?",
        options: [
          { text: "Normal sleep patterns", score: 0 },
          { text: "Slight changes in sleep", score: 1 },
          { text: "Significant sleep problems (too much or too little)", score: 2 },
          { text: "Severe sleep disturbances affecting daily life", score: 3 }
        ]
      },
      {
        id: "fatigue",
        text: "How often do you feel tired or have little energy?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Several days", score: 1 },
          { text: "More than half the days", score: 2 },
          { text: "Nearly every day", score: 3 }
        ]
      },
      {
        id: "appetite_changes",
        text: "Have you experienced changes in appetite or weight?",
        options: [
          { text: "No changes", score: 0 },
          { text: "Slight changes in appetite", score: 1 },
          { text: "Significant appetite changes or weight loss/gain", score: 2 },
          { text: "Severe appetite changes affecting health", score: 3 }
        ]
      },
      {
        id: "self_worth",
        text: "How often do you feel bad about yourself or feel like a failure?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Several days", score: 1 },
          { text: "More than half the days", score: 2 },
          { text: "Nearly every day", score: 3 }
        ]
      },
      {
        id: "concentration",
        text: "How often do you have trouble concentrating on things?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Several days", score: 1 },
          { text: "More than half the days", score: 2 },
          { text: "Nearly every day", score: 3 }
        ]
      },
      {
        id: "psychomotor_changes",
        text: "Do you move or speak more slowly, or feel restless/fidgety?",
        options: [
          { text: "No changes", score: 0 },
          { text: "Slight changes noticed by others", score: 1 },
          { text: "Noticeable changes in movement or speech", score: 2 },
          { text: "Significant agitation or slowness", score: 3 }
        ]
      },
      {
        id: "suicidal_thoughts",
        text: "Have you had thoughts of death or hurting yourself?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Thoughts that you'd be better off dead", score: 2 },
          { text: "Thoughts of hurting yourself", score: 3 },
          { text: "Specific plans or attempts", score: 4 }
        ]
      },
      {
        id: "duration",
        text: "How long have you been experiencing these symptoms?",
        options: [
          { text: "Less than 2 weeks or not applicable", score: 0 },
          { text: "2-4 weeks", score: 1 },
          { text: "1-6 months", score: 2 },
          { text: "More than 6 months", score: 3 }
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
          { text: "Never", score: 0 },
          { text: "Occasionally", score: 1 },
          { text: "Frequently", score: 2 },
          { text: "Daily or with most activities", score: 3 }
        ]
      },
      {
        id: "persistent_cough",
        text: "How often do you have a persistent cough, especially at night?",
        options: [
          { text: "Never", score: 0 },
          { text: "Occasionally", score: 1 },
          { text: "Several times a week", score: 2 },
          { text: "Daily or nightly", score: 3 }
        ]
      },
      {
        id: "shortness_breath",
        text: "Do you experience shortness of breath during activities?",
        options: [
          { text: "Never", score: 0 },
          { text: "Only during intense exercise", score: 1 },
          { text: "During moderate activities", score: 2 },
          { text: "During light activities or at rest", score: 3 }
        ]
      },
      {
        id: "chest_tightness",
        text: "Do you feel chest tightness or pressure?",
        options: [
          { text: "Never", score: 0 },
          { text: "Occasionally", score: 1 },
          { text: "Frequently", score: 2 },
          { text: "Daily or constant", score: 3 }
        ]
      },
      {
        id: "triggers",
        text: "Do certain triggers (allergens, exercise, cold air) worsen your breathing?",
        options: [
          { text: "No triggers identified", score: 0 },
          { text: "Mild reaction to some triggers", score: 1 },
          { text: "Moderate reaction to multiple triggers", score: 2 },
          { text: "Severe reaction to many triggers", score: 3 }
        ]
      },
      {
        id: "exercise_limitation",
        text: "How does breathing affect your ability to exercise?",
        options: [
          { text: "No limitations", score: 0 },
          { text: "Slight limitation with intense exercise", score: 1 },
          { text: "Moderate limitation with normal exercise", score: 2 },
          { text: "Severe limitation, avoid exercise", score: 3 }
        ]
      },
      {
        id: "rescue_inhaler",
        text: "If you use a rescue inhaler, how often do you need it?",
        options: [
          { text: "Don't use or never need it", score: 0 },
          { text: "Less than twice a week", score: 1 },
          { text: "2-4 times per week", score: 2 },
          { text: "Daily or multiple times daily", score: 3 }
        ]
      },
      {
        id: "sleep_disruption",
        text: "How often do breathing problems wake you at night?",
        options: [
          { text: "Never", score: 0 },
          { text: "Occasionally (once a month)", score: 1 },
          { text: "Frequently (weekly)", score: 2 },
          { text: "Almost nightly", score: 3 }
        ]
      },
      {
        id: "family_history",
        text: "Do you have family history of asthma or allergies?",
        options: [
          { text: "No family history", score: 0 },
          { text: "Some allergies in family", score: 1 },
          { text: "Asthma in distant relatives", score: 2 },
          { text: "Asthma in close family members", score: 3 }
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
          { text: "Never", score: 0 },
          { text: "Occasionally", score: 1 },
          { text: "Frequently (weekly)", score: 2 },
          { text: "Daily or almost daily", score: 3 }
        ]
      },
      {
        id: "bowel_pattern_changes",
        text: "Have you noticed changes in your bowel movement patterns?",
        options: [
          { text: "Normal, consistent patterns", score: 0 },
          { text: "Occasional changes", score: 1 },
          { text: "Frequent alternating diarrhea/constipation", score: 2 },
          { text: "Severe, unpredictable changes", score: 3 }
        ]
      },
      {
        id: "bloating",
        text: "Do you experience bloating or abdominal distention?",
        options: [
          { text: "Rarely", score: 0 },
          { text: "Sometimes after meals", score: 1 },
          { text: "Frequently throughout the day", score: 2 },
          { text: "Almost constantly", score: 3 }
        ]
      },
      {
        id: "food_triggers",
        text: "Do certain foods trigger your symptoms?",
        options: [
          { text: "No food triggers identified", score: 0 },
          { text: "One or two foods cause mild symptoms", score: 1 },
          { text: "Multiple foods cause symptoms", score: 2 },
          { text: "Many foods cause severe symptoms", score: 3 }
        ]
      },
      {
        id: "gas_flatulence",
        text: "How often do you experience excessive gas or flatulence?",
        options: [
          { text: "Normal amounts", score: 0 },
          { text: "Slightly increased", score: 1 },
          { text: "Frequently excessive", score: 2 },
          { text: "Constant, embarrassing amounts", score: 3 }
        ]
      },
      {
        id: "urgency",
        text: "Do you experience sudden urgency to have bowel movements?",
        options: [
          { text: "Never", score: 0 },
          { text: "Occasionally", score: 1 },
          { text: "Frequently", score: 2 },
          { text: "Almost always, very urgent", score: 3 }
        ]
      },
      {
        id: "incomplete_evacuation",
        text: "Do you feel like you haven't completely emptied your bowels?",
        options: [
          { text: "Never", score: 0 },
          { text: "Occasionally", score: 1 },
          { text: "Frequently", score: 2 },
          { text: "Almost always", score: 3 }
        ]
      },
      {
        id: "stress_relation",
        text: "Do your symptoms worsen with stress or improve with relaxation?",
        options: [
          { text: "No stress relationship", score: 0 },
          { text: "Slight worsening with major stress", score: 1 },
          { text: "Clear worsening with stress", score: 2 },
          { text: "Severe stress-related symptom flares", score: 3 }
        ]
      },
      {
        id: "symptom_duration",
        text: "How long have you been experiencing these symptoms?",
        options: [
          { text: "Less than 3 months", score: 0 },
          { text: "3-6 months", score: 1 },
          { text: "6 months to 2 years", score: 2 },
          { text: "More than 2 years", score: 3 }
        ]
      },
      {
        id: "mucus",
        text: "Do you notice mucus in your stool?",
        options: [
          { text: "Never", score: 0 },
          { text: "Rarely", score: 1 },
          { text: "Sometimes", score: 2 },
          { text: "Frequently", score: 3 }
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
          { text: "No fever", score: 0 },
          { text: "Low-grade fever (100.4-101°F)", score: 1 },
          { text: "Moderate fever (101-103°F)", score: 2 },
          { text: "High fever (above 103°F)", score: 3 }
        ]
      },
      {
        id: "respiratory_symptoms",
        text: "Do you have a cough, shortness of breath, or difficulty breathing?",
        options: [
          { text: "No respiratory symptoms", score: 0 },
          { text: "Mild dry cough", score: 1 },
          { text: "Persistent cough or mild breathing difficulty", score: 2 },
          { text: "Severe cough or significant breathing problems", score: 3 }
        ]
      },
      {
        id: "loss_of_senses",
        text: "Have you lost your sense of taste or smell?",
        options: [
          { text: "Normal taste and smell", score: 0 },
          { text: "Slight reduction in taste/smell", score: 1 },
          { text: "Significant loss of taste/smell", score: 2 },
          { text: "Complete loss of taste/smell", score: 3 }
        ]
      },
      {
        id: "fatigue_bodyaches",
        text: "Do you have fatigue, body aches, or muscle pain?",
        options: [
          { text: "No fatigue or aches", score: 0 },
          { text: "Mild fatigue or occasional aches", score: 1 },
          { text: "Moderate fatigue and body aches", score: 2 },
          { text: "Severe fatigue and widespread muscle pain", score: 3 }
        ]
      },
      {
        id: "throat_symptoms",
        text: "Do you have a sore throat or throat irritation?",
        options: [
          { text: "No throat symptoms", score: 0 },
          { text: "Mild throat irritation", score: 1 },
          { text: "Moderate sore throat", score: 2 },
          { text: "Severe sore throat, difficulty swallowing", score: 3 }
        ]
      },
      {
        id: "headache",
        text: "Are you experiencing headaches?",
        options: [
          { text: "No headaches", score: 0 },
          { text: "Mild headache", score: 1 },
          { text: "Moderate headache", score: 2 },
          { text: "Severe, persistent headache", score: 3 }
        ]
      },
      {
        id: "digestive_symptoms",
        text: "Do you have nausea, vomiting, or diarrhea?",
        options: [
          { text: "No digestive symptoms", score: 0 },
          { text: "Mild nausea", score: 1 },
          { text: "Moderate nausea or diarrhea", score: 2 },
          { text: "Severe nausea, vomiting, or diarrhea", score: 3 }
        ]
      },
      {
        id: "exposure_risk",
        text: "Have you been exposed to someone with COVID-19 in the last 14 days?",
        options: [
          { text: "No known exposure", score: 0 },
          { text: "Possible exposure (public places)", score: 1 },
          { text: "Close contact with suspected case", score: 2 },
          { text: "Close contact with confirmed case", score: 3 }
        ]
      },
      {
        id: "vaccination_status",
        text: "What is your vaccination status?",
        options: [
          { text: "Fully vaccinated with recent booster", score: 0 },
          { text: "Fully vaccinated, no recent booster", score: 1 },
          { text: "Partially vaccinated", score: 2 },
          { text: "Not vaccinated", score: 3 }
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
          { text: "No nausea or vomiting", score: 0 },
          { text: "Mild nausea without vomiting", score: 1 },
          { text: "Moderate nausea with some vomiting", score: 2 },
          { text: "Severe nausea with frequent vomiting", score: 3 }
        ]
      },
      {
        id: "diarrhea",
        text: "Do you have diarrhea?",
        options: [
          { text: "Normal bowel movements", score: 0 },
          { text: "Loose stools", score: 1 },
          { text: "Frequent watery diarrhea", score: 2 },
          { text: "Severe, bloody, or mucus-filled diarrhea", score: 3 }
        ]
      },
      {
        id: "stomach_pain",
        text: "How severe is your stomach pain or cramping?",
        options: [
          { text: "No pain", score: 0 },
          { text: "Mild discomfort", score: 1 },
          { text: "Moderate cramping pain", score: 2 },
          { text: "Severe, debilitating abdominal pain", score: 3 }
        ]
      },
      {
        id: "fever_chills",
        text: "Do you have fever or chills?",
        options: [
          { text: "No fever or chills", score: 0 },
          { text: "Mild fever or occasional chills", score: 1 },
          { text: "Moderate fever with chills", score: 2 },
          { text: "High fever with severe chills", score: 3 }
        ]
      },
      {
        id: "recent_food_consumption",
        text: "Have you eaten potentially risky food in the last 72 hours?",
        options: [
          { text: "No suspicious foods", score: 0 },
          { text: "Ate at a new restaurant or buffet", score: 1 },
          { text: "Ate undercooked meat, eggs, or dairy", score: 2 },
          { text: "Ate clearly spoiled/contaminated food", score: 3 }
        ]
      },
      {
        id: "others_affected",
        text: "Are others who ate the same food also sick?",
        options: [
          { text: "No one else is sick", score: 0 },
          { text: "Not sure or ate alone", score: 1 },
          { text: "One other person is sick", score: 2 },
          { text: "Multiple people who ate same food are sick", score: 3 }
        ]
      },
      {
        id: "dehydration_signs",
        text: "Do you have signs of dehydration (dry mouth, dizziness, dark urine)?",
        options: [
          { text: "No dehydration signs", score: 0 },
          { text: "Mild signs (slightly dry mouth)", score: 1 },
          { text: "Moderate dehydration signs", score: 2 },
          { text: "Severe dehydration (dizziness, very dark urine)", score: 3 }
        ]
      },
      {
        id: "symptom_onset",
        text: "When did your symptoms start after eating?",
        options: [
          { text: "No recent illness", score: 0 },
          { text: "More than 3 days ago", score: 1 },
          { text: "1-3 days ago", score: 2 },
          { text: "Within 24 hours of eating", score: 3 }
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
          { text: "Gradual onset over several days", score: 0 },
          { text: "Moderate onset over 1-2 days", score: 1 },
          { text: "Rapid onset within hours", score: 2 },
          { text: "Very sudden onset within minutes to hours", score: 3 }
        ]
      },
      {
        id: "vomiting_frequency",
        text: "How often are you vomiting?",
        options: [
          { text: "Not vomiting", score: 0 },
          { text: "Vomited once or twice", score: 1 },
          { text: "Vomiting several times a day", score: 2 },
          { text: "Vomiting almost constantly", score: 3 }
        ]
      },
      {
        id: "diarrhea_severity",
        text: "How severe is your diarrhea?",
        options: [
          { text: "No diarrhea", score: 0 },
          { text: "Loose stools 2-3 times", score: 1 },
          { text: "Watery diarrhea 4-6 times daily", score: 2 },
          { text: "Severe watery diarrhea more than 6 times daily", score: 3 }
        ]
      },
      {
        id: "dehydration_assessment",
        text: "Do you have signs of dehydration?",
        options: [
          { text: "No dehydration signs", score: 0 },
          { text: "Mild signs (dry mouth, thirst)", score: 1 },
          { text: "Moderate dehydration (dizziness, dark urine)", score: 2 },
          { text: "Severe dehydration (weakness, very dark urine)", score: 3 }
        ]
      },
      {
        id: "fever_presence",
        text: "Do you have a fever?",
        options: [
          { text: "No fever", score: 0 },
          { text: "Low-grade fever (under 101°F)", score: 1 },
          { text: "Moderate fever (101-102°F)", score: 2 },
          { text: "High fever (over 102°F)", score: 3 }
        ]
      },
      {
        id: "fluid_retention",
        text: "Are you able to keep fluids down?",
        options: [
          { text: "Keeping all fluids down", score: 0 },
          { text: "Keeping most fluids down", score: 1 },
          { text: "Difficulty keeping fluids down", score: 2 },
          { text: "Cannot keep any fluids down", score: 3 }
        ]
      },
      {
        id: "abdominal_cramping",
        text: "How severe is your abdominal cramping?",
        options: [
          { text: "No cramping", score: 0 },
          { text: "Mild cramping", score: 1 },
          { text: "Moderate cramping", score: 2 },
          { text: "Severe, constant cramping", score: 3 }
        ]
      },
      {
        id: "recent_exposure",
        text: "Have you been around others with similar illness?",
        options: [
          { text: "No known exposure", score: 0 },
          { text: "Possible exposure in public places", score: 1 },
          { text: "Close contact with sick family/friends", score: 2 },
          { text: "Multiple people in household are sick", score: 3 }
        ]
      }
    ]
  },
  {
    id: "arthritis-checker",
    title: "Arthritis Symptom Checker",
    description: "Comprehensive assessment of joint pain, stiffness, and symptoms that might indicate arthritis",
    category: "General Health",
    difficulty: "Easy",
    estimatedTime: "7-9 min",
    icon: "🦴",
    questions: [
      {
        id: "joint_pain",
        text: "Do you experience joint pain?",
        options: [
          { text: "No joint pain", score: 0 },
          { text: "Occasional mild pain", score: 1 },
          { text: "Regular moderate pain", score: 2 },
          { text: "Severe, constant pain", score: 3 }
        ]
      },
      {
        id: "morning_stiffness",
        text: "Do you have joint stiffness, especially in the morning?",
        options: [
          { text: "No stiffness", score: 0 },
          { text: "Brief morning stiffness (less than 30 minutes)", score: 1 },
          { text: "Stiffness lasting 30 minutes to 1 hour", score: 2 },
          { text: "Prolonged stiffness lasting hours", score: 3 }
        ]
      },
      {
        id: "joint_swelling",
        text: "Are your joints swollen or tender to touch?",
        options: [
          { text: "No swelling", score: 0 },
          { text: "Slight swelling occasionally", score: 1 },
          { text: "Noticeable swelling in one or more joints", score: 2 },
          { text: "Significant swelling and warmth in joints", score: 3 }
        ]
      },
      {
        id: "movement_limitation",
        text: "Do you have difficulty moving affected joints?",
        options: [
          { text: "Full range of motion", score: 0 },
          { text: "Slightly limited movement", score: 1 },
          { text: "Moderately limited movement", score: 2 },
          { text: "Severely limited movement", score: 3 }
        ]
      },
      {
        id: "affected_joints",
        text: "Which joints are most affected?",
        options: [
          { text: "No affected joints", score: 0 },
          { text: "One or two joints", score: 1 },
          { text: "Multiple joints (hands, knees, etc.)", score: 2 },
          { text: "Many joints throughout the body", score: 3 }
        ]
      },
      {
        id: "pain_pattern",
        text: "When is your joint pain typically worse?",
        options: [
          { text: "No consistent pattern", score: 0 },
          { text: "Worse after activity or by evening", score: 1 },
          { text: "Worse in the morning or after rest", score: 2 },
          { text: "Constant pain regardless of activity", score: 3 }
        ]
      },
      {
        id: "weather_sensitivity",
        text: "Do weather changes affect your joint pain?",
        options: [
          { text: "No weather sensitivity", score: 0 },
          { text: "Slight increase in pain with weather changes", score: 1 },
          { text: "Moderate increase in pain before storms/cold", score: 2 },
          { text: "Severe weather sensitivity, can predict weather", score: 3 }
        ]
      },
      {
        id: "family_history",
        text: "Do you have family history of arthritis?",
        options: [
          { text: "No family history", score: 0 },
          { text: "Distant relatives with arthritis", score: 1 },
          { text: "Parents or siblings with arthritis", score: 2 },
          { text: "Multiple close relatives with arthritis", score: 3 }
        ]
      },
      {
        id: "daily_impact",
        text: "How much do joint symptoms affect your daily activities?",
        options: [
          { text: "No impact on daily activities", score: 0 },
          { text: "Slight impact on some activities", score: 1 },
          { text: "Moderate impact, avoid some activities", score: 2 },
          { text: "Severe impact, major limitations in daily life", score: 3 }
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
          { text: "No dizziness", score: 0 },
          { text: "Lightheadedness or feeling faint", score: 1 },
          { text: "Spinning sensation (vertigo)", score: 2 },
          { text: "Severe spinning with nausea and vomiting", score: 3 }
        ]
      },
      {
        id: "trigger_situations",
        text: "What situations trigger your dizziness?",
        options: [
          { text: "No specific triggers", score: 0 },
          { text: "Standing up quickly", score: 1 },
          { text: "Head movements or position changes", score: 2 },
          { text: "Multiple triggers or occurs constantly", score: 3 }
        ]
      },
      {
        id: "balance_problems",
        text: "Do you have trouble with balance or walking?",
        options: [
          { text: "Normal balance", score: 0 },
          { text: "Slight unsteadiness occasionally", score: 1 },
          { text: "Noticeable balance problems, need to hold onto things", score: 2 },
          { text: "Severe balance issues, risk of falling", score: 3 }
        ]
      },
      {
        id: "hearing_changes",
        text: "Do you have hearing changes or ringing in ears?",
        options: [
          { text: "No hearing changes", score: 0 },
          { text: "Slight ringing in ears", score: 1 },
          { text: "Hearing loss or significant ringing", score: 2 },
          { text: "Severe hearing changes with dizziness", score: 3 }
        ]
      },
      {
        id: "nausea_vomiting",
        text: "Do you experience nausea or vomiting with dizziness?",
        options: [
          { text: "No nausea", score: 0 },
          { text: "Mild nausea", score: 1 },
          { text: "Moderate nausea", score: 2 },
          { text: "Severe nausea with vomiting", score: 3 }
        ]
      },
      {
        id: "episode_duration",
        text: "How long do your dizziness episodes last?",
        options: [
          { text: "No episodes", score: 0 },
          { text: "Seconds to minutes", score: 1 },
          { text: "Minutes to hours", score: 2 },
          { text: "Hours to days or constant", score: 3 }
        ]
      },
      {
        id: "frequency",
        text: "How often do you experience dizziness?",
        options: [
          { text: "Never", score: 0 },
          { text: "Rarely (once a month or less)", score: 1 },
          { text: "Frequently (weekly)", score: 2 },
          { text: "Daily or almost daily", score: 3 }
        ]
      },
      {
        id: "medications",
        text: "Are you taking medications that might cause dizziness?",
        options: [
          { text: "No medications", score: 0 },
          { text: "Taking some medications, unclear if related", score: 1 },
          { text: "Taking blood pressure or heart medications", score: 2 },
          { text: "Recently started new medications", score: 3 }
        ]
      },
      {
        id: "associated_symptoms",
        text: "Do you have other symptoms with dizziness?",
        options: [
          { text: "No other symptoms", score: 0 },
          { text: "Mild headache", score: 1 },
          { text: "Headache, neck pain, or visual changes", score: 2 },
          { text: "Multiple symptoms: headache, vision changes, weakness", score: 3 }
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
          { text: "No pain during urination", score: 0 },
          { text: "Mild discomfort", score: 1 },
          { text: "Moderate burning sensation", score: 2 },
          { text: "Severe pain during urination", score: 3 }
        ]
      },
      {
        id: "urination_frequency",
        text: "How often do you need to urinate?",
        options: [
          { text: "Normal frequency", score: 0 },
          { text: "Slightly more often than usual", score: 1 },
          { text: "Much more frequently than normal", score: 2 },
          { text: "Constantly feeling the need to urinate", score: 3 }
        ]
      },
      {
        id: "urgency",
        text: "Do you have sudden, strong urges to urinate?",
        options: [
          { text: "No urgency", score: 0 },
          { text: "Occasional urgency", score: 1 },
          { text: "Frequent urgent feelings", score: 2 },
          { text: "Constant urgency, hard to control", score: 3 }
        ]
      },
      {
        id: "urine_appearance",
        text: "How does your urine look and smell?",
        options: [
          { text: "Normal, clear to pale yellow", score: 0 },
          { text: "Slightly cloudy or stronger smell", score: 1 },
          { text: "Cloudy with strong odor", score: 2 },
          { text: "Cloudy with blood or very strong/foul odor", score: 3 }
        ]
      },
      {
        id: "pelvic_pain",
        text: "Do you have pelvic pain or pressure?",
        options: [
          { text: "No pelvic pain", score: 0 },
          { text: "Mild discomfort in pelvic area", score: 1 },
          { text: "Moderate pelvic pain or pressure", score: 2 },
          { text: "Severe pelvic pain or pressure", score: 3 }
        ]
      },
      {
        id: "back_pain",
        text: "Do you have lower back or side pain?",
        options: [
          { text: "No back pain", score: 0 },
          { text: "Mild lower back discomfort", score: 1 },
          { text: "Moderate back or side pain", score: 2 },
          { text: "Severe back/side pain or kidney area pain", score: 3 }
        ]
      },
      {
        id: "fever_chills",
        text: "Do you have fever or chills?",
        options: [
          { text: "No fever or chills", score: 0 },
          { text: "Feeling slightly warm", score: 1 },
          { text: "Low-grade fever or mild chills", score: 2 },
          { text: "High fever with chills", score: 3 }
        ]
      },
      {
        id: "incomplete_emptying",
        text: "Do you feel like your bladder doesn't empty completely?",
        options: [
          { text: "Bladder feels completely empty", score: 0 },
          { text: "Occasionally feels incomplete", score: 1 },
          { text: "Frequently feels incomplete", score: 2 },
          { text: "Always feels like bladder isn't empty", score: 3 }
        ]
      },
      {
        id: "risk_factors",
        text: "Do you have risk factors for UTI?",
        options: [
          { text: "No known risk factors", score: 0 },
          { text: "Recent sexual activity", score: 1 },
          { text: "History of UTIs or urinary problems", score: 2 },
          { text: "Diabetes, pregnancy, or immune system problems", score: 3 }
        ]
      }
    ]
  }
];
