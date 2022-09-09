const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('homepage')
});
router.get('/dashboard', async (req, res) => {
    res.render('dashboard')
});
router.get('/login', async (req, res) => {
    // if (req.session.loggedIn) {
    //     res.redirect('/');
    //     return;
    // }
    res.render('login');
});


router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router