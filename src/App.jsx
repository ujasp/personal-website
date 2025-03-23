import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Articles from './components/Blog';
import BlogPost from './components/BlogPost';
import ArticlesPage from './pages/Articles';
import Footer from './components/Footer';
import SectionNavigator from './components/SectionNavigator';
import './App.css';

const HomePage = () => (
    <>
        <Navbar />
        <SectionNavigator />
        <HeroSection />
        <About />
        <Experience />
        <Skills />
        <Articles />
        <Footer />
    </>
);

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/blog" element={<ArticlesPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
};

export default App;
