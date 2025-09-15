import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import Navbar from './Navbar';
import { AdBanner, InContentAd } from './ads';
import './BlogPost.css';

const ARTICLES_DATA = {
    'ai-product-strategy-2025': {
        insights: [
            {
                icon: '🎯',
                title: 'Strategic Decision Making',
                description: 'AI algorithms analyzing market trends and customer behavior to inform product strategy, reducing decision time by 60%'
            },
            {
                icon: '🤖',
                title: 'Automated Analysis',
                description: 'Machine learning models processing vast amounts of market data, providing actionable insights with 85% accuracy'
            },
            {
                icon: '📈',
                title: 'Predictive Planning',
                description: 'Using AI to forecast market trends and optimize product roadmaps, increasing market fit by 40%'
            }
        ],
        sections: [
            {
                title: "The Current Landscape",
                content: "In today's rapidly evolving market, product managers and consultants face unprecedented challenges in making data-driven decisions. Traditional approaches to market analysis and product strategy are becoming increasingly inadequate as the volume and complexity of market data continue to grow exponentially."
            },
            {
                title: "AI's Transformative Impact",
                content: "Artificial Intelligence is fundamentally changing how organizations approach product strategy. Modern AI tools can process and analyze vast amounts of market data, customer feedback, and competitive intelligence in real-time. This capability is enabling product managers to make decisions based on comprehensive market understanding rather than limited sampling or intuition."
            },
            {
                title: "Key Benefits for Decision Makers",
                listItems: [
                    "Reduce time-to-market by 40% through automated market analysis",
                    "Increase product-market fit accuracy by 65% using AI-driven insights",
                    "Save 30% on market research costs while improving data quality",
                    "Achieve 85% better prediction of market trends and customer needs"
                ]
            },
            {
                title: "Implementation Framework",
                content: "The integration of AI in product strategy follows a clear framework:",
                steps: [
                    {
                        title: "Data Integration",
                        description: "Connect all data sources including market research, customer feedback, and competitive analysis"
                    },
                    {
                        title: "AI Model Selection",
                        description: "Choose appropriate AI models for different aspects of product strategy"
                    },
                    {
                        title: "Process Automation",
                        description: "Automate routine analysis and reporting tasks"
                    },
                    {
                        title: "Decision Support",
                        description: "Implement AI-driven decision support systems"
                    }
                ]
            },
            {
                title: "ROI Analysis",
                content: "Organizations implementing AI-driven product strategy have seen significant returns:",
                metrics: [
                    { label: "Reduced Decision Time", value: "60%" },
                    { label: "Improved Market Fit", value: "65%" },
                    { label: "Cost Reduction", value: "30%" },
                    { label: "Increased Revenue", value: "45%" }
                ]
            }
        ],
        content: "The integration of AI in product strategy marks a fundamental shift in how businesses approach market analysis and decision-making. Modern AI tools are enabling product managers to process vast amounts of market data, customer feedback, and competitive intelligence in real-time, leading to more informed strategic decisions. This transformation is particularly crucial for mid-sized enterprises looking to compete with larger organizations.\n\nBy leveraging AI-powered analytics, companies can now process and analyze market data at a scale previously impossible with traditional methods. This capability isn't just about processing more data – it's about deriving actionable insights that directly impact product success in the market.\n\nFor decision-makers, the key advantage lies in the ability to make data-driven decisions with greater confidence and speed. AI systems can identify patterns and trends that might be invisible to human analysts, providing a competitive edge in rapidly evolving markets."
    },
    'ai-copilots-2025': {
        insights: [
            {
                icon: '⚡',
                title: 'Enhanced Productivity',
                description: 'AI copilots reducing development time by 40% through intelligent code suggestions and automation'
            },
            {
                icon: '🔍',
                title: 'Smart Code Analysis',
                description: 'Real-time code review and optimization recommendations, improving code quality by 60%'
            },
            {
                icon: '🚀',
                title: 'Accelerated Learning',
                description: 'AI-powered contextual documentation and best practices, reducing onboarding time by 50%'
            }
        ],
        sections: [
            {
                title: "The Evolution of Development",
                content: "Software development is undergoing a revolutionary transformation with the advent of AI copilots. These intelligent assistants are not just code completion tools – they represent a fundamental shift in how developers interact with code and solve complex problems."
            },
            {
                title: "Business Impact Analysis",
                content: "For technology leaders and decision-makers, AI copilots offer compelling business advantages:",
                listItems: [
                    "40% reduction in development time",
                    "60% improvement in code quality",
                    "50% faster onboarding for new developers",
                    "35% reduction in technical debt"
                ]
            },
            {
                title: "Implementation Strategy",
                steps: [
                    {
                        title: "Assessment",
                        description: "Evaluate current development workflows and identify optimization opportunities"
                    },
                    {
                        title: "Tool Selection",
                        description: "Choose appropriate AI copilot solutions based on tech stack and team needs"
                    },
                    {
                        title: "Integration",
                        description: "Implement and integrate AI tools into existing development workflows"
                    },
                    {
                        title: "Training",
                        description: "Train teams on effective use of AI copilots and best practices"
                    }
                ]
            },
            {
                title: "Cost-Benefit Analysis",
                metrics: [
                    { label: "Development Speed", value: "+40%" },
                    { label: "Code Quality", value: "+60%" },
                    { label: "Cost Savings", value: "35%" },
                    { label: "Team Efficiency", value: "45%" }
                ]
            }
        ],
        content: "AI copilots are revolutionizing software development by providing intelligent assistance that goes far beyond simple code completion. These tools understand context, suggest optimizations, and help developers learn best practices in real-time. For business leaders, this translates into significant improvements in development efficiency and code quality.\n\nThe impact on business operations is substantial. Teams using AI copilots report up to 40% reduction in development time, while simultaneously improving code quality by 60%. This efficiency gain directly affects the bottom line, allowing companies to bring products to market faster and with fewer defects.\n\nFor CTOs and technical managers, the decision to implement AI copilots is increasingly becoming a strategic necessity rather than a luxury. The competitive advantage gained through improved developer productivity and code quality can be the difference between market leadership and falling behind."
    },
    'ai-project-management-2025': {
        insights: [
            {
                icon: '📊',
                title: 'Smart Scheduling',
                description: 'AI algorithms optimizing project timelines and resource allocation, improving efficiency by 45%'
            },
            {
                icon: '🎯',
                title: 'Risk Prediction',
                description: 'Early warning systems detecting potential project risks with 80% accuracy'
            },
            {
                icon: '🤝',
                title: 'Team Optimization',
                description: 'AI-driven insights improving team collaboration and reducing bottlenecks by 55%'
            }
        ],
        sections: [
            {
                title: "Transforming Project Management",
                content: "The integration of AI in project management is revolutionizing how teams plan, execute, and deliver projects. This transformation is particularly relevant for organizations looking to improve project success rates and resource utilization."
            },
            {
                title: "Key Capabilities",
                listItems: [
                    "Automated resource allocation and optimization",
                    "Predictive analytics for risk management",
                    "Real-time project health monitoring",
                    "Intelligent task prioritization and assignment"
                ]
            },
            {
                title: "Implementation Roadmap",
                steps: [
                    {
                        title: "Assessment",
                        description: "Evaluate current project management processes and pain points"
                    },
                    {
                        title: "Tool Selection",
                        description: "Choose AI-powered project management solutions"
                    },
                    {
                        title: "Process Integration",
                        description: "Implement new tools and adapt workflows"
                    },
                    {
                        title: "Team Training",
                        description: "Train teams on new AI-powered capabilities"
                    }
                ]
            },
            {
                title: "Performance Metrics",
                metrics: [
                    { label: "Project Efficiency", value: "+45%" },
                    { label: "Risk Prediction", value: "80%" },
                    { label: "Resource Optimization", value: "55%" },
                    { label: "Project Success Rate", value: "+40%" }
                ]
            }
        ],
        content: "Project management is being transformed by AI-powered tools that can predict bottlenecks, optimize resource allocation, and provide data-driven insights for better decision-making. For project managers and business leaders, this means more successful project outcomes and better resource utilization.\n\nThe impact is particularly significant in three key areas: resource allocation, risk management, and team collaboration. AI algorithms can analyze historical project data and current team capacity to optimize resource allocation, while predictive analytics can identify potential risks before they impact project timelines.\n\nFor organizations looking to improve their project management capabilities, AI offers a clear path to higher efficiency and better outcomes. The technology's ability to process vast amounts of project data and provide actionable insights is transforming how teams work and how projects are delivered."
    },
    'nlp-bi-2025': {
        insights: [
            {
                icon: '💬',
                title: 'Natural Queries',
                description: 'Conversational interfaces reducing data analysis time by 65% for business users'
            },
            {
                icon: '🔄',
                title: 'Automated Insights',
                description: 'AI-powered discovery identifying business opportunities with 75% accuracy'
            },
            {
                icon: '📱',
                title: 'Accessibility',
                description: 'Democratic access to data analytics improving decision-making speed by 50%'
            }
        ],
        sections: [
            {
                title: "Democratizing Data Analysis",
                content: "Natural Language Processing is breaking down the traditional barriers between business users and their data. This transformation is enabling non-technical users to perform sophisticated data analysis through simple, conversational interfaces."
            },
            {
                title: "Business Benefits",
                listItems: [
                    "65% faster data analysis for business users",
                    "75% accuracy in automated insight generation",
                    "50% improvement in decision-making speed",
                    "40% reduction in reliance on technical teams"
                ]
            },
            {
                title: "High-Value Use Cases",
                listItems: [
                    "KPI Q&A: executives ask plain-English questions over metrics",
                    "Root-cause analysis: drill-down paths generated automatically",
                    "Anomaly explanation: summarize outliers and likely drivers",
                    "Meeting-ready narratives: auto-generate weekly performance briefs"
                ]
            },
            {
                title: "Implementation Guide",
                steps: [
                    {
                        title: "Data Preparation",
                        description: "Organize and structure data for NLP processing"
                    },
                    {
                        title: "Tool Integration",
                        description: "Implement NLP-powered BI solutions"
                    },
                    {
                        title: "User Training",
                        description: "Train business users on conversational analytics"
                    },
                    {
                        title: "Continuous Improvement",
                        description: "Monitor and optimize NLP models"
                    }
                ]
            },
            {
                title: "Architecture Overview",
                steps: [
                    { title: "Semantic Layer", description: "Define metrics, entities, and joins in a governed layer" },
                    { title: "Query Orchestration", description: "Route NL queries to SQL/OLAP engines with caching" },
                    { title: "LLM Reasoning", description: "Translate intent → structured query → narrative summary" },
                    { title: "Safety & Guardrails", description: "Row/column security, PII masking, prompt safety, rate limits" }
                ]
            },
            {
                title: "Success Metrics",
                metrics: [
                    { label: "Analysis Speed", value: "+65%" },
                    { label: "Insight Accuracy", value: "75%" },
                    { label: "User Adoption", value: "80%" },
                    { label: "Cost Savings", value: "40%" }
                ]
            },
            {
                title: "Risks & Mitigations",
                listItems: [
                    "Hallucinations → require source citations and drill-to-data",
                    "Security gaps → enforce RBAC at the warehouse and app layers",
                    "Data drift → monitor model prompts and outcomes over time",
                    "Change management → phased rollout with targeted enablement"
                ]
            }
        ],
        content: "Natural Language Processing is democratizing access to business intelligence by allowing users to interact with data using conversational language. This is most impactful when paired with a governed semantic layer that ensures metric consistency across the organization.\n\nModern NL-to-BI systems translate questions to structured queries, retrieve results from the warehouse, and produce concise narratives that cite the underlying tables and metrics. The combination of transparency (links to data) and speed (seconds to answers) drives adoption beyond analyst teams.\n\nLeaders should pilot with a constrained set of high-value domains (e.g., revenue, pipeline, support) and measure success by time-to-answer, narrative accuracy, and downstream actionability. With the right guardrails, NL BI can shift entire organizations from static dashboards to truly conversational decision-making."
    },
    'ai-customer-service-2025': {
        insights: [
            {
                icon: '🎯',
                title: 'Personalization',
                description: 'AI agents delivering personalized experiences with 90% customer satisfaction'
            },
            {
                icon: '⚡',
                title: 'Real-time Analysis',
                description: 'Instant sentiment analysis improving response accuracy by 70%'
            },
            {
                icon: '🤝',
                title: 'Seamless Handoff',
                description: 'Intelligent routing reducing resolution time by 55% through optimal agent matching'
            }
        ],
        sections: [
            {
                title: "Beyond Traditional Chatbots",
                content: "The next generation of AI customer service represents a quantum leap beyond traditional chatbots. These sophisticated systems understand context, emotion, and complex queries, providing a level of service that rivals human agents."
            },
            {
                title: "Key Advantages",
                listItems: [
                    "90% customer satisfaction rate",
                    "70% improvement in response accuracy",
                    "55% reduction in resolution time",
                    "40% cost reduction in service operations"
                ]
            },
            {
                title: "Implementation Strategy",
                steps: [
                    {
                        title: "Assessment",
                        description: "Evaluate current customer service challenges"
                    },
                    {
                        title: "AI Selection",
                        description: "Choose appropriate AI service solutions"
                    },
                    {
                        title: "Integration",
                        description: "Implement and integrate with existing systems"
                    },
                    {
                        title: "Training",
                        description: "Train both AI systems and human agents"
                    }
                ]
            },
            {
                title: "Performance Metrics",
                metrics: [
                    { label: "Customer Satisfaction", value: "90%" },
                    { label: "Response Accuracy", value: "70%" },
                    { label: "Resolution Speed", value: "+55%" },
                    { label: "Cost Reduction", value: "40%" }
                ]
            }
        ],
        content: "The next generation of AI customer service goes beyond simple chatbots, offering sophisticated agents that can understand context, emotion, and complex queries. For business leaders, this represents a significant opportunity to improve customer satisfaction while reducing operational costs.\n\nThese AI systems can handle a wide range of customer interactions, from simple inquiries to complex problem-solving. They learn from each interaction, continuously improving their ability to provide accurate and helpful responses. The technology's ability to understand context and emotion enables it to provide more empathetic and effective customer service.\n\nFor organizations looking to improve their customer service operations, AI offers a clear path to higher efficiency and better customer satisfaction. The technology's ability to handle multiple interactions simultaneously while maintaining high quality of service makes it an invaluable tool for scaling customer support operations."
    }
};

