import React, { createContext, useContext, useState } from 'react';
import { 
  Career, 
  PathwayStep, 
  StudentProfile, 
  ConcernData, 
  SEED_CAREERS, 
  SEED_PATHWAYS, 
  SEED_CONCERNS, 
  INITIAL_STUDENT_PROFILE 
} from '../data/seedData';

export type UserRole = 'student' | 'parent' | 'counsellor';
export type AppLanguage = 'en' | 'ta';

interface AppContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
  careers: Career[];
  student: StudentProfile;
  pathways: Record<string, PathwayStep[]>;
  concerns: ConcernData[];
  toastMessage: string | null;
  showToast: (msg: string) => void;
  toggleShortlist: (careerId: string) => void;
  chooseCareer: (careerId: string) => void;
  togglePathwayStep: (careerId: string, stepId: string) => void;
  addFamilyComment: (text: string) => void;
  approveFamilyPath: () => void;
  resolveFlag: (flagId: string) => void;
  createCounsellorFlag: (reason: string) => void;
  updateStudentIntake: (data: Partial<StudentProfile>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole>('student');
  const [language, setLanguage] = useState<AppLanguage>('en');
  const [student, setStudent] = useState<StudentProfile>(INITIAL_STUDENT_PROFILE);
  const [pathways, setPathways] = useState<Record<string, PathwayStep[]>>(SEED_PATHWAYS);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const toggleShortlist = (careerId: string) => {
    setStudent(prev => {
      const exists = prev.shortlistedCareerIds.includes(careerId);
      const updated = exists 
        ? prev.shortlistedCareerIds.filter(id => id !== careerId)
        : [...prev.shortlistedCareerIds, careerId];
      return { ...prev, shortlistedCareerIds: updated };
    });
    showToast(
      language === 'ta' 
        ? 'விருப்பப் பட்டியல் புதுப்பிக்கப்பட்டது' 
        : 'Career shortlist updated for family view'
    );
  };

  const chooseCareer = (careerId: string) => {
    setStudent(prev => ({
      ...prev,
      chosenCareerId: careerId,
      shortlistedCareerIds: prev.shortlistedCareerIds.includes(careerId) 
        ? prev.shortlistedCareerIds 
        : [...prev.shortlistedCareerIds, careerId]
    }));
    showToast(
      language === 'ta' 
        ? 'முதன்மை பாதை தேர்வு செய்யப்பட்டது' 
        : 'Career roadmap selected & synchronized'
    );
  };

  const togglePathwayStep = (careerId: string, stepId: string) => {
    setPathways(prev => {
      const currentList = prev[careerId] || [];
      const updated = currentList.map(step => 
        step.id === stepId ? { ...step, isCompleted: !step.isCompleted } : step
      );
      return { ...prev, [careerId]: updated };
    });
    showToast(language === 'ta' ? 'மைல்கல் நிலை புதுப்பிக்கப்பட்டது' : 'Milestone progress updated');
  };

  const addFamilyComment = (text: string) => {
    if (!text.trim()) return;
    const authorName = role === 'parent' 
      ? 'Parent (S. Muthukumar)' 
      : role === 'counsellor' 
      ? 'Counsellor (Dr. Radhika)' 
      : 'Student (Ananya)';
      
    setStudent(prev => ({
      ...prev,
      familyComments: [
        ...prev.familyComments,
        { author: authorName, text, date: 'Just now' }
      ]
    }));
    showToast(language === 'ta' ? 'கருத்து பதிவு செய்யப்பட்டது' : 'Comment added to family dialogue');
  };

  const approveFamilyPath = () => {
    setStudent(prev => ({ ...prev, familyApprovalStatus: 'Approved' }));
    showToast(language === 'ta' ? 'குடும்ப ஒப்புதல் அளிக்கப்பட்டது!' : 'Career path approved by family!');
  };

  const resolveFlag = (flagId: string) => {
    setStudent(prev => ({
      ...prev,
      activeFlags: prev.activeFlags.map(f => f.id === flagId ? { ...f, resolved: true } : f)
    }));
    showToast(language === 'ta' ? 'கவுன்சிலர் சந்தேகம் தீர்க்கப்பட்டது' : 'Counsellor query resolved');
  };

  const createCounsellorFlag = (reason: string) => {
    const newFlag = {
      id: `flag-${Date.now()}`,
      reason,
      severity: 'medium' as const,
      timestamp: 'Just now',
      resolved: false
    };
    setStudent(prev => ({
      ...prev,
      activeFlags: [newFlag, ...prev.activeFlags]
    }));
    showToast(language === 'ta' ? 'கவுன்சிலருக்கு கோரிக்கை அனுப்பப்பட்டது' : 'Sent to human counsellor for review');
  };

  const updateStudentIntake = (data: Partial<StudentProfile>) => {
    setStudent(prev => ({ ...prev, ...data }));
    showToast(language === 'ta' ? 'சுயவிவரம் சேமிக்கப்பட்டது' : 'Profile updated successfully');
  };

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        language,
        setLanguage,
        careers: SEED_CAREERS,
        student,
        pathways,
        concerns: SEED_CONCERNS,
        toastMessage,
        showToast,
        toggleShortlist,
        chooseCareer,
        togglePathwayStep,
        addFamilyComment,
        approveFamilyPath,
        resolveFlag,
        createCounsellorFlag,
        updateStudentIntake
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
