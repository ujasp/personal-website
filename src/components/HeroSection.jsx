import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import '../App.css';

const HeroSection = () => {
    return (
        <header className="header">
            <div className="hero-background-shapes">
                <motion.div 
                    className="shape shape-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.08 }}
                    transition={{ duration: 1.5 }}
                />
                <motion.div 
                    className="shape shape-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.08 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                />
                <motion.div 
                    className="shape shape-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.05 }}
                    transition={{ duration: 1.5, delay: 0.4 }}
                />
            </div>
            
            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="highlight">Ujas Patel</span>
                    </motion.h1>
                    <motion.p 
                        className="hero-degree"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        MBA, BSc (Software)
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <p className="hero-tagline">Strategy Consultant</p>
                        <p className="hero-tagline">Data Analyst</p>
                        <p className="hero-tagline">Relationship Builder</p>
                    </motion.div>
                    
                    <motion.div 
                        className="hero-social-links"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <a href="https://github.com/ujasp" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/ujas-patel/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaLinkedin />
                        </a>
                    </motion.div>

                    <motion.button 
                        className="cta-button"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => window.open('https://www.linkedin.com/in/ujas-patel/', '_blank')}
                    >
                        <span>Let's Connect</span>
                        <FaArrowRight />
                    </motion.button>
                </motion.div>

                <motion.div 
                    className="hero-image-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <motion.div
                        className="profile-pic-container"
                        whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <motion.img
                            src="/profile.png"
                            alt="Ujas Patel"
                            className="profile-pic-desktop"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </header>
    );
};

export default HeroSection;