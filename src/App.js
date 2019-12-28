import React from 'react';
import './App.css';

import PageHeader from './Components/PageHeader';
import AddPlayer from './Components/AddPlayer';
import CreatedPlayerList from './Components/CreatedPlayerList';

function App() {
  return (
    <>
      <PageHeader/>
      <AddPlayer/>
      <CreatedPlayerList/>
    </>
  );
}

export default App;
