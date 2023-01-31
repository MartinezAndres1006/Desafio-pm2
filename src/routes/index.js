import {Router } from 'express';
import passport from 'passport';
const router = Router();

function isAuth(req, res, next) {
    if (req.isAuthenticated()) {  // Si esta autenticado sigue con la ejecucion que queremos
        return next();
    }
    res.redirect('/login');
}

router.get('/registro', (req, res) => {
    res.render('registrarse');
});

router.post('/registro', passport.authenticate('registro', {
    successRedirect: '/login',
    failureRedirect: '/errorRegistro', 
}));

router.get('/home', isAuth, (req, res) => {
    res.render('home', { nombre: req.user.nombre });   
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', passport.authenticate('login', {
    successRedirect: '/home',
    failureRedirect: '/errorLogin',
}));
   

router.get('/logout', (req, res) => {
    req.session.destroy(
        () => {
            res.render('login');
        }
    );
});

router.get('/', (req, res) => {
   res.redirect('login'); 
});

router.get('/errorRegistro', (req, res) => {
    res.render('errorRegistro');
});

router.get('/errorLogin', (req, res) => {
    res.render('errorLogin');
});

export default router;