const renderMetrics = (metrics) => (
    <div className="metrics-grid">
        {metrics.map((metric, index) => (
            <div key={index} className="metric-card">
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
            </div>
        ))}
    </div>
);

const renderSteps = (steps) => (
    <div className="implementation-steps">
        {steps.map((step, index) => (
            <div key={index} className="step-card">
                <div className="step-number">{index + 1}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
            </div>
        ))}
    </div>
);

const renderListItems = (items) => (
    <ul className="benefit-list">
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
);

const TechLayout = ({ post, renderMetrics, renderSteps, renderListItems }) => (
    <div className="tech-layout">
        <div className="tech-header">
            <div className="tech-stats">
                {renderMetrics(post.sections.find(s => s.metrics)?.metrics || [])}
            </div>
        </div>
        <div className="insight-cards tech-style">
            {post.insights.map((insight, index) => (
                <div className="insight-card" key={index}>
                    <div className="insight-icon">{insight.icon}</div>
                    <h3>{insight.title}</h3>
                    <p>{insight.description}</p>
                </div>
            ))}
        </div>
        {post.sections.map((section, index) => (
            <div key={index} className="content-section">
                <h2>{section.title}</h2>
                {section.content && <p>{section.content}</p>}
                {section.listItems && renderListItems(section.listItems)}
                {section.steps && renderSteps(section.steps)}
            </div>
        ))}
    </div>
);

