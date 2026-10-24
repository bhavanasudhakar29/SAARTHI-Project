export interface Career {
  id: string;
  name: string;
  nameTa: string;
  category: string;
  categoryTa: string;
  tagline: string;
  taglineTa: string;
  matchScore: number;
  matchReasons: string[];
  matchReasonsTa: string[];
  avgSalaryRange: string;
  demandTrend: 'Very High' | 'High' | 'Steady';
  demandTrendTa: string;
  durationYears: string;
  estimatedCost: string;
  sources: { title: string; institution: string; year: string }[];
  suitability: {
    interestMatch: number;
    academicFit: number;
    budgetFeasibility: number;
    jobSecurity: number;
  };
}

export interface PathwayStep {
  id: string;
  stepNumber: number;
  title: string;
  titleTa: string;
  stage: string;
  duration: string;
  durationMonths: number;
  costRange: string;
  costNumeric: number;
  description: string;
  descriptionTa: string;
  verifiedSource: string;
  milestones: string[];
  milestonesTa: string[];
  isCompleted?: boolean;
}

export interface ConcernData {
  id: string;
  label: string;
  labelTa: string;
  category: 'financial' | 'security' | 'location' | 'preparation';
  answerTitle: string;
  answerTitleTa: string;
  evidencePoints: string[];
  evidencePointsTa: string[];
  statsHighlight: string;
  sourceAttribution: string;
  financialAidAvailable?: string;
}

export interface StudentProfile {
  name: string;
  classGrade: string;
  location: string;
  stream: string;
  marksScore: string;
  budgetCap: string;
  interests: string[];
  selectedLanguage: 'en' | 'ta';
  shortlistedCareerIds: string[];
  chosenCareerId: string | null;
  familyApprovalStatus: 'Pending' | 'Approved' | 'Review Requested';
  familyComments: { author: string; text: string; date: string }[];
  activeFlags: { id: string; reason: string; severity: 'high' | 'medium'; timestamp: string; resolved: boolean }[];
  checkIns: { id: string; title: string; dueDate: string; completed: boolean }[];
}

