import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
    {
        id: 1,
        title: 'E-Commerce Dashboard',
        description: 'A modern, responsive admin dashboard for managing products, orders, and customer analytics. Built with React and styled-components featuring real-time data visualizations.',
        techStack: ['React', 'Redux', 'Chart.js', 'Styled Components', 'REST API'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        liveUrl: 'https://example.com/ecommerce-dashboard',
        repoUrl: 'https://github.com/username/ecommerce-dashboard',
    },
    {
        id: 2,
        title: 'Weather Forecast App',
        description: 'Beautiful weather application with animated backgrounds that change based on current conditions. Features 7-day forecasts, hourly breakdowns, and location search.',
        techStack: ['React', 'CSS Animations', 'OpenWeather API', 'Geolocation API'],
        image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
        liveUrl: 'https://example.com/weather-app',
        repoUrl: 'https://github.com/username/weather-app',
    },
    {
        id: 3,
        title: 'Task Management Platform',
        description: 'Kanban-style project management tool with drag-and-drop functionality, team collaboration features, and real-time updates using WebSockets.',
        techStack: ['React', 'TypeScript', 'Socket.io', 'Tailwind CSS', 'Node.js'],
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
        liveUrl: 'https://example.com/task-manager',
        repoUrl: 'https://github.com/username/task-manager',
    },
    {
        id: 4,
        title: 'Social Media UI Clone',
        description: "Pixel-perfect recreation of a popular social media platform's UI with stories, feeds, messaging, and dark mode toggle. Fully responsive.",
        techStack: ['React', 'CSS Modules', 'Firebase', 'Framer Motion'],
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
        liveUrl: 'https://example.com/social-clone',
        repoUrl: 'https://github.com/username/social-clone',
    },
    {
        id: 5,
        title: 'Portfolio Website Builder',
        description: 'A drag-and-drop portfolio builder that lets users create stunning portfolio websites without writing code. Features customizable templates and themes.',
        techStack: ['Next.js', 'React DnD', 'MongoDB', 'Vercel'],
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
        liveUrl: 'https://example.com/portfolio-builder',
        repoUrl: 'https://github.com/username/portfolio-builder',
    },
    {
        id: 6,
        title: 'Music Streaming Interface',
        description: 'Sleek music player interface with playlist management, audio visualizer, and responsive design inspired by modern streaming platforms.',
        techStack: ['React', 'Web Audio API', 'SCSS', 'Context API'],
        image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&h=400&fit=crop',
        liveUrl: 'https://example.com/music-player',
        repoUrl: 'https://github.com/username/music-player',
    },
]

function Projects() {
    return (
        <section className="section page-enter" style={{ paddingTop: '120px' }}>
            <div className="container">
                <div className="section-header">
                    <p className="section-label">My Work</p>
                    <h1 className="section-title">Featured Projects</h1>
                    <p className="section-subtitle">
                        A curated collection of projects that showcase my skills in frontend development,
                        from interactive dashboards to beautiful UI clones.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <div
                            className="project-card fade-in-up visible"
                            key={project.id}
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <div className="project-card-image-wrapper">
                                <img
                                    className="project-card-image"
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                />
                            </div>
                            <div className="project-card-body">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech-stack">
                                    {project.techStack.map((tech) => (
                                        <span className="tech-tag" key={tech}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="project-card-links">
                                    <a
                                        href={project.liveUrl}
                                        className="live-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                    <a
                                        href={project.repoUrl}
                                        className="repo-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub /> Source
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
