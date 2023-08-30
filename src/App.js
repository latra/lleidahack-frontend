import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contacte from "src/pages/Contacte";
import Error404 from "src/pages/Error404";
import FAQPage from "src/pages/FAQ";
import Home from "src/pages/Home";
import React, { useEffect } from "react";
import Profile from "src/pages/Profile/Profile.js";
import HackerForm from "src/components/Forms/HackerForm";
import Testing from "src/components/others/Testing";
import Sponsors from "./pages/Sponsors";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Hace el scroll hacia arriba cuando cambia de página
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contacte" element={<Contacte />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/perfil/:id" element={<Profile />} />
          <Route path="/" element={<Home />} />
          <Route path="/hacker-form" element={<HackerForm />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/sponsors" element={<Sponsors defaultId={0} />} />
          <Route path="/sponsors/:ids" element={<Sponsors />} />
        </Routes>
      </Router>
    </div>
  );
}
