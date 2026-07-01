import { matches, skillProfile, whatYouNeed } from '../data/mockData';

export default function Match() {
  return (
    <div id="page-match" className="page active">
      <div className="section-title">Builder matching</div>
      <div className="section-sub">Matched on complementary skills, not identical ones</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 20 }}>
        <div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 18 }}>
            <div style={{ fontSize: 14, color: 'var(--slate2)' }}>Matching for:</div>
            <select className="form-input" style={{ width: 'auto', padding: '7px 14px', fontSize: 13 }}>
              <option>DevTrack — Async standup</option>
              <option>OpenAPI Studio</option>
              <option>Habit tracker PWA</option>
            </select>
            <button className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>Find matches</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {matches.map(m => (
              <div className="match-card" key={m.name}>
                <div className="match-header">
                  <div style={{ width: 50, height: 50, borderRadius: '50%', background: m.avColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700, flexShrink: 0 }}>
                    {m.av}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                      <div>
                        <div style={{ fontSize: 15, fontWeight: 700 }}>{m.name}</div>
                        <div style={{ fontSize: 12, color: 'var(--slate)' }}>{m.role}</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--mint)' }}>{m.score}%</div>
                        <div style={{ fontSize: 10, color: 'var(--slate)' }}>match score</div>
                      </div>
                    </div>
                    <div style={{ marginTop: 10, padding: 10, background: 'var(--navy3)', borderRadius: 'var(--radius-sm)', fontSize: 12, color: 'var(--slate2)', lineHeight: 1.5, borderLeft: '3px solid var(--indigo)' }}>
                      <strong style={{ color: 'var(--indigo2)', display: 'block', marginBottom: 3, fontSize: 11, textTransform: 'uppercase', letterSpacing: 0.4 }}>
                        Why matched
                      </strong>
                      {m.why}
                    </div>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--slate)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.4 }}>Skills</div>
                  <div className="match-skill-row">
                    {m.skills.map(s => <span className="tag tag-slate" key={s}>{s}</span>)}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, background: 'var(--navy3)', borderRadius: 'var(--radius-sm)' }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{m.help}</div>
                    <div style={{ fontSize: 11, color: 'var(--slate)', marginTop: 2 }}>{m.collabType}</div>
                  </div>
                  <button className="btn btn-primary" style={{ fontSize: 12, padding: '7px 14px', whiteSpace: 'nowrap' }}>Connect →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="card" style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 14 }}>Your skill profile</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {skillProfile.map(s => (
                <div key={s.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}>
                    <span style={{ color: 'var(--slate2)' }}>{s.label}</span>
                    <span style={{ color: 'var(--slate)', fontWeight: 600 }}>{s.pct}%</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: `${s.pct}%`, background: s.color }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>What you need</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {whatYouNeed.map(w => (
                <div className="collab-type" key={w.title}>
                  <strong>{w.title}</strong>{w.desc}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}