import Navbar from './components/Navbar';
import Comments from './components/Comments';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'; 


function App() {
  return (
  
     <BrowserRouter>
     <div>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Hero/>}></Route>
        <Route path="/blog" element={<Comments/>}></Route>
      </Routes>
      <Skills/>
      <Projects/>
      <Contact/>
      </div>
     </BrowserRouter>
  );
  }

export default App;
