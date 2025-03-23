import React, { useState, useEffect } from 'react';

const SectionNavigator = () => {
    const [activeSection, setActiveSection] = useState('about');

    const sections = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'articles', label: 'Articles' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const pageYOffset = window.pageYOffset;
            let newActiveSection = sections[0].id;

            sections.forEach(({ id }) => {
                const element = document.getElementById(id);
                if (element) {
                    const offsetTop = element.offsetTop - 100;
                    if (pageYOffset >= offsetTop) {
                        newActiveSection = id;
                    }
                }
            });

            setActiveSection(newActiveSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="section-navigator">
            {sections.map(({ id, label }) => (
                <a
                    key={id}
                    href={`#${id}`}
                    className={`nav-item ${activeSection === id ? 'active' : ''}`}
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick(id);
                    }}
                >
                    <span>{label}</span>
                </a>
            ))}
        </nav>
    );
};

export default SectionNavigator; 