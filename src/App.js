import React from 'react';
import './App.scss';

import PageHeader from './Components/PageHeader/index';
import TeamSettings from './Components/TeamSettings';
import PickedTeams from './Components/PickedTeams';

function App() {
  return (
    <>
      <PageHeader/>
      <TeamSettings/>
      <PickedTeams/>
    </>
  );
}

export default App;
