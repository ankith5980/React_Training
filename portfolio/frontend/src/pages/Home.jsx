import { Link } from 'react-router-dom'
import { FaArrowRight, FaDownload, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

function Home() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-layout">
                    {/* Photo */}
                    <div className="hero-photo-wrapper">
                        <img
                            src="/profile.jpeg"
                            alt="Devz — Frontend Developer"
                            className="hero-photo"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span className="dot"></span>
                            Available for opportunities
                        </div>

                        <h1>
                            Hi, I'm <span className="gradient-text">Devananda J</span>
                        </h1>

                        <p className="hero-role">Frontend Developer</p>

                        <p className="hero-description">
                            I craft clean, responsive, and performant web experiences
                            using React, JavaScript, and modern CSS — turning ideas into
                            interfaces that users love.
                        </p>

                        {/* CTA Buttons */}
                        <div className="hero-buttons">
                            <Link to="/projects" className="btn btn-primary">
                                View My Work <FaArrowRight />
                            </Link>
                            <Link to="/contact" className="btn btn-outline">
                                <HiOutlineMail /> Get In Touch
                            </Link>
                            <a href="/resume.pdf" download className="btn btn-outline">
                                <FaDownload /> Download CV
                            </a>
                        </div>

                        {/* Social Buttons */}
                        <div className="hero-socials">
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
                </div>
            </div>
        </section>
    )
}

export default Home
