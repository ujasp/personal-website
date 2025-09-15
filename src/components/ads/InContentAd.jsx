import React from 'react';
import AdSenseAd from './AdSenseAd';
import './InContentAd.css';

const InContentAd = ({ 
    adSlot,
    className = '',
    style = {},
    responsive = true 
}) => {
    // Hide ads during local development to avoid empty placeholders
    if (process.env.NODE_ENV !== 'production') {
        return null;
    }
    return (
        <div className={`in-content-ad ${className}`}>
            <div className="in-content-ad__wrapper">
                <AdSenseAd
                    adSlot={adSlot}
                    adFormat={responsive ? 'fluid' : 'rectangle'}
                    style={{
                        display: 'block',
                        width: '100%',
                        minHeight: '250px',
                        ...style
                    }}
                    className="in-content-ad__content"
                />
                <div className="in-content-ad__label">Advertisement</div>
            </div>
        </div>
    );
};

export default InContentAd;
