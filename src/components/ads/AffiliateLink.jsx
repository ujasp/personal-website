import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import './AffiliateLink.css';

const AffiliateLink = ({ 
    href, 
    children, 
    product,
    price,
    description,
    buttonText = "Learn More",
    className = '',
    style = {},
    showDisclosure = true,
    imageUrl,
    compact = false
}) => {
    const handleClick = () => {
        // Track affiliate link clicks
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'affiliate_click', {
                'affiliate_url': href,
                'product_name': product
            });
        }
    };

    if (compact) {
        return (
            <a 
                href={href} 
                className={`affiliate-link affiliate-link--compact ${className}`}
                target="_blank" 
                rel="noopener noreferrer sponsored"
                onClick={handleClick}
                style={style}
            >
                {children}
                <FiExternalLink className="affiliate-link__icon" />
                {showDisclosure && (
                    <span className="affiliate-link__disclosure">*</span>
                )}
            </a>
        );
    }

    return (
        <div className={`affiliate-card ${className}`} style={style}>
            {imageUrl && (
                <div className="affiliate-card__image">
                    <img src={imageUrl} alt={product} />
                </div>
            )}
            <div className="affiliate-card__content">
                <h3 className="affiliate-card__title">{product}</h3>
                {price && (
                    <div className="affiliate-card__price">{price}</div>
                )}
                {description && (
                    <p className="affiliate-card__description">{description}</p>
                )}
                <a 
                    href={href} 
                    className="affiliate-card__button"
                    target="_blank" 
                    rel="noopener noreferrer sponsored"
                    onClick={handleClick}
                >
                    {buttonText}
                    <FiExternalLink className="affiliate-card__button-icon" />
                </a>
                {showDisclosure && (
                    <div className="affiliate-card__disclosure">
                        * This is an affiliate link. We may earn a commission if you make a purchase.
                    </div>
                )}
            </div>
        </div>
    );
};

export default AffiliateLink;
