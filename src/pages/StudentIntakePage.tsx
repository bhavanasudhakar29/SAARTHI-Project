import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Sparkles, 
  GraduationCap, 
  MapPin, 
  DollarSign, 
  BookOpen,
  Languages
} from 'lucide-react';

interface StudentIntakeProps {
  onComplete: () => void;
}

export const StudentIntakePage: React.FC<StudentIntakeProps> = ({ onComplete }) => {
  const { student, updateStudentIntake, language } = useApp();
  const [step, setStep] = useState<number>(1);

  // Form local state initialized with current student values
  const [formData, setFormData] = useState({
    name: student.name,
    classGrade: student.classGrade,
    location: student.location,
    stream: student.stream,
    marksScore: student.marksScore,
    budgetCap: student.budgetCap,
    interests: student.interests
  });

  const availableInterests = [
    'Coding & Computers',
    'Maths & Puzzles',
    'Agriculture & Biology',
    'Healthcare & Medical Devices',
    'Problem Solving',
    'Design & Creative',
    'Business & Commerce',
    'Electronics & IoT'
  ];

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => {
      const exists = prev.interests.includes(interest);
      const updated = exists 
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests: updated };
    });
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      updateStudentIntake(formData);
      onComplete();
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 24px 80px 24px', maxWidth: '780px' }}>
      {/* Stepper Header */}
      <div style={{ marginBottom: '36px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {language === 'ta' ? `படிநிலை ${step} / 4` : `Step ${step} of 4: Career Intake`}
          </span>
          <span style={{ fontSize: '0.82rem', color: 'var(--ink-soft)' }}>
            {step === 1 && (language === 'ta' ? 'அடிப்படை விவரங்கள்' : 'Student & Location Profile')}
            {step === 2 && (language === 'ta' ? 'கல்வி & மதிப்பெண்கள்' : 'Academic Stream & Marks')}
            {step === 3 && (language === 'ta' ? 'ஆர்வங்கள் & குடும்ப பட்ஜெட்' : 'Interests & Family Budget')}
            {step === 4 && (language === 'ta' ? 'மொழி & இறுதி சரிபார்ப்பு' : 'Language & Verification')}
          </span>
        </div>

        {/* Progress Bar */}
        <div style={{ width: '100%', height: '6px', background: 'var(--surface)', borderRadius: '3px', overflow: 'hidden' }}>
          <div style={{
            width: `${(step / 4) * 100}%`,
            height: '100%',
            background: 'var(--accent)',
            transition: 'width 0.3s ease'
          }} />
        </div>
      </div>

      {/* Intake Card Box */}
      <div className="paper-card" style={{ padding: '36px 32px' }}>
        {step === 1 && (
          <div className="animate-fade-in">
            <h2 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>
              {language === 'ta' ? 'உங்களைப் பற்றி அறிந்து கொள்வோம்' : 'Tell Us About Yourself'}
            </h2>
            <p style={{ color: 'var(--ink-soft)', marginBottom: '28px', fontSize: '0.92rem' }}>
              {language === 'ta'
                ? 'உங்கள் பெயர் மற்றும் இருப்பிடம் அடிப்படையில் அருகிலுள்ள சிறந்த கல்லூரிகள் பரிந்துரைக்கப்படும்.'
                : 'Basic profile details help match government college quotas and regional proximity.'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px', color: 'var(--ink)' }}>
                  {language === 'ta' ? 'மாணவர் பெயர்' : 'Full Name'}
                </label>
                <input 
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    background: 'var(--surface-alt)',
                    fontSize: '0.95rem',
                    color: 'var(--ink)'
                  }}
                  placeholder="e.g. Ananya S."
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px', color: 'var(--ink)' }}>
                  {language === 'ta' ? 'தற்போதைய வகுப்பு' : 'Current Class / Level'}
                </label>
                <input 
                  type="text"
                  value={formData.classGrade}
                  onChange={e => setFormData({ ...formData, classGrade: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    background: 'var(--surface-alt)',
                    fontSize: '0.95rem',
                    color: 'var(--ink)'
                  }}
                  placeholder="e.g. 12th Grade (State Board)"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px', color: 'var(--ink)' }}>
                  {language === 'ta' ? 'மாவட்டம் / இருப்பிடம்' : 'District & State'}
                </label>
                <input 
                  type="text"
                  value={formData.location}
                  onChange={e => setFormData({ ...formData, location: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    background: 'var(--surface-alt)',
                    fontSize: '0.95rem',
                    color: 'var(--ink)'
                  }}
                  placeholder="e.g. Salem / Coimbatore Region, TN"
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in">
            <h2 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>
              {language === 'ta' ? 'கல்வி மற்றும் மதிப்பெண் விபரங்கள்' : 'Academic Stream & Marks'}
            </h2>
            <p style={{ color: 'var(--ink-soft)', marginBottom: '28px', fontSize: '0.92rem' }}>
              {language === 'ta'
                ? 'உங்கள் பாடப்பிரிவு மற்றும் மதிப்பெண் அடிப்படையில் அரசு இட ஒதுக்கீடு தகுதி கணக்கிடப்படும்.'
                : 'Exact performance enables accurate cut-off prediction for subsidized engineering and degree seats.'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px', color: 'var(--ink)' }}>
                  {language === 'ta' ? 'பாடப்பிரிவு' : 'Academic Stream'}
                </label>
                <select
                  value={formData.stream}
                  onChange={e => setFormData({ ...formData, stream: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    background: 'var(--surface-alt)',
                    fontSize: '0.95rem',
                    color: 'var(--ink)'
                  }}
                >
                  <option value="Computer Science & Maths">Computer Science & Maths</option>
                  <option value="Biology & Maths (Pure Science)">Biology & Maths (Pure Science)</option>
                  <option value="Commerce & Accountancy">Commerce & Accountancy</option>
                  <option value="Arts & Humanities">Arts & Humanities</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px', color: 'var(--ink)' }}>
                  {language === 'ta' ? 'எதிர்பார்க்கப்படும் மதிப்பெண் சதவீதம்' : 'Overall Expected Percentage / Cut-off'}
                </label>
                <input 
                  type="text"
                  value={formData.marksScore}
                  onChange={e => setFormData({ ...formData, marksScore: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    background: 'var(--surface-alt)',
                    fontSize: '0.95rem',
                    color: 'var(--ink)'
                  }}
                  placeholder="e.g. 87.4% or 178 Cut-off"
                />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in">
            <h2 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>
              {language === 'ta' ? 'உங்கள் ஆர்வங்கள் & குடும்ப பட்ஜெட்' : 'Interests & Family Budget'}
            </h2>
            <p style={{ color: 'var(--ink-soft)', marginBottom: '24px', fontSize: '0.92rem' }}>
              {language === 'ta'
                ? 'உங்கள் குடும்பத்திற்கு சுமையின்றி இருக்கக்கூடிய அதிகபட்ச கல்விச் செலவை தேர்வு செய்யவும்.'
                : 'Select areas you enjoy and your family’s target budget ceiling for the full degree.'}
            </p>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '10px', color: 'var(--ink)' }}>
                {language === 'ta' ? 'விருப்பமான துறைகள் (பலவற்றை தேர்வு செய்யலாம்)' : 'Key Interest Areas (Select all that fit)'}
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {availableInterests.map(interest => {
                  const selected = formData.interests.includes(interest);
                  return (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => handleInterestToggle(interest)}
                      style={{
                        padding: '8px 14px',
                        borderRadius: '20px',
                        border: selected ? '1px solid var(--accent)' : '1px solid var(--border)',
                        background: selected ? 'var(--accent-light)' : 'var(--surface-alt)',
                        color: selected ? 'var(--accent-dark)' : 'var(--ink-soft)',
                        fontWeight: selected ? 600 : 400,
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      {selected && <Check size={14} color="var(--accent)" />}
                      <span>{interest}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px', color: 'var(--ink)' }}>
                {language === 'ta' ? 'முழு படிப்புக்கான அதிகபட்ச குடும்ப பட்ஜெட்' : 'Total 4-Year Budget Cap'}
              </label>
              <select
                value={formData.budgetCap}
                onChange={e => setFormData({ ...formData, budgetCap: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  background: 'var(--surface-alt)',
                  fontSize: '0.95rem',
                  color: 'var(--ink)'
                }}
              >
                <option value="₹1.5 Lakhs / Total Degree Budget">Under ₹1.5 Lakhs (Full Govt Subsidy Target)</option>
                <option value="₹2.5 Lakhs / Total Degree Budget">₹1.5L – ₹2.5 Lakhs (Govt Quota in Aided Colls)</option>
                <option value="₹5.0 Lakhs / Total Degree Budget">₹2.5L – ₹5.0 Lakhs (Affordable Tier-2 Private)</option>
                <option value="Flexible with Educational Loan">Flexible (Supported by Zero-Collateral CSIS Loan)</option>
              </select>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-fade-in">
            <h2 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>
              {language === 'ta' ? 'அனைத்தும் தயாராக உள்ளது!' : 'Ready for Verified Matching'}
            </h2>
            <p style={{ color: 'var(--ink-soft)', marginBottom: '24px', fontSize: '0.92rem' }}>
              {language === 'ta'
                ? 'உங்கள் சுயவிவரம் அரசு தரவுத்தளத்துடன் ஒப்பிடப்பட்டு 3 சிறந்த துறைகள் பரிந்துரைக்கப்படும்.'
                : 'We will now compute the top 3 verified matches based on your quantitative cutoff, budget, and local industry hubs.'}
            </p>

            <div style={{
              background: 'var(--surface)',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid var(--border)',
              marginBottom: '24px'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', fontSize: '0.88rem' }}>
                <div>
                  <span style={{ color: 'var(--ink-muted)', display: 'block' }}>Student:</span>
                  <strong>{formData.name}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--ink-muted)', display: 'block' }}>Location:</span>
                  <strong>{formData.location}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--ink-muted)', display: 'block' }}>Stream & Marks:</span>
                  <strong>{formData.stream} ({formData.marksScore})</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--ink-muted)', display: 'block' }}>Budget Ceiling:</span>
                  <strong>{formData.budgetCap}</strong>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--success)', fontSize: '0.88rem', fontWeight: 600 }}>
              <Check size={18} />
              <span>Verified alignment algorithm ready • 0 LLM hallucinations</span>
            </div>
          </div>
        )}

        {/* Form Action Buttons */}
        <div style={{
          marginTop: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--border)',
          paddingTop: '20px'
        }}>
          {step > 1 ? (
            <button 
              type="button"
              onClick={handleBack} 
              className="btn-secondary"
            >
              <ArrowLeft size={16} />
              <span>{language === 'ta' ? 'முந்தைய படி' : 'Back'}</span>
            </button>
          ) : <div />}

          <button 
            type="button"
            onClick={handleNext} 
            className="btn-primary"
          >
            <span>{step === 4 ? (language === 'ta' ? 'பரிந்துரைகளை காண்க' : 'Compute Career Matches') : (language === 'ta' ? 'அடுத்த படி' : 'Next Step')}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
