import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Circle, 
  Share2, 
  Download, 
  DollarSign, 
  Clock, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';

interface PathwayPageProps {
  careerId: string;
  onBackToChat: () => void;
  onOpenFamilyView: () => void;
}

export const PathwayPage: React.FC<PathwayPageProps> = ({ careerId, onBackToChat, onOpenFamilyView }) => {
  const { careers, pathways, togglePathwayStep, language, student } = useApp();

  const career = careers.find(c => c.id === careerId) || careers[0];
  const steps = pathways[career.id] || pathways['data-scientist'] || [];

  const completedStepsCount = steps.filter(s => s.isCompleted).length;
  const progressPercent = Math.round((completedStepsCount / steps.length) * 100);

  return (
    <div className="container animate-fade-in" style={{ padding: '30px 24px 80px 24px', maxWidth: '1000px' }}>
      {/* Top Navigation & Actions */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <button 
          onClick={onBackToChat}
          className="btn-secondary"
          style={{ padding: '8px 16px', fontSize: '0.86rem' }}
        >
          <ArrowLeft size={16} />
          <span>{language === 'ta' ? 'சாட்க்கு திரும்பு' : 'Back to AI Chat'}</span>
        </button>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={onOpenFamilyView}
            className="btn-primary"
            style={{ padding: '8px 16px', fontSize: '0.86rem' }}
          >
            <Share2 size={16} />
            <span>{language === 'ta' ? 'குடும்பத்துடன் பகிருங்கள்' : 'Share with Family'}</span>
          </button>
        </div>
      </div>

      {/* Career Overview Banner */}
      <div className="paper-card" style={{ padding: '28px 32px', marginBottom: '32px', background: 'var(--surface-alt)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <span className="badge-verified">
                <ShieldCheck size={14} />
                {language === 'ta' ? 'சரிபார்க்கப்பட்ட பாதை வரைபடம்' : 'Verified Career Pathway'}
              </span>
              <span className="badge-tag">{language === 'ta' ? career.categoryTa : career.category}</span>
            </div>
            <h1 style={{ fontSize: '2.2rem', color: 'var(--primary)', marginBottom: '8px' }}>
              {language === 'ta' ? career.nameTa : career.name}
            </h1>
            <p style={{ color: 'var(--ink-soft)', maxWidth: '680px', fontSize: '0.98rem' }}>
              {language === 'ta' ? career.taglineTa : career.tagline}
            </p>
          </div>

          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '16px 20px',
            textAlign: 'right'
          }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>
              {language === 'ta' ? 'ஒட்டுமொத்த பொருத்தம்' : 'Match Score'}
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--success)', fontFamily: 'var(--font-serif)' }}>
              {career.matchScore}%
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--ink-soft)' }}>
              Top Match in Tamil Nadu
            </div>
          </div>
        </div>

        {/* Pathway Metrics Dashboard */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          paddingTop: '20px',
          borderTop: '1px solid var(--border)'
        }}>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--ink-muted)' }}>
              {language === 'ta' ? 'கால அளவு' : 'Duration'}
            </div>
            <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--ink)' }}>
              {career.durationYears}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--ink-muted)' }}>
              {language === 'ta' ? 'மதிப்பிடப்பட்ட மொத்த கட்டணம்' : 'Est. Govt Quota Cost'}
            </div>
            <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--primary)' }}>
              {career.estimatedCost.split('(')[0]}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--ink-muted)' }}>
              {language === 'ta' ? 'ஆரம்ப வருவாய் எதிர்பார்ப்பு' : 'Expected Starting CTC'}
            </div>
            <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--accent-dark)' }}>
              {career.avgSalaryRange.split('/')[0]}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--ink-muted)' }}>
              {language === 'ta' ? 'மைல்கல் முன்னேற்றம்' : 'Milestone Progress'}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
              <div style={{ flex: 1, height: '8px', background: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${progressPercent}%`, height: '100%', background: 'var(--success)' }} />
              </div>
              <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>{progressPercent}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step-by-Step Chronological Timeline */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
          {language === 'ta' ? 'காலவரிசைப்படி 4 ஆண்டு மைல்கற்கள்' : 'Chronological 4-Year Milestone Roadmap'}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {steps.map(step => (
            <div 
              key={step.id}
              className="paper-card"
              style={{
                padding: '24px',
                background: step.isCompleted ? '#FAFBF9' : '#FFFFFF',
                borderLeft: step.isCompleted ? '4px solid var(--success)' : '4px solid var(--border)',
                borderRadius: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button 
                    onClick={() => togglePathwayStep(career.id, step.id)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      color: step.isCompleted ? 'var(--success)' : 'var(--ink-muted)'
                    }}
                    title="Click to toggle completed status"
                  >
                    {step.isCompleted ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                  </button>
                  <div>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Stage {step.stepNumber} • {step.stage}
                    </span>
                    <h3 style={{ fontSize: '1.2rem', marginTop: '2px', color: 'var(--primary)' }}>
                      {language === 'ta' ? step.titleTa : step.title}
                    </h3>
                  </div>
                </div>

                {/* Duration & Cost Tag */}
                <div style={{ display: 'flex', gap: '10px' }}>
                  <span className="badge-tag" style={{ background: 'var(--surface)' }}>
                    <Clock size={12} />
                    <span>{step.duration}</span>
                  </span>
                  <span className="badge-tag" style={{ background: 'var(--surface)' }}>
                    <DollarSign size={12} />
                    <span>{step.costRange}</span>
                  </span>
                </div>
              </div>

              <p style={{ color: 'var(--ink-soft)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '16px', paddingLeft: '36px' }}>
                {language === 'ta' ? step.descriptionTa : step.description}
              </p>

              {/* Milestones checklist */}
              <div style={{ paddingLeft: '36px', marginBottom: '16px' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--ink-muted)', marginBottom: '8px' }}>
                  Actionable Milestones for this stage:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {(language === 'ta' ? step.milestonesTa : step.milestones).map((m, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--ink)' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }} />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Source Citation */}
              <div style={{
                paddingLeft: '36px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.76rem',
                color: 'var(--ink-muted)'
              }}>
                <ShieldCheck size={13} color="var(--success)" />
                <span>Verified Source: <strong>{step.verifiedSource}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
