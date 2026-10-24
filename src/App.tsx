import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { LandingPage } from './pages/LandingPage';
import { StudentIntakePage } from './pages/StudentIntakePage';
import { StudentChatPage } from './pages/StudentChatPage';
import { PathwayPage } from './pages/PathwayPage';
import { FamilyViewPage } from './pages/FamilyViewPage';
import { SmartConcernResolverPage } from './pages/SmartConcernResolverPage';
import { CounsellorDashboardPage } from './pages/CounsellorDashboardPage';
import { CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

const AppContent: React.FC = () => {
  const { role, setRole, language, toastMessage, student } = useApp();
  const [currentView, setCurrentView] = useState<string>('landing');
  const [selectedPathwayId, setSelectedPathwayId] = useState<string>('data-scientist');

  const handleStartDemo = () => {
    setRole('student');
    setCurrentView('student-intake');
  };

  const handleExploreRole = (newRole: 'student' | 'parent' | 'counsellor') => {
    setRole(newRole);
    if (newRole === 'student') setCurrentView('student-chat');
    else if (newRole === 'parent') setCurrentView('family-view');
    else if (newRole === 'counsellor') setCurrentView('counsellor-dashboard');
  };

  const handleViewPathway = (careerId: string) => {
    setSelectedPathwayId(careerId);
    setCurrentView('student-pathway');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Global Interactive Header */}
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />

      {/* Main Dynamic Viewport */}
      <main style={{ flex: 1 }}>
        {currentView === 'landing' && (
          <LandingPage 
            onStartDemo={handleStartDemo} 
            onExploreRole={handleExploreRole} 
          />
        )}

        {currentView === 'student-intake' && (
          <StudentIntakePage 
            onComplete={() => setCurrentView('student-chat')} 
          />
        )}

        {(currentView === 'student-chat' || currentView === 'student-dashboard') && (
          <StudentChatPage 
            onViewPathway={handleViewPathway}
            onOpenFamilyView={() => { setRole('parent'); setCurrentView('family-view'); }}
          />
        )}

        {currentView === 'student-pathway' && (
          <PathwayPage 
            careerId={selectedPathwayId}
            onBackToChat={() => setCurrentView('student-chat')}
            onOpenFamilyView={() => { setRole('parent'); setCurrentView('family-view'); }}
          />
        )}

        {currentView === 'family-view' && (
          <FamilyViewPage 
            onOpenConcernResolver={() => setCurrentView('family-concerns')}
            onViewPathway={handleViewPathway}
          />
        )}

        {currentView === 'family-concerns' && (
          <SmartConcernResolverPage 
            onBackToFamily={() => setCurrentView('family-view')}
          />
        )}

        {currentView === 'counsellor-dashboard' && (
          <CounsellorDashboardPage 
            onSelectStudent={() => { setRole('parent'); setCurrentView('family-view'); }}
          />
        )}
      </main>

      {/* Global Toast Alert */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          background: 'var(--primary)',
          color: 'var(--primary-text)',
          border: '1px solid var(--accent)',
          borderRadius: '10px',
          padding: '14px 20px',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          zIndex: 1000,
          fontSize: '0.9rem',
          fontWeight: 600
        }} className="animate-fade-in">
          <CheckCircle2 size={18} color="var(--accent)" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Editorial Footer in Beige & Ink Theme */}
      <footer style={{
        background: 'var(--primary)',
        color: '#C4B5A5',
        borderTop: '1px solid #3F332C',
        padding: '36px 0 24px 0',
        marginTop: 'auto',
        fontSize: '0.84rem'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', color: '#F5EFE6', fontSize: '1.2rem', fontWeight: 700, marginBottom: '4px' }}>
              SAARTHI
            </div>
            <div>
              {language === 'ta' 
                ? 'மாணவர்களுக்கான கூட்டு குடும்ப தொழில் வழிகாட்டுதல் தளம்' 
                : 'AI Career Guidance with Family & Counsellors-in-the-Loop'}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={16} color="var(--accent)" />
            <span>Audited with verified government college quotas and TNEA datasets</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
