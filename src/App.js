import React from 'react';
import './App.css';

import PageHeader from './Components/PageHeader';
import AddPlayer from './Components/AddPlayer';
import CreatedPlayerList from './Components/CreatedPlayerList';
import ResetButton from './Components/ResetButton';
import RandomisedTeam1 from './Components/RandomisedTeam/RandomisedTeam1';
import RandomisedTeam2 from './Components/RandomisedTeam/RandomisedTeam2';

function App() {
  return (
    <>
      <PageHeader/>
      <AddPlayer/>
      <CreatedPlayerList/>
      <ResetButton/>
      <RandomisedTeam1/>
      <RandomisedTeam2/>
    </>
  );
}

export default App;
