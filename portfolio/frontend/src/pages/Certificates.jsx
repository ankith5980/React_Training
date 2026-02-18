import { FaExternalLinkAlt } from 'react-icons/fa'

function Certificates() {
    const certificates = [
        {
            id: 1,
            title: 'Meta Front-End Developer Professional Certificate',
            issuer: 'Meta (Coursera)',
            date: '2025-08-15',
            image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=500&h=350&fit=crop',
            credentialUrl: 'https://coursera.org/verify/professional-cert/example1',
        },
        {
            id: 2,
            title: 'JavaScript Algorithms and Data Structures',
            issuer: 'freeCodeCamp',
            date: '2025-05-20',
            image: 'https://images.unsplash.com/photo-1515879218367-8466d910auj7?w=500&h=350&fit=crop',
            credentialUrl: 'https://freecodecamp.org/certification/example2',
        },
        {
            id: 3,
            title: 'React — The Complete Guide',
            issuer: 'Udemy',
            date: '2025-03-10',
            image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=500&h=350&fit=crop',
            credentialUrl: 'https://udemy.com/certificate/example3',
        },
        {
            id: 4,
            title: 'Responsive Web Design',
            issuer: 'freeCodeCamp',
            date: '2024-11-05',
            image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=350&fit=crop',
            credentialUrl: 'https://freecodecamp.org/certification/example4',
        },
        {
            id: 5,
            title: 'AWS Certified Cloud Practitioner',
            issuer: 'Amazon Web Services',
            date: '2025-01-22',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=350&fit=crop',
            credentialUrl: 'https://aws.amazon.com/verification/example5',
        },
    ]

    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
        })
    }

    return (
        <section className="section page-enter" style={{ paddingTop: '120px' }}>
            <div className="container">
                <div className="section-header">
                    <p className="section-label">Certifications</p>
                    <h1 className="section-title">Professional Certificates</h1>
                    <p className="section-subtitle">
                        Continuous learning is key. Here are the certifications I've earned
                        to sharpen my frontend development expertise.
                    </p>
                </div>

                <div className="certificates-grid">
                    {certificates.map((cert, i) => (
                        <div
                            className="certificate-card fade-in-up visible"
                            key={cert.id}
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <img
                                className="certificate-card-image"
                                src={cert.image}
                                alt={cert.title}
                                loading="lazy"
                            />
                            <div className="certificate-card-body">
                                <h3>{cert.title}</h3>
                                <div className="certificate-meta">
                                    <span className="issuer">{cert.issuer}</span>
                                    <span className="date">{formatDate(cert.date)}</span>
                                </div>
                                <a
                                    href={cert.credentialUrl}
                                    className="btn btn-outline btn-sm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaExternalLinkAlt /> View Credential
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certificates
