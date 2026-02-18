const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// In-memory storage for contact messages
const contactMessages = [];

// Load data
const projects = require('./data/projects.json');
const certificates = require('./data/certificates.json');

// ─── Routes ──────────────────────────────────────────────

// GET /api/projects
app.get('/api/projects', (req, res) => {
    res.json({ success: true, data: projects });
});

// GET /api/certificates
app.get('/api/certificates', (req, res) => {
    res.json({ success: true, data: certificates });
});

// POST /api/contact
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            error: 'All fields (name, email, message) are required.',
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            error: 'Please provide a valid email address.',
        });
    }

    const newMessage = {
        id: contactMessages.length + 1,
        name,
        email,
        message,
        createdAt: new Date().toISOString(),
    };

    contactMessages.push(newMessage);
    console.log('📩 New contact message:', newMessage);

    res.status(201).json({
        success: true,
        message: 'Thank you! Your message has been received.',
    });
});

// GET /api/contact (admin — view messages)
app.get('/api/contact', (req, res) => {
    res.json({ success: true, data: contactMessages });
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ─── Start Server ────────────────────────────────────────
app.listen(PORT, () => {
    console.log(`🚀 Portfolio backend running on http://localhost:${PORT}`);
});