export const SEED_CAREERS: Career[] = [
  {
    id: 'data-scientist',
    name: 'Data Scientist & AI Specialist',
    nameTa: 'தரவு விஞ்ஞானி மற்றும் செயற்கை நுண்ணறிவு நிபுணர்',
    category: 'Technology & Computing',
    categoryTa: 'தொழில்நுட்பம் மற்றும் கணினி அறிவியல்',
    tagline: 'Design statistical algorithms and AI systems to solve industry and societal problems.',
    taglineTa: 'தொழில்நுட்ப மற்றும் சமூக சிக்கல்களை தீர்க்க புள்ளிவிவர வழிமுறைகள் மற்றும் AI அமைப்புகளை உருவாக்குதல்.',
    matchScore: 94,
    matchReasons: [
      'Strong fit with your high quantitative/maths score (88%)',
      'Matches your expressed interest in problem-solving & technology',
      'Robust tier-2/tier-3 tech hiring with remote & hybrid job stability'
    ],
    matchReasonsTa: [
      'உங்கள் கணித மதிப்பெண்களுடன் மிகச் சிறந்த பொருத்தம் (88%)',
      'சிக்கல்களைத் தீர்க்கும் மற்றும் தொழில்நுட்ப ஆர்வத்துடன் பொருந்துகிறது',
      'தொலைதூர மற்றும் கலப்பின வேலை நிலைத்தன்மையுடன் கூடிய தொழில்நுட்ப வாய்ப்புகள்'
    ],
    avgSalaryRange: '₹8.5L – ₹16L / annum (3-5 yrs)',
    demandTrend: 'Very High',
    demandTrendTa: 'மிக அதிகம்',
    durationYears: '4 Years (B.Tech / B.Sc + Certifications)',
    estimatedCost: '₹3.5L – ₹8L (Total govt/tier-2 college)',
    sources: [
      { title: 'National Skill Development Corp (NSDC) Report', institution: 'Ministry of Skill Development & Entrepreneurship', year: '2025' },
      { title: 'NASSCOM AI & Cloud Talent Demand Outlook', institution: 'NASSCOM FutureSkills', year: '2025' }
    ],
    suitability: {
      interestMatch: 95,
      academicFit: 92,
      budgetFeasibility: 85,
      jobSecurity: 92
    }
  },
  {
    id: 'agricultural-technologist',
    name: 'Precision Agri-Tech Specialist',
    nameTa: 'துல்லிய வேளாண் தொழில்நுட்ப நிபுணர்',
    category: 'Agriculture & Bio-Tech',
    categoryTa: 'வேளாண்மை மற்றும் உயிரி தொழில்நுட்பம்',
    tagline: 'Combine IoT sensors, drone tech, and crop analytics to modernise agriculture and agribusiness.',
    taglineTa: 'விவசாயத்தை நவீனமயமாக்க சென்சார்கள், ட்ரோன்கள் மற்றும் பயிர் பகுப்பாய்வுகளைப் பயன்படுத்துதல்.',
    matchScore: 89,
    matchReasons: [
      'High alignment with your regional location & biology/maths combination',
      'Low entry college costs with high State/Central government subsidies & grants',
      'Emerging sector with 28% YoY growth in agri-startups and FPO management'
    ],
    matchReasonsTa: [
      'உங்கள் பகுதி மற்றும் அறிவியல் பாடங்களுடன் மிகச் சிறந்த பொருத்தம்',
      'அரசு மானியங்கள் மற்றும் குறைந்த கல்விச் செலவு',
      'வேளாண் நிறுவனங்களில் ஆண்டுதோறும் 28% வேலைவாய்ப்பு வளர்ச்சி'
    ],
    avgSalaryRange: '₹5.5L – ₹11L / annum',
    demandTrend: 'High',
    demandTrendTa: 'அதிகம்',
    durationYears: '4 Years (B.Sc Agri-Tech / B.E Agricultural Engg)',
    estimatedCost: '₹1.5L – ₹4L (Govt Quota / State Universities)',
    sources: [
      { title: 'ICAR National Agricultural Higher Education Project', institution: 'Indian Council of Agricultural Research', year: '2024' },
      { title: 'Tamil Nadu Agricultural University Placement Data', institution: 'TNAU Coimbatore', year: '2025' }
    ],
    suitability: {
      interestMatch: 88,
      academicFit: 90,
      budgetFeasibility: 96,
      jobSecurity: 86
    }
  },
  {
    id: 'healthcare-biomedical',
    name: 'Biomedical & Diagnostic Devices Tech',
    nameTa: 'பயோமெடிக்கல் மற்றும் மருத்துவக் கருவி தொழில்நுட்ப நிபுணர்',
    category: 'Healthcare & Engineering',
    categoryTa: 'சுகாதாரம் மற்றும் பொறியியல்',
    tagline: 'Maintain, calibrate, and build advanced hospital diagnostic systems and imaging equipment.',
    taglineTa: 'மருத்துவமனை கண்டறியும் அமைப்புகள் மற்றும் உபகரணங்களை நிர்வகித்தல் மற்றும் உருவாக்குதல்.',
    matchScore: 85,
    matchReasons: [
      'High societal respect and strong family alignment for stable healthcare careers',
      'Exemption from grueling NEET competition while remaining in clinical medical ecosystem',
      'Hospitals and diagnostic chains offer guaranteed campus hiring in tier-1/2 districts'
    ],
    matchReasonsTa: [
      'மருத்துவத் துறையில் சமூக நன்மதிப்பு மற்றும் நிலையான வேலைவாய்ப்பு',
      'நீட் (NEET) தேர்வு சுமை இன்றி மருத்துவக் கருவிகள் துறையில் நுழைவு',
      'முன்னணி மருத்துவமனைகளில் நேரடி வேலைவாய்ப்பு உறுதி'
    ],
    avgSalaryRange: '₹4.8L – ₹9.5L / annum',
    demandTrend: 'Steady',
    demandTrendTa: 'நிலையானது',
    durationYears: '4 Years (B.Tech Biomedical / B.Sc Clinical Tech)',
    estimatedCost: '₹2.8L – ₹6L (Govt Aided / Reputed Regional Inst)',
    sources: [
      { title: 'Biomedical Equipment Maintenance Scheme', institution: 'National Health Mission (NHM)', year: '2024' },
      { title: 'Healthcare Sector Skill Council (HSSC)', institution: 'Govt of India', year: '2025' }
    ],
    suitability: {
      interestMatch: 84,
      academicFit: 86,
      budgetFeasibility: 89,
      jobSecurity: 94
    }
  }
];

