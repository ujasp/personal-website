import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Blog.css';

const Articles = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showMobileBack, setShowMobileBack] = useState(false);
    const carouselRef = useRef(null);
    
    // Custom articles data - only featured ones
    const customArticles = [
        {
            title: "Chinese startup Manus challenges ChatGPT in data visualization: Which should enterprises use?",
            description: "A deep dive into how Chinese startup Manus is taking on OpenAI's ChatGPT in the data visualization space, examining the competitive landscape and what enterprises should consider when choosing between these AI-powered solutions.",
            pubDate: "2025-07-22T10:00:00",
            link: "https://venturebeat.com/data-infrastructure/chinese-startup-manus-challenges-chatgpt-in-data-visualization-which-should-enterprises-use",
            thumbnail: "https://venturebeat.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fjdtwqhzvc2n1%2F1REcmhUTtHLaLaG4IbvO7X%2F94e9a7ea90e730ec62a80b6eec799d31%2FGemini_Generated_Image_nago9hnago9hnago.jpeg&w=1920&q=75",
            source: "VentureBeat",
            category: "Data Infrastructure",
            guid: "venturebeat-manus-chatgpt-2025",
            readTime: "6 min read",
            featured: true
        },
        {
            title: "$42.1 million poured into startup offering energy-efficient solutions for costly and unwieldy operational data and AI workloads",
            description: "Exploring how a well-funded startup is tackling the growing challenge of energy-efficient data processing and AI workload management, addressing both cost and environmental concerns in enterprise operations.",
            pubDate: "2025-04-23T14:30:00",
            link: "https://venturebeat.com/data-infrastructure/42-1-million-poured-into-startup-offering-energy-efficient-solutions-for-costly-and-unwieldy-operational-data-and-ai-workloads",
            thumbnail: "https://venturebeat.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fjdtwqhzvc2n1%2Fcs8zeieEKuKiuVc74v5DM%2Fa6b32e1e4652d6deb575d226a6a17061%2FGettyImages-1301445128.jpg&w=1920&q=75",
            source: "VentureBeat",
            category: "Data Infrastructure",
            guid: "venturebeat-energy-efficient-2025",
            readTime: "7 min read",
            featured: true
        },
        {
            title: "Pig API: Give your AI agents a virtual desktop to automate Windows apps",
            description: "In the evolving landscape of AI, enterprises face the challenge of integrating modern solutions with legacy systems that often lack the necessary application programming interfaces (APIs) for seamless integration.",
            pubDate: "2025-01-30T09:15:00",
            link: "https://venturebeat.com/ai/pig-api-give-your-ai-agents-a-virtual-desktop-to-automate-windows-apps/",
            thumbnail: "https://venturebeat.com/wp-content/uploads/2025/01/a-vector-illustration-of-a-sophisticated_dE40ZnYlTlqEs85jX3HojA_RfAN0as0StqbwUix2n7DgA-transformed.jpeg?w=750",
            source: "VentureBeat",
            category: "AI Integration",
            guid: "venturebeat-pig-api-2025",
            readTime: "5 min read",
            featured: true
        },
        {
            title: "How AI is Revolutionizing Product Strategy and Management Consulting",
            description: "Artificial Intelligence is transforming the landscape of product management and strategy consulting. From predictive analytics for product-market fit to AI-powered decision support systems.",
            pubDate: "2025-02-15T10:00:00",
            link: "#",
            thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
            source: "Internal",
            category: "Product Strategy",
            guid: "ai-product-strategy-2025",
            featured: true
        },
        {
            title: "The Rise of AI Copilots: Transforming Developer Productivity",
            description: "Explore how AI-powered coding assistants are revolutionizing software development. From code completion to natural language programming, learn how these tools are boosting developer productivity.",
            pubDate: "2025-02-10T09:00:00",
            link: "#",
            thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1000",
            source: "Internal",
            category: "Development",
            guid: "ai-copilots-2025",
            featured: true
        },
        {
            title: "AI-Powered Project Management: The Future of Team Collaboration",
            description: "Discover how artificial intelligence is transforming project management tools, from automated task prioritization to intelligent resource allocation and predictive analytics for project success.",
            pubDate: "2025-02-05T11:00:00",
            link: "#",
            thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000",
            source: "Internal",
            category: "Project Management",
            guid: "ai-project-management-2025",
            featured: true
        }
    ];

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setPosts(customArticles);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch articles');
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const scrollCarousel = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = direction === 'left' ? -carouselRef.current.offsetWidth : carouselRef.current.offsetWidth;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            
            setTimeout(() => {
                if (carouselRef.current) {
                    setScrollPosition(carouselRef.current.scrollLeft);
                }
            }, 300);
        }
    };

    const handleScroll = (e) => {
        setScrollPosition(e.target.scrollLeft);
        setShowMobileBack(e.target.scrollLeft > 50);
    };

    const scrollToStart = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    };

    if (loading) return (
        <section id="articles" className="articles-section">
            <div className="articles-container">
                <div className="articles-header">
                    <h2>Loading articles...</h2>
                </div>
            </div>
        </section>
    );

    if (error) return (
        <section id="articles" className="articles-section">
            <div className="articles-container">
                <div className="articles-header">
                    <h2>{error}</h2>
                </div>
            </div>
        </section>
    );

    const canScrollLeft = scrollPosition > 0;
    const canScrollRight = carouselRef.current && 
        scrollPosition < (carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);

    return (
        <section id="articles" className="articles-section">
            <div className="articles-container">
                <button 
                    className={`mobile-back-button ${showMobileBack ? 'visible' : ''}`}
                    onClick={scrollToStart}
                    aria-label="Back to start"
                >
                    <FiChevronLeft />
                </button>
                <div className="articles-header">
                    <h2>Featured Articles</h2>
                    <p>Exploring the intersection of AI, technology, and business innovation</p>
                </div>
                <div className="carousel-container">
                    <button 
                        className={`carousel-button left ${!canScrollLeft ? 'hidden' : ''}`}
                        onClick={() => scrollCarousel('left')}
                        aria-label="Previous articles"
                    >
                        <FiChevronLeft />
                    </button>
                    <div 
                        className="articles-carousel" 
                        ref={carouselRef}
                        onScroll={handleScroll}
                    >
                        {posts.map((post) => (
                            <article key={post.guid} className="article-card">
                                {post.link.startsWith('http') ? (
                                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="article-card-link">
                                        <img 
                                            src={post.thumbnail} 
                                            alt={post.title}
                                            className="article-image"
                                        />
                                        <div className="article-content">
                                            <span className="article-category">{post.category}</span>
                                            <h3 className="article-title">{post.title}</h3>
                                            <div className="article-footer">
                                                <div className="article-meta">
                                                    <span className="article-date">
                                                        {new Date(post.pubDate).toLocaleDateString('en-US', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric'
                                                        })}
                                                    </span>
                                                    <span className="article-read-time">{post.readTime}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ) : (
                                    <Link to={`/blog/${post.guid}`} className="article-card-link">
                                        <img 
                                            src={post.thumbnail} 
                                            alt={post.title}
                                            className="article-image"
                                        />
                                        <div className="article-content">
                                            <span className="article-category">{post.category}</span>
                                            <h3 className="article-title">{post.title}</h3>
                                            <div className="article-footer">
                                                <div className="article-meta">
                                                    <span className="article-date">
                                                        {new Date(post.pubDate).toLocaleDateString('en-US', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric'
                                                        })}
                                                    </span>
                                                    <span className="article-read-time">{post.readTime}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )}
                            </article>
                        ))}
                    </div>
                    <button 
                        className={`carousel-button right ${!canScrollRight ? 'hidden' : ''}`}
                        onClick={() => scrollCarousel('right')}
                        aria-label="Next articles"
                    >
                        <FiChevronRight />
                    </button>
                </div>
                <div className="articles-footer">
                    <Link to="/blog" className="explore-all-link">
                        Explore All Articles <FiArrowRight />
                    </Link>
                </div>
                
            </div>
        </section>
    );
};

export default Articles;