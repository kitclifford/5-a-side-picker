import React from 'react';
import './App.css';

import PageHeader from './Components/PageHeader';
import AddPlayer from './Components/AddPlayer';
import CreatedPlayerList from './Components/CreatedPlayerList';
import ResetButton from './Components/ResetButton';

function App() {
  return (
    <>
      <PageHeader/>
      <AddPlayer/>
      <CreatedPlayerList/>
      <ResetButton/>
    </>
  );
}

export default App;
