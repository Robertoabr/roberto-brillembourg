import React from 'react';
import './App.css';
import { Navbar, Projects, Jumbo, About, Footer } from './components';

function App() {
  return (
    <div className="App">
      <Jumbo />
      <Navbar />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
