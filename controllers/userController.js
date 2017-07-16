const mongoose = require('mongoose');
const User = mongoose.model('User');


exports.validateRegister = (req, res, next) => {
    req.sanitizeBody('name');
    req.checkBody('name', 'You must supply a name!').notEmpty();
    req.checkBody('email', 'That Email is not valid!').isEmail();
    req.sanitizeBody('email').normalizeEmail({
        gmail_remove_dots: false,
        remove_extension: false,
        gmail_remove_subaddress: false
    });
    req.checkBody('password', 'Password Cannot be Blank!').notEmpty();
    // req.checkBody('password-confirm', 'Confirmed Password cannot be blank!').notEmpty();
    // req.checkBody('password-confirm', 'Oops! Your passwords do not match').equals(req.body.password);

    const errors = req.validationErrors();
    if (errors) {
        res.json(errors);
        return; // stop the fn from running
    }
    next(); // there were no errors!
};
