const { Router } = require('express')
const { check } = require('express-validator')

const { login, googleSignIn } = require('../controllers/auth')
const { validarCampos } = require('../middleweres/middlewere')

const router = Router()

router.post('/login', [
    check('correo', 'El correo es obligatorio').isEmail(),
    check('pass', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
], login)

router.post('/google', [
    check('id_token', 'El token es obligatorio').not().isEmpty(),
    validarCampos
], googleSignIn)










module.exports = router