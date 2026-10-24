import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  HelpCircle, 
  ShieldCheck, 
  Check, 
  ArrowLeft, 
  AlertCircle, 
  MessageSquare,
  DollarSign,
  TrendingUp,
  MapPin,
  BookOpen
} from 'lucide-react';

interface ConcernResolverProps {
  onBackToFamily: () => void;
}

export const SmartConcernResolverPage: React.FC<ConcernResolverProps> = ({ onBackToFamily }) => {
  const { concerns, careers, student, language, showToast, createCounsellorFlag } = useApp();
  
  const [selectedConcernId, setSelectedConcernId] = useState<string>(concerns[0].id);
  const [selectedCareerId, setSelectedCareerId] = useState<string>(student.chosenCareerId || careers[0].id);
  const [resolvedStatus, setResolvedStatus] = useState<Record<string, boolean>>({});

  const activeConcern = concerns.find(c => c.id === selectedConcernId) || concerns[0];
  const activeCareer = careers.find(c => c.id === selectedCareerId) || careers[0];

  const handleMarkResolved = () => {
    setResolvedStatus(prev => ({ ...prev, [selectedConcernId]: true }));
    showToast(language === 'ta' ? 'சந்தேகம் தீர்க்கப்பட்டது என குறிக்கப்பட்டது!' : 'Objection marked as satisfactorily answered with verified evidence!');
  };

  const handleEscalateToCounsellor = () => {
    createCounsellorFlag(`Parent/Student still has doubts regarding: "${activeConcern.label}" for ${activeCareer.name}`);
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '30px 24px 80px 24px', maxWidth: '960px' }}>
      {/* Back button */}
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={onBackToFamily}
          className="btn-secondary"
          style={{ padding: '8px 16px', fontSize: '0.86rem' }}
        >
          <ArrowLeft size={16} />
          <span>{language === 'ta' ? 'குடும்ப பார்வைக்கு திரும்பு' : 'Back to Family Hub'}</span>
        </button>
      </div>

      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span className="badge-tag" style={{ background: '#FAF1E4', color: '#825424' }}>
            <HelpCircle size={14} />
            {language === 'ta' ? 'ஸ்மார்ட் சந்தேகம் தீர்வு முறைமை' : 'Smart Concern Resolver'}
          </span>
          <span className="badge-verified">
            <ShieldCheck size={13} />
            {language === 'ta' ? 'அரசு ஆவண ஆதாரங்களுடன்' : 'Evidence-Backed Responses'}
          </span>
        </div>
        <h1 style={{ fontSize: '2.2rem', color: 'var(--primary)', marginBottom: '8px' }}>
          {language === 'ta' ? 'பெற்றோர்களின் சந்தேகங்களுக்கு நேரடி பதில்கள்' : 'Data-Backed Answers to Family Objections'}
        </h1>
        <p style={{ color: 'var(--ink-soft)', fontSize: '0.96rem' }}>
          {language === 'ta'
            ? 'பொதுவான ஊகங்களுக்குப் பதிலாக, அதிகாரப்பூர்வ அரசாங்க கொள்கைகள் மற்றும் வேலைவாய்ப்பு அறிக்கைகளின் மூலம் தெளிவு பெறுங்கள்.'
            : 'Select any frequent hesitation or financial hurdle to inspect state fee caps, placement records, and government subsidies.'}
        </p>
      </div>

      {/* Career Context Dropdown */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        background: 'var(--surface-alt)',
        padding: '16px 20px',
        borderRadius: '12px',
        border: '1px solid var(--border)',
        marginBottom: '28px'
      }}>
        <label style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--ink)' }}>
          {language === 'ta' ? 'துறையை தேர்வு செய்க:' : 'Target Career:'}
        </label>
        <select
          value={selectedCareerId}
          onChange={e => setSelectedCareerId(e.target.value)}
          style={{
            padding: '8px 14px',
            borderRadius: '8px',
            border: '1px solid var(--border)',
            background: 'var(--surface-card)',
            color: 'var(--primary)',
            fontWeight: 600,
            fontSize: '0.92rem',
            fontFamily: 'var(--font-serif)'
          }}
        >
          {careers.map(c => (
            <option key={c.id} value={c.id}>
              {language === 'ta' ? c.nameTa : c.name}
            </option>
          ))}
        </select>
      </div>

      {/* Concern Selection Pills */}
      <div style={{ marginBottom: '28px' }}>
        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink-muted)', marginBottom: '10px' }}>
          {language === 'ta' ? 'எந்த சந்தேகம் உங்களுக்கு உள்ளது?' : 'Select Specific Concern / Hesitation:'}
        </label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {concerns.map(c => {
            const isSelected = c.id === selectedConcernId;
            const isResolved = resolvedStatus[c.id];

            return (
              <button
                key={c.id}
                onClick={() => setSelectedConcernId(c.id)}
                style={{
                  padding: '10px 18px',
                  borderRadius: '30px',
                  border: isSelected ? '2px solid var(--accent)' : '1px solid var(--border)',
                  background: isSelected ? 'var(--primary)' : 'var(--surface-alt)',
                  color: isSelected ? 'var(--primary-text)' : 'var(--ink)',
                  fontSize: '0.88rem',
                  fontWeight: isSelected ? 600 : 500,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: isSelected ? 'var(--shadow-sm)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                {isResolved && <Check size={14} color="#5FA27A" />}
                <span>{language === 'ta' ? c.labelTa : c.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Evidence & Answer Card */}
      <div className="paper-card" style={{ padding: '36px 32px', marginBottom: '32px', background: '#FFFFFF' }}>
        {/* Title */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '16px' }}>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Official Clarification
            </span>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginTop: '4px' }}>
              {language === 'ta' ? activeConcern.answerTitleTa : activeConcern.answerTitle}
            </h2>
          </div>

          {/* Stats Highlight Badge */}
          <div style={{
            background: 'var(--success-bg)',
            border: '1px solid rgba(61,106,82,0.25)',
            borderRadius: '12px',
            padding: '12px 18px',
            maxWidth: '320px',
            textAlign: 'right'
          }}>
            <div style={{ fontSize: '0.74rem', color: 'var(--success)', fontWeight: 700, textTransform: 'uppercase' }}>
              Key Verification Metric
            </div>
            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--success)', marginTop: '4px' }}>
              {activeConcern.statsHighlight}
            </div>
          </div>
        </div>

        {/* Evidence Points */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
          {(language === 'ta' ? activeConcern.evidencePointsTa : activeConcern.evidencePoints).map((point, idx) => (
            <div 
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                background: 'var(--surface-alt)',
                padding: '14px 18px',
                borderRadius: '10px',
                border: '1px solid var(--border-light)'
              }}
            >
              <div style={{
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                background: 'var(--surface)',
                color: 'var(--accent-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.78rem',
                fontWeight: 700,
                flexShrink: 0,
                marginTop: '2px'
              }}>
                {idx + 1}
              </div>
              <p style={{ fontSize: '0.93rem', lineHeight: 1.55, color: 'var(--ink)' }}>
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Source citation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          paddingTop: '18px',
          borderTop: '1px solid var(--border)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--ink-soft)' }}>
            <ShieldCheck size={16} color="var(--success)" />
            <span>Documented & Audited By: <strong>{activeConcern.sourceAttribution}</strong></span>
          </div>

          {activeConcern.financialAidAvailable && (
            <span className="badge-tag" style={{ background: 'var(--surface)' }}>
              Scheme: {activeConcern.financialAidAvailable}
            </span>
          )}
        </div>
      </div>

      {/* Resolution Actions */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        background: 'var(--surface-alt)',
        padding: '20px 24px',
        borderRadius: '14px',
        border: '1px solid var(--border)'
      }}>
        <div>
          <div style={{ fontWeight: 600, fontSize: '0.94rem', color: 'var(--ink)' }}>
            {language === 'ta' ? 'இந்த தகவல் உங்கள் சந்தேகத்தை தெளிவுபடுத்தியதா?' : 'Does this verified data resolve your family’s objection?'}
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--ink-soft)' }}>
            {language === 'ta' ? 'இல்லை எனில் எங்கள் மனித கவுன்சிலரிடம் ஆலோசிக்கலாம்' : 'If you still require tailored guidance, one click alerts your dedicated counsellor.'}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={handleMarkResolved}
            className="btn-primary"
            style={{ background: 'var(--success)', borderColor: 'var(--success)', padding: '10px 18px', fontSize: '0.88rem' }}
          >
            <Check size={16} />
            <span>{language === 'ta' ? 'ஆம், பயனுள்ளதாக இருந்தது' : 'This Helped • Mark Resolved'}</span>
          </button>

          <button 
            onClick={handleEscalateToCounsellor}
            className="btn-secondary"
            style={{ padding: '10px 18px', fontSize: '0.88rem', borderColor: 'var(--border)' }}
          >
            <AlertCircle size={16} color="var(--accent)" />
            <span>{language === 'ta' ? 'இன்னும் சந்தேகம் உள்ளது (கவுன்சிலர்)' : 'I Still Have Doubts (Ask Counsellor)'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
