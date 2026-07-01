import { useState } from 'react';
import { categories, sentimentData, comments, reactions, matches, quickCollabs } from '../data/mockData';

export default function ProjectDetail({ goPage }) {
  const [reactionState, setReactionState] = useState(reactions);
  const maxH = 80;

  const toggleReaction = (idx) => {
    setReactionState(prev =>
      prev.map((r, i) => i === idx ? { ...r, active: !r.active } : r)
    );
  };

  return (
    <div id="page-detail" className="page active">
      <div
        style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 20, color: 'var(--slate)', fontSize: 13, cursor: 'pointer' }}
        onClick={() => goPage('feed')}
      >
        ← Back to feed
      </div>

      <div className="detail-hero" style={{ background: 'linear-gradient(135deg,#1C1040,#0D1A2E)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div className="tags-row">
              <span className="tag tag-indigo">Web App</span>
              <span className="tag tag-mint">Open Source</span>
            </div>
            <h1 style={{ fontSize: 26, fontWeight: 700, letterSpacing: -0.5, margin: '10px 0 8px' }}>
              DevTrack — Async standup for remote teams
            </h1>
            <p style={{ fontSize: 14, color: 'var(--slate2)', maxWidth: 560, lineHeight: 1.6 }}>
              Replace boring daily standups with async video check-ins. Teams post 90-second updates and give structured feedback across timezones.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div
                  className="big-avatar"
                  style={{ width: 36, height: 36, fontSize: 14, background: 'linear-gradient(135deg,var(--indigo),var(--coral))', margin: 0 }}
                >
                  MR
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>Maya Rodriguez</div>
                  <div style={{ fontSize: 11, color: 'var(--slate)' }}>Full-stack dev · 127 feedback given</div>
                </div>
              </div>
              <div style={{ fontSize: 12, color: 'var(--slate)' }}>Posted 3 days ago</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
            <button className="btn btn-primary">Give feedback</button>
            <button className="btn btn-ghost" style={{ fontSize: 12 }}>🔗 View live</button>
            <div style={{ fontSize: 12, color: 'var(--slate)', textAlign: 'right' }}>142 feedbacks · 38 reactions</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 20 }}>
        {/* LEFT */}
        <div>
          <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 14 }}>📊 Feedback analytics</div>
          <div className="grid-2" style={{ marginBottom: 20 }}>
            <div className="insight-card">
              <div className="insight-icon">💡</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--indigo2)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.4 }}>
                Top insight
              </div>
              <div className="insight-text">
                <strong>Most reviewers love the async concept</strong> but struggle to find older check-ins. Navigation is the #1 friction point.
              </div>
            </div>
            <div className="insight-card" style={{ background: 'linear-gradient(135deg,rgba(0,212,170,0.1),rgba(245,158,11,0.05))', borderColor: 'rgba(0,212,170,0.2)' }}>
              <div className="insight-icon" style={{ background: 'var(--mint-dim)' }}>🔁</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--mint)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.4 }}>
                Repeated request
              </div>
              <div className="insight-text">
                <strong>Dark mode</strong> mentioned in 14 comments · <strong>Slack integration</strong> requested 9 times this week
              </div>
            </div>
          </div>

          <div className="card" style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Feedback categories</div>
              <span className="tag tag-slate">142 total</span>
            </div>
            <div>
              {categories.map(c => (
                <div className="trend-item" key={c.label}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 140 }}>
                    <div className="cat-dot" style={{ background: c.color }}></div>
                    <span style={{ fontSize: 13, color: 'var(--slate2)' }}>{c.label}</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: `${c.pct}%`, background: c.color }}></div>
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 600, minWidth: 36, textAlign: 'right', color: 'var(--slate2)' }}>{c.count}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Sentiment trend</div>
              <div style={{ display: 'flex', gap: 12, fontSize: 11, color: 'var(--slate)' }}>
                <span style={{ color: 'var(--mint)' }}>■ Positive</span>
                <span style={{ color: 'var(--amber)' }}>■ Neutral</span>
                <span style={{ color: 'var(--coral)' }}>■ Negative</span>
              </div>
            </div>
            <div style={{ fontSize: 11, color: 'var(--slate)', marginBottom: 14 }}>Last 7 weeks</div>
            <div style={{ display: 'flex', gap: 6, height: 80, alignItems: 'flex-end' }}>
              {sentimentData.map(d => {
                const posH = Math.round(d.pos / 100 * maxH);
                const neuH = Math.round(d.neu / 100 * maxH);
                const negH = Math.round(d.neg / 100 * maxH);
                return (
                  <div key={d.w} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, justifyContent: 'flex-end' }}>
                    <div style={{ width: '100%', height: negH, background: 'var(--coral)', opacity: 0.7, borderRadius: '2px 2px 0 0' }}></div>
                    <div style={{ width: '100%', height: neuH, background: 'var(--amber)', opacity: 0.7 }}></div>
                    <div style={{ width: '100%', height: posH, background: 'var(--mint)', opacity: 0.8 }}></div>
                  </div>
                );
              })}
            </div>
            <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
              {sentimentData.map(d => (
                <div key={d.w} style={{ flex: 1, textAlign: 'center', fontSize: 10, color: 'var(--slate)' }}>{d.w}</div>
              ))}
            </div>
          </div>

          <div className="card">
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>
              Comments <span style={{ color: 'var(--slate)', fontWeight: 400 }}>(38)</span>
            </div>
            <div style={{ fontSize: 12, color: 'var(--slate)', marginBottom: 16 }}>
              Filter: <span style={{ color: 'var(--indigo)', cursor: 'pointer' }}>All</span> · <span style={{ cursor: 'pointer', color: 'var(--slate2)' }}>Bug</span> · <span style={{ cursor: 'pointer', color: 'var(--slate2)' }}>Suggestion</span> · <span style={{ cursor: 'pointer', color: 'var(--slate2)' }}>Praise</span>
            </div>
            <div>
              {comments.map((c, i) => (
                <div className="comment" key={i}>
                  <div
                    className="mini-av"
                    style={{ background: c.avColor, width: 32, height: 32, borderRadius: '50%', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
                  >
                    {c.av}
                  </div>
                  <div className="comment-body">
                    <div className="comment-meta">
                      <span style={{ fontSize: 13, fontWeight: 600 }}>{c.author}</span>
                      <span className={`tag ${c.tagStyle}`}>{c.tag}</span>
                      <span style={{ fontSize: 11, color: 'var(--slate)' }}>{c.time}</span>
                    </div>
                    <div className="comment-text">{c.text}</div>
                    <div style={{ marginTop: 8, display: 'flex', gap: 12 }}>
                      <span style={{ fontSize: 12, color: 'var(--slate)', cursor: 'pointer' }}>👍 Helpful</span>
                      <span style={{ fontSize: 12, color: 'var(--slate)', cursor: 'pointer' }}>↩ Reply</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16 }}>
              <textarea className="form-textarea" placeholder="Share specific, actionable feedback..." style={{ minHeight: 72 }}></textarea>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  <span className="tag tag-slate" style={{ cursor: 'pointer' }}>🐛 Bug</span>
                  <span className="tag tag-indigo" style={{ cursor: 'pointer' }}>💡 Suggestion</span>
                  <span className="tag tag-mint" style={{ cursor: 'pointer' }}>🙌 Praise</span>
                </div>
                <button className="btn btn-primary" style={{ padding: '7px 16px', fontSize: 13 }}>Post comment</button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="card" style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 14 }}>Reactions</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {reactionState.map((r, i) => (
                <div
                  key={r.label}
                  className={`reaction-btn${r.active ? ' active' : ''}`}
                  onClick={() => toggleReaction(i)}
                >
                  {r.emoji} <span className="react-count">{r.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>People who can help</div>
            <div style={{ fontSize: 12, color: 'var(--slate)', marginBottom: 14 }}>Matched to this project</div>
            <div>
              {matches.slice(0, 3).map(m => (
                <div key={m.name} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderBottom: '1px solid var(--card-border)' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: m.avColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
                    {m.av}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{m.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--slate)' }}>{m.role}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--mint)' }}>{m.score}%</div>
                    <div style={{ fontSize: 10, color: 'var(--slate)' }}>match</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-ghost" style={{ width: '100%', marginTop: 12, fontSize: 12 }} onClick={() => goPage('match')}>
              View all matches →
            </button>
          </div>

          <div className="card">
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>⚡ Quick collabs</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {quickCollabs.map(q => (
                <div
                  key={q.label}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', background: 'var(--navy3)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', transition: 'background 0.2s' }}
                  onMouseOver={e => e.currentTarget.style.background = 'var(--navy4)'}
                  onMouseOut={e => e.currentTarget.style.background = 'var(--navy3)'}
                >
                  <div style={{ fontSize: 13 }}>{q.emoji} {q.label}</div>
                  <div style={{ fontSize: 11, color: 'var(--slate)' }}>{q.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}