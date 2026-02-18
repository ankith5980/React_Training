import { useEffect, useRef } from 'react'
import {
    FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma, FaNpm, FaNodeJs,
} from 'react-icons/fa'
import {
    SiTypescript, SiNextdotjs, SiTailwindcss, SiVite,
} from 'react-icons/si'

const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'Vite', icon: <SiVite /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'npm', icon: <FaNpm /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
]

function About() {
    const observerRef = useRef(null)

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1 }
        )

        document.querySelectorAll('.fade-in-up').forEach((el) => {
            observerRef.current.observe(el)
        })

        return () => observerRef.current?.disconnect()
    }, [])

    return (
        <section className="section page-enter" style={{ paddingTop: '120px' }}>
            <div className="container">
                {/* Header */}
                <div className="section-header fade-in-up">
                    <p className="section-label">About Me</p>
                    <h1 className="section-title">Passionate About Building for the Web</h1>
                    <p className="section-subtitle">
                        I love turning complex problems into simple, beautiful, and intuitive designs.
                    </p>
                </div>

                {/* About Grid */}
                <div className="about-grid fade-in-up">
                    <div className="about-image-wrapper">
                        <img
                            className="about-image"
                            src="/profile.jpeg"
                            alt="Developer workspace"
                        />
                    </div>

                    <div className="about-text">
                        <h2>Hey, I'm a Frontend Developer 👋</h2>
                        <p>
                            With over 3 years of experience in frontend development, I specialize in building
                            responsive, accessible, and performant web applications. I'm passionate about
                            creating seamless user experiences that delight users and drive business results.
                        </p>
                        <p>
                            My journey started with curiosity about how websites work, and it has evolved into
                            a deep love for crafting pixel-perfect interfaces. I stay up-to-date with the latest
                            web technologies and best practices to deliver modern, cutting-edge solutions.
                        </p>
                        <p>
                            When I'm not coding, you'll find me exploring new design trends.
                        </p>

                        <div className="about-stats">
                            <div className="stat-box">
                                <div className="number">3+</div>
                                <div className="label">Years Experience</div>
                            </div>
                            <div className="stat-box">
                                <div className="number">30+</div>
                                <div className="label">Projects Built</div>
                            </div>
                            <div className="stat-box">
                                <div className="number">10+</div>
                                <div className="label">Certificates</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="skills-section fade-in-up">
                    <div className="section-header">
                        <p className="section-label">Tech Stack</p>
                        <h2 className="section-title">Technologies I Work With</h2>
                    </div>

                    <div className="skills-grid">
                        {skills.map((skill) => (
                            <div className="skill-item" key={skill.name}>
                                <span className="icon">{skill.icon}</span>
                                <span className="name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
