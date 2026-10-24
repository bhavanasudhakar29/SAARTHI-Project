import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Users, 
  HelpCircle, 
  CheckCircle, 
  MessageSquare, 
  ShieldCheck, 
  ArrowRight, 
  DollarSign, 
  Clock, 
  Award,
  AlertTriangle
} from 'lucide-react';

interface FamilyViewProps {
  onOpenConcernResolver: () => void;
  onViewPathway: (careerId: string) => void;
}

export const FamilyViewPage: React.FC<FamilyViewProps> = ({ onOpenConcernResolver, onViewPathway }) => {
  const { careers, student, language, addFamilyComment, approveFamilyPath } = useApp();
  const [commentText, setCommentText] = useState('');

  const shortlistedCareers = careers.filter(c => student.shortlistedCareerIds.includes(c.id));
  const activeCareers = shortlistedCareers.length > 0 ? shortlistedCareers : careers.slice(0, 2);

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      addFamilyComment(commentText);
      setCommentText('');
    }
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '30px 24px 80px 24px', maxWidth: '1060px' }}>
      {/* Top Family Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        marginBottom: '28px',
        padding: '24px 28px',
        background: 'var(--surface-alt)',
        border: '1px solid var(--border)',
        borderRadius: '16px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <span className="badge-tag" style={{ background: '#FAF1E4', color: '#825424' }}>
              <Users size={14} />
              {language === 'ta' ? 'குடும்ப கூட்டு முடிவெடுக்கும் தளம்' : 'Family Collaborative Decision Hub'}
            </span>
            <span style={{
              background: student.familyApprovalStatus === 'Approved' ? 'var(--success-bg)' : 'var(--warning-bg)',
              color: student.familyApprovalStatus === 'Approved' ? 'var(--success)' : 'var(--warning)',
              border: '1px solid currentColor',
              padding: '2px 10px',
              borderRadius: '20px',
              fontSize: '0.78rem',
              fontWeight: 700
            }}>
              {student.familyApprovalStatus === 'Approved' 
                ? (language === 'ta' ? 'குடும்ப ஒப்புதல் அளிக்கப்பட்டது' : 'Family Approved') 
                : (language === 'ta' ? 'மறுஆய்வில் உள்ளது' : 'Pending Family Consensus')}
            </span>
          </div>

          <h1 style={{ fontSize: '2.1rem', color: 'var(--primary)', marginBottom: '6px' }}>
            {language === 'ta' ? `${student.name}-ன் தொழில் விருப்ப பட்டியல்` : `${student.name}'s Family Review Shortlist`}
          </h1>
          <p style={{ color: 'var(--ink-soft)', fontSize: '0.94rem' }}>
            {language === 'ta'
              ? 'பெற்றோர்கள் எளிதில் புரிந்துகொள்ளும் வகையில் செலவு, அரசு இட ஒதுக்கீடு, வேலை பாதுகாப்பு ஒப்பீடு.'
              : 'Transparent comparison of tuition costs, government quotas, and verified post-degree placement safety.'}
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={onOpenConcernResolver}
            className="btn-primary"
            style={{ padding: '10px 18px', fontSize: '0.9rem', background: 'var(--accent)', borderColor: 'var(--accent)' }}
          >
            <HelpCircle size={16} />
            <span>{language === 'ta' ? 'சந்தேகங்களை தீர்க்க' : 'I Have a Concern'}</span>
          </button>

          {student.familyApprovalStatus !== 'Approved' && (
            <button 
              onClick={approveFamilyPath}
              className="btn-primary"
              style={{ padding: '10px 18px', fontSize: '0.9rem', background: 'var(--success)', borderColor: 'var(--success)' }}
            >
              <CheckCircle size={16} />
              <span>{language === 'ta' ? 'வழியை அங்கீகரிக்கவும்' : 'Approve This Path'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Comparison Table for Family Decision */}
      <div className="paper-card" style={{ padding: '24px 28px', marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>
          {language === 'ta' ? 'நேரடி ஒப்பீட்டு அட்டவணை' : 'Side-by-Side Family Comparison Matrix'}
        </h2>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border)', background: 'var(--surface)' }}>
                <th style={{ padding: '12px 16px', color: 'var(--ink)', fontWeight: 600 }}>Decision Dimension</th>
                {activeCareers.map(career => (
                  <th key={career.id} style={{ padding: '12px 16px', color: 'var(--primary)', fontWeight: 700, fontFamily: 'var(--font-serif)', fontSize: '1.05rem' }}>
                    {language === 'ta' ? career.nameTa : career.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Row 1: Match Score */}
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--ink-soft)' }}>
                  {language === 'ta' ? 'பொருத்தம் & கட்-ஆஃப் சாத்தியம்' : 'Aptitude & Cutoff Fit'}
                </td>
                {activeCareers.map(c => (
                  <td key={c.id} style={{ padding: '14px 16px' }}>
                    <span style={{ fontWeight: 700, color: 'var(--success)', fontSize: '1rem' }}>{c.matchScore}%</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)', display: 'block' }}>Based on quantitative score</span>
                  </td>
                ))}
              </tr>

              {/* Row 2: Total 4-Year Tuition */}
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--ink-soft)' }}>
                  {language === 'ta' ? 'அரசு ஒதுக்கீட்டு மொத்த கட்டணம்' : 'Total 4-Yr Degree Cost (Govt Quota)'}
                </td>
                {activeCareers.map(c => (
                  <td key={c.id} style={{ padding: '14px 16px' }}>
                    <strong style={{ color: 'var(--primary)' }}>{c.estimatedCost.split('(')[0]}</strong>
                    <div style={{ fontSize: '0.76rem', color: 'var(--success)', marginTop: '2px' }}>
                      100% Post-Matric Waiver Eligible
                    </div>
                  </td>
                ))}
              </tr>

              {/* Row 3: Placement Starting CTC */}
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--ink-soft)' }}>
                  {language === 'ta' ? 'ஆரம்ப மாத ஊதிய எதிர்பார்ப்பு' : 'Expected Starting Salary Range'}
                </td>
                {activeCareers.map(c => (
                  <td key={c.id} style={{ padding: '14px 16px' }}>
                    <strong style={{ color: 'var(--accent-dark)' }}>{c.avgSalaryRange}</strong>
                    <div style={{ fontSize: '0.76rem', color: 'var(--ink-muted)' }}>
                      Verified via campus placement audits
                    </div>
                  </td>
                ))}
              </tr>

              {/* Row 4: Regional Hubs */}
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--ink-soft)' }}>
                  {language === 'ta' ? 'உள்ளூர் வேலைவாய்ப்பு பகுதிகள்' : 'Regional Proximity / Tier-2 IT Parks'}
                </td>
                {activeCareers.map(c => (
                  <td key={c.id} style={{ padding: '14px 16px', color: 'var(--ink)' }}>
                    <span>Coimbatore, Salem, Chennai, Trichy</span>
                  </td>
                ))}
              </tr>

              {/* Actions row */}
              <tr>
                <td style={{ padding: '16px' }}></td>
                {activeCareers.map(c => (
                  <td key={c.id} style={{ padding: '16px' }}>
                    <button 
                      onClick={() => onViewPathway(c.id)}
                      className="btn-secondary"
                      style={{ padding: '6px 14px', fontSize: '0.82rem' }}
                    >
                      <span>{language === 'ta' ? 'வரைபடத்தை காண்க' : 'View Full Roadmap'}</span>
                      <ArrowRight size={14} />
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Family Discussion & Comments Thread */}
      <div className="paper-card" style={{ padding: '28px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
          <MessageSquare size={20} color="var(--primary)" />
          <h2 style={{ fontSize: '1.35rem' }}>
            {language === 'ta' ? 'குடும்ப மற்றும் கவுன்சிலர் உரையாடல்' : 'Family & Counsellor Dialogue Log'}
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
          {student.familyComments.map((comment, idx) => (
            <div 
              key={idx}
              style={{
                background: 'var(--surface-alt)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '14px 18px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontWeight: 700, fontSize: '0.86rem', color: 'var(--primary)' }}>
                  {comment.author}
                </span>
                <span style={{ fontSize: '0.76rem', color: 'var(--ink-muted)' }}>
                  {comment.date}
                </span>
              </div>
              <p style={{ color: 'var(--ink)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                {comment.text}
              </p>
            </div>
          ))}
        </div>

        {/* Add comment box */}
        <form onSubmit={handlePostComment} style={{ display: 'flex', gap: '10px' }}>
          <input 
            type="text"
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
            placeholder={language === 'ta' ? 'பெற்றோர் அல்லது மாணவர் கருத்தை இங்கே பதிவு செய்யுங்கள்...' : 'Add a note or question for the counsellor and family...'}
            style={{
              flex: 1,
              padding: '12px 14px',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              background: 'var(--surface-alt)',
              fontSize: '0.92rem',
              color: 'var(--ink)'
            }}
          />
          <button type="submit" className="btn-primary" style={{ padding: '10px 20px' }}>
            <span>{language === 'ta' ? 'பதிவு செய்' : 'Add Note'}</span>
          </button>
        </form>
      </div>
    </div>
  );
};
