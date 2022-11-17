import React from 'react';
import './App.css';


import Navbar from './components/Navbar';
import Main from './components/Main';
import Section1 from './components/Section1';
import About from './components/About';
import Why from './components/Why';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Section1 />
      <About />
      <Why />
      <Footer />
    </div>
  );
}

export default App;
