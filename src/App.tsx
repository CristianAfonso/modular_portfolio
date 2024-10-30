import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Career from './Pages/Career';
import Projects from './Pages/Projects/Projects';
import Skills from './Pages/Skills';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="career" element={<Career />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
