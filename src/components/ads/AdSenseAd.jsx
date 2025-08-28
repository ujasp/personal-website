import React, { useEffect } from 'react';

const AdSenseAd = ({ 
    adSlot, 
    adFormat = 'auto',
    adLayout = '',
    adLayoutKey = '',
    style = {},
    className = 'adsense-ad',
    fullWidthResponsive = true
}) => {
    useEffect(() => {
        try {
            // Check if adsbygoogle is available
            if (typeof window !== 'undefined' && window.adsbygoogle) {
                window.adsbygoogle.push({});
            }
        } catch (error) {
            console.error('AdSense error:', error);
        }
    }, []);

    return (
        <div className={className} style={style}>
            <ins
                className="adsbygoogle"
                style={{ display: 'block', ...style }}
                data-ad-client="ca-pub-7379333288140904"
                data-ad-slot={adSlot}
                data-ad-format={adFormat}
                data-ad-layout={adLayout}
                data-ad-layout-key={adLayoutKey}
                data-full-width-responsive={fullWidthResponsive.toString()}
            />
        </div>
    );
};

export default AdSenseAd;
