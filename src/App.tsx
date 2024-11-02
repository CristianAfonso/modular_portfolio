import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from './Layout';
import Career from './Pages/Career';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';

function App() {
  return (
      <HashRouter> 
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/career" element={<Career />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Route>
        </Routes>
      </HashRouter>
  );
}

export default App;