const BusinessLayout = ({ post, renderMetrics, renderSteps, renderListItems }) => (
    <div className="business-layout">
        <div className="side-metrics">
            {renderMetrics(post.sections.find(s => s.metrics)?.metrics || [])}
        </div>
        <div className="main-content">
            {post.sections.map((section, index) => (
                <div key={index} className="content-section">
                    <h2>{section.title}</h2>
                    {section.content && <p>{section.content}</p>}
                    {section.listItems && renderListItems(section.listItems)}
                    {section.steps && renderSteps(section.steps)}
                </div>
            ))}
            <div className="insight-cards business-style">
                {post.insights.map((insight, index) => (
                    <div className="insight-card" key={index}>
                        <div className="insight-icon">{insight.icon}</div>
                        <h3>{insight.title}</h3>
                        <p>{insight.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const ModernLayout = ({ post, renderMetrics, renderSteps, renderListItems }) => (
    <div className="modern-layout">
        <div className="insight-cards modern-style">
            {post.insights.map((insight, index) => (
                <div className="insight-card" key={index}>
                    <div className="insight-icon">{insight.icon}</div>
                    <h3>{insight.title}</h3>
                    <p>{insight.description}</p>
                </div>
            ))}
        </div>
        <div className="modern-grid">
            {post.sections.map((section, index) => (
                <div key={index} className="content-section">
                    <h2>{section.title}</h2>
                    {section.content && <p>{section.content}</p>}
                    {section.listItems && renderListItems(section.listItems)}
                    {section.steps && renderSteps(section.steps)}
                    {section.metrics && renderMetrics(section.metrics)}
                </div>
            ))}
        </div>
    </div>
);

const getLayoutByType = (type) => {
    switch(type) {
        case 'ai-copilots-2025':
        case 'nlp-bi-2025':
            return TechLayout;
        case 'ai-product-strategy-2025':
        case 'ai-customer-service-2025':
            return BusinessLayout;
        case 'ai-project-management-2025':
            return ModernLayout;
        default:
            return BusinessLayout;
    }
};

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setIsLoading(true);
                // Static data for articles
                const customArticles = [
                    {
                        title: "How AI is Revolutionizing Product Strategy and Management Consulting",
                        description: "Artificial Intelligence is transforming the landscape of product management and strategy consulting. From predictive analytics for product-market fit to AI-powered decision support systems, discover how modern tools are enabling data-driven product strategies and revolutionizing traditional consulting approaches.",
                        pubDate: "2025-02-15T10:00:00",
                        thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
                        source: "Ujas Patel",
                        guid: "ai-product-strategy-2025",
                        readTime: "8 min read",
                        category: "Product Strategy"
                    },
                    {
                        title: "The Rise of AI Copilots: Transforming Developer Productivity",
                        description: "Explore how AI-powered coding assistants are revolutionizing software development. From code completion to natural language programming, learn how these tools are boosting developer productivity and changing the way we write code.",
                        pubDate: "2025-02-10T09:00:00",
                        thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1000",
                        source: "Ujas Patel",
                        guid: "ai-copilots-2025",
                        readTime: "6 min read",
                        category: "Development"
                    },
                    {
                        title: "AI-Powered Project Management: The Future of Team Collaboration",
                        description: "Discover how artificial intelligence is transforming project management tools, from automated task prioritization to intelligent resource allocation and predictive analytics for project success.",
                        pubDate: "2025-02-05T11:00:00",
                        thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000",
                        source: "Ujas Patel",
                        guid: "ai-project-management-2025",
                        readTime: "7 min read",
                        category: "Project Management"
                    },
                    {
                        title: "Natural Language Processing in Business Intelligence",
                        description: "How conversational AI and NLP are making data analytics accessible to everyone. From natural language queries to automated insights generation, explore the democratization of business intelligence.",
                        pubDate: "2025-01-25T14:00:00",
                        thumbnail: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1000",
                        source: "Ujas Patel",
                        guid: "nlp-bi-2025",
                        readTime: "5 min read",
                        category: "Business Intelligence"
                    },
                    {
                        title: "AI Agents in Customer Service: Beyond Chatbots",
                        description: "The next generation of AI-powered customer service tools are here. Learn how intelligent agents are handling complex customer interactions and integrating with existing business processes.",
                        pubDate: "2025-01-20T10:30:00",
                        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000",
                        source: "Ujas Patel",
                        guid: "ai-customer-service-2025",
                        readTime: "6 min read",
                        category: "Customer Service"
                    }
                ];

                const foundPost = customArticles.find(article => article.guid === id);
                if (!foundPost) {
                    navigate('/');
                    return;
                }
                setPost({...foundPost, ...ARTICLES_DATA[foundPost.guid]});
            } catch (error) {
                console.error('Error fetching post:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPost();
    }, [id, navigate]);

    if (isLoading) {
        return (
            <>
                <Navbar />
                <div className="blog-post">
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                        <p>Loading article...</p>
                    </div>
                </div>
            </>
        );
    }

    if (!post) {
        return null;
    }

    const handleShare = (platform) => {
        const url = window.location.href;
        const text = `Check out this article: ${post.title}`;
        
        switch(platform) {
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
                break;
            case 'linkedin':
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
                break;
            default:
                break;
        }
    };

    const LayoutComponent = getLayoutByType(post.guid);

    return (
        <>
            <Navbar />
            <article className="blog-post">
                <div className="blog-post-hero">
                    <div className="blog-hero-background" style={{ backgroundImage: `url(${post.thumbnail})` }}>
                        <div className="blog-hero-overlay"></div>
                    </div>
                    <div className="blog-hero-content">
                        <div className="post-meta">
                            <span className="post-category">{post.category}</span>
                            <span className="post-date">{new Date(post.pubDate).toLocaleDateString('en-US', { 
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</span>
                            <span className="post-read-time">{post.readTime}</span>
                        </div>
                        <h1>{post.title}</h1>
                    </div>
                </div>
                
                <div className="blog-post-content">
                    <div className="content-container">
                        <div className="post-description">
                            {post.description}
                        </div>
                        
                        {/* Show ads only on fully published articles (not Coming Soon) */}
                        {post.source !== 'Coming Soon' && (
                            <AdBanner 
                                type="horizontal" 
                                size="large" 
                                adSlot="1234567890"
                                className="article-top-ad"
                            />
                        )}
                        
                        <div className="post-body">
                            <LayoutComponent 
                                post={post}
                                renderMetrics={renderMetrics}
                                renderSteps={renderSteps}
                                renderListItems={renderListItems}
                            />
                            
                            {/* Mid-content Ad - only for published articles */}
                            {post.source !== 'Coming Soon' && (
                                <InContentAd 
                                    adSlot="2345678901"
                                    className="mid-content-ad"
                                />
                            )}
                            
                            <div className="content-section">
                                <h2>Expert Analysis</h2>
                                <p>{post.content}</p>
                            </div>
                            
                            {/* Affiliate links removed to comply with request and avoid policy clashes */}
                            
                            <div className="post-footer">
                                <div className="author-section">
                                    <img src="https://github.com/ujaspatel.png" alt="Ujas Patel" className="author-image" />
                                    <div className="author-info">
                                        <h3>Written by Ujas Patel</h3>
                                        <p>AI Enthusiast & Tech Writer</p>
                                        <div className="author-bio">
                                            Passionate about exploring the intersection of AI and business strategy
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="share-section">
                                    <button 
                                        className="share-button twitter"
                                        onClick={() => handleShare('twitter')}
                                    >
                                        Share on Twitter
                                    </button>
                                    <button 
                                        className="share-button linkedin"
                                        onClick={() => handleShare('linkedin')}
                                    >
                                        Share on LinkedIn
                                    </button>
                                </div>
                            </div>
                            
                            {/* Bottom Ad - only for published articles */}
                            {post.source !== 'Coming Soon' && (
                                <AdBanner 
                                    type="horizontal" 
                                    size="large" 
                                    adSlot="3456789012"
                                    className="article-bottom-ad"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default BlogPost; 