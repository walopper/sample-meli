import axios from 'axios';

import config from '../config';

const itemsService = {

    /**
     * Obtengo informacion de un articulo por ID
     * @param {string} id id del articulo
     * @return {Promise} 
     */
    get: id => axios.get(`http://${config.apiHost}:${config.apiPort}/api/items/${id}`),

    /**
     * Obtengo articulos segun filtros de busqueda
     * @param {string} searchString string a buscar
     * @return {Promise} 
     */
    list: searchString => axios.get(`http://${config.apiHost}:${config.apiPort}/api/items/?search=${encodeURIComponent(searchString)}`)

};

export default itemsService;