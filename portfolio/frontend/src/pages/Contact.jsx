import { useState } from 'react'
import {
    FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaTwitter,
} from 'react-icons/fa'

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState(null) // 'success' | 'error'
    const [statusMsg, setStatusMsg] = useState('')
    const [submitting, setSubmitting] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        setStatus(null)

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })
            const data = await res.json()

            if (data.success) {
                setStatus('success')
                setStatusMsg(data.message)
                setForm({ name: '', email: '', message: '' })
            } else {
                setStatus('error')
                setStatusMsg(data.error || 'Something went wrong.')
            }
        } catch {
            setStatus('error')
            setStatusMsg('Network error. Please try again.')
        } finally {
            setSubmitting(false)
            setTimeout(() => setStatus(null), 5000)
        }
    }

    return (
        <section className="section page-enter" style={{ paddingTop: '120px' }}>
            <div className="container">
                <div className="section-header">
                    <p className="section-label">Get In Touch</p>
                    <h1 className="section-title">Let's Work Together</h1>
                    <p className="section-subtitle">
                        Have a project in mind or just want to chat? Drop me a message
                        and I'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Info Column */}
                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <p>
                            I'm always open to discussing new projects, creative ideas,
                            or opportunities to be part of your vision.
                        </p>

                        <div className="contact-detail">
                            <div className="icon-box">
                                <FaEnvelope />
                            </div>
                            <div className="detail-text">
                                <div className="label">Email</div>
                                <div className="value">developer@example.com</div>
                            </div>
                        </div>

                        <div className="contact-detail">
                            <div className="icon-box">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="detail-text">
                                <div className="label">Location</div>
                                <div className="value">India</div>
                            </div>
                        </div>

                        <div className="contact-socials">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>

                    {/* Form Column */}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@example.com"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell me about your project..."
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="form-submit-btn"
                            disabled={submitting}
                        >
                            {submitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>

            {/* Toast notification */}
            {status && (
                <div className={`toast ${status}`}>
                    {statusMsg}
                </div>
            )}
        </section>
    )
}

export default Contact
