import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="privacy-policy-page">
                <div className="privacy-policy-container">
                    <header className="privacy-policy-header">
                        <h1>Privacy Policy</h1>
                        <p className="last-updated">Last updated: {new Date().toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        })}</p>
                    </header>

                    <div className="privacy-policy-content">
                        <section className="privacy-section">
                            <h2>Introduction</h2>
                            <p>
                                Welcome to ujaspatel.com. This Privacy Policy explains how we collect, use, disclose, 
                                and safeguard your information when you visit our website. Please read this privacy 
                                policy carefully. If you do not agree with the terms of this privacy policy, please 
                                do not access the site.
                            </p>
                        </section>

                        <section className="privacy-section">
                            <h2>Information We Collect</h2>
                            <h3>Automatically Collected Information</h3>
                            <p>
                                We may collect information about your computer and your visits to this website such as 
                                your IP address, geographical location, browser type, referral source, length of visit, 
                                and pages viewed. We collect this information through the use of cookies and similar 
                                tracking technologies.
                            </p>
                            
                            <h3>Analytics Information</h3>
                            <p>
                                We use Google Analytics to analyze website traffic and usage patterns. This service 
                                may collect information such as your device's Internet Protocol address, browser type, 
                                browser version, the pages you visit, the time and date of your visit, the time spent 
                                on those pages, and other statistics.
                            </p>
                        </section>

                        <section className="privacy-section">
                            <h2>How We Use Your Information</h2>
                            <p>We use the information we collect to:</p>
                            <ul>
                                <li>Improve our website and user experience</li>
                                <li>Analyze website traffic and usage patterns</li>
                                <li>Display personalized advertisements</li>
                                <li>Comply with legal obligations</li>
                                <li>Protect against fraudulent or illegal activity</li>
                            </ul>
                        </section>

                        <section className="privacy-section">
                            <h2>Cookies and Tracking Technologies</h2>
                            <p>
                                We use cookies, web beacons, and other tracking technologies to collect information 
                                about your browsing activities. Cookies are small data files stored on your device 
                                that help us improve your experience and understand how our website is being used.
                            </p>
                            
                            <h3>Types of Cookies We Use:</h3>
                            <ul>
                                <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                                <li><strong>Advertising Cookies:</strong> Used to deliver personalized advertisements</li>
                            </ul>
                        </section>

                        <section className="privacy-section">
                            <h2>Third-Party Services</h2>
                            <h3>Google AdSense</h3>
                            <p>
                                We use Google AdSense to display advertisements on our website. Google may use cookies 
                                to serve ads based on your prior visits to our website or other websites. You can opt 
                                out of personalized advertising by visiting Google's Ads Settings.
                            </p>
                            
                            <h3>Google Analytics</h3>
                            <p>
                                Our website uses Google Analytics to analyze website traffic. Google Analytics uses 
                                cookies to collect information about your use of our website. You can opt-out of 
                                Google Analytics by installing the Google Analytics opt-out browser add-on.
                            </p>

                            <h3>Affiliate Links</h3>
                            <p>
                                Our website may contain affiliate links to third-party products and services. When you 
                                click on these links and make a purchase, we may receive a commission. These third-party 
                                sites have their own privacy policies, and we are not responsible for their practices.
                            </p>
                        </section>

                        <section className="privacy-section">
                            <h2>Your Privacy Rights</h2>
                            <p>Depending on your location, you may have the following rights:</p>
                            <ul>
                                <li>The right to access your personal information</li>
                                <li>The right to correct inaccurate information</li>
                                <li>The right to delete your personal information</li>
                                <li>The right to restrict processing of your information</li>
                                <li>The right to opt-out of certain data collection</li>
                            </ul>
                        </section>

                        <section className="privacy-section">
                            <h2>Data Security</h2>
                            <p>
                                We implement appropriate technical and organizational security measures to protect your 
                                personal information against unauthorized access, alteration, disclosure, or destruction. 
                                However, no method of transmission over the Internet or electronic storage is 100% secure.
                            </p>
                        </section>

                        <section className="privacy-section">
                            <h2>Children's Privacy</h2>
                            <p>
                                Our website is not intended for children under the age of 13. We do not knowingly 
                                collect personal information from children under 13. If you are a parent or guardian 
                                and believe your child has provided us with personal information, please contact us.
                            </p>
                        </section>

                        <section className="privacy-section">
                            <h2>Changes to This Privacy Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of any changes 
                                by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                                You are advised to review this Privacy Policy periodically for any changes.
                            </p>
                        </section>

                        <section className="privacy-section">
                            <h2>Contact Information</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <div className="contact-info">
                                <p><strong>Email:</strong> privacy@ujaspatel.com</p>
                                <p><strong>Website:</strong> ujaspatel.com</p>
                            </div>
                        </section>

                        <section className="privacy-section opt-out-section">
                            <h2>Opt-Out Links</h2>
                            <p>You can opt out of certain data collection and advertising:</p>
                            <ul className="opt-out-links">
                                <li>
                                    <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">
                                        Google Ads Settings
                                    </a>
                                </li>
                                <li>
                                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                                        Google Analytics Opt-out
                                    </a>
                                </li>
                                <li>
                                    <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">
                                        NAI Opt-Out Tool
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;
