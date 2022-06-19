const router = require('express').Router();

const { Genero } = require('../../db');



router.get('/', async (req, res) => {
    console.log(req.usuarioId)
    const genero = await Genero.findAll();
    res.json(genero);
});

router.post('/', async (req, res)=>{
    const genero = await Genero.create(req.body);
    res.json(genero)
});    

router.put('/:generoid', async (req, res)=>{
    await Genero.update(req.body, {
        where: { id: req.params.generoid }
    });
    res.json({ success:'Se ha modificado'})
});

router.delete('/:generoid', async (req, res)=>{
    await Genero.destroy({
        where: { id: req.params.generoid}
    });
    res.json({ success:'Se borro el genero'})
})






module.exports = router; 