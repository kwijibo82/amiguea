
/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title: 'Amiguea: ', year: new Date().getFullYear() });
};
exports.home = function (req, res) {
    res.render('home', { title: 'Home', year: new Date().getFullYear(), message: 'Home' });
};

exports.contact = function (req, res) {
    res.render('contact',{ title: 'Contacta con nosotros', year: new Date().getFullYear(), message: 'Contacta con Amiguea:' });
};
exports.signup = function (req, res) {
    res.render('signup', { title: 'Registrarse', year: new Date().getFullYear(), message: 'Registrarse en Amiguea:' });
};
exports.login = function (req, res) {
    res.render('login', { title: 'Iniciar sesión', year: new Date().getFullYear(), message: 'Inicia sesión en Amiguea:' });
};
exports.actividad = function (req, res) {
    res.render('actividad', { title: 'Actividad', year: new Date().getFullYear(), message: 'Actividad:' });
};


