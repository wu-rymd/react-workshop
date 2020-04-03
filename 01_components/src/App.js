import React from 'react';
import Navbar from './Navbar';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <Navbar websiteName="Website" />
      <Content />
    </div>
  );
}

export default App;
