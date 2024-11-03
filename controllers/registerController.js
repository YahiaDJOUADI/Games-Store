const User = require('../models/User');


exports.registerPage = (req, res) => {
    res.render('register'); 
};


exports.registerUser = async (req, res) => {
    await User.create(req.body);
    res.redirect('/');
};


