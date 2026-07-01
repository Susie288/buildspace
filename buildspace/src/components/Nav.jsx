export default function Nav({ activePage, goPage }) {
  const tabs = [
    { id: 'feed', label: 'Feed' },
    { id: 'detail', label: 'Project' },
    { id: 'profile', label: 'Profile' },
    { id: 'match', label: 'Match' },
    { id: 'create', label: '+ Create' },
  ];

  return (
    <nav>
      <div className="logo">Build<span>Space</span></div>
      <div className="nav-tabs">
        {tabs.map(t => (
          <button
            key={t.id}
            className={`nav-tab${activePage === t.id ? ' active' : ''}`}
            onClick={() => goPage(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="nav-right">
        <button className="btn btn-primary" onClick={() => goPage('create')}>Post Project</button>
        <div className="avatar" title="Your profile" onClick={() => goPage('profile')}>AK</div>
      </div>
    </nav>
  );
}