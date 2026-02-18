import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* About Column */}
                    <div className="footer-about">
                        <h3 className="footer-logo">Devananda J<span></span></h3>
                        <p className="footer-description">
                            Frontend developer crafting clean, responsive, and
                            performant web experiences with React, JavaScript,
                            and modern CSS.
                        </p>
                        <div className="footer-socials">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/certificates">Certificates</Link></li>
                        </ul>
                    </div>

                    {/* Get In Touch Column */}
                    <div className="footer-contact-col">
                        <h4>Get In Touch</h4>
                        <p>Have a project in mind or just want to say hello? I'd love to hear from you.</p>
                        <div className="footer-cta-buttons">
                            <a href="mailto:devananda@example.com" className="btn btn-primary btn-sm">
                                <FaEnvelope /> Mail Me
                            </a>
                            <Link to="/contact" className="btn btn-outline btn-sm">
                                Contact Page
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p>© {currentYear} Designed by Devananda J. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
