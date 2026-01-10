import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="antialiased selection:bg-uth-gold selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Stack />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;