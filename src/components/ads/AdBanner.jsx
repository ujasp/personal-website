import React from 'react';
import AdSenseAd from './AdSenseAd';
import './AdBanner.css';

const AdBanner = ({ 
    type = 'horizontal', 
    size = 'medium',
    className = '',
    adSlot,
    style = {}
}) => {
    // Define ad sizes based on type and size
    const getAdDimensions = () => {
        if (type === 'horizontal') {
            switch (size) {
                case 'large':
                    return { width: '728px', height: '90px' }; // Leaderboard
                case 'medium':
                    return { width: '468px', height: '60px' }; // Banner
                case 'small':
                    return { width: '320px', height: '50px' }; // Mobile Banner
                default:
                    return { width: '100%', height: '90px' };
            }
        } else if (type === 'vertical') {
            switch (size) {
                case 'large':
                    return { width: '300px', height: '600px' }; // Half Page
                case 'medium':
                    return { width: '300px', height: '250px' }; // Medium Rectangle
                case 'small':
                    return { width: '200px', height: '200px' }; // Small Square
                default:
                    return { width: '300px', height: '250px' };
            }
        } else if (type === 'square') {
            switch (size) {
                case 'large':
                    return { width: '336px', height: '280px' }; // Large Rectangle
                case 'medium':
                    return { width: '300px', height: '250px' }; // Medium Rectangle
                case 'small':
                    return { width: '250px', height: '250px' }; // Square
                default:
                    return { width: '300px', height: '250px' };
            }
        }
        return { width: '100%', height: 'auto' };
    };

    const dimensions = getAdDimensions();
    const adStyle = { ...dimensions, ...style };

    return (
        <div className={`ad-banner ad-banner--${type} ad-banner--${size} ${className}`}>
            <div className="ad-banner__container">
                <AdSenseAd
                    adSlot={adSlot}
                    style={adStyle}
                    className="ad-banner__content"
                />
                <div className="ad-banner__label">Advertisement</div>
            </div>
        </div>
    );
};

export default AdBanner;
