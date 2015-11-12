
/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title: 'Amiguea: ', year: new Date().getFullYear() });
};

exports.about = function (req, res) {
    res.render('about', { title: 'Contacta con nosotros', year: new Date().getFullYear(), message: 'Contacta con nosotros en el siguiente formulario' });
};

exports.contact = function (req, res) {
    res.render('contact',{ title: 'Iniciar sesión', year: new Date().getFullYear(), message: 'Inicia sesión en Amiguea:' });
};


