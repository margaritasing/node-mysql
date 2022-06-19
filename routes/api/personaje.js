const router = require('express').Router();

const { Personaje } = require('../../db');

router.get('/', async (req, res) => {
    console.log(req.usuarioId)
    const personaje = await Personaje.findAll({
        attributes:['nombre', 'imagen']
    });
    res.json(personaje);
});

/* router.get('/q?name=nombre', async (req, res)=>{
    const personaje = await Personaje.findOne({ where:{ nombre:'?'} });
    res.json(personaje)
}) */

router.get('/detalles', async (req, res) => {
    console.log(req.usuarioId)
    const personaje = await Personaje.findAll();
    res.json(personaje);
});

router.post('/', async (req, res)=>{
    const personaje = await Personaje.create(req.body);
    res.json(personaje)
});    

router.put('/:personajeid', async (req, res)=>{
    await Personaje.update(req.body, {
        where: { id: req.params.personajeid }
    });
    res.json({ success:'Se ha modificado'})
});

router.delete('/:personajeid', async (req, res)=>{
    await Personaje.destroy({
        where: { id: req.params.personajeid}
    });
    res.json({ success:'Se borro la personaje'})
})



module.exports = router; 