import React from 'react';
import './App.scss';

import PageHeader from './Components/PageHeader/index';
import TeamsSetup from './Components/TeamsSetup';
import PickedTeams from './Components/PickedTeams';

function App() {
  return (
    <>
      <PageHeader/>
      <TeamsSetup/>
      <PickedTeams/>
    </>
  );
}

export default App;
