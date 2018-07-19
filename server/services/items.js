const fetch       = require('node-fetch');
const config      = require('../../config.js');
const itemsHelper = require('../helpers/items');
const Categories  = require('./categories');

const Items = {

    /**
     * llamo a la API de mercadolibre para obtener los resultados de busqueda
     * @param {string} searchString texto a buscar
     * @return {array} array de items
     */
    list: async searchString => {

        return await fetch(`${config.meliUrls.search}?q=${searchString}&limit${config.searchLimit}`)
            .then(res => res.json())
            .then(data => itemsHelper.parseResults(data))
            .catch(console.error);

    },

    /**
     * llamo a la API de mercadolibre para obtener los detalles de un articulo
     * @param {string} id del articulo
     * @return {object} datos del item
     */
    get: async id => {

        return await Promise.all([
            fetch(`${config.meliUrls.item}${id}`).then(r => r.json()),
            fetch(`${config.meliUrls.item}${id}/description`).then(r => r.json())
        ])
            .then(data => itemsHelper.getItemData(data))
            .then(async data => ({
                ...data,
                category: await Categories.get(data.item.category_id)
            }))

    }

};

module.exports = Items;