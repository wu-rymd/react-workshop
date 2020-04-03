import React from 'react';
import Navbar from './Navbar';
import Content from './Content';
import Clicker from './Clicker';

function App() {
  return (
    <div className="App">
      <Navbar websiteName="Website" />
      <Content />
      <Clicker />
    </div>
  );
}

export default App;
