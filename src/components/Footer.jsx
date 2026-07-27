// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h3>
                        <i className="fas fa-film"></i> Movimei
                    </h3>
                    <p>Your ultimate movie discovery hub.</p>
                </div>

                <div className="footer-links">
                    <div className="footer-col">
                        <h4>Browse</h4>
                        <a href="/movies">Popular</a>
                        <a href="/movies">Top Rated</a>
                        <a href="/movies">Upcoming</a>
                    </div>
                    <div className="footer-col">
                        <h4>Support</h4>
                        <a href="#">Help Center</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                    <div className="footer-col">
                        <h4>Connect</h4>
                        <div className="social-icons">
                            <a href="#" aria-label="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" aria-label="YouTube">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href="#" aria-label="GitHub">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {year} Movimei. All rights reserved.</p>
                    <p>
                        Made with <i className="fas fa-heart"></i> for movie
                        lovers
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;