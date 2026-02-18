import { useState, useEffect, useCallback } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { IoSunnySharp, IoMoonSharp } from 'react-icons/io5'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('portfolio-theme') || 'dark'
    })
    const [spinning, setSpinning] = useState(false)
    const [indicator, setIndicator] = useState({ left: 0, width: 0 })
    const navLinksRef = useCallback(node => {
        if (!node) return
        const update = () => {
            const activeLink = node.querySelector('a.active')
            if (activeLink) {
                const containerRect = node.getBoundingClientRect()
                const linkRect = activeLink.getBoundingClientRect()
                setIndicator({
                    left: linkRect.left - containerRect.left,
                    width: linkRect.width,
                })
            }
        }
        // run on mount and observe for changes
        requestAnimationFrame(update)
        const obs = new MutationObserver(update)
        obs.observe(node, { attributes: true, subtree: true, attributeFilter: ['class'] })
        window.addEventListener('resize', update)
    }, [])
    const location = useLocation()

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('portfolio-theme', theme)
    }, [theme])

    useEffect(() => {
        setMenuOpen(false)
    }, [location])

    const toggleTheme = () => {
        setSpinning(true)
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
        setTimeout(() => setSpinning(false), 500)
    }

    return (
        <nav className="navbar">
            <div className="container">
                <NavLink to="/" className="navbar-logo">
                    &lt;Devz<span>/&gt;</span>
                </NavLink>

                <div className={`navbar-links ${menuOpen ? 'open' : ''}`} ref={navLinksRef}>
                    <span
                        className="nav-indicator"
                        style={{
                            left: `${indicator.left}px`,
                            width: `${indicator.width}px`,
                        }}
                    />
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                        About
                    </NavLink>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
                        Projects
                    </NavLink>
                    <NavLink to="/certificates" className={({ isActive }) => isActive ? 'active' : ''}>
                        Certificates
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                        Contact
                    </NavLink>
                </div>

                <div className="navbar-right">
                    <button
                        className={`theme-toggle ${spinning ? 'spin' : ''}`}
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {theme === 'dark' ? <IoSunnySharp /> : <IoMoonSharp />}
                    </button>

                    <button
                        className={`mobile-toggle ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
