import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Send, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  Bookmark, 
  HelpCircle, 
  CheckCircle,
  TrendingUp,
  Award,
  AlertCircle
} from 'lucide-react';

interface StudentChatProps {
  onViewPathway: (careerId: string) => void;
  onOpenFamilyView: () => void;
}

interface Message {
  id: string;
  sender: 'ai' | 'user' | 'counsellor';
  text: string;
  timestamp: string;
  verifiedSource?: string;
  recommendations?: string[]; // career IDs
}

export const StudentChatPage: React.FC<StudentChatProps> = ({ onViewPathway, onOpenFamilyView }) => {
  const { careers, student, language, toggleShortlist, chooseCareer, createCounsellorFlag } = useApp();

  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-1',
      sender: 'ai',
      text: language === 'ta'
        ? `வணக்கம் ${student.name}! உங்கள் 12-ம் வகுப்பு மதிப்பெண்கள் (87.4%), கணித பின்னணி மற்றும் குடும்ப பட்ஜெட் (₹2.5L) அடிப்படையில், நாங்கள் அதிகாரப்பூர்வ அரசு தரவுகளுடன் ஒப்பிட்டு 3 சிறந்த தொழில் வழிகளை கண்டறிந்துள்ளோம்.`
        : `Welcome ${student.name}! Based on your strong quantitative marks (87.4%), interest in computing, and ₹2.5L family budget cap, I have matched you against verified employment data. Here are your top 3 pathways:`,
      timestamp: 'Just now',
      verifiedSource: 'NSDC & AICTE Approved Placement Database 2025',
      recommendations: ['data-scientist', 'agricultural-technologist', 'healthcare-biomedical']
    }
  ]);

  const quickPrompts = language === 'ta' ? [
    'கட்டணம் மிகக் குறைவாக உள்ள கல்லூரிகள் எவை?',
    'முதல் வருடம் என்னென்ன தேர்வுகள் எழுத வேண்டும்?',
    'என் பெற்றோருக்கு வேலைவாய்ப்பு பற்றிய உறுதி வேண்டும்'
  ] : [
    'Which government colleges fit my budget?',
    'What entrance exams are mandatory?',
    'Show me tier-2 placement statistics for parents'
  ];

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');

    // Dynamic response logic
    setTimeout(() => {
      let replyText = '';
      let sourceTag = 'AICTE & State Higher Education Portal';

      if (text.toLowerCase().includes('parent') || text.toLowerCase().includes('பெற்றோர்')) {
        replyText = language === 'ta'
          ? 'உங்கள் பெற்றோரின் முக்கிய கவலை கல்வி கட்டணம் மற்றும் உள்ளூர் வேலை வாய்ப்பு. அரசு கல்லூரிகளில் 4 ஆண்டு கட்டணம் ₹1.8L மட்டுமே. நீங்கள் "குடும்ப பார்வை" (Family View) மூலம் இதை நேரடியாக அவர்களுக்கு காட்டலாம்.'
          : 'For family reassurance, note that state quota engineering fees are capped at ₹45,000/yr. Over 180 IT firms in Salem/Coimbatore offer localized campus placements. You can click "Share with Family" to sync this view with your parents.';
        sourceTag = 'TNEA & State Employment Registry 2025';
      } else if (text.toLowerCase().includes('college') || text.toLowerCase().includes('கல்லூரி')) {
        replyText = language === 'ta'
          ? 'உங்கள் கட்-ஆஃப் மதிப்பெண்ணிற்கு (178+), அரசு பொறியியல் கல்லூரி (GCT கோவை, சேலம் அரசு கல்லூரி) அல்லது அண்ணா பல்கலைக்கழக உறுப்புக் கல்லூரிகளில் இடம் கிடைக்க அதிக வாய்ப்புள்ளது.'
          : 'With your predicted score, Government College of Technology (GCT Coimbatore) and Government College of Engineering Salem are top high-probability matches with total tuition under ₹1.6 Lakhs.';
        sourceTag = 'Directorate of Technical Education (DoTE) Cutoff Matrix';
      } else {
        replyText = language === 'ta'
          ? `சிறந்த கேள்வி. நீங்கள் தேர்வு செய்த பாதையின் விரிவான 4 ஆண்டு வழிகாட்டல் மற்றும் அரசு உதவித்தொகை விபரங்களை கீழே உள்ள "பாதை வரைபடம்" (Pathway Navigator) மூலம் நேரடியாகக் காணலாம்.`
          : `That is an essential consideration. We have calculated the exact roadmap, semester breakdown, and Central Sector Interest Subsidy (CSIS) loan coverage in your Pathway Navigator.`;
      }

      const aiReply: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: replyText,
        timestamp: 'Just now',
        verifiedSource: sourceTag
      };

      setMessages(prev => [...prev, aiReply]);
    }, 600);
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '30px 24px 80px 24px', maxWidth: '1060px' }}>
      {/* Top Banner */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 22px',
        background: 'var(--surface-alt)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        marginBottom: '24px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--surface)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent)'
          }}>
            <Sparkles size={18} />
          </div>
          <div>
            <div style={{ fontWeight: 600, color: 'var(--ink)' }}>
              {language === 'ta' ? 'அறிவார்ந்த வழிகாட்டி அமர்வு' : 'Verified Career Intelligence Session'}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--ink-soft)' }}>
              {language === 'ta' ? 'அனைத்து பதில்களும் அரசு மற்றும் துறைசார் தரவுகளுடன் சரிபார்க்கப்படுகின்றன' : 'All citations cross-referenced against DoTE, NSDC & AICTE databases'}
            </div>
          </div>
        </div>

        <button 
          onClick={onOpenFamilyView}
          className="btn-secondary"
          style={{ padding: '8px 16px', fontSize: '0.86rem' }}
        >
          <span>{language === 'ta' ? 'குடும்ப முடிவுகள் பார்வை' : 'Go to Family Hub'}</span>
        </button>
      </div>

      {/* Main Chat Thread Area */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginBottom: '28px'
      }}>
        {messages.map(msg => (
          <div 
            key={msg.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start'
            }}
          >
            <div style={{
              maxWidth: msg.sender === 'user' ? '80%' : '95%',
              background: msg.sender === 'user' ? 'var(--primary)' : 'var(--surface-alt)',
              color: msg.sender === 'user' ? 'var(--primary-text)' : 'var(--ink)',
              border: msg.sender === 'user' ? 'none' : '1px solid var(--border)',
              borderRadius: '14px',
              padding: '20px 24px',
              boxShadow: 'var(--shadow-sm)'
            }}>
              {/* Sender & Timestamp */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ 
                  fontSize: '0.76rem', 
                  fontWeight: 600, 
                  color: msg.sender === 'user' ? '#D6C7AE' : 'var(--accent)', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.04em' 
                }}>
                  {msg.sender === 'user' 
                    ? (language === 'ta' ? 'நீங்கள் (மாணவர்)' : 'You (Student)') 
                    : (language === 'ta' ? 'சார்வதி AI வழிகாட்டி' : 'SAARTHI Career Engine')}
                </span>
                <span style={{ fontSize: '0.74rem', color: msg.sender === 'user' ? '#C4B5A5' : 'var(--ink-muted)' }}>
                  {msg.timestamp}
                </span>
              </div>

              {/* Message Content */}
              <p style={{ fontSize: '0.96rem', lineHeight: 1.6, marginBottom: msg.verifiedSource || msg.recommendations ? '14px' : '0' }}>
                {msg.text}
              </p>

              {/* Verified Source Chip */}
              {msg.verifiedSource && (
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '20px',
                  padding: '4px 10px',
                  fontSize: '0.76rem',
                  color: 'var(--ink-soft)'
                }}>
                  <ShieldCheck size={13} color="var(--success)" />
                  <span>Verified Source: <strong>{msg.verifiedSource}</strong></span>
                </div>
              )}

              {/* Recommendation Cards Grid */}
              {msg.recommendations && (
                <div style={{
                  marginTop: '20px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
                  gap: '16px'
                }}>
                  {msg.recommendations.map(id => {
                    const career = careers.find(c => c.id === id);
                    if (!career) return null;
                    const isShortlisted = student.shortlistedCareerIds.includes(career.id);
                    const isChosen = student.chosenCareerId === career.id;

                    return (
                      <div 
                        key={career.id}
                        className="paper-card"
                        style={{
                          padding: '20px',
                          background: isChosen ? '#FFFDF9' : '#FFFFFF',
                          border: isChosen ? '2px solid var(--accent)' : '1px solid var(--border)',
                          borderRadius: '12px',
                          display: 'flex',
                          flexDirection: 'column'
                        }}
                      >
                        {/* Header: Title + Match Badge */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--primary)' }}>
                            {language === 'ta' ? career.nameTa : career.name}
                          </h4>
                          <span style={{
                            background: 'var(--success-bg)',
                            color: 'var(--success)',
                            fontWeight: 700,
                            fontSize: '0.85rem',
                            padding: '3px 8px',
                            borderRadius: '6px',
                            border: '1px solid rgba(61,106,82,0.2)'
                          }}>
                            {career.matchScore}% Match
                          </span>
                        </div>

                        <div style={{ fontSize: '0.8rem', color: 'var(--accent-dark)', fontWeight: 600, marginBottom: '10px' }}>
                          {language === 'ta' ? career.categoryTa : career.category}
                        </div>

                        <p style={{ fontSize: '0.86rem', color: 'var(--ink-soft)', lineHeight: 1.5, marginBottom: '14px', flexGrow: 1 }}>
                          {language === 'ta' ? career.taglineTa : career.tagline}
                        </p>

                        {/* Match Reasons Pill */}
                        <div style={{ background: 'var(--surface-alt)', borderRadius: '8px', padding: '10px', marginBottom: '14px' }}>
                          <div style={{ fontSize: '0.74rem', fontWeight: 600, color: 'var(--ink-muted)', marginBottom: '4px' }}>
                            {language === 'ta' ? 'ஏன் இந்த பொருத்தம்?' : 'Why this fits you:'}
                          </div>
                          <ul style={{ paddingLeft: '16px', fontSize: '0.78rem', color: 'var(--ink-soft)', lineHeight: 1.4 }}>
                            {(language === 'ta' ? career.matchReasonsTa : career.matchReasons).slice(0, 2).map((r, i) => (
                              <li key={i}>{r}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Salary & Cost Snapshot */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px', fontSize: '0.78rem' }}>
                          <div>
                            <span style={{ color: 'var(--ink-muted)', display: 'block' }}>Expected Comp:</span>
                            <strong>{career.avgSalaryRange}</strong>
                          </div>
                          <div>
                            <span style={{ color: 'var(--ink-muted)', display: 'block' }}>Estimated Cost:</span>
                            <strong>{career.estimatedCost.split('(')[0]}</strong>
                          </div>
                        </div>

                        {/* Card Actions */}
                        <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                          <button 
                            onClick={() => {
                              chooseCareer(career.id);
                              onViewPathway(career.id);
                            }}
                            className="btn-primary"
                            style={{ flex: 1, padding: '8px 12px', fontSize: '0.82rem' }}
                          >
                            <Compass size={14} />
                            <span>{language === 'ta' ? 'பாதை வரைபடம்' : 'View Pathway'}</span>
                          </button>

                          <button 
                            onClick={() => toggleShortlist(career.id)}
                            className="btn-secondary"
                            style={{ 
                              padding: '8px 12px', 
                              fontSize: '0.82rem',
                              borderColor: isShortlisted ? 'var(--accent)' : 'var(--border)',
                              color: isShortlisted ? 'var(--accent)' : 'var(--ink)'
                            }}
                            title="Add to shared family shortlist"
                          >
                            <Bookmark size={14} fill={isShortlisted ? 'var(--accent)' : 'none'} />
                            <span>{isShortlisted ? 'Shortlisted' : 'Shortlist'}</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Suggested Prompt Chips */}
      <div style={{ marginBottom: '14px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)', alignSelf: 'center', marginRight: '4px' }}>
          Suggested:
        </span>
        {quickPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(prompt)}
            style={{
              background: 'var(--surface-alt)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '6px 12px',
              fontSize: '0.82rem',
              color: 'var(--ink-soft)',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Chat Input Box */}
      <div style={{
        display: 'flex',
        gap: '10px',
        background: 'var(--surface-alt)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '8px 12px',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <textarea
          rows={1}
          value={inputMessage}
          onChange={e => setInputMessage(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          placeholder={language === 'ta' ? 'உங்கள் சந்தேகங்களை கேளுங்கள் (எ.கா: கல்விக் கடன் உதவித்தொகை...)' : 'Ask about colleges, reservations, regional placements, or exams...'}
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            fontSize: '0.94rem',
            fontFamily: 'var(--font-sans)',
            color: 'var(--ink)',
            resize: 'none',
            padding: '8px'
          }}
        />

        <button 
          onClick={() => handleSendMessage()}
          className="btn-primary"
          style={{ padding: '8px 16px', borderRadius: '8px' }}
        >
          <Send size={16} />
          <span>{language === 'ta' ? 'அனுப்பு' : 'Send'}</span>
        </button>

        <button 
          onClick={() => createCounsellorFlag('Student requested live human counsellor intervention regarding career pathway')}
          className="btn-secondary"
          style={{ padding: '8px 14px', borderRadius: '8px', fontSize: '0.82rem' }}
          title="Escalate to Human Counsellor"
        >
          <HelpCircle size={15} color="var(--accent)" />
          <span>{language === 'ta' ? 'கவுன்சிலர் உதவி' : 'Ask Counsellor'}</span>
        </button>
      </div>
    </div>
  );
};
