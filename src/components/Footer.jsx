import React from 'react';
import '../App.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Ujas Patel. All Rights Reserved.</p>
            <p>
                <a href="https://www.linkedin.com/in/ujas-patel/" target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn
                </a>
            </p>
        </footer>
    );
};

export default Footer;
