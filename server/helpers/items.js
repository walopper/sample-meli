const config = require('../../config.js');

/** 
 * 
 * helpers para los items
 * 
 */
class itemsHelper {

    /** 
     * Armo y devuelvo el objeto de un item 
     * */
    static mapData(item, description = '') {
        return {
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency,
                amount: item.price,
                decimals: 0 // ?
            },
            thumbnail: item.thumbnail,
            picture: item.pictures && item.pictures[0] ? item.pictures[0].url : null,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            city: item.seller_address.state.name,
            description,
            category_id: item.category_id
        }
    };

    /**
     * mapea los resultados y devuelve una lista de objectos con los datos de cada item
     * @param {array} data 
     * @return {array} array con los items
     */
    static parseResults(data) {
        return {
            author: {
                name: config.author.name,
                lastname: config.author.lastname
            },
            categories: [],
            items: (!data.results || !Array.isArray(data.results))
                ? []
                : data.results.map(this.mapData)
        }
    }

    /**
     * mapea el objeto con los datos del articulo y devuelve solo los necesarios
     * @param {object} data 
     * @return {object} objeto mapeado
     */
    static getItemData(data) {
        return {
            author: {
                name: config.author.name,
                lastname: config.author.lastname
            },
            item: this.mapData(data[0], data[1].plain_text || data[1].text)
        }
    }

}

module.exports = itemsHelper;