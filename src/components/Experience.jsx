import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const Experience = () => {
    // Define your experiences with logos and descriptions using PUBLIC_URL
    const experiences = [
        {
            company: 'Rezdy',
            logo: `${process.env.PUBLIC_URL}/logos/rezdy-logo.jpeg`,
            role: 'Business Intelligence Analyst',
            description: 'Automated business reporting tool for clients cutting down report generation time by 80% and improving insights for clients.'
        },
        {
            company: 'ResMed',
            logo: `${process.env.PUBLIC_URL}/logos/resmed-logo.jpeg`,
            role: 'Software Engineer',
            description: 'Initiated the automation of SaaS testing, reducing pre-launch testing time by 60% and achieving 100% accuracy, while streamlining JIRA ticket management and successfully supporting a $2B product rollout.'
        },
        {
            company: 'Innovior',
            logo: `${process.env.PUBLIC_URL}/logos/innovior-logo.jpeg`,
            role: 'MBA Internship - Strategic Consulting Project',
            description: 'Led a strategic consulting project identifying Gen AI technologies in customer service, creating a plan with the potential to save $102 million over four years and reduce customer handling times by 20-40% through process improvements.'
        },
        {
            company: 'Zensh Living',
            logo: `${process.env.PUBLIC_URL}/logos/zensh-logo.jpeg`,
            role: 'Founder',
            description: 'Founded a sustainable e-commerce brand, achieving 50% sales growth in the first year by leading a digital marketing campaign, negotiating a 20% cost reduction with suppliers, and shifting to an automated Amazon FBA model.'
        }
    ];

    return (
        <motion.section 
            className="section"
            id="experience"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="section-header">
                <h2>Where I've Made an Impact</h2>
                <p>A journey through my professional experiences and achievements</p>
            </div>

            {/* Experience List with Logos */}
            {experiences.map((item, index) => (
                <motion.div 
                    className="experience-item"
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                    {/* Company Logo */}
                    <img src={item.logo} alt={`${item.company} Logo`} className="company-logo" />
                    
                    {/* Role & Description */}
                    <div className="experience-text">
                        <h3 className='company-name'>{item.company}</h3>
                        <h3 className='job-title'>{item.role}</h3>
                        <p>{item.description}</p>
                    </div>
                </motion.div>
            ))}
        </motion.section>
    );
};

export default Experience;