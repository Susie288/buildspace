import { useState } from 'react';
import { feedbackTypes } from '../data/mockData';

export default function Create() {
  const [types, setTypes] = useState(feedbackTypes);

  const toggleType = (idx) => {
    setTypes(prev => prev.map((t, i) => i === idx ? { ...t, active: !t.active } : t));
  };

  return (
    <div id="page-create" className="page active">
      <div className="section-title">Post a project</div>
      <div className="section-sub">Share what you're building and get meaningful feedback</div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
        <div>
          <div className="card">
            <div className="form-group">
              <label className="form-label">Project name</label>
              <input className="form-input" placeholder="e.g. DevTrack — async standup for remote teams" />
            </div>
            <div className="form-group">
              <label className="form-label">What does it do?</label>
              <textarea className="form-textarea" placeholder="Describe your project in 2–3 sentences. What problem does it solve? Who is it for?"></textarea>
            </div>
            <div className="form-group">
              <label className="form-label">Project URL</label>
              <input className="form-input" placeholder="https://your-project.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Category</label>
              <select className="form-input">
                <option>Web App</option>
                <option>Mobile App</option>
                <option>Design / UI</option>
                <option>API / Backend</option>
                <option>AI / ML</option>
                <option>Open Source Library</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">What kind of feedback are you looking for?</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
                {types.map((t, i) => (
                  <div
                    key={t.label}
                    className={`reaction-btn${t.active ? ' active' : ''}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => toggleType(i)}
                  >
                    {t.emoji} {t.label}
                  </div>
                ))}
              </div>
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Skills you're looking for in reviewers</label>
              <input className="form-input" placeholder="e.g. UI designer, backend engineer, product manager" />
            </div>
          </div>
        </div>
        <div>
          <div className="card" style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>📍 Thumbnail</div>
            <div style={{ height: 120, border: '2px dashed var(--card-border)', borderRadius: 'var(--radius-sm)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, cursor: 'pointer', color: 'var(--slate)', fontSize: 13 }}>
              <div style={{ fontSize: 28 }}>🖼️</div>
              Drop image or click to upload
            </div>
          </div>
          <div className="card" style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>🔒 Visibility</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, cursor: 'pointer' }}>
                <input type="radio" name="vis" defaultChecked /> <span>Public feed</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, cursor: 'pointer' }}>
                <input type="radio" name="vis" /> <span>Matches only</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, cursor: 'pointer' }}>
                <input type="radio" name="vis" /> <span>Private (draft)</span>
              </label>
            </div>
          </div>
          <div className="card" style={{ background: 'var(--indigo-dim)', borderColor: 'rgba(108,99,255,0.25)' }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--indigo2)', marginBottom: 8 }}>✨ After posting</div>
            <div style={{ fontSize: 12, color: 'var(--slate2)', lineHeight: 1.6 }}>
              Our system will automatically categorize incoming feedback, generate weekly insight summaries, and suggest builders who can help.
            </div>
          </div>
          <button className="btn btn-primary" style={{ width: '100%', marginTop: 14, padding: 12, fontSize: 15 }}>Post project →</button>
          <button className="btn btn-ghost" style={{ width: '100%', marginTop: 8, fontSize: 13 }}>Save as draft</button>
        </div>
      </div>
    </div>
  );
}