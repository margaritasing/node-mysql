const router = require('express').Router();

const { Film } = require('../../db')

router.get('/', async (req, res) => {
    const films = await Film.findAll();
    res.json(films);
});

router.post('/', async (req, res)=>{
    const film = await Film.create(req.body);
    res.json(film)
});

router.put('/:filmid', async (req, res)=>{
    await Film.update(req.body, {
        where: { id: req.params.filmid }
    });
    res.json({ success:'Se ha modificado'})
});

router.delete('/:filmid', async (req, res)=>{
    await Film.destroy({
        where: { id: req.params.filmid}
    });
    res.json({ success:'Se borro la pelicula'})
})

module.exports = router; 
