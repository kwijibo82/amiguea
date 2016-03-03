
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
exports.perfil = function (req, res) {
    res.render('perfil', { title: 'Mi perfil', year: new Date().getFullYear(), message: 'Mi perfil:' });
};
exports.about = function (req, res) {
    res.render('about', { title: 'Sobre nosotros', year: new Date().getFullYear(), message: 'About us:' });
};
exports.faq = function (req, res) {
    res.render('faq', { title: 'FAQ', year: new Date().getFullYear(), message: 'FAQ:' });
};
exports.crearactividad = function (req, res) {
    res.render('crearactividad', { title: 'Crear actividad', year: new Date().getFullYear(), message: 'Crear actividad:' });
};
exports.actividades = function (req, res) {
    res.render('actividades', { title: 'Actividades', year: new Date().getFullYear(), message: 'Actividades:' });
};



