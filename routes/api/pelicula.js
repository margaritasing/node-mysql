const router = require('express').Router();

const { Pelicula } = require('../../db');


router.get('/', async (req, res) => {
    console.log(req.usuarioId)
    const pelicula = await Pelicula.findAll({
        attributes:['imagen', 'titulo', 'fechaDeCreacion']
    });
    res.json(pelicula);
});

router.get('/:titulo', async (req, res)=>{
    const pelicula = await Pelicula.findOne({ where: { titulo:titulo }, attributes:['titulo']  } )
    res.json(pelicula)
})

router.get('/detalles', async (req, res) => {
    console.log(req.usuarioId)
    const pelicula = await Pelicula.findAll();
    res.json(pelicula);
});

router.post('/', async (req, res)=>{
    const pelicula = await Pelicula.create(req.body);
    res.json(pelicula)
});    

router.put('/:peliculaid', async (req, res)=>{
    await Pelicula.update(req.body, {
        where: { id: req.params.peliculaid }
    });
    res.json({ success:'Se ha modificado'})
});

router.delete('/:peliculaid', async (req, res)=>{
    await pelicula.destroy({
        where: { id: req.params.peliculaid}
    });
    res.json({ success:'Se borro la pelicula'})
})




module.exports = router;