export const SEED_PATHWAYS: Record<string, PathwayStep[]> = {
  'data-scientist': [
    {
      id: 'step-1',
      stepNumber: 1,
      title: 'Foundation & Entrance Exams',
      titleTa: 'அடிப்படை கல்வி மற்றும் நுழைவுத் தேர்வுகள்',
      stage: 'Class 12 / Higher Secondary (Final Year)',
      duration: '6 Months',
      durationMonths: 6,
      costRange: '₹5,000 – ₹15,000 (Prep & exam fees)',
      costNumeric: 10000,
      description: 'Focus on Maths & Physics concepts. Target state entrance exams (TNEA, KCET) or JEE Main for affordable government/aided college seats.',
      descriptionTa: 'கணிதம் மற்றும் இயற்பியல் பாடங்களில் கூடுதல் கவனம். குறைந்த கட்டண அரசு கல்லூரி இடங்களுக்கு விண்ணப்பித்தல்.',
      verifiedSource: 'AICTE Approved Curriculum Guidelines 2025',
      milestones: ['Score >85% in Class 12 Boards', 'Appear for TNEA / JEE State Quota', 'Complete Python for Beginners (Free Swayam/NPTEL)'],
      milestonesTa: ['12-ம் வகுப்பு தேர்வில் 85% மேல் பெறுதல்', 'கல்லூரி சேர்க்கை விண்ணப்பம்', 'இலவச பைதான் அடிப்படை பயிற்சி முடித்தல்'],
      isCompleted: true
    },
    {
      id: 'step-2',
      stepNumber: 2,
      title: 'Undergraduate Degree (Govt / Aided College)',
      titleTa: 'இளங்கலை பட்டப்படிப்பு (அரசு / உதவிபெறும் கல்லூரி)',
      stage: 'Years 1 to 3',
      duration: '36 Months',
      durationMonths: 36,
      costRange: '₹40,000 – ₹70,000 / year (TNEA Govt quota fee structure)',
      costNumeric: 180000,
      description: 'Pursue B.Tech CSE / IT / AI-DS or B.Sc Statistics. Build practical GitHub portfolio with tabular data projects and machine learning competitions.',
      descriptionTa: 'கணினி அல்லது தரவு அறிவியல் பட்டப்படிப்பு. செய்முறை திட்டங்களை உருவாக்குதல்.',
      verifiedSource: 'Anna University / VTU Fee & Syllabus Matrix 2025',
      milestones: ['Maintain CGPA > 8.0', 'Kaggle Titanic & Housing price ML projects', 'Complete NPTEL Data Science Certification'],
      milestonesTa: ['கல்லூரி தேர்வில் முதல் வகுப்பு பெறுதல்', 'செயல்முறை திட்டங்களை முடித்தல்', 'மத்திய அரசு NPTEL சான்றிதழ் பெறுதல்'],
      isCompleted: false
    },
    {
      id: 'step-3',
      stepNumber: 3,
      title: 'Industry Internship & Practical Specialisation',
      titleTa: 'தொழில்துறை பயிற்சி (Internship)',
      stage: 'Year 4 (Pre-Final & Final Semester)',
      duration: '6 Months',
      durationMonths: 6,
      costRange: 'Earn ₹12,000 – ₹25,000 / month stipend',
      costNumeric: 0,
      description: 'Paid internship at an analytics firm, IT services company, or startup. Gain real SQL and data pipeline experience on live production data.',
      descriptionTa: 'முன்னணி நிறுவனத்தில் ஊதியத்துடன் கூடிய நேரடி களப்பயிற்சி.',
      verifiedSource: 'NASSCOM FutureSkills Prime Internship Framework',
      milestones: ['Complete 3 to 6-month paid internship', 'Deploy full-stack predictive dashboard on HuggingFace/Render'],
      milestonesTa: ['3-6 மாத நிறுவனப் பயிற்சி', 'இணையதளத்தில் நேரடி திட்டத்தை வெளியிடுதல்'],
      isCompleted: false
    },
    {
      id: 'step-4',
      stepNumber: 4,
      title: 'Placement & Early Career Accelerator',
      titleTa: 'முதல் பணி நியமனம் மற்றும் தொழில் வளர்ச்சி',
      stage: 'Graduate Entry',
      duration: 'Continuous',
      durationMonths: 12,
      costRange: 'Net positive salary: ₹6.5L - ₹10L starting CTC',
      costNumeric: 0,
      description: 'Junior Data Scientist or Associate AI Engineer role. Focus on cloud certifications (AWS/Azure Data Fundamentals) funded by employers.',
      descriptionTa: 'தொடக்க நிலை தரவு ஆய்வாளர் அல்லது AI பொறியாளர் பணி.',
      verifiedSource: 'Campus Recruitment Index (South Zone 2025)',
      milestones: ['Secure campus/off-campus offer', 'Work on business intelligence workflows'],
      milestonesTa: ['வேலை வாய்ப்பு கடிதம் பெறுதல்', 'நிறுவன பணிகளை வெற்றிகரமாக துவங்குதல்'],
      isCompleted: false
    }
  ]
};

