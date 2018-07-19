// dependencias
import React from 'react';

// componentes
import SearchBox from '../../components/SearchBox';
import CategoryTree from '../../components/CategoryTree';
import Aux from '../../hoc/Aux';

// servicios
import itemsService from '@Services/items';

// estilos
import './styles.scss';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    state = {
        author: {
            name: null,
            lastname: null
        },
        category: null,
        item: {
            id: null,
            title: null,
            price: {
                amount: 32999,
                decimals: 0
            },
            picture: null,
            thumbnail: null,
            condition: null,
            free_shipping: false,
            city: null,
            description: null
        }
    }

    fetchItem = (id) => itemsService.get(id)
        .then(response => this.setState({ ...response.data }))
        .catch(error => console.error('No error handler? ups!', error));

    componentDidMount() {
        this.fetchItem(this.props.match.params.id);
    }

    render() {
        return (
            <Aux>
                <SearchBox />
                <CategoryTree {...this.state.category} />
                <div className="itemContainer">
                    <div className="main">
                        <div className="imageContainer">
                            <div className="image">
                                <img src={this.state.item.picture} alt={this.state.item.title} />
                            </div>
                        </div>
                        <div className="productoInfo">
                            <div className="condition">
                                {this.state.item.condition === 'new' ? 'Nuevo' : 'Usado'} - 234 vendidos
                            </div>
                            <div className="title">
                                {this.state.item.title}
                            </div>
                            <div className="price">
                                $ {this.state.item.price.amount.toLocaleString(navigator.language, { maximumFractionDigits: 0 })}
                            </div>
                            <div className="buyButtonContainer">
                                <button>
                                    Comprar
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <div className="title">
                            Descripción del producto
                        </div>
                        <div className="text">
                            {this.state.item.description}
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
};

export default Item;
