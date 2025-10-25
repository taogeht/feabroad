import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLanguage } from './hooks/useLanguage';
import LanguageSelector from './components/LanguageSelector';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import UBCPage from './pages/UBCPage';
import BodwellPage from './pages/BodwellPage';
import MediaGallery from './pages/MediaGallery';
import Footer from './components/Footer';

function App() {
  const { language, setLanguage } = useLanguage();

  return (
    <Router>
      <div className="min-h-screen">
        <LanguageSelector language={language} onLanguageChange={setLanguage} />
        <Header language={language} />
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/ubc" element={<UBCPage language={language} />} />
          <Route path="/bodwell" element={<BodwellPage language={language} />} />
          <Route path="/media" element={<MediaGallery language={language} />} />
        </Routes>
        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;