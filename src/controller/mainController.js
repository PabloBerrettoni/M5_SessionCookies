const {validationResult} = require('express-validator')

module.exports = {
    main: (req, res) => {
        res.render('index');
    },
    postForm: (req, res) => {
        console.log(req.body)
        if(req.body.check_color != undefined) {
            res.cookie('check_color', req.body.fondo, {maxAge: 6000});
        }

        req.session.nombre_usuario = req.body.nombre
        req.session.colorFondo = req.body.fondo

        let resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            res.render('index', {
                errors: resultValidation.mapped(), 
                old: req.body , 
                title: 'session y coockies' ,
                fondo : "no_color"
            })
        } else if (resultValidation == 0) {
            let fondo = req.session.colorFondo
            res.render('datos', {
                datos_form: req.body,
                fondo
            })
        } else {
            res.send("algo salio mal con las valdiaciones")
        }
    }
}