import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Compass, 
  Users, 
  GraduationCap, 
  Languages, 
  ShieldCheck, 
  BellRing,
  ArrowRight
} from 'lucide-react';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setCurrentView }) => {
  const { role, setRole, language, setLanguage, student } = useApp();

  const unresolvedFlags = student.activeFlags.filter(f => !f.resolved).length;

  return (
    <header style={{
      backgroundColor: 'var(--primary)',
      color: 'var(--primary-text)',
      borderBottom: '1px solid #3F332C',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      boxShadow: '0 4px 20px rgba(27, 21, 17, 0.25)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '68px'
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => setCurrentView('landing')}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #A8743F 0%, #EADFCB 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#1F1A17',
            fontWeight: 800,
            fontSize: '1.25rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
          }}>
            S
          </div>
          <div>
            <div style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: '1.45rem', 
              fontWeight: 700, 
              letterSpacing: '0.04em',
              lineHeight: 1.1,
              color: '#F5EFE6'
            }}>
              SAARTHI
            </div>
            <div style={{ fontSize: '0.72rem', color: '#B8A89A', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {language === 'ta' ? 'குடும்ப வழிகாட்டி' : 'Career Navigator with Family'}
            </div>
          </div>
        </div>

        {/* Center Navigation Shortcuts */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button 
            onClick={() => setCurrentView('landing')}
            style={{
              background: currentView === 'landing' ? 'rgba(245, 239, 230, 0.12)' : 'transparent',
              color: currentView === 'landing' ? '#F5EFE6' : '#C4B5A5',
              border: 'none',
              padding: '6px 14px',
              borderRadius: '6px',
              fontSize: '0.88rem',
              fontWeight: 500,
              cursor: 'pointer'
            }}
          >
            {language === 'ta' ? 'முகப்பு' : 'Overview'}
          </button>
          <button 
            onClick={() => { setRole('student'); setCurrentView('student-dashboard'); }}
            style={{
              background: role === 'student' && currentView.startsWith('student') ? 'rgba(168, 116, 63, 0.25)' : 'transparent',
              color: role === 'student' && currentView.startsWith('student') ? '#F5EFE6' : '#C4B5A5',
              border: role === 'student' && currentView.startsWith('student') ? '1px solid rgba(168, 116, 63, 0.5)' : 'none',
              padding: '6px 14px',
              borderRadius: '6px',
              fontSize: '0.88rem',
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <GraduationCap size={15} />
            {language === 'ta' ? 'மாணவர் பார்வை' : 'Student Hub'}
          </button>
          <button 
            onClick={() => { setRole('parent'); setCurrentView('family-view'); }}
            style={{
              background: role === 'parent' && currentView.startsWith('family') ? 'rgba(168, 116, 63, 0.25)' : 'transparent',
              color: role === 'parent' && currentView.startsWith('family') ? '#F5EFE6' : '#C4B5A5',
              border: role === 'parent' && currentView.startsWith('family') ? '1px solid rgba(168, 116, 63, 0.5)' : 'none',
              padding: '6px 14px',
              borderRadius: '6px',
              fontSize: '0.88rem',
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Users size={15} />
            {language === 'ta' ? 'குடும்ப முடிவுகள்' : 'Family View'}
          </button>
          <button 
            onClick={() => { setRole('counsellor'); setCurrentView('counsellor-dashboard'); }}
            style={{
              background: role === 'counsellor' ? 'rgba(168, 116, 63, 0.25)' : 'transparent',
              color: role === 'counsellor' ? '#F5EFE6' : '#C4B5A5',
              border: role === 'counsellor' ? '1px solid rgba(168, 116, 63, 0.5)' : 'none',
              padding: '6px 14px',
              borderRadius: '6px',
              fontSize: '0.88rem',
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              position: 'relative'
            }}
          >
            <ShieldCheck size={15} />
            {language === 'ta' ? 'கவுன்சிலர் தளம்' : 'Counsellor Desk'}
            {unresolvedFlags > 0 && (
              <span style={{
                background: 'var(--danger)',
                color: '#FFF',
                fontSize: '0.7rem',
                borderRadius: '10px',
                padding: '1px 6px',
                fontWeight: 700
              }}>
                {unresolvedFlags}
              </span>
            )}
          </button>
        </nav>

        {/* Global Controls: Language & Demo Role Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: '#3A2E26',
              border: '1px solid #57463B',
              color: '#F5EFE6',
              padding: '6px 12px',
              borderRadius: '6px',
              fontSize: '0.82rem',
              cursor: 'pointer',
              fontWeight: 600
            }}
            title="Toggle between English and Tamil"
          >
            <Languages size={15} color="#A8743F" />
            <span>{language === 'en' ? 'தமிழ்' : 'English'}</span>
          </button>

          {/* Demo Persona Indicator Pill */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: '#1D1714',
            border: '1px solid #43352B',
            padding: '4px 10px 4px 6px',
            borderRadius: '24px'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: role === 'student' ? '#5FA27A' : role === 'parent' ? '#A8743F' : '#D18742'
            }} />
            <span style={{ fontSize: '0.78rem', color: '#EADFCB', fontWeight: 600 }}>
              {role.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
