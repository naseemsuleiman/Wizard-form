import './App.css'
import { Route, Routes } from "react-router-dom";
import Personal from './Components/Personal'
import Preference from './Components/Preference'
import Experience from './Components/Experience';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Resume from './Components/Resume';
import Additional from './Components/Additional';
import Reference from './Components/Reference';
import Review from './Components/Review';
import Nav from './Components/Nav';
import Landingpage from './Components/Landingpage';




function App() {
  return (
    <>
    <Nav/>
    <Routes>
    <Route path="/" element={<Personal/>} />
    <Route path="/preference" element={<Preference />} />
    <Route path="/experience" element={<Experience />} />
    <Route path="/education" element={<Education/>} />
    <Route path="/skills" element={<Skills/>}/>
    <Route path="/resume" element={<Resume/>}/>
    <Route path="/additional" element={<Additional/>}/>
    <Route path="/reference" element={<Reference/>}/>
    <Route path="/review" element={<Review/>}/>
    <Route path="/landingpage" element={<Landingpage/>}/>
     </Routes>
    </>
  )
}

export default App
