import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Connexion from "./pages/Connexion.jsx";
import Gift from "./pages/Gift.jsx";
import Events from "./pages/Events.jsx";
import Contact from "./pages/Contact.jsx";
import Conference from "./pages/Conference.jsx";

export default function App() {
  return (
   
    <>
  
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/connexion" element={<Connexion/>} />
      <Route path="/gift" element={<Gift/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/conferences" element={<Conference/>} />
     </Routes>
    
    </>
  )
}