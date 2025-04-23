import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import PrivacyPolicy from './views/PrivacyPolicy';
import DisclaimBanner from "./components/other/DisclaimBanner";
import { darkTheme, lightTheme } from './components/theme/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Navbar from './components/home/Navbar';
import Footer from './components/home/Footer';
import ScrollToTop from "./components/other/ScrollToTop";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const currentTheme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <DisclaimBanner darkMode={darkMode} />
      <Router>
      <ScrollToTop />
      <Navbar darkMode={darkMode} handleThemeToggle={() => setDarkMode(!darkMode)} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer darkMode={darkMode} />
      </Router>
    </ThemeProvider>
  );
}

export default App;