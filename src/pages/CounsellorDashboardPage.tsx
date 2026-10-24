import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Users, 
  TrendingUp, 
  Clock, 
  FileText, 
  MessageSquare,
  Search,
  Filter,
  ArrowRight
} from 'lucide-react';

interface CounsellorDashboardProps {
  onSelectStudent: () => void;
}

export const CounsellorDashboardPage: React.FC<CounsellorDashboardProps> = ({ onSelectStudent }) => {
  const { student, language, resolveFlag } = useApp();
  const [activeTab, setActiveTab] = useState<'roster' | 'analytics'>('roster');

  const unresolvedFlags = student.activeFlags.filter(f => !f.resolved);

  return (
    <div className="container animate-fade-in" style={{ padding: '30px 24px 80px 24px', maxWidth: '1100px' }}>
      {/* Top Banner */}
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
            <span className="badge-tag" style={{ background: '#EAE5DF', color: '#3E342B' }}>
              <ShieldCheck size={14} />
              {language === 'ta' ? 'மனித மேற்பார்வை மற்றும் தணிக்கை தளம்' : 'Human-in-the-Loop Supervision'}
            </span>
            {unresolvedFlags.length > 0 && (
              <span style={{
                background: 'var(--danger-bg)',
                color: 'var(--danger)',
                border: '1px solid rgba(153, 56, 44, 0.3)',
                padding: '2px 10px',
                borderRadius: '20px',
                fontSize: '0.78rem',
                fontWeight: 700
              }}>
                {unresolvedFlags.length} {language === 'ta' ? 'கவனம் தேவைப்படும் சந்தேகங்கள்' : 'Active Escalation Flags'}
              </span>
            )}
          </div>

          <h1 style={{ fontSize: '2.1rem', color: 'var(--primary)', marginBottom: '6px' }}>
            {language === 'ta' ? 'கவுன்சிலர் நிர்வாக பலகை' : 'Counsellor Command Center & Cohort Insights'}
          </h1>
          <p style={{ color: 'var(--ink-soft)', fontSize: '0.94rem' }}>
            {language === 'ta'
              ? 'AI வழிகாட்டலில் எழும் தடங்கல்களை சரிபார்த்து, குடும்பங்களுக்கு நேரடி வழிகாட்டல் வழங்குங்கள்.'
              : 'Audit AI recommendations, intervene on parental objections, and monitor regional admission milestones.'}
          </p>
        </div>

        {/* Tab switch */}
        <div style={{ display: 'flex', background: 'var(--surface)', padding: '4px', borderRadius: '8px', border: '1px solid var(--border)' }}>
          <button
            onClick={() => setActiveTab('roster')}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              background: activeTab === 'roster' ? 'var(--primary)' : 'transparent',
              color: activeTab === 'roster' ? 'var(--primary-text)' : 'var(--ink)',
              fontWeight: 600,
              fontSize: '0.86rem',
              cursor: 'pointer'
            }}
          >
            {language === 'ta' ? 'மாணவர் பட்டியல்' : 'Student Roster & Flags'}
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              background: activeTab === 'analytics' ? 'var(--primary)' : 'transparent',
              color: activeTab === 'analytics' ? 'var(--primary-text)' : 'var(--ink)',
              fontWeight: 600,
              fontSize: '0.86rem',
              cursor: 'pointer'
            }}
          >
            {language === 'ta' ? 'கூட்டு பகுப்பாய்வு' : 'Cohort Analytics'}
          </button>
        </div>
      </div>

      {activeTab === 'roster' ? (
        <div className="animate-fade-in">
          {/* Active Escalation Callout if Flagged */}
          {unresolvedFlags.length > 0 && (
            <div style={{
              background: 'var(--warning-bg)',
              border: '1px solid rgba(183, 121, 31, 0.4)',
              borderRadius: '12px',
              padding: '20px 24px',
              marginBottom: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--warning)', fontWeight: 700, fontSize: '0.95rem' }}>
                  <AlertTriangle size={18} />
                  <span>Family Escalation Request: {student.name}</span>
                </div>
                <button 
                  onClick={() => resolveFlag(unresolvedFlags[0].id)}
                  className="btn-primary"
                  style={{ background: 'var(--success)', borderColor: 'var(--success)', padding: '6px 14px', fontSize: '0.8rem' }}
                >
                  <CheckCircle2 size={14} />
                  <span>Mark Resolved & Notify Family</span>
                </button>
              </div>
              <p style={{ color: 'var(--ink)', fontSize: '0.92rem', marginBottom: '8px' }}>
                <strong>Reason:</strong> {unresolvedFlags[0].reason}
              </p>
              <div style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>
                Triggered at {unresolvedFlags[0].timestamp} via Smart Concern Resolver
              </div>
            </div>
          )}

          {/* Student Roster Table */}
          <div className="paper-card" style={{ padding: '24px 28px', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '16px' }}>
              {language === 'ta' ? 'கண்காணிக்கப்படும் மாணவர்கள்' : 'Active Student Cohort Roster'}
            </h2>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border)', background: 'var(--surface)' }}>
                    <th style={{ padding: '12px 14px', color: 'var(--ink)' }}>Student</th>
                    <th style={{ padding: '12px 14px', color: 'var(--ink)' }}>Target Career & Match</th>
                    <th style={{ padding: '12px 14px', color: 'var(--ink)' }}>Family Status</th>
                    <th style={{ padding: '12px 14px', color: 'var(--ink)' }}>Continuous Loop Check-in</th>
                    <th style={{ padding: '12px 14px', color: 'var(--ink)' }}>Flags</th>
                    <th style={{ padding: '12px 14px', color: 'var(--ink)' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Current Active Demo Student */}
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '14px' }}>
                      <div style={{ fontWeight: 700, color: 'var(--primary)' }}>{student.name}</div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--ink-soft)' }}>{student.location}</div>
                    </td>
                    <td style={{ padding: '14px' }}>
                      <div style={{ fontWeight: 600 }}>Data Science & AI</div>
                      <span className="badge-verified" style={{ fontSize: '0.72rem', padding: '1px 6px' }}>94% Fit</span>
                    </td>
                    <td style={{ padding: '14px' }}>
                      <span style={{
                        background: student.familyApprovalStatus === 'Approved' ? 'var(--success-bg)' : 'var(--warning-bg)',
                        color: student.familyApprovalStatus === 'Approved' ? 'var(--success)' : 'var(--warning)',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontSize: '0.76rem',
                        fontWeight: 600
                      }}>
                        {student.familyApprovalStatus}
                      </span>
                    </td>
                    <td style={{ padding: '14px' }}>
                      <div style={{ fontWeight: 600, color: 'var(--ink)' }}>TNEA Registration</div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--accent-dark)' }}>Due June 10, 2026</div>
                    </td>
                    <td style={{ padding: '14px' }}>
                      {unresolvedFlags.length > 0 ? (
                        <span style={{ background: 'var(--danger-bg)', color: 'var(--danger)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.76rem', fontWeight: 700 }}>
                          1 Active Doubt
                        </span>
                      ) : (
                        <span style={{ color: 'var(--success)', fontWeight: 600, fontSize: '0.8rem' }}>None</span>
                      )}
                    </td>
                    <td style={{ padding: '14px' }}>
                      <button 
                        onClick={onSelectStudent}
                        className="btn-primary"
                        style={{ padding: '6px 12px', fontSize: '0.78rem' }}
                      >
                        <span>Audit File</span>
                        <ArrowRight size={12} />
                      </button>
                    </td>
                  </tr>

                  {/* Seeded Student 2 */}
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '14px' }}>
                      <div style={{ fontWeight: 700, color: 'var(--primary)' }}>Karthik V.</div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--ink-soft)' }}>Madurai, TN</div>
                    </td>
                    <td style={{ padding: '14px' }}>
                      <div style={{ fontWeight: 600 }}>Precision Agri-Tech</div>
                      <span className="badge-verified" style={{ fontSize: '0.72rem', padding: '1px 6px' }}>89% Fit</span>
                    </td>
                    <td style={{ padding: '14px' }}>
                      <span style={{ background: 'var(--success-bg)', color: 'var(--success)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.76rem', fontWeight: 600 }}>
                        Approved
                      </span>
                    </td>
                    <td style={{ padding: '14px' }}>
                      <div style={{ fontWeight: 600, color: 'var(--ink)' }}>TNAU Portal Filing</div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--ink-muted)' }}>Due May 28, 2026</div>
                    </td>
                    <td style={{ padding: '14px' }}>
                      <span style={{ color: 'var(--success)', fontWeight: 600, fontSize: '0.8rem' }}>Resolved</span>
                    </td>
                    <td style={{ padding: '14px' }}>
                      <button 
                        onClick={onSelectStudent}
                        className="btn-secondary"
                        style={{ padding: '6px 12px', fontSize: '0.78rem' }}
                      >
                        <span>View</span>
                      </button>
                    </td>
                  </tr>

                  {/* Seeded Student 3 */}
                  <tr>
                    <td style={{ padding: '14px' }}>
                      <div style={{ fontWeight: 700, color: 'var(--primary)' }}>Pooja M.</div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--ink-soft)' }}>Trichy, TN</div>
                    </td>
                    <td style={{ padding: '14px' }}>
                      <div style={{ fontWeight: 600 }}>Biomedical Devices</div>
                      <span className="badge-verified" style={{ fontSize: '0.72rem', padding: '1px 6px' }}>85% Fit</span>
                    </td>
                    <td style={{ padding: '14px' }}>
                      <span style={{ background: 'var(--warning-bg)', color: 'var(--warning)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.76rem', fontWeight: 600 }}>
                        In Review
                      </span>
                    </td>
                    <td style={{ padding: '14px' }}>
                      <div style={{ fontWeight: 600, color: 'var(--ink)' }}>NEET Alternative Guidance</div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--accent-dark)' }}>Due June 02, 2026</div>
                    </td>
                    <td style={{ padding: '14px' }}>
                      <span style={{ color: 'var(--ink-muted)', fontSize: '0.8rem' }}>None</span>
                    </td>
                    <td style={{ padding: '14px' }}>
                      <button 
                        onClick={onSelectStudent}
                        className="btn-secondary"
                        style={{ padding: '6px 12px', fontSize: '0.78rem' }}
                      >
                        <span>View</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        /* Cohort Analytics View */
        <div className="animate-fade-in">
          {/* Key Metric Tiles */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '28px' }}>
            <div className="paper-card" style={{ padding: '20px' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>Active Counseled Students</div>
              <div style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--primary)', fontFamily: 'var(--font-serif)', marginTop: '4px' }}>428</div>
              <div style={{ fontSize: '0.76rem', color: 'var(--success)', marginTop: '4px' }}>+34% from tier-2/3 Salem-Coimbatore schools</div>
            </div>
            <div className="paper-card" style={{ padding: '20px' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>Family Alignment Rate</div>
              <div style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--accent)', fontFamily: 'var(--font-serif)', marginTop: '4px' }}>89.2%</div>
              <div style={{ fontSize: '0.76rem', color: 'var(--ink-soft)', marginTop: '4px' }}>Approved via Family Hub with zero disputes</div>
            </div>
            <div className="paper-card" style={{ padding: '20px' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>Concerns Resolved by Data</div>
              <div style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--success)', fontFamily: 'var(--font-serif)', marginTop: '4px' }}>92.4%</div>
              <div style={{ fontSize: '0.76rem', color: 'var(--ink-soft)', marginTop: '4px' }}>Resolved without needing physical in-person visits</div>
            </div>
          </div>

          {/* Graphical Breakdown Bar Simulation in Beige Tone */}
          <div className="paper-card" style={{ padding: '28px 32px' }}>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '16px' }}>Top Parent Objections Resolved by Verified Data</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', marginBottom: '4px' }}>
                  <span>Course Cost & Government Subsidy Clarification</span>
                  <strong>44% of inquiries</strong>
                </div>
                <div style={{ height: '10px', background: 'var(--surface)', borderRadius: '5px', overflow: 'hidden' }}>
                  <div style={{ width: '44%', height: '100%', background: 'var(--accent)' }} />
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', marginBottom: '4px' }}>
                  <span>Tier-2 Regional Job Placement & IT Corridor Security</span>
                  <strong>32% of inquiries</strong>
                </div>
                <div style={{ height: '10px', background: 'var(--surface)', borderRadius: '5px', overflow: 'hidden' }}>
                  <div style={{ width: '32%', height: '100%', background: 'var(--primary)' }} />
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', marginBottom: '4px' }}>
                  <span>Difficulty of Syllabus & First-Year Bridge Support</span>
                  <strong>16% of inquiries</strong>
                </div>
                <div style={{ height: '10px', background: 'var(--surface)', borderRadius: '5px', overflow: 'hidden' }}>
                  <div style={{ width: '16%', height: '100%', background: 'var(--success)' }} />
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', marginBottom: '4px' }}>
                  <span>Relocation & Hostel Safety</span>
                  <strong>8% of inquiries</strong>
                </div>
                <div style={{ height: '10px', background: 'var(--surface)', borderRadius: '5px', overflow: 'hidden' }}>
                  <div style={{ width: '8%', height: '100%', background: 'var(--ink-muted)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
