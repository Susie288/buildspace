import { useState } from 'react';
import { projects, filterPills, platformStats } from '../data/mockData';

export default function Feed({ goPage }) {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div id="page-feed" className="page active">
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 6 }}>
        <div>
          <div className="section-title">Discover projects</div>
          <div className="section-sub">Find work to give feedback on • get insights on yours</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-ghost" style={{ fontSize: 12 }}>⚡ For you</button>
          <button className="btn btn-ghost" style={{ fontSize: 12 }}>🔥 Trending</button>
        </div>
      </div>

      <div className="feed-filters">
        {filterPills.map(p => (
          <button
            key={p}
            className={`filter-pill${activeFilter === p ? ' active' : ''}`}
            onClick={() => setActiveFilter(p)}
          >
            {p}
          </button>
        ))}
      </div>

      <div className="feed-layout">
        <div>
          <div className="grid-3">
            {projects.map(p => (
              <div className="proj-card" key={p.id} onClick={() => goPage('detail')}>
                <div className="proj-thumb" style={{ background: p.color }}>{p.emoji}</div>
                <div className="proj-body">
                  <div className="tags-row" style={{ marginBottom: 8 }}>
                    {p.tags.map(t => <span className="tag tag-slate" key={t}>{t}</span>)}
                  </div>
                  <div className="proj-title">{p.title}</div>
                  <div className="proj-desc">{p.desc}</div>
                  <div className="proj-footer">
                    <div className="proj-author">
                      <div className="mini-av" style={{ background: p.avColor }}>{p.av}</div>
                      {p.author}
                    </div>
                    <div className="proj-stats">
                      <span className="proj-stat">💬 {p.feedbacks}</span>
                      <span className="proj-stat">⚡ {p.reactions}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="card" style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 14, color: 'var(--slate2)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
              🔥 Trending
            </div>
            <div>
              {projects.slice(0, 4).map((p, i) => (
                <div className="trend-proj" key={p.id} onClick={() => goPage('detail')}>
                  <div
                    className="trend-num"
                    style={{ fontSize: 18, fontWeight: 700, minWidth: 22, color: i === 0 ? 'var(--amber)' : i === 1 ? 'var(--slate2)' : 'var(--slate)' }}
                  >
                    {i + 1}
                  </div>
                  <div style={{ fontSize: 28 }}>{p.emoji}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{p.title}</div>
                    <div style={{ fontSize: 11, color: 'var(--slate)' }}>💬 {p.feedbacks} feedbacks</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 14, color: 'var(--slate2)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
              📊 Platform stats
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {platformStats.map(s => (
                <div className="stat-card" key={s.label}>
                  <div className="stat-num" style={{ color: s.color }}>{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}