import React from 'react';
// Importing icons from the correct libraries
import { FaPython, FaDatabase, FaChartBar, FaProjectDiagram, FaTasks } from 'react-icons/fa';
import { FaMagnifyingGlassChart } from 'react-icons/fa6';
import { SiTableau, SiJirasoftware } from 'react-icons/si';
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi';
import { RiTeamFill } from 'react-icons/ri';
import { GiCycle } from 'react-icons/gi';
import { TbPresentationAnalyticsFilled } from 'react-icons/tb';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import '../App.css';

const Skills = () => {
    const skillsData = [
        {
            category: "Technical Skills",
            skills: [
                { icon: <FaPython />, name: 'Python' },
                { icon: <FaDatabase />, name: 'SQL' },
                { icon: <SiTableau />, name: 'Tableau' },
                { icon: <SiJirasoftware />, name: 'JIRA' },
                { icon: <PiMicrosoftExcelLogoFill />, name: 'Excel' }
            ]
        },
        {
            category: "Business & Analytical Acumen",
            skills: [
                { icon: <FaChartBar />, name: 'Financial Modeling' },
                { icon: <FaMagnifyingGlassChart />, name: 'Market Research & Analysis' },
                { icon: <GiCycle />, name: 'Process Improvement' }
            ]
        },
        {
            category: "Project Management & Methodologies",
            skills: [
                { icon: <FaProjectDiagram />, name: 'Product Management' },
                { icon: <FaTasks />, name: 'Agile Development (Scrum)' },
                { icon: <RiTeamFill />, name: 'Stakeholder Management' }
            ]
        },
        {
            category: "Leadership & Collaboration",
            skills: [
                { icon: <TbPresentationAnalyticsFilled />, name: 'Strategic Consulting' },
                { icon: <BsFillRocketTakeoffFill />, name: 'Team Leadership' }
            ]
        }
    ];

    return (
        <motion.section 
            className="skills-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            id="skills"
        >
            <h2>Skills I've Leveraged to Make This Impact</h2>
            <div className="skills-grid">
                {skillsData.map((category, index) => (
                    <div className="skills-category" key={index}>
                        <h3>{category.category}</h3>
                        {/* Flex container adjusted for single-row display */}
                        <div className="skills-list same-row">
                            {category.skills.map((skill, i) => (
                                <motion.div 
                                    className="skill-item"
                                    key={i}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="skill-icon">{skill.icon}</div>
                                    <p className="skill-name">{skill.name}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default Skills;