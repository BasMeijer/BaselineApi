const AuthController = require('../controllers/authController');
const express = require('express');
const passportService = require('../config/passport');
const passport = require('passport');
const userController = require('../controllers/userController');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });


module.exports = function (app) {
    // Initializing route groups
    const apiRoutes = express.Router(),
        authRoutes = express.Router();

    //=========================
    // Auth Routes
    //=========================

    // Set auth routes as subgroup/middleware to apiRoutes
    apiRoutes.use('/auth', authRoutes);

    // Registration route
    authRoutes.post('/register', userController.validateRegister, AuthController.register);

    // Login route
    authRoutes.post('/login', requireLogin, AuthController.login);

    // Test route with JWT Auth
    authRoutes.get('/test', requireAuth, function (req, res) {
        res.json({ message: 'Welcome to the coolest API on earth!' });
    });

    // Set url for API group routes
    app.use('/api', apiRoutes);
};