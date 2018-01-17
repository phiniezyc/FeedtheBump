module.exports = function(app,passport){
    app.get('/', function(req, res){
        res.json('Welcome to Feed the Bump. Please login/register .');
    });
    app.get('/login', function(req, res){
        res.json({message: req.flash('loginMessage')});
    });
    app.post('/login', passport.authenticate('login',{
        successRedirect : '/user/dashboard',
        failureRedirect : '/login',
        failureFlash : true
    }));
    app.get('/register', function(req, res){
        res.json({message: req.flash('registerMessage')});
    });
    app.post('/register', passport.authenticate('register',{
        successRedirect : '/profile',
        failureRedirect : '/register',
        failureFlash : true
    }));
    app.get('/profile', isLoggedIn, function(req,res){
        res.json({user : req.user});
    });
    app.get('/logout', function(req,res){
        req.logout();
        res.redirect('/');
    });
};

function isLoggedIn(req, res, next){
    if(req.isAuthenticated())
        return next();
    res.redirect('/');
};
