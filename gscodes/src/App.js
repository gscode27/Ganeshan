import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import Organisation from "./pages/Organisation";
import Certificates from "./pages/Certificates";
import Skills from "./pages/Skills";
import Project from "./pages/Project";

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<MainLayout />}>
          <Route index element={<AboutMe />} />
           <Route path="/Education" element={<Education />} />
           <Route path="/Organisation" element={<Organisation />} />  
           <Route path="/Certificates" element={<Certificates />} /> 
           <Route path="/Skills" element={<Skills />} /> 
           <Route path="/Project" element={<Project />} /> 
        </Route>        
      </Routes>
    </Router>
  );
}

export default App;




