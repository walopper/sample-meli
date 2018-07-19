const fetch  = require('node-fetch');
const config = require('../../config.js');

const Categories = {
    /**
     * llamo a la API de mercadolibre para obtener los detalles de una categoria
     * @param {string} id de la cat
     * @return {object} datos de la cat
     */
    get: async id => await fetch(`${config.meliUrls.categories}${id}`)
                               .then(res => res.json())
                               .catch(console.error)
};

module.exports = Categories;