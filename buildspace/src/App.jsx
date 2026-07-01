import { useState } from 'react';
import Nav from './components/Nav';
import Feed from './components/Feed';
import ProjectDetail from './components/ProjectDetail';
import Profile from './components/Profile';
import Match from './components/Match';
import Create from './components/Create';

export default function App() {
  const [activePage, setActivePage] = useState('feed');

  const goPage = (id) => {
    setActivePage(id);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Nav activePage={activePage} goPage={goPage} />
      {activePage === 'feed' && <Feed goPage={goPage} />}
      {activePage === 'detail' && <ProjectDetail goPage={goPage} />}
      {activePage === 'profile' && <Profile goPage={goPage} />}
      {activePage === 'match' && <Match />}
      {activePage === 'create' && <Create />}
    </>
  );
}