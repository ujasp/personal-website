import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already given consent
        const hasConsent = localStorage.getItem('cookieConsent');
        if (!hasConsent) {
            // Show banner after a short delay
            setTimeout(() => setShowBanner(true), 2000);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setShowBanner(false);
        
        // Initialize analytics and ads after consent
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('consent', 'update', {
                'analytics_storage': 'granted',
                'ad_storage': 'granted'
            });
        }
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setShowBanner(false);
        
        // Update consent for analytics
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('consent', 'update', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied'
            });
        }
    };

    if (!showBanner) return null;

    return (
        <div className="cookie-consent-banner">
            <div className="cookie-consent-content">
                <div className="cookie-consent-text">
                    <h3>🍪 Cookie Notice</h3>
                    <p>
                        We use cookies and similar technologies to improve your browsing experience, 
                        personalize content and ads, and analyze our traffic. This helps us provide 
                        you with relevant content and support our website operations.
                    </p>
                </div>
                <div className="cookie-consent-actions">
                    <button 
                        className="cookie-btn cookie-btn-accept"
                        onClick={handleAccept}
                    >
                        Accept All
                    </button>
                    <button 
                        className="cookie-btn cookie-btn-decline"
                        onClick={handleDecline}
                    >
                        Decline
                    </button>
                    <a 
                        href="/privacy-policy" 
                        className="cookie-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Privacy Policy
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
