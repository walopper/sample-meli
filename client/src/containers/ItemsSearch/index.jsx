// dependencias
import React, { Component } from 'react';
import getParamFromQueryString from '../../helpers/querySearchParam';

// servicios
import itemsService from '@Services/items';

// componentes
import SearchBox from '../../components/SearchBox';
import ItemList from '../../components/ItemList';
import CategoryTree from '../../components/CategoryTree';
import Aux from '../../hoc/Aux';
import { Grid, Row, Col } from 'react-bootstrap';

// estilos
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

class ItemsSearch extends Component {
    state = {
        searchString: null,
        itemList: []
    };

    // arrow function, para facilitar llegar a this.setState()
    search = (searchString) => itemsService.list(searchString)
        .then(response => {
            this.setState({
                searchString,
                itemList: (response.data && response.data.items) ? response.data.items : []
            });
        })
        .catch(error => console.error('No error handler? ups!', error));

    componentDidMount() {
        const searchString = getParamFromQueryString('search', this.props.location.search);

        // si no hay searchString, no hago la busqueda
        if (!searchString) {
            return;
        }

        this.search(searchString);
    }

    componentWillUpdate() {
        // actualizo estado, se cambio el searchString
        if (this.state.searchString !== this.props.searchString) {
            this.search(this.props.searchString);
        }
    }

    /**
     * Redirecciono a la pagina del item
     */
    viewItem = (event) => this.props.history.push(`/items/${event.target.getAttribute("data-itemid")}`);

    render() {
        return (
            <Aux>
                <SearchBox {...this.props} />
                <Grid>
                    <Row>
                        <Col sm={9} md={9} lgOffset={1}>
                            <CategoryTree />
                            <div className="itemLististContainer">
                                {this.state.itemList.slice(0, 40).map(item => (
                                    <ItemList
                                        {...item}
                                        key={item.id}
                                        viewItem={this.viewItem}
                                    />
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Aux>
        );
    }
}

export default ItemsSearch;


