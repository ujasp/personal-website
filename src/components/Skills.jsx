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
            category: "Product",
            skills: [
                { icon: <FaProjectDiagram />, name: 'Roadmapping & Backlog' },
                { icon: <FaTasks />, name: 'PRDs & User Stories' },
                { icon: <GiCycle />, name: 'Continuous Discovery' }
            ]
        },
        {
            category: "AI Transformation",
            skills: [
                { icon: <FaChartBar />, name: 'Generative AI (agents, summarisation, retrieval)' },
                { icon: <FaMagnifyingGlassChart />, name: 'Data Governance & Auditability' }
            ]
        },
        {
            category: "Strategy & Analytics",
            skills: [
                { icon: <FaChartBar />, name: 'KPI Design & Benefits Realisation' },
                { icon: <FaDatabase />, name: 'BigQuery / SQL' },
                { icon: <FaChartBar />, name: 'BI (GoodData, Power BI, Tableau)' },
                { icon: <FaPython />, name: 'Python' }
            ]
        },
        {
            category: "Partnering & Delivery",
            skills: [
                { icon: <FaChartBar />, name: 'Finance Partnership (pricing, business casing)' },
                { icon: <RiTeamFill />, name: 'Stakeholder Mgmt (Finance, Risk, Tech, Exec)' },
                { icon: <SiJirasoftware />, name: 'Agile / Scrum (Jira / Confluence)' },
                { icon: <PiMicrosoftExcelLogoFill />, name: 'Excel' }
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
            <div className="section-header">
                <h2>Skills I've Leveraged to Make This Impact</h2>
                <p>A comprehensive toolkit that drives success across projects and teams</p>
            </div>
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