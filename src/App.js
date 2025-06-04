import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Learn from './pages/Learn';
import Tools from './pages/Tools';
import FAQs from './pages/FAQs';
import ComingSoon from './pages/ComingSoon';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#0d47a1',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/academy" element={<ComingSoon />} />
            <Route path="/glossary" element={<ComingSoon />} />
            <Route path="/insights" element={<ComingSoon />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path='/investment-calculator' element={<Tools />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App; 