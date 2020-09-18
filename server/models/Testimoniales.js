const Sequelize = require('sequelize');

const db = require('../config/database');

const Testimonial = db.define('testimoniales', {
    // no va el id
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    },
});

module.exports = Testimonial;