export const SEED_CONCERNS: ConcernData[] = [
  {
    id: 'concern-cost',
    label: 'Is the course too expensive for our family?',
    labelTa: 'இந்த படிப்பு எங்கள் குடும்பத்திற்கு மிக அதிக செலவாகுமா?',
    category: 'financial',
    answerTitle: 'Transparent Fee Breakdown & State Subsidy Support',
    answerTitleTa: 'வெளிப்படையான கல்வி கட்டண விபரம் மற்றும் அரசு உதவித்தொகை',
    evidencePoints: [
      'Through government counseling (e.g. TNEA / State quota), tuition fees at Government and Govt-Aided engineering colleges are capped at ₹40,000 to ₹55,000 per year.',
      'Students with parental income below ₹2.5 Lakhs qualify for 100% tuition waiver via State Post-Matric Scholarship schemes.',
      'Educational loans up to ₹7.5 Lakhs require zero collateral under the Central Sector Interest Subsidy (CSIS) scheme.'
    ],
    evidencePointsTa: [
      'அரசு ஒதுக்கீட்டின் கீழ் அரசு கல்லூரிகளில் ஆண்டு கட்டணம் ₹40,000 முதல் ₹55,000 மட்டுமே.',
      'வருமானம் ₹2.5 லட்சத்திற்கு கீழ் உள்ள குடும்பங்களுக்கு முழு கல்வி கட்டண விலக்கு சலுகை உண்டு.',
      '₹7.5 லட்சம் வரை பிணையில்லா கல்விக் கடன் உதவி பெறலாம்.'
    ],
    statsHighlight: 'Average Total Degree Cost: ₹1.8L – ₹2.4L (All 4 years combined in State Aided Colls)',
    sourceAttribution: 'Department of Higher Education & National Scholarship Portal (2025 Verified)',
    financialAidAvailable: 'PM-Vidyalaxmi Portal & State Post-Matric Waiver Eligible'
  },
  {
    id: 'concern-security',
    label: 'Will there be reliable jobs by the time I graduate?',
    labelTa: 'படிப்பு முடியும் போது உறுதியான வேலை வாய்ப்பு கிடைக்குமா?',
    category: 'security',
    answerTitle: 'Data-Backed Employment Demand & Hiring Velocity',
    answerTitleTa: 'நிரூபிக்கப்பட்ட வேலைவாய்ப்பு புள்ளிவிவரங்கள்',
    evidencePoints: [
      'The National Skill Development Corporation (NSDC) projects an annual deficit of 1.4 million tech & analytics professionals in India through 2028.',
      'Tamil Nadu and Karnataka Global Capability Centers (GCCs) hired over 110,000 fresh graduates in 2024-25 across tier-2 cities like Coimbatore, Trichy, and Mysuru.',
      'Average campus placement rate for computer science and data disciplines in accredited colleges remains above 82%.'
    ],
    evidencePointsTa: [
      'இந்தியாவில் அடுத்த 4 ஆண்டுகளில் 14 லட்சம் தொழில்நுட்ப நிபுணர்கள் தேவைப்படுவர் என அரசு அறிக்கை கூறுகிறது.',
      'கோயம்புத்தூர், திருச்சி உள்ளிட்ட இரண்டாம் நிலை நகரங்களிலும் புதிய தொழில்நுட்ப அலுவலகங்கள் திறக்கப்பட்டு வேலை வாய்ப்புகள் வழங்கப்படுகின்றன.',
      'அங்கீகரிக்கப்பட்ட கல்லூரிகளில் வேலைவாய்ப்பு விகிதம் 82% க்கும் அதிகமாக உள்ளது.'
    ],
    statsHighlight: '82% Fresh Graduate Placement Rate with median starting CTC of ₹6.2 LPA',
    sourceAttribution: 'NASSCOM Strategic Review 2025 & State Tech Employment Census'
  },
  {
    id: 'concern-location',
    label: 'Do I have to move to a metro city like Bangalore or Delhi?',
    labelTa: 'நான் பெங்களூரு போன்ற பெருநகரங்களுக்கு இடம் பெயர வேண்டுமா?',
    category: 'location',
    answerTitle: 'Regional Tech Parks & Tier-2 IT Hub Growth',
    answerTitleTa: 'உள்ளூர் தொழில்நுட்ப பூங்காக்கள் மற்றும் அருகிலுள்ள வேலைவாய்ப்புகள்',
    evidencePoints: [
      'State ELCOT and IT corridors in Coimbatore, Madurai, Salem, and Tirunelveli now house over 180 IT and analytics firms.',
      'Over 42% of data analytics roles in 2025 offer hybrid or remote arrangements, allowing graduates to remain closer to family.',
      'Government colleges within your regional zone (within 2-3 hours travel) conduct centralized campus interviews.'
    ],
    evidencePointsTa: [
      'கோவை, மதுரை, சேலம் போன்ற நகரங்களிலேயே 180-க்கும் மேற்பட்ட நிறுவனங்கள் இயங்கி வருகின்றன.',
      '42% பணிகள் வீட்டிலிருந்தோ அல்லது பகுதிநேர அலுவலக வருகையுடனோ பணியாற்றக்கூடியவை.',
      'உங்கள் மாவட்டத்திற்கு அருகிலேயே அரசு கல்லூரிகள் மற்றும் நேர்முகத் தேர்வுகள் உள்ளன.'
    ],
    statsHighlight: 'Over 45,000 tech jobs created outside tier-1 metros in the last 24 months',
    sourceAttribution: 'State IT & Digital Services Department Annual Report 2025'
  },
  {
    id: 'concern-difficulty',
    label: 'What if the syllabus is too hard or maths is tough?',
    labelTa: 'பாடத்திட்டம் மிக கடினமாக இருக்குமோ என்று பயமாக உள்ளதா?',
    category: 'preparation',
    answerTitle: 'Step-by-Step Bridge Support & Practical Focus',
    answerTitleTa: 'எளிய வழிகாட்டல் மற்றும் படிப்படியான பயிற்சி',
    evidencePoints: [
      'Modern data science relies more on logical thinking and practical coding libraries (Python) than theoretical abstract calculus.',
      'All government colleges now offer 1st-year bilingual bridge courses in local languages to assist students from regional boards.',
      'SAARTHI includes milestone check-ins with peer mentors and counsellors to resolve study bottlenecks before exams.'
    ],
    evidencePointsTa: [
      'நவீன தரவு அறிவியல் கடுமையான மனப்பாடக் கணிதத்தை விட எளிய கணினி நிரல் வழிமுறைகளையே சார்ந்துள்ளது.',
      'தமிழ் வழி மற்றும் மாநில பாடத்திட்ட மாணவர்களுக்காக கல்லூரிகளில் சிறப்பு அறிமுக வகுப்புகள் நடத்தப்படுகின்றன.',
      'சார்வதி வழிகாட்டல் மூலம் தேர்வுக்கு முன் ஆலோசனைகள் மற்றும் உதவி பெறலாம்.'
    ],
    statsHighlight: '91% pass percentage with 1st-year institutional bridge courses',
    sourceAttribution: 'State Technical Education Board Academic Performance Audit'
  }
];

