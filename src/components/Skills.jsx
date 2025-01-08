import React from 'react';
import { FaPython, FaDatabase, FaReact, FaJsSquare, FaChartBar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../App.css';

const Skills = () => {
    const skills = [
        { icon: <FaPython className="skill-icon" />, name: 'Python' },
        { icon: <FaDatabase className="skill-icon" />, name: 'SQL' },
        { icon: <FaReact className="skill-icon" />, name: 'React.js' },
        { icon: <FaJsSquare className="skill-icon" />, name: 'JavaScript' },
        { icon: <FaChartBar className="skill-icon" />, name: 'Data Visualization' }
    ];

    return (
        <motion.section 
            className="section"
            id="skills"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <h2>Skills I've Leveraged to Make This Impact</h2>
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <motion.div 
                        className="skill-item"
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                    >
                        {skill.icon}
                        <p>{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Skills;