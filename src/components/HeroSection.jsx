import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const HeroSection = () => {
    return (
        <motion.section 
            className="header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            {/* Desktop Layout Adjustment: Split Section */}
            <div className="hero-container">
                {/* Left Side - Full-Height Profile Picture */}
                <div className="hero-image-container">
                    <img 
                        src={`${process.env.PUBLIC_URL}/profile.png`} 
                        alt="Ujas Patel" 
                        className="profile-pic-desktop"
                    />
                </div>

                {/* Right Side - Title, Taglines, Button */}
                <div className="hero-content">
                    <h1>Ujas Patel</h1>
                    <p className="hero-degree">MBA, BSc (Software)</p>
                    <p className="hero-tagline">Strategy Consultant</p>
                    <p className="hero-tagline">Data Analyst</p>
                    <p className="hero-tagline">Relationship Builder</p>
                    <motion.button 
                        className="cta-button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.open('https://www.linkedin.com/in/ujas-patel/', '_blank')}
                    >
                        Connect on LinkedIn
                    </motion.button>
                </div>
            </div>
        </motion.section>
    );
};

export default HeroSection;