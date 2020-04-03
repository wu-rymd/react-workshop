import React from 'react';
import Navbar from './Navbar';
import Converter from './Converter';

function App() {
  return (
    <div className="App">
      <Navbar websiteName="Website" />
      <Converter />
    </div>
  );
}

export default App;
