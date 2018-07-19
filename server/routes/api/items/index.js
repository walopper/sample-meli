const router = require('express').Router();
const Items = require('../../../services/items');

/**
 * busqueda
 */
router.get('/', (req, res) => {
    // obtengo string de busqueda
    let searchString = req.query.search || '';

    if (searchString) {
        Items.list(searchString)
            .then(result => res.status(200).json(result))
            .catch(error => res.status(500).json({ error: 'Ups! algo salió mal.', detalles: error }));
    }

});

/**
 * Obtengo item
 */
router.get('/:id', (req, res) => {

    let id = req.params.id || '';

    Items.get(id)
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json({ error: 'Ups! algo salió mal.', detalles: error }));

});


module.exports = router;