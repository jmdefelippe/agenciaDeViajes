const Viaje = require('../models/Viajes');

exports.mostrarViajes = async (req, res) => {
    const viajes = await Viaje.findAll()
        res.render('viajes', {
            pagina: 'Próximos Viajes',
            viajes
        });
}

exports.mostrarViaje = (req, res) => {
    Viaje.findByPk(req.params.id)
        .then(viaje => res.render('viaje', {
            viaje
        }))
        .catch(error => console.log(error));
}