import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import '../App.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleSectionClick = (sectionId) => {
        setIsMobileMenuOpen(false);
        
        if (location.pathname === '/') {
            // If on home page, just scroll to section
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If on another page, navigate to home with section hash
            navigate('/', { state: { scrollTo: sectionId } });
        }
    };

    // Effect to handle scrolling when navigating from other pages
    useEffect(() => {
        if (location.pathname === '/' && location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            // Clear the state after scrolling
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Ujas Patel
                </Link>

                <div className="mobile-menu-button" onClick={toggleMobileMenu}>
                    <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
                </div>

                <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleSectionClick('about'); }}>About</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleSectionClick('experience'); }}>Experience</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleSectionClick('skills'); }}>Skills</a>
                    <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Articles</Link>
                    <a href="https://www.linkedin.com/in/ujas-patel/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="linkedin-link"
                       onClick={() => setIsMobileMenuOpen(false)}>
                        <FaLinkedin className="navbar-icon" />
                        Connect
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;