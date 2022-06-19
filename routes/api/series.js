const router = require('express').Router();

const { Serie } = require('../../db');


router.get('/', async (req, res) => {
    console.log(req.usuarioId)
    const serie = await Serie.findAll();
    res.json(serie);
});

router.post('/', async (req, res)=>{
    const serie = await Serie.create(req.body);
    res.json(serie)
});    

router.put('/:serieid', async (req, res)=>{
    await Serie.update(req.body, {
        where: { id: req.params.serieid }
    });
    res.json({ success:'Se ha modificado'})
});

router.delete('/:serieid', async (req, res)=>{
    await Serie.destroy({
        where: { id: req.params.serieid}
    });
    res.json({ success:'Se borro el serie'})
})




module.exports = router;