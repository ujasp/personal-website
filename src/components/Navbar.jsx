import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import '../App.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Navbar Links - Always Visible */}
                <div className="navbar-links">
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#skills">Skills</a>
                    {/* LinkedIn Icon Before "Connect" */}
                    <a 
                        href="https://www.linkedin.com/in/ujas-patel" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="linkedin-link"
                    >
                        <FaLinkedin className="navbar-icon" />
                        Connect
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;