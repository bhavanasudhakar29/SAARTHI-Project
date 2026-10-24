import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  ArrowRight, 
  CheckCircle, 
  Compass, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  Award,
  BookOpen,
  MapPin,
  HelpCircle,
  GraduationCap
} from 'lucide-react';

interface LandingPageProps {
  onStartDemo: () => void;
  onExploreRole: (role: 'student' | 'parent' | 'counsellor') => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStartDemo, onExploreRole }) => {
  const { language } = useApp();

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '80px' }}>
      {/* Hero Section with Warm Editorial Beige Aesthetic */}
      <section style={{
        padding: '70px 0 60px 0',
        borderBottom: '1px solid var(--border)',
        background: 'radial-gradient(ellipse at top, #FAF6EE 0%, #F5EFE6 70%)'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '880px' }}>
          {/* Top verified badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <span className="badge-verified">
              <ShieldCheck size={14} />
              {language === 'ta' 
                ? 'சரிபார்க்கப்பட்ட அரசு மற்றும் தொழில் தகவல் தளம்' 
                : 'Verified Career Data • Family Alignment • Counsellor-in-the-Loop'}
            </span>
          </div>

          <h1 style={{
            fontSize: '3rem',
            lineHeight: 1.15,
            color: 'var(--primary)',
            marginBottom: '20px',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700
          }}>
            {language === 'ta' ? (
              <>
                மாணவர்களின் எதிர்காலம், <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>குடும்பத்துடன்</span> இணைந்து தெளிவான வழிகாட்டல்.
              </>
            ) : (
              <>
                Empowering students to navigate careers <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>together with their families</span>.
              </>
            )}
          </h1>

          <p style={{
            fontSize: '1.2rem',
            color: 'var(--ink-soft)',
            lineHeight: 1.6,
            maxWidth: '720px',
            margin: '0 auto 36px auto'
          }}>
            {language === 'ta' 
              ? 'உள்ளூர் மொழியில், நம்பகமான அரசு கல்விக் கட்டண விபரங்கள் மற்றும் மனித கவுன்சிலர்களின் தொடர் துணையுடன் உருவாக்கப்பட்ட இந்தியாவின் முதல் கூட்டு வழிகாட்டி.'
              : 'Move past generic chatbot text. SAARTHI provides structured roadmaps built from verified colleges, costs, and placement data, turning career confusion into confident family decisions.'}
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button 
              onClick={onStartDemo} 
              className="btn-primary" 
              style={{ padding: '14px 28px', fontSize: '1.05rem', borderRadius: '10px' }}
            >
              <span>{language === 'ta' ? 'மாதிரி பதிவை துவங்குங்கள்' : 'Launch Interactive Demo'}</span>
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => onExploreRole('parent')} 
              className="btn-secondary" 
              style={{ padding: '14px 24px', fontSize: '1rem', borderRadius: '10px' }}
            >
              <Users size={18} color="var(--accent)" />
              <span>{language === 'ta' ? 'பெற்றோர் பார்வை' : 'Explore Family Decision View'}</span>
            </button>
          </div>

          {/* Trust Metrics Bar */}
          <div style={{
            marginTop: '50px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            padding: '20px',
            background: 'var(--surface-alt)',
            borderRadius: '16px',
            border: '1px solid var(--border)'
          }}>
            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--primary)', fontWeight: 700 }}>
                100%
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--ink-soft)' }}>
                {language === 'ta' ? 'அரசு அங்கீகாரம் பெற்ற தகவல்கள்' : 'Verified College & Fee Data'}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--accent)', fontWeight: 700 }}>
                3-Way
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--ink-soft)' }}>
                {language === 'ta' ? 'மாணவர் • பெற்றோர் • கவுன்சிலர்' : 'Student • Parent • Counsellor Link'}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--success)', fontWeight: 700 }}>
                Bilingual
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--ink-soft)' }}>
                {language === 'ta' ? 'ஆங்கிலம் & தமிழ் நேரடி மொழிபெயர்ப்பு' : 'English & Regional Languages'}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--primary)', fontWeight: 700 }}>
                Continuous
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--ink-soft)' }}>
                {language === 'ta' ? 'படிப்பு முடியும் வரை தொடர் ஆலோசனை' : 'Milestone Check-in Loop'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Core Moat Differentiators */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>
              {language === 'ta' ? 'சார்வதி தனித்துவமான மூன்று தூண்கள்' : 'Why SAARTHI is Not Just Another AI Wrapper'}
            </h2>
            <p style={{ color: 'var(--ink-soft)', maxWidth: '600px', margin: '0 auto' }}>
              {language === 'ta' 
                ? 'வெறும் சாட்போட் அல்லாமல், குடும்பங்களின் நடைமுறை சவால்களை தீர்க்கும் சிறப்பு வடிவமைப்பு.'
                : 'Designed specifically for the realities of Indian students, familial decision-making, and verified institutional datasets.'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {/* Differentiator 1 */}
            <div className="paper-card" style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'var(--surface)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                marginBottom: '20px'
              }}>
                <Compass size={24} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>
                {language === 'ta' ? '1. தொழில் பாதை வரைபடம்' : '1. Career Pathway Navigator'}
              </h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.6, flexGrow: 1, marginBottom: '16px' }}>
                {language === 'ta'
                  ? 'தேர்வு செய்வதுடன் நிற்காமல், 4 ஆண்டுகள் கட்டணம், தகுதிகள் மற்றும் வேலைவாய்ப்பு மைல்கற்களை கட்டம் கட்டமாக காட்டும் வரைபடம்.'
                  : 'Transforms vague recommendations into clear, chronological roadmaps with exact state quota fees, scholarships, and milestone checkpoints.'}
              </p>
              <div style={{ fontSize: '0.82rem', color: 'var(--accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span>Verified with AICTE & TNEA fee structures</span>
              </div>
            </div>

            {/* Differentiator 2 */}
            <div className="paper-card" style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'var(--surface)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                marginBottom: '20px'
              }}>
                <Users size={24} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>
                {language === 'ta' ? '2. குடும்ப சந்தேக தீர்வு தளம்' : '2. Smart Concern Resolver'}
              </h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.6, flexGrow: 1, marginBottom: '16px' }}>
                {language === 'ta'
                  ? 'பெற்றோர்களின் பொதுவான அச்சங்களான "அதிக செலவு ஆகுமா?", "உள்ளூரில் வேலை கிடைக்குமா?" என்பதற்கு ஆதாரபூர்வ புள்ளிவிவர விடை.'
                  : 'Provides instant, government-data-backed responses to common parent objections regarding affordability, regional jobs, and security.'}
              </p>
              <div style={{ fontSize: '0.82rem', color: 'var(--accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span>Data-backed reassurance for parents</span>
              </div>
            </div>

            {/* Differentiator 3 */}
            <div className="paper-card" style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'var(--surface)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--success)',
                marginBottom: '20px'
              }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>
                {language === 'ta' ? '3. மனித கவுன்சிலர் தொடர் இணைப்பு' : '3. Counsellor-in-the-Loop'}
              </h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.6, flexGrow: 1, marginBottom: '16px' }}>
                {language === 'ta'
                  ? 'ஏதேனும் சந்தேகம் தீராவிட்டால் அல்லது மாணவர் தயங்கினால், உடனடியாக மனித நிபுணரிடம் ஆலோசனை கேட்கும் வசதி.'
                  : 'Automated flags escalate stalled decisions or unresolved doubts to licensed human counsellors for personalized intervention.'}
              </p>
              <div style={{ fontSize: '0.82rem', color: 'var(--success)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span>Live human escalation & audit trail</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Picker for Quick Demo Navigation */}
      <section style={{
        padding: '50px 0',
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>
            {language === 'ta' ? 'டெமோ பரிசோதனை: எந்த பார்வையில் பார்க்க விரும்புகிறீர்கள்?' : 'Select a Persona to Test the Full Workflow'}
          </h2>
          <p style={{ color: 'var(--ink-soft)', marginBottom: '32px' }}>
            {language === 'ta' 
              ? 'கீழே உள்ள எந்த பொறுப்பிலும் ஒரே கிளிக்கில் நுழைந்து அனைத்து அம்சங்களையும் சோதிக்கலாம்.' 
              : 'Easily switch views anytime via the persistent navigation bar during your demonstration.'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '960px', margin: '0 auto' }}>
            {/* Student Role */}
            <div 
              onClick={() => onExploreRole('student')}
              style={{
                background: 'var(--surface-alt)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '24px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease'
              }}
              className="paper-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span className="badge-tag" style={{ background: '#E3EDE6', color: '#2B5738' }}>Step 1: Student</span>
                <GraduationCap size={22} color="var(--primary)" />
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '6px' }}>
                {language === 'ta' ? 'மாணவர் சுயவிவரம் & AI சாட்' : 'Student Intake & AI Chat'}
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--ink-soft)', marginBottom: '16px' }}>
                {language === 'ta' 
                  ? 'மதிப்பெண், பட்ஜெட் உள்ளீடு செய்து பொருத்தமான 3 துறைகளை கண்டறியுங்கள்.' 
                  : 'Enter marks, interests, budget, and explore top 3 verified career matches with match percentages.'}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)' }}>
                <span>Try Student View</span>
                <ArrowRight size={14} />
              </div>
            </div>

            {/* Parent Role */}
            <div 
              onClick={() => onExploreRole('parent')}
              style={{
                background: 'var(--surface-alt)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '24px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease'
              }}
              className="paper-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span className="badge-tag" style={{ background: '#FAF1E4', color: '#825424' }}>Step 2: Family</span>
                <Users size={22} color="var(--accent)" />
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '6px' }}>
                {language === 'ta' ? 'பெற்றோர் கலந்துரையாடல்' : 'Family View & Objections'}
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--ink-soft)', marginBottom: '16px' }}>
                {language === 'ta' 
                  ? 'தேர்வு செய்யப்பட்ட துறைகளை ஒப்பிட்டு சந்தேகங்களை அரசு புள்ளிவிவரங்களுடன் தீர்க்கவும்.' 
                  : 'Review shortlist with parent-friendly financial metrics, resolve doubts with verified evidence, and approve.'}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)' }}>
                <span>Try Family View</span>
                <ArrowRight size={14} />
              </div>
            </div>

            {/* Counsellor Role */}
            <div 
              onClick={() => onExploreRole('counsellor')}
              style={{
                background: 'var(--surface-alt)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '24px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease'
              }}
              className="paper-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span className="badge-tag" style={{ background: '#EAE5DF', color: '#3E342B' }}>Step 3: Counsellor</span>
                <ShieldCheck size={22} color="var(--primary)" />
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '6px' }}>
                {language === 'ta' ? 'கவுன்சிலர் கண்காணிப்பு' : 'Counsellor Desk & Analytics'}
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--ink-soft)', marginBottom: '16px' }}>
                {language === 'ta' 
                  ? 'மாணவர்களின் நிலையை கண்காணித்து, எழும் சந்தேகங்களுக்கு வழிகாட்டவும்.' 
                  : 'Track cohort check-ins, view student flags, resolve parental concerns, and analyze regional trends.'}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)' }}>
                <span>Try Counsellor View</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
