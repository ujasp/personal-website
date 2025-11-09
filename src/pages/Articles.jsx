import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import './Articles.css';

const Articles = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Using the same article data as in BlogPost component
    // Only show external articles
    const articles = [
        {
            title: "GitHub leads the enterprise, Claude leads the pack: Cursor’s speed can’t close",
            description: "Comparing GitHub, Anthropic Claude and Cursor for real-world enterprise workflows — who wins, why, and how to choose pragmatically.",
            pubDate: "2025-10-01T09:00:00",
            thumbnail: "https://images.ctfassets.net/jdtwqhzvc2n1/4mpxx2sCfzGbAB2SBsTwsF/5f197f7ba05d8ab2768240394e1f7c18/Main_Chart_for_Story_Take_5.svg?w=1000&q=100",
            source: "VentureBeat",
            guid: "venturebeat-github-claude-cursor-2025-10-01",
            readTime: "6 min read",
            category: "AI",
            link: "https://venturebeat.com/ai/github-leads-the-enterprise-claude-leads-the-pack-cursors-speed-cant-close"
        },
        {
            title: "Chinese startup Manus challenges ChatGPT in data visualization: Which should enterprises use?",
            description: "A deep dive into how Chinese startup Manus is taking on OpenAI's ChatGPT in the data visualization space, examining the competitive landscape and what enterprises should consider when choosing between these AI-powered solutions.",
            pubDate: "2025-07-22T10:00:00",
            thumbnail: "https://venturebeat.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fjdtwqhzvc2n1%2F1REcmhUTtHLaLaG4IbvO7X%2F94e9a7ea90e730ec62a80b6eec799d31%2FGemini_Generated_Image_nago9hnago9hnago.jpeg&w=1920&q=75",
            source: "VentureBeat",
            guid: "venturebeat-manus-chatgpt-2025",
            readTime: "6 min read",
            category: "Data Infrastructure",
            link: "https://venturebeat.com/data-infrastructure/chinese-startup-manus-challenges-chatgpt-in-data-visualization-which-should-enterprises-use"
        },
        {
            title: "$42.1 million poured into startup offering energy-efficient solutions for costly and unwieldy operational data and AI workloads",
            description: "Exploring how a well-funded startup is tackling the growing challenge of energy-efficient data processing and AI workload management, addressing both cost and environmental concerns in enterprise operations.",
            pubDate: "2025-04-23T14:30:00",
            thumbnail: "https://venturebeat.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fjdtwqhzvc2n1%2Fcs8zeieEKuKiuVc74v5DM%2Fa6b32e1e4652d6deb575d226a6a17061%2FGettyImages-1301445128.jpg&w=1920&q=75",
            source: "VentureBeat",
            guid: "venturebeat-energy-efficient-2025",
            readTime: "7 min read",
            category: "Data Infrastructure",
            link: "https://venturebeat.com/data-infrastructure/42-1-million-poured-into-startup-offering-energy-efficient-solutions-for-costly-and-unwieldy-operational-data-and-ai-workloads"
        },
        {
            title: "Pig API: Give your AI agents a virtual desktop to automate Windows apps",
            description: "In the evolving landscape of AI, enterprises face the challenge of integrating modern solutions with legacy systems that often lack the necessary application programming interfaces (APIs) for seamless integration.",
            pubDate: "2025-01-30T09:15:00",
            thumbnail: "https://venturebeat.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fjdtwqhzvc2n1%2F66XppCUYO2lVfuGcUzDXJi%2Ff73a4bd47870071ce8980784446888bb%2Fa-vector-illustration-of-a-sophisticated_dE40ZnYlTlqEs85jX3HojA_RfAN0as0StqbwUix2n7DgA-transformed.jpeg%3Fw%3D1000%26q%3D100&w=1920&q=75",
            source: "VentureBeat",
            guid: "venturebeat-pig-api-2025",
            readTime: "5 min read",
            category: "AI Integration",
            link: "https://venturebeat.com/ai/pig-api-give-your-ai-agents-a-virtual-desktop-to-automate-windows-apps/"
        }
    ];

    return (
        <>
            <Navbar />
            <div className="articles-page">
                <div className="articles-page-header">
                    <h1>Articles</h1>
                    <p>Exploring the intersection of AI, technology, and business innovation</p>
                </div>
                
                <div className="articles-grid">
                    {articles.map((article) => (
                        article.link ? (
                            <a href={article.link} target="_blank" rel="noopener noreferrer" key={article.guid} className="article-card">
                                <img 
                                    src={article.thumbnail} 
                                    alt={article.title}
                                    className="article-image"
                                />
                                <div className="article-content">
                                    <div className="article-meta">
                                        <span className="article-category">{article.category}</span>
                                        <span className="article-read-time">{article.readTime}</span>
                                    </div>
                                    <h2 className="article-title">{article.title}</h2>
                                    <p className="article-description">{article.description}</p>
                                    <div className="article-footer">
                                        <span className="article-date">
                                            {new Date(article.pubDate).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                        <span className="article-link">
                                            Read on {article.source} <FiArrowRight />
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ) : (
                            <Link to={`/blog/${article.guid}`} key={article.guid} className="article-card">
                                <img 
                                    src={article.thumbnail} 
                                    alt={article.title}
                                    className="article-image"
                                />
                                <div className="article-content">
                                    <div className="article-meta">
                                        <span className="article-category">{article.category}</span>
                                        <span className="article-read-time">{article.readTime}</span>
                                    </div>
                                    <h2 className="article-title">{article.title}</h2>
                                    <p className="article-description">{article.description}</p>
                                    <div className="article-footer">
                                        <span className="article-date">
                                            {new Date(article.pubDate).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                        <span className="article-link">
                                            Read Article <FiArrowRight />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        )
                    ))}
                </div>
            </div>
        </>
    );
};

export default Articles; 