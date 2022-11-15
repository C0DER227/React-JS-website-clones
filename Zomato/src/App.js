import React from 'react';

import './styles/App.css';

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Main from './Components/Main';
import Collections from './Components/Collections';
import Location from './Components/Location';
import Mob from './Components/Mob';
import Footer from './Components/Footer';

import './styles/Mob.css'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Main />
      <Collections />
      <Location />
      <Mob />
      <Footer />
    </div>
  );
}

export default App;
