const router = require('express').Router();
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');

const { User } = require('../../db');

router.post('/register',[check('username', 'El nombre del usuario es obligatorio').not().isEmpty(),
check('password', 'El password es obligatorio').not().isEmpty(),
check('email', 'El email debe estar correcto').isEmail() ],
 async (req, res) =>{

    const errors = validationResult(req); 
    if (!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array()} )
        
    }
    req.body.password = bcrypt.hashSync(req.body.password, 10); // La primera es que se va a encriptar, 
    const user = await User.create(req.body);       // Mientras que la segunda, representa la
     res.json(user)                                 // cantidad de veces que se encriptara


});

router.post('/login', async (req, res) => {
    const user = await User.findOne({ where: { email: req.body.email } });

    if(user) { 
        const igual = bcrypt.compareSync(req.body.password, user.password);
        if (igual) {
            res.json({success: createToken(user)})                        
        }else {
            res.json({error: 'Error en usuario y/o contraseña'});

        }

    } else {
        res.json({error: 'Error en usuario y/o contraseña'});
    }
});


const createToken = (user) =>{
        const payload = {
            usuarioId: user.id,
            createdAt: moment().unix(),
            expiredAt: moment().add(30, 'minutes').unix()
        }

        return  jwt.encode(payload, 'Alexander Freites Huggins')
}  



module.exports = router;
