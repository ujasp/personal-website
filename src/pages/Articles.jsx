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
    const articles = [
        {
            title: "How AI is Revolutionizing Product Strategy and Management Consulting",
            description: "Artificial Intelligence is transforming the landscape of product management and strategy consulting. From predictive analytics for product-market fit to AI-powered decision support systems, discover how modern tools are enabling data-driven product strategies and revolutionizing traditional consulting approaches.",
            pubDate: "2025-02-15T10:00:00",
            thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
            source: "Coming Soon",
            guid: "ai-product-strategy-2025",
            readTime: "8 min read",
            category: "Product Strategy"
        },
        {
            title: "The Rise of AI Copilots: Transforming Developer Productivity",
            description: "Explore how AI-powered coding assistants are revolutionizing software development. From code completion to natural language programming, learn how these tools are boosting developer productivity and changing the way we write code.",
            pubDate: "2025-02-10T09:00:00",
            thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1000",
            source: "Coming Soon",
            guid: "ai-copilots-2025",
            readTime: "6 min read",
            category: "Development"
        },
        {
            title: "AI-Powered Project Management: The Future of Team Collaboration",
            description: "Discover how artificial intelligence is transforming project management tools, from automated task prioritization to intelligent resource allocation and predictive analytics for project success.",
            pubDate: "2025-02-05T11:00:00",
            thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000",
            source: "Coming Soon",
            guid: "ai-project-management-2025",
            readTime: "7 min read",
            category: "Project Management"
        },
        {
            title: "Natural Language Processing in Business Intelligence",
            description: "How conversational AI and NLP are making data analytics accessible to everyone. From natural language queries to automated insights generation, explore the democratization of business intelligence.",
            pubDate: "2025-01-25T14:00:00",
            thumbnail: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1000",
            source: "Coming Soon",
            guid: "nlp-bi-2025",
            readTime: "5 min read",
            category: "Business Intelligence"
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
                    ))}
                </div>
            </div>
        </>
    );
};

export default Articles; 