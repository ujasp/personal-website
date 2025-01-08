import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const About = () => {
    return (
        <motion.section 
            className="section"
            id="about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            {/* Section Heading */}
            <h2>A little bit about me</h2>

            {/* Personal Summary */}
            <p>
                I am a Sydney-based MBA graduate with over four years of experience in software engineering, strategy consulting, 
                and data analytics. I've collaborated with companies like Rezdy, ResMed, and 
                WEHI, focusing on delivering technology-driven insights for business growth.
            </p>
        </motion.section>
    );
};

export default About;
