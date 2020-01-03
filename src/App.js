import React from 'react';
import './App.css';

import PageHeader from './Components/PageHeader';

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