export const INITIAL_STUDENT_PROFILE: StudentProfile = {
  name: 'Ananya S.',
  classGrade: '12th Grade (State Board)',
  location: 'Salem / Coimbatore Region, TN',
  stream: 'Computer Science & Maths',
  marksScore: '87.4%',
  budgetCap: '₹2.5 Lakhs / Total Degree Budget',
  interests: ['Coding & Computers', 'Maths & Puzzles', 'Problem Solving', 'Design'],
  selectedLanguage: 'en',
  shortlistedCareerIds: ['data-scientist', 'agricultural-technologist'],
  chosenCareerId: 'data-scientist',
  familyApprovalStatus: 'Review Requested',
  familyComments: [
    { author: 'Father (S. Muthukumar)', text: 'We want to ensure government college admission fees stay within our budget, and job placement is secure locally.', date: 'Yesterday at 7:30 PM' },
    { author: 'Counsellor (Dr. Radhika)', text: 'Ananya has top marks in quantitative subjects. Through TNEA counseling, tuition fee will be well under budget with full subsidy eligibility.', date: 'Today at 10:15 AM' }
  ],
  activeFlags: [
    { id: 'flag-1', reason: 'Parent requested data proof on tier-2 job placement security', severity: 'medium', timestamp: 'Today 11:20 AM', resolved: false }
  ],
  checkIns: [
    { id: 'chk-1', title: 'Complete Class 12 Boards Revision', dueDate: 'Next Month (May 15)', completed: true },
    { id: 'chk-2', title: 'TNEA Engineering Counselling Registration', dueDate: 'June 10, 2026', completed: false },
    { id: 'chk-3', title: 'Post-Matric Scholarship Application Portal Filing', dueDate: 'July 05, 2026', completed: false }
  ]
};
