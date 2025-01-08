import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return (
        <>
            {/* Navbar for Site Navigation */}
            <Navbar />
            
            {/* Hero Section */}
            <HeroSection />
            
            {/* Main Content Sections */}
            <About />
            <Experience />
            <Skills />
            
            {/* Footer Section */}
            <Footer />
        </>
    );
};

export default App;
