import { profileProjects, profileCats, builderScores } from '../data/mockData';

export default function Profile({ goPage }) {
  return (
    <div id="page-profile" className="page active">
      <div className="profile-hero">
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, flexWrap: 'wrap' }}>
          <div className="big-avatar" style={{ background: 'linear-gradient(135deg,var(--indigo),#A855F7)' }}>AK</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5 }}>Alex Kim</div>
            <div style={{ fontSize: 14, color: 'var(--slate2)', margin: '4px 0' }}>Full-stack developer · San Francisco</div>
            <div style={{ fontSize: 13, color: 'var(--slate)', maxWidth: 400, lineHeight: 1.5, margin: '8px 0' }}>
              Building tools that make async teams feel connected. Obsessed with great DX and fast feedback loops.
            </div>
            <div style={{ marginTop: 12 }}>
              <span className="skill-badge">⚛️ React</span>
              <span className="skill-badge">🐍 Python</span>
              <span className="skill-badge">☁️ AWS</span>
              <span className="skill-badge">🎨 Figma</span>
              <span className="skill-badge">📦 Node.js</span>
              <span className="skill-badge">🛢️ PostgreSQL</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <button className="btn btn-ghost" style={{ fontSize: 13 }}>Edit profile</button>
            <div style={{ textAlign: 'center', fontSize: 11, color: 'var(--slate)' }}>Member since Jan 2024</div>
          </div>
        </div>
      </div>

      <div className="grid-4" style={{ marginBottom: 24 }}>
        <div className="stat-card"><div className="stat-num" style={{ color: 'var(--indigo)' }}>7</div><div className="stat-label">Projects posted</div></div>
        <div className="stat-card"><div className="stat-num" style={{ color: 'var(--mint)' }}>284</div><div className="stat-label">Feedbacks given</div></div>
        <div className="stat-card"><div className="stat-num" style={{ color: 'var(--coral)' }}>1.2k</div><div className="stat-label">Reactions received</div></div>
        <div className="stat-card"><div className="stat-num" style={{ color: 'var(--amber)' }}>12</div><div className="stat-label">Collabs started</div></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20 }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 14 }}>Your projects</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {profileProjects.map(p => (
              <div className="card" key={p.title} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 14, cursor: 'pointer' }} onClick={() => goPage('detail')}>
                <div style={{ fontSize: 32 }}>{p.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{p.title}</div>
                  <div style={{ display: 'flex', gap: 14, fontSize: 12, color: 'var(--slate)' }}>
                    <span>💬 {p.feedbacks} feedbacks</span>
                    <span>⚡ {p.reactions} reactions</span>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--mint)' }}>{p.sentiment}</div>
                  <div style={{ fontSize: 10, color: 'var(--slate)' }}>positive</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="card" style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 14 }}>Feedback you give</div>
            <div>
              {profileCats.map(c => (
                <div style={{ marginBottom: 10 }} key={c.l}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}>
                    <span style={{ color: 'var(--slate2)' }}>{c.l}</span>
                    <span style={{ color: 'var(--slate)' }}>{c.pct}%</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: `${c.pct}%`, background: c.c }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Builder score</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {builderScores.map(s => (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13 }} key={s.l}>
                  <span style={{ color: 'var(--slate2)' }}>{s.l}</span>
                  <span style={{ fontWeight: 700, color: s.c }}>{s.v}/10